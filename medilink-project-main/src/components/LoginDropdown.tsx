
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Users, Hospital } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LoginDropdown = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent, userType: string) => {
    e.preventDefault();
    console.log(`${userType} login attempt`, { email, password, rememberMe });
    // Handle login logic here
  };

  const loginForm = (userType: string) => (
    <form onSubmit={(e) => handleSubmit(e, userType)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${userType}-email`}>Email</Label>
        <Input 
          id={`${userType}-email`}
          type="email" 
          placeholder="your@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${userType}-password`}>Password</Label>
        <Input 
          id={`${userType}-password`}
          type="password" 
          placeholder="••••••••" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id={`${userType}-remember-me`}
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor={`${userType}-remember-me`} className="ml-2 block text-sm text-gray-700">
            {t("rememberMe")}
          </label>
        </div>
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        {t("signin")}
      </Button>
    </form>
  );

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 animate-fade-in animate-scale-in z-50">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{t("signin")}</h3>
        
        <Tabs defaultValue="patient" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="patient" className="flex flex-col items-center gap-1">
              <User size={16} />
              <span>{t("patient")}</span>
            </TabsTrigger>
            <TabsTrigger value="doctor" className="flex flex-col items-center gap-1">
              <Users size={16} />
              <span>{t("doctor")}</span>
            </TabsTrigger>
            <TabsTrigger value="hospital" className="flex flex-col items-center gap-1">
              <Hospital size={16} />
              <span>{t("hospital")}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="patient">
            {loginForm('patient')}
          </TabsContent>
          
          <TabsContent value="doctor">
            {loginForm('doctor')}
          </TabsContent>
          
          <TabsContent value="hospital">
            {loginForm('hospital')}
          </TabsContent>
        </Tabs>

        <div className="mt-4 text-center text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            {t("forgotPassword")}
          </a>
        </div>
        
        <div className="mt-2 text-center text-sm">
          <span className="text-gray-600">{t("noAccount")} </span>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            {t("createAccount")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginDropdown;
