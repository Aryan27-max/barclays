import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const riskTrendData = [
  { month: "Sep 2025", high: 18, medium: 42, low: 115 },
  { month: "Oct 2025", high: 21, medium: 46, low: 122 },
  { month: "Nov 2025", high: 25, medium: 51, low: 136 },
  { month: "Dec 2025", high: 19, medium: 48, low: 120 },
  { month: "Jan 2026", high: 20, medium: 45, low: 128 },
  { month: "Feb 2026", high: 23, medium: 48, low: 129 },
];

const typologyData = [
  { name: "Trade-Based ML", value: 45, color: "#005EB8" },
  { name: "Structuring", value: 32, color: "#0EA5E9" },
  { name: "Layering", value: 28, color: "#8B5CF6" },
  { name: "Smurfing", value: 18, color: "#F59E0B" },
  { name: "Other", value: 12, color: "#10B981" },
];

const avgProcessingTime = [
  { month: "Sep", manual: 342, ai: 52 },
  { month: "Oct", manual: 358, ai: 48 },
  { month: "Nov", manual: 365, ai: 45 },
  { month: "Dec", manual: 351, ai: 51 },
  { month: "Jan", manual: 348, ai: 49 },
  { month: "Feb", manual: 354, ai: 48 },
];

const jurisdictionRisk = [
  { jurisdiction: "Panama", cases: 18, avgRisk: 82 },
  { jurisdiction: "UAE", cases: 15, avgRisk: 76 },
  { jurisdiction: "Singapore", cases: 12, avgRisk: 68 },
  { jurisdiction: "Cayman Islands", cases: 9, avgRisk: 79 },
  { jurisdiction: "Switzerland", cases: 7, avgRisk: 64 },
];

export const RiskAnalytics = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Risk Trend Over Time */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-sm font-medium text-foreground mb-4">Risk Level Trend (6 Months)</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={riskTrendData}>
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
              <Bar dataKey="high" stackId="a" fill="#DC2626" name="High Risk" radius={[0, 0, 0, 0]} />
              <Bar dataKey="medium" stackId="a" fill="#F59E0B" name="Medium Risk" radius={[0, 0, 0, 0]} />
              <Bar dataKey="low" stackId="a" fill="#10B981" name="Low Risk" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Typology Distribution */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-foreground mb-4">SAR Typology Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={typologyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  outerRadius={80}
                  dataKey="value"
                >
                  {typologyData.map((entry, index) => (
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
        </div>

        {/* Processing Time Comparison */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-sm font-medium text-foreground mb-4">Avg. Processing Time (Minutes)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={avgProcessingTime}>
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
                <Line
                  type="monotone"
                  dataKey="manual"
                  stroke="#DC2626"
                  strokeWidth={2}
                  name="Manual Process"
                  dot={{ fill: "#DC2626", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="ai"
                  stroke="#10B981"
                  strokeWidth={2}
                  name="AI-Assisted"
                  dot={{ fill: "#10B981", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#DC2626]"></div>
              <span className="text-sm text-muted-foreground">Manual Process</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-[#10B981]"></div>
              <span className="text-sm text-muted-foreground">AI-Assisted</span>
            </div>
          </div>
        </div>
      </div>

      {/* High-Risk Jurisdiction Analysis */}
      <div className="bg-card border border-border rounded-lg">
        <div className="p-6 border-b border-border">
          <h3 className="text-sm font-medium text-foreground">High-Risk Jurisdiction Analysis</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/5">
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Jurisdiction</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Total Cases</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Avg. Risk Score</th>
                <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">Risk Visualization</th>
              </tr>
            </thead>
            <tbody>
              {jurisdictionRisk.map((row) => (
                <tr key={row.jurisdiction} className="border-b border-border hover:bg-muted/5 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{row.jurisdiction}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{row.cases}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{row.avgRisk}/100</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-xs">
                        <div
                          className="h-full bg-[#DC2626]"
                          style={{ width: `${row.avgRisk}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">{row.avgRisk}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-xs text-muted-foreground mb-2">Time Saved Per Report</p>
          <p className="text-3xl font-semibold text-foreground mb-1">~5.2 hrs</p>
          <p className="text-xs text-[#10B981]">↑ 86% efficiency gain</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-xs text-muted-foreground mb-2">Reports Filed (Feb 2026)</p>
          <p className="text-3xl font-semibold text-foreground mb-1">127</p>
          <p className="text-xs text-[#10B981]">↑ 23% from last month</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-xs text-muted-foreground mb-2">Avg. Confidence Score</p>
          <p className="text-3xl font-semibold text-foreground mb-1">89%</p>
          <p className="text-xs text-muted-foreground">AI-generated narratives</p>
        </div>
      </div>
    </div>
  );
};
