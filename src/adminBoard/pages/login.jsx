import { useState } from "react";
import { Button } from "../../shadcn/ui/button";
import { Card, CardHeader, CardContent } from "../../shadcn/ui/card";
import { Input } from "../../shadcn/ui/input";
import { Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import handleLogin from "../../functions/login";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#09090B]">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <Card className="w-full px-16 py-6 text-white bg-[#424242]">
              <CardHeader className="flex flex-col gap-2">
                <h1 className="text-5xl font-bold">Login</h1>
                <p className="text-gray-400">Sign in to your account</p>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={(e) => handleLogin(e, setLoading, setError, email, password, navigate)}
                >
                  <div className="mb-4">
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
                  </div>
                  <div className="mb-4">
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
                  </div>
                  <div className="flex justify-between items-center">
                    <Button
                      type="submit"
                      className="bg-blue-800 text-white px-4 py-2 rounded"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
