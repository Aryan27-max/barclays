import { useRole, UserRole } from "../context/RoleContext";
import { Bell, User, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const Header = ({ breadcrumb, title }: { breadcrumb: string; title: string }) => {
  const { user, setUser } = useRole();
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const roles: UserRole[] = ["Analyst", "Supervisor", "Auditor"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowRoleMenu(false);
      }
    };

    if (showRoleMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRoleMenu]);

  const handleRoleChange = (newRole: UserRole) => {
    if (user) {
      setUser({ ...user, role: newRole });
    }
    setShowRoleMenu(false);
  };

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Breadcrumb and Title */}
      <div>
        <div className="text-xs text-muted-foreground mb-0.5">{breadcrumb}</div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Environment Badge */}
        <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
          Cloud Environment
        </div>

        {/* Role Selector */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowRoleMenu(!showRoleMenu)}
            className="flex items-center gap-2 px-3 py-2 bg-secondary text-foreground rounded hover:bg-accent transition-colors text-sm"
          >
            <span>{user?.role || "Analyst"}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showRoleMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded shadow-lg z-50">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => handleRoleChange(role)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors ${
                    user?.role === role ? "bg-primary text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications */}
        <button className="p-2 hover:bg-accent rounded transition-colors relative" title="Notifications">
          <Bell className="w-5 h-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-3 border-l border-border">
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">{user?.name || "Sarah Chen"}</div>
            <div className="text-xs text-muted-foreground">{user?.employeeId || "EMP-45829"}</div>
          </div>
          <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};