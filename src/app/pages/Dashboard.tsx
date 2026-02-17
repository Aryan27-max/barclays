import { MetricCard } from "../components/MetricCard";
import { RiskBadge, RiskLevel } from "../components/RiskBadge";
import { StatusBadge, CaseStatus } from "../components/StatusBadge";
import { FileText, AlertTriangle, Clock, TrendingDown } from "lucide-react";
import { Link } from "react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const riskDistributionData = [
  { name: "High", value: 23, color: "#DC2626" },
  { name: "Medium", value: 48, color: "#F59E0B" },
  { name: "Low", value: 129, color: "#10B981" },
];

const recentCases = [
  {
    id: "SAR-2026-00234",
    customer: "Jonathan Martinez",
    riskLevel: "High" as RiskLevel,
    status: "Under Review" as CaseStatus,
    date: "2026-02-14",
    amount: "$1,245,000",
  },
  {
    id: "SAR-2026-00233",
    customer: "Chen Wei",
    riskLevel: "High" as RiskLevel,
    status: "Draft" as CaseStatus,
    date: "2026-02-14",
    amount: "$856,400",
  },
  {
    id: "SAR-2026-00232",
    customer: "Sarah O'Brien",
    riskLevel: "Medium" as RiskLevel,
    status: "Approved" as CaseStatus,
    date: "2026-02-13",
    amount: "$342,100",
  },
  {
    id: "SAR-2026-00231",
    customer: "Ahmed Al-Rashid",
    riskLevel: "High" as RiskLevel,
    status: "Submitted" as CaseStatus,
    date: "2026-02-13",
    amount: "$2,100,000",
  },
  {
    id: "SAR-2026-00230",
    customer: "Maria Silva",
    riskLevel: "Medium" as RiskLevel,
    status: "Filed" as CaseStatus,
    date: "2026-02-12",
    amount: "$189,500",
  },
];

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Active Cases"
          value="200"
          icon={FileText}
          trend={{ value: "12% from last month", isPositive: true }}
        />
        <MetricCard
          title="High Risk Cases"
          value="23"
          icon={AlertTriangle}
          color="text-[#DC2626]"
        />
        <MetricCard
          title="Pending Approvals"
          value="15"
          icon={Clock}
          color="text-[#F59E0B]"
        />
        <MetricCard
          title="Avg. SAR Draft Time"
          value="48 min"
          icon={TrendingDown}
          trend={{ value: "85% reduction", isPositive: true }}
          color="text-[#10B981]"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Distribution */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-foreground mb-4">Risk Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {riskDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#E2E8F0",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            {riskDistributionData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-muted-foreground">
                  {item.name}: {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Backlog */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-foreground mb-4">Compliance Backlog Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { month: "Sep", cases: 245 },
                  { month: "Oct", cases: 289 },
                  { month: "Nov", cases: 312 },
                  { month: "Dec", cases: 267 },
                  { month: "Jan", cases: 223 },
                  { month: "Feb", cases: 200 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                    color: "#E2E8F0",
                  }}
                />
                <Bar dataKey="cases" fill="#005EB8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Cases Table */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h3 className="text-sm font-medium text-foreground">Recent Cases</h3>
          <Link
            to="/case-history"
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/5">
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Case ID</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Customer</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Risk Level</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Date</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentCases.map((case_) => (
                <tr key={case_.id} className="border-b border-border hover:bg-muted/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{case_.id}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{case_.customer}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{case_.amount}</td>
                  <td className="px-6 py-4">
                    <RiskBadge level={case_.riskLevel} />
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={case_.status} />
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{case_.date}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/audit-trail/${case_.id}`}
                      className="text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
