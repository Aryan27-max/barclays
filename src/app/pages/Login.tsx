import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useRole } from "../context/RoleContext";
import { Shield } from "lucide-react";

export const Login = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { setUser, isAuthenticated } = useRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    setUser({
      employeeId: employeeId || "EMP-45829",
      name: "Sarah Chen",
      role: "Analyst",
    });
    
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-primary" />
            <div className="text-left">
              <div className="text-sm font-semibold text-foreground">Barclays</div>
              <div className="text-xs text-muted-foreground">AML Compliance Platform</div>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-foreground mb-2">SAR Narrative Generator</h1>
          <p className="text-sm text-muted-foreground">Internal AML Compliance Platform</p>
        </div>

        {/* Login Form */}
        <div className="bg-card border border-border rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="employeeId" className="block text-sm font-medium text-foreground mb-2">
                Employee ID
              </label>
              <input
                id="employeeId"
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                className="w-full px-4 py-2.5 bg-input-background border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your employee ID"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-input-background border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-primary bg-input-background border-input rounded focus:ring-2 focus:ring-primary"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-foreground">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2.5 rounded font-medium hover:bg-primary/90 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Authorized internal use only. All activity is monitored and logged.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
              Cloud Environment
            </span>
            <span className="text-xs text-muted-foreground">v2.3.1</span>
          </div>
        </div>
      </div>
    </div>
  );
};