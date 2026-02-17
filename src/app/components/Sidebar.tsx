import { NavLink } from "react-router";
import {
  LayoutDashboard,
  FileText,
  Search,
  History,
  BarChart3,
  Users,
  ScrollText,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { useRole } from "../context/RoleContext";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/generate-sar", label: "Generate SAR", icon: FileText },
  { path: "/audit-trail", label: "Audit Trail", icon: Search },
  { path: "/case-history", label: "Case History", icon: History },
  { path: "/risk-analytics", label: "Risk Analytics", icon: BarChart3 },
  { path: "/role-management", label: "Role Management", icon: Users },
  { path: "/system-logs", label: "System Logs", icon: ScrollText },
];

export const Sidebar = () => {
  const { logout } = useRole();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`bg-card border-r border-border flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">Barclays</span>
            <span className="text-xs text-muted-foreground">AML Platform</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-accent rounded transition-colors"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            className={`w-4 h-4 transition-transform ${isCollapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="space-y-1 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                } ${isCollapsed ? "justify-center" : ""}`
              }
              title={isCollapsed ? item.label : undefined}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm">{item.label}</span>}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-border">
        <button
          onClick={logout}
          className={`flex items-center gap-3 px-3 py-2.5 w-full rounded text-muted-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors ${
            isCollapsed ? "justify-center" : ""
          }`}
          title={isCollapsed ? "Logout" : undefined}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          {!isCollapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
};
