export type RiskLevel = "High" | "Medium" | "Low";

interface RiskBadgeProps {
  level: RiskLevel;
  score?: number;
}

const riskStyles = {
  High: "bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20",
  Medium: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
  Low: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
};

export const RiskBadge = ({ level, score }: RiskBadgeProps) => {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium border ${riskStyles[level]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${level === "High" ? "bg-[#DC2626]" : level === "Medium" ? "bg-[#F59E0B]" : "bg-[#10B981]"}`}></span>
      {level} Risk
      {score !== undefined && <span className="ml-1">({score})</span>}
    </span>
  );
};
