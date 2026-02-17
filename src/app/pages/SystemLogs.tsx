import { useState } from "react";
import { Search, Download, AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";

type LogLevel = "Info" | "Success" | "Warning" | "Error";

interface SystemLog {
  id: string;
  timestamp: string;
  level: LogLevel;
  category: string;
  message: string;
  user?: string;
  ipAddress?: string;
  details?: string;
}

const mockLogs: SystemLog[] = [
  {
    id: "LOG-001",
    timestamp: "2026-02-15 09:23:45",
    level: "Success",
    category: "Authentication",
    message: "User login successful",
    user: "Sarah Chen (EMP-45829)",
    ipAddress: "192.168.1.45",
    details: "Login from London office network",
  },
  {
    id: "LOG-002",
    timestamp: "2026-02-15 09:16:23",
    level: "Info",
    category: "SAR Generation",
    message: "SAR narrative generated successfully",
    user: "System (AI)",
    ipAddress: "10.0.2.15",
    details: "Case: SAR-2026-00234, Execution ID: exec-fe82c947-3b5a",
  },
  {
    id: "LOG-003",
    timestamp: "2026-02-15 08:45:12",
    level: "Warning",
    category: "Risk Scoring",
    message: "High risk score detected",
    user: "System",
    ipAddress: "10.0.2.15",
    details: "Customer CUS-892456: Risk score 78/100 exceeds threshold",
  },
  {
    id: "LOG-004",
    timestamp: "2026-02-15 08:32:08",
    level: "Success",
    category: "Database",
    message: "Transaction data synchronized",
    user: "System",
    ipAddress: "10.0.2.15",
    details: "47 transactions imported from TMS",
  },
  {
    id: "LOG-005",
    timestamp: "2026-02-14 16:58:33",
    level: "Info",
    category: "Case Management",
    message: "Case status updated",
    user: "Michael Roberts (EMP-32145)",
    ipAddress: "192.168.1.67",
    details: "SAR-2026-00232: Draft → Approved",
  },
  {
    id: "LOG-006",
    timestamp: "2026-02-14 16:45:21",
    level: "Error",
    category: "API",
    message: "Sanctions screening API timeout",
    user: "System",
    ipAddress: "10.0.2.15",
    details: "Request to sanctions API failed after 30s timeout",
  },
  {
    id: "LOG-007",
    timestamp: "2026-02-14 15:23:14",
    level: "Success",
    category: "Audit Trail",
    message: "Audit log exported",
    user: "David Kumar (EMP-71234)",
    ipAddress: "192.168.1.89",
    details: "Exported 250 audit records for compliance review",
  },
  {
    id: "LOG-008",
    timestamp: "2026-02-14 14:12:05",
    level: "Info",
    category: "Rule Engine",
    message: "Rule R-301 triggered",
    user: "System",
    ipAddress: "10.0.2.15",
    details: "Rapid Fund Movement pattern detected",
  },
];

const logLevelStyles: Record<LogLevel, { icon: typeof Info; color: string; bg: string }> = {
  Info: {
    icon: Info,
    color: "text-[#0EA5E9]",
    bg: "bg-[#0EA5E9]/10",
  },
  Success: {
    icon: CheckCircle,
    color: "text-[#10B981]",
    bg: "bg-[#10B981]/10",
  },
  Warning: {
    icon: AlertCircle,
    color: "text-[#F59E0B]",
    bg: "bg-[#F59E0B]/10",
  },
  Error: {
    icon: XCircle,
    color: "text-[#DC2626]",
    bg: "bg-[#DC2626]/10",
  },
};

export const SystemLogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState<LogLevel | "All">("All");
  const [expandedLog, setExpandedLog] = useState<string | null>(null);

  const filteredLogs = mockLogs.filter((log) => {
    const matchesSearch =
      log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (log.user && log.user.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesLevel = levelFilter === "All" || log.level === levelFilter;

    return matchesSearch && matchesLevel;
  });

  const handleExport = () => {
    alert("Exporting system logs... (This is a demo)");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search logs by message, category, or user..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-input-background border border-input rounded text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value as LogLevel | "All")}
            className="px-4 py-2.5 bg-input-background border border-input rounded text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="All">All Levels</option>
            <option value="Info">Info</option>
            <option value="Success">Success</option>
            <option value="Warning">Warning</option>
            <option value="Error">Error</option>
          </select>

          <button
            onClick={handleExport}
            className="px-4 py-2.5 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Logs
          </button>
        </div>
      </div>

      {/* Log Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {(Object.keys(logLevelStyles) as LogLevel[]).map((level) => {
          const count = mockLogs.filter((log) => log.level === level).length;
          const { icon: Icon, color, bg } = logLevelStyles[level];

          return (
            <div key={level} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl font-semibold text-foreground">{count}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-3">{level}</p>
            </div>
          );
        })}
      </div>

      {/* System Logs Table */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-foreground">System Activity Logs</h3>
            <span className="text-xs text-muted-foreground">
              Showing {filteredLogs.length} of {mockLogs.length} logs
            </span>
          </div>
        </div>
        <div className="divide-y divide-border">
          {filteredLogs.map((log) => {
            const { icon: Icon, color, bg } = logLevelStyles[log.level];
            const isExpanded = expandedLog === log.id;

            return (
              <div key={log.id} className="hover:bg-muted/5 transition-colors">
                <button
                  onClick={() => setExpandedLog(isExpanded ? null : log.id)}
                  className="w-full px-6 py-4 flex items-start gap-4 text-left"
                >
                  <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center ${color} flex-shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{log.message}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-muted-foreground">{log.category}</span>
                          {log.user && (
                            <>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{log.user}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                        {log.timestamp}
                      </span>
                    </div>
                  </div>
                </button>

                {isExpanded && log.details && (
                  <div className="px-6 pb-4 pl-[72px]">
                    <div className="p-4 bg-background rounded border border-border">
                      <p className="text-xs text-muted-foreground mb-2">Details:</p>
                      <p className="text-sm text-foreground">{log.details}</p>
                      {log.ipAddress && (
                        <p className="text-xs text-muted-foreground mt-2">
                          IP Address: <span className="font-mono">{log.ipAddress}</span>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
