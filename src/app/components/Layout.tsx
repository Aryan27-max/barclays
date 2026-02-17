import { Outlet, useNavigate, useLocation } from "react-router";
import { useRole } from "../context/RoleContext";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { useEffect } from "react";

const breadcrumbMap: { [key: string]: { breadcrumb: string; title: string } } = {
  "/": { breadcrumb: "Home", title: "Dashboard" },
  "/generate-sar": { breadcrumb: "Home / SAR Generation", title: "Generate SAR Report" },
  "/audit-trail": { breadcrumb: "Home / Compliance", title: "Audit Trail" },
  "/case-history": { breadcrumb: "Home / Cases", title: "Case History" },
  "/risk-analytics": { breadcrumb: "Home / Analytics", title: "Risk Analytics" },
  "/role-management": { breadcrumb: "Home / Admin", title: "Role Management" },
  "/system-logs": { breadcrumb: "Home / Admin", title: "System Logs" },
};

export const Layout = () => {
  const { isAuthenticated } = useRole();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const pathKey = location.pathname.includes("/audit-trail/") 
    ? "/audit-trail" 
    : location.pathname;
    
  const { breadcrumb, title } = breadcrumbMap[pathKey] || {
    breadcrumb: "Home",
    title: "Dashboard",
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header breadcrumb={breadcrumb} title={title} />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};