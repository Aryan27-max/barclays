import { useState } from "react";
import { useRole } from "../context/RoleContext";
import { RiskBadge, RiskLevel } from "../components/RiskBadge";
import { StatusBadge, CaseStatus } from "../components/StatusBadge";
import { FileText, CheckCircle, XCircle, AlertTriangle, ArrowUpCircle } from "lucide-react";

// Mock data for inputs
const mockCustomerData = {
  customerId: "CUS-892456",
  fullName: "Jonathan Martinez",
  dateOfBirth: "1978-03-15",
  nationality: "USA",
  occupation: "Import/Export Trader",
  sourceOfFunds: "Business Income",
  riskRating: "Medium",
  pepStatus: "Non-PEP",
  sanctionsStatus: "Clear",
  expectedMonthlyTurnover: "$50,000",
};

const mockAccountData = {
  accountNumber: "GB29BARC20031234567890",
  accountType: "Business Current Account",
  openingDate: "2022-05-12",
  tenure: "3 years 9 months",
  averageBalance: "$85,400",
  linkedAccounts: "2 accounts",
};

const mockTransactionData = {
  totalCredits: "$1,245,000",
  totalDebits: "$1,187,600",
  incomingTransactions: 47,
  uniqueSenders: 23,
  timeWindow: "7 days",
  counterpartyGeography: "Multiple jurisdictions",
  crossBorder: true,
  destinationCountry: "Panama, UAE, Singapore",
  highRiskJurisdiction: true,
  paymentType: "SWIFT",
};

const mockAlertData = {
  alertId: "ALT-2026-04821",
  alertType: "Rapid Movement of Funds",
  triggeredRules: "R-301, R-405, R-512",
  initialRiskScore: 78,
  historicalAlerts: 3,
  triggerDate: "2026-02-14 09:23:11 UTC",
};

const mockGeneratedNarrative = `SUBJECT INFORMATION

Customer Jonathan Martinez (CUS-892456), a 47-year-old US national engaged in import/export trading, maintains a business current account (GB29BARC20031234567890) opened on May 12, 2022. The customer declared expected monthly turnover of $50,000 with business income as the primary source of funds.

ACCOUNT OVERVIEW

The subject account has been operational for 3 years and 9 months with an average balance of $85,400. The account is linked to 2 additional accounts within the bank's system. The customer maintains a Medium risk rating and has cleared sanctions screening with Non-PEP status.

TRANSACTION ACTIVITY SUMMARY

Over a 7-day period (February 7-14, 2026), the account processed 47 incoming transactions totaling $1,245,000 from 23 unique senders, with outgoing transfers totaling $1,187,600. This represents a transaction volume approximately 25 times higher than the customer's declared monthly turnover.

PATTERN ANALYSIS

Analysis reveals concerning patterns consistent with potential layering and rapid movement of funds:

1. VELOCITY ANOMALY: Significant deviation from historical transaction patterns, with a 2,400% increase in weekly transaction volume compared to the customer's 6-month average.

2. STRUCTURING INDICATORS: Multiple incoming transfers just below reporting thresholds, with 18 transactions ranging between $45,000-$49,900.

3. CROSS-BORDER COMPLEXITY: Funds received from and transferred to multiple high-risk jurisdictions including Panama, UAE, and Singapore via SWIFT transfers, with minimal business rationale provided.

4. RAPID FUND MOVEMENT: Average fund retention period of 4.2 hours, indicating pass-through behavior inconsistent with legitimate business operations.

RISK ASSESSMENT

Overall Risk Score: 78/100 (HIGH RISK)

Risk Component Breakdown:
• Velocity Risk: 85/100
• Structuring Risk: 72/100  
• Cross-Border Risk: 81/100
• Behavioral Deviation: 76/100

TYPOLOGY LINKAGE

The observed activity aligns with FATF typologies for:
• Trade-Based Money Laundering (TBML)
• Layering through multiple jurisdictions
• Use of business accounts for personal benefit

REGULATORY CONTEXT

This assessment is based on:
• RBI Master Direction on KYC (Updated February 2024)
• FATF Recommendations on Trade-Based Money Laundering
• Internal AML Policy Framework v3.2
• SAR Template Standard (Version 2.1)

CONCLUSION

The transaction patterns, combined with high-risk jurisdictional exposure and significant deviation from expected customer behavior, warrant the filing of a Suspicious Activity Report. The rapid movement of substantial funds through multiple jurisdictions with limited economic rationale presents material money laundering risk that requires regulatory notification.

Recommended Action: File SAR with Financial Intelligence Unit within 7 days.`;

const workflowSteps = [
  { label: "Input Data", status: "complete" },
  { label: "Feature Extraction", status: "complete" },
  { label: "Rule Engine", status: "complete" },
  { label: "Risk Scoring", status: "complete" },
  { label: "LLM Generation", status: "complete" },
  { label: "Audit Trail", status: "complete" },
  { label: "Human Review", status: "active" },
  { label: "Approval", status: "pending" },
];

export const GenerateSAR = () => {
  const { user } = useRole();
  const [narrative, setNarrative] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [status, setStatus] = useState<CaseStatus>("Draft");

  const handleGenerate = () => {
    setNarrative(mockGeneratedNarrative);
    setIsGenerated(true);
  };

  const handleApprove = () => {
    setStatus("Approved");
  };

  const handleEscalate = () => {
    setStatus("Under Review");
  };

  const handleReject = () => {
    setStatus("Rejected");
  };

  const canEdit = user?.role === "Analyst" || user?.role === "Supervisor";
  const canApprove = user?.role === "Supervisor";
  const isReadOnly = user?.role === "Auditor";

  return (
    <div className="p-6">
      {/* Workflow Visualization */}
      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <h3 className="text-sm font-medium text-foreground mb-4">SAR Generation Workflow</h3>
        <div className="flex items-center justify-between">
          {workflowSteps.map((step, index) => (
            <div key={step.label} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                    step.status === "complete"
                      ? "bg-[#10B981] text-white"
                      : step.status === "active"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.status === "complete" ? "✓" : index + 1}
                </div>
                <span className="text-xs text-muted-foreground mt-2 text-center">{step.label}</span>
              </div>
              {index < workflowSteps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 ${
                    step.status === "complete" ? "bg-[#10B981]" : "bg-muted"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN - Input Data */}
        <div className="space-y-6">
          {/* Customer Data */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-medium text-foreground mb-4">Customer (KYC) Data</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(mockCustomerData).map(([key, value]) => (
                <div key={key}>
                  <label className="text-xs text-muted-foreground">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <p className="text-sm text-foreground mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Account Information */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-medium text-foreground mb-4">Account Information</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(mockAccountData).map(([key, value]) => (
                <div key={key}>
                  <label className="text-xs text-muted-foreground">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <p className="text-sm text-foreground mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Data */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-medium text-foreground mb-4">Transaction Data</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(mockTransactionData).map(([key, value]) => (
                <div key={key}>
                  <label className="text-xs text-muted-foreground">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <p className="text-sm text-foreground mt-1">{String(value)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Data */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-medium text-foreground mb-4">Monitoring Alert Data</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(mockAlertData).map(([key, value]) => (
                <div key={key}>
                  <label className="text-xs text-muted-foreground">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <p className="text-sm text-foreground mt-1">{String(value)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          {!isGenerated && (
            <button
              onClick={handleGenerate}
              className="w-full bg-primary text-primary-foreground py-3 rounded font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Generate SAR Draft
            </button>
          )}
        </div>

        {/* RIGHT COLUMN - Output */}
        <div className="space-y-6">
          {isGenerated && (
            <>
              {/* Risk Score Summary */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-sm font-medium text-foreground mb-4">Risk Assessment</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Overall Risk Score</p>
                    <p className="text-3xl font-semibold text-foreground">78/100</p>
                  </div>
                  <RiskBadge level="High" score={78} />
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Velocity Risk</span>
                      <span className="text-xs text-foreground">85/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-[#DC2626]" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Structuring Risk</span>
                      <span className="text-xs text-foreground">72/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-[#F59E0B]" style={{ width: "72%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Cross-Border Risk</span>
                      <span className="text-xs text-foreground">81/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-[#DC2626]" style={{ width: "81%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-muted-foreground">Behavioral Deviation</span>
                      <span className="text-xs text-foreground">76/100</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-[#F59E0B]" style={{ width: "76%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflow Status */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-sm font-medium text-foreground mb-4">Case Status</h3>
                <div className="flex items-center justify-between">
                  <StatusBadge status={status} />
                  <span className="text-xs text-muted-foreground">SAR-2026-00234</span>
                </div>
              </div>

              {/* SAR Narrative */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-sm font-medium text-foreground mb-4">SAR Narrative Draft</h3>
                <textarea
                  value={narrative}
                  onChange={(e) => setNarrative(e.target.value)}
                  disabled={isReadOnly}
                  className="w-full h-96 px-4 py-3 bg-input-background border border-input rounded text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed font-mono"
                  style={{ lineHeight: "1.6" }}
                />
                {isReadOnly && (
                  <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Read-only mode: Auditors cannot edit narratives
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleApprove}
                  disabled={!canApprove || status === "Approved"}
                  className="flex-1 bg-[#10B981] text-white py-3 rounded font-medium hover:bg-[#10B981]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Approve
                </button>
                <button
                  onClick={handleEscalate}
                  disabled={isReadOnly || status === "Under Review"}
                  className="flex-1 bg-[#F59E0B] text-white py-3 rounded font-medium hover:bg-[#F59E0B]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ArrowUpCircle className="w-5 h-5" />
                  Escalate
                </button>
                <button
                  onClick={handleReject}
                  disabled={isReadOnly || status === "Rejected"}
                  className="flex-1 bg-destructive text-destructive-foreground py-3 rounded font-medium hover:bg-destructive/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <XCircle className="w-5 h-5" />
                  Reject
                </button>
              </div>

              {!canApprove && !isReadOnly && (
                <p className="text-xs text-muted-foreground text-center">
                  Only Supervisors can approve SAR reports
                </p>
              )}
            </>
          )}

          {!isGenerated && (
            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">
                Click "Generate SAR Draft" to create the narrative
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
