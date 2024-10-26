import { useState } from "react";
import { Button } from "../../shadcn/ui/button";
import { Card, CardHeader, CardContent } from "../../shadcn/ui/card";
import { Input } from "../../shadcn/ui/input";
import { Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import handleLogin from "../../functions/login";
import "../../assets/styles/pages/adminBoard/login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

 

  return (
    <div className="admin-login min-h-screen w-full  flex items-center justify-center "> 
            <Card className="login-card lg:w-[50vw] w-[75vw] lg:px-16 px-2 py-6 text-white bg-white bg-opacity-10 rounded-[24px]">
              <CardHeader className="flex flex-col gap-2">
                <h1 className="font-size-display">Login</h1>
                <p className="text-gray-400 font-size-paragraph">Sign in to your account</p>
              </CardHeader>
              <CardContent>
                <form 
                className="flex flex-col gap-8"
                  onSubmit={(e) => handleLogin(e, setLoading, setError, email, password, navigate)}
                >
                    <div className="flex items-center border-b border-gray-300 py-2">
                      <User className="text-gray-400 mr-3" />
                      <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full py-2 px-3 border bg-transparent border-transparent focus:outline-none"
                      />
                  </div>
                
                    <div className="flex items-center border-b border-gray-300 py-2">
                      <Lock className="text-gray-400 mr-3" />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full py-2 px-3 border bg-transparent border-transparent focus:outline-none"
                      />
                    
                  </div>
                    <Button
                      type="submit"
                      className="login-btn text-white px-4 py-2 rounded-[8px]"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                </form>
              </CardContent>
            </Card>
         
      
      </div>
  
  );
};

export default Login;
