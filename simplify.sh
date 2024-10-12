#!/bin/bash

# Update package list
echo "Updating package list..."
apt-get update

# Install Node.js
echo "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs

# Install npm
echo "Installing npm..."
apt-get install -y npm

# Install Nginx
echo "Installing Nginx..."
apt-get install -y nginx

# Clone Repository
REPO_DIR="/var/Simplify"
if [ ! -d "$REPO_DIR" ]; then
  echo "Cloning repository..."
  git clone https://github.com/Lassist-DZ/Simplify.git "$REPO_DIR"
else
  echo "Repository already exists. Pulling latest changes..."
  cd "$REPO_DIR" || exit
  git pull
fi

# Install npm Dependencies
echo "Installing npm dependencies..."
cd "$REPO_DIR/frontend" || exit
npm install

# Build the application 
echo "Building the application..."
npm run build

# Set appropriate permissions
echo "Setting directory permissions..."
chown -R www-data:www-data $REPO_DIR

# Add the vhost to Nginx
VHOST_CONFIG="/etc/nginx/sites-available/simplify"
echo "Setting up Nginx vhost..."

cat > "$VHOST_CONFIG" <<EOL
server {
    listen 80;
    server_name 142.93.38.10; # Replace with your IP address or domain name

    root $REPO_DIR/frontend;
    index index.html;

    location / {
        try_files \$uri /index.html;
    }
}
EOL

# Enable the vhost configuration
ln -s "$VHOST_CONFIG" /etc/nginx/sites-enabled/

# Allow HTTP traffic through firewall
echo "Allowing HTTP traffic through firewall..."
ufw allow 'Nginx HTTP'

# Test Nginx configuration and restart the service
echo "Testing Nginx configuration..."
nginx -t

echo "Enabling Nginx to start at boot..."
systemctl enable nginx

echo "Restarting Nginx..."
systemctl restart nginx

# backend configuration to be added later

