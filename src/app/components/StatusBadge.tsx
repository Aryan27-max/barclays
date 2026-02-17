export type CaseStatus = "Draft" | "Under Review" | "Approved" | "Submitted" | "Filed" | "Rejected";

interface StatusBadgeProps {
  status: CaseStatus;
}

const statusStyles: Record<CaseStatus, string> = {
  Draft: "bg-[#94A3B8]/10 text-[#94A3B8] border-[#94A3B8]/20",
  "Under Review": "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
  Approved: "bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20",
  Submitted: "bg-[#005EB8]/10 text-[#005EB8] border-[#005EB8]/20",
  Filed: "bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/20",
  Rejected: "bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20",
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded text-xs font-medium border ${statusStyles[status]}`}>
      {status}
    </span>
  );
};
