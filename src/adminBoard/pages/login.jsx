import { Button } from "../../shadcn/ui/button";
import { Card, CardHeader, CardContent } from "../../shadcn/ui/card"
import { Input } from "../../shadcn/ui/input"
import { Lock, User } from 'lucide-react';
const Login = () => {
  return (
    <div className="bg-gray-700 min-h-screen flex items-center justify-center">
      <div className=" container mx-auto">
        <div className="flex justify-center">
          <div className=" w-full max-w-lg">              
              <Card className="w-full px-16 py-6 bg-blue-800 text-white">
                <CardHeader className="flex flex-col gap-2">
                  <h1 className="text-5xl font-bold">Login</h1>
                  <p className="text-gray-400">Sign in to your account</p>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="mb-4">
                      <div className="flex items-center border-b border-gray-300 py-2">
                        <User className="text-gray-400 mr-3" />
                        <Input
                          type="text"
                          placeholder="Username"
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
                          className="w-full py-2 px-3 border  bg-transparent border-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button className="bg-gray-900 text-white px-4 py-2 rounded-md">Login</Button>
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
