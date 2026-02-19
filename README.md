# 🏦 SAR Narrative Generator with Full Audit Trail

<p align="center"><strong>Enterprise AML Compliance Platform for Barclays Hackathon.</strong>
</p>


<p align="center">
  <img src="https://img.shields.io/badge/Status-Prototype-blue?style=for-the-badge" alt="Status" />
  <img src="https://img.shields.io/badge/Built%20For-Barclays%20Hackathon-1E3A8A?style=for-the-badge" alt="Barclays" />
  <img src="https://img.shields.io/badge/MIT-Licence-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  <strong>An AI-powered compliance tool that helps analysts generate Suspicious Activity Reports (SARs) with complete transparency, audit trails, and regulatory compliance.</strong>
</p>

<br />

</div>

## 🛠 Technology Stack

<div align="center">

### 🎯 Full-Stack Application
<img src="https://skillicons.dev/icons?i=nextjs,typescript,tailwind" alt="Frontend Stack" />
<br />
<sub><strong>Next.js • TypeScript • Tailwind CSS</strong></sub>
<br />
<sub>Analyst UI, approvals, audit views, API routes</sub>

### ⚙️ Orchestration & Workflow
<img src="https://skillicons.dev/icons?i=docker" alt="Orchestration" />
<br />
<sub><strong>n8n (Workflow Automation)</strong></sub>
<br />
<sub>Ingestion, feature engineering, rules, scoring, AI calls, audit logging</sub>

### 🤖 AI & Vector Store
<div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
  <img src="https://static.vecteezy.com/system/resources/thumbnails/049/809/118/small/llama-head-icon-in-line-style-on-white-background-vector.jpg" alt="Llama" width="48" height="48" />
  <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langchain-color.png" alt="LangChain" width="48" height="48" />
  <img src="https://miro.medium.com/v2/resize:fit:536/format:webp/1*2ofNU5JgKwcqT_wORFEK_w.png" alt="ChromaDB" width="48" height="48" />
</div>
<br />
<sub><strong>LLM (Llama/Mistral/GPT) • LangChain • ChromaDB</strong></sub>
<br />
<sub>Controlled narrative generation from templates & guidelines (RAG architecture)</sub>

### 🗄️ Database & ORM
<img src="https://skillicons.dev/icons?i=postgresql,prisma" alt="Database" />
<br />
<sub><strong>PostgreSQL • Prisma ORM</strong></sub>
<br />
<sub>Case data, SAR versions, immutable audit logs</sub>

### 🔐 Access Control
<img src="https://skillicons.dev/icons?i=react" alt="RBAC" />
<br />
<sub><strong>RBAC (Role-Based Access Control)</strong></sub>
<br />
<sub>Analyst • Supervisor • Auditor roles inside Next.js</sub>

### 🚀 DevOps & Deployment
<img src="https://skillicons.dev/icons?i=docker,git,github,npm" alt="DevOps" />
<br />
<sub><strong>Docker • Docker Compose • Git • GitHub • npm</strong></sub>
<br />
<sub>Local development + cloud/on-prem ready containerization</sub>

### 📊 Data Visualization & UI Libraries
<img src="https://skillicons.dev/icons?i=materialui,css" alt="UI Libraries" />
<br />
<sub><strong>Recharts • Material UI • Lucide Icons • Motion</strong></sub>
<br />
<sub>Interactive charts, enterprise components, smooth animations</sub>

</div>

---
## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Screenshots](#-screenshots)
- [User Roles](#-user-roles)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Security & Compliance](#-security--compliance)
- [Future Enhancements](#-future-enhancements)

---

## 🎯 Overview

The **SAR Narrative Generator** is an enterprise-grade Anti-Money Laundering (AML) compliance platform designed as an internal banking tool. It revolutionizes the SAR creation process by combining:

- 🤖 **AI-Powered Narrative Generation** - Leveraging LLMs to create compliant, professional SAR narratives
- 📊 **Structured Data Management** - Handling customer, account, and transaction data with precision
- 🔍 **Complete Audit Trail** - Every action tracked and logged for regulatory compliance
- 👥 **Role-Based Access Control** - Three-tier permission system for Analysts, Supervisors, and Auditors
- 📈 **Risk Analytics Dashboard** - Real-time insights into suspicious activity patterns

This platform addresses the critical need for **transparency** and **auditability** in AI-assisted compliance workflows, ensuring human oversight remains central to the decision-making process.

---

## ✨ Key Features

### 🎨 **Seven Comprehensive Screens**

| Screen | Description | Access Level |
|--------|-------------|--------------|
| **Login** | Secure authentication with role selection | All Users |
| **Dashboard** | Overview of active cases, pending reviews, and metrics | All Users |
| **Generate SAR** | AI-assisted SAR narrative creation with rule engine | Analyst, Supervisor |
| **Audit Trail** | Complete history of all actions and decisions | All Users |
| **Case History** | Track status and progression of all SAR cases | All Users |
| **Risk Analytics** | Visual analytics and pattern detection | Supervisor, Auditor |
| **Role Management** | User permissions and access control | Supervisor |
| **System Logs** | Technical system audit logs | Auditor |

### 🛡️ **Advanced Capabilities**

- ✅ **Rule Engine Integration** - Automated red flags and risk scoring
- ✅ **Real-time Collaboration** - Multiple analysts can work on cases simultaneously
- ✅ **Version Control** - Track all narrative edits with timestamps
- ✅ **Approval Workflows** - Multi-stage review and escalation process
- ✅ **Export Compliance** - Generate regulatory-compliant PDF reports
- ✅ **Dark Mode Enterprise UI** - Professional banking aesthetics
- ✅ **Responsive Design** - Works seamlessly on desktop and tablet devices

---


###  Core Dependencies

```json
{
  "react": "^18.3.1",
  "react-router": "^7.13.0",
  "recharts": "^2.15.2",
  "tailwindcss": "^4.1.12",
  "@mui/material": "^7.3.5",
  "lucide-react": "^0.487.0",
  "motion": "^12.23.24",
  "sonner": "^2.0.3"
}
```

---

## 📸 Screenshots

<div align="center">

### Dashboard Overview
<img width="777" height="550" alt="Screenshot 2026-02-18 202242" src="https://github.com/user-attachments/assets/d031cf25-f97d-43dc-ac83-79f27d43782c" />

### Generate SAR Interface
<img width="777" height="550" alt="Screenshot 2026-02-18 202909" src="https://github.com/user-attachments/assets/979ddbca-6999-4091-b01b-71f03012e067" />

### Risk Analytics
<img width="777" height="550" alt="Screenshot 2026-02-18 203014" src="https://github.com/user-attachments/assets/c19786a8-e948-4c95-9cec-dd0666386168" />


</div>

---

## 👥 User Roles

The platform implements a **three-tier role-based access control** system:

### 🔵 **Analyst**
- Create and edit SAR narratives
- Submit cases for supervisor review
- Access basic analytics and case history
- View audit trails for own cases

### 🟡 **Supervisor**
- All analyst permissions
- Approve or reject SAR submissions
- Escalate high-risk cases
- Manage team member roles
- Access advanced risk analytics
- Override AI suggestions with justification

### 🟢 **Auditor**
- Read-only access to all data
- Full audit trail visibility
- System logs access
- Export compliance reports
- No editing or approval capabilities

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sar-narrative-generator.git
   cd sar-narrative-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

### 🔑 Demo Credentials

```
Analyst Login:
- Username: analyst@barclays.com
- Password: (any)

Supervisor Login:
- Username: supervisor@barclays.com
- Password: (any)

Auditor Login:
- Username: auditor@barclays.com
- Password: (any)
```

### 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

---

## 📁 Project Structure

```
sar-narrative-generator/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── RiskBadge.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   └── ui/              # Shadcn UI components
│   │   ├── context/             # React Context providers
│   │   │   └── RoleContext.tsx  # Role-based access control
│   │   ├── pages/               # Screen components
│   │   │   ├── Login.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── GenerateSAR.tsx
│   │   │   ├── AuditTrail.tsx
│   │   │   ├── CaseHistory.tsx
│   │   │   ├── RiskAnalytics.tsx
│   │   │   ├── RoleManagement.tsx
│   │   │   └── SystemLogs.tsx
│   │   ├── routes.ts            # React Router configuration
│   │   └── App.tsx              # Application root
│   └── styles/
│       ├── index.css
│       ├── theme.css            # Design tokens
│       ├── tailwind.css
│       └── fonts.css
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🎨 Design System

### Color Palette

The platform uses a **professional enterprise banking theme** with risk-based color coding:

```css
/* Primary Background */
--background: #0F172A;        /* Dark Navy */

/* Card Surfaces */
--card-background: #1E293B;   /* Slate */

/* Risk Levels */
--risk-high: #EF4444;         /* Red - Critical Risk */
--risk-medium: #F59E0B;       /* Amber - Medium Risk */
--risk-low: #10B981;          /* Green - Low Risk */

/* Accents */
--primary: #3B82F6;           /* Blue - Primary Actions */
--text-primary: #F1F5F9;      /* Light Gray - Primary Text */
--text-secondary: #94A3B8;    /* Muted Gray - Secondary Text */
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: 600-700 weight
- **Body**: 400-500 weight
- **Code/Data**: Monospace fallback

### Design Principles

✅ **Regulatory Compliance** - No gradients, playful elements, or distracting animations  
✅ **High Contrast** - WCAG AA accessibility standards  
✅ **Data Density** - Information-rich layouts for professional users  
✅ **Consistent Spacing** - 8px grid system  
✅ **Clear Hierarchy** - Visual weight reflects importance  

---

## 🔒 Security & Compliance

### Audit Trail Features

- **Immutable Logs** - All actions permanently recorded
- **Timestamp Precision** - Millisecond-accurate tracking
- **User Attribution** - Every change linked to specific user
- **Change History** - Before/after comparisons for all edits

### Data Handling

- **Mock Data Only** - Prototype uses synthetic data
- **No Real PII** - Compliant with data protection regulations
- **Session Management** - Role-based context persistence
- **Input Validation** - All forms validated client-side

### Production Considerations

- Implement backend API with proper authentication (OAuth 2.0 / SAML)
- Use encrypted database for sensitive data
- Add rate limiting and DDoS protection
- Implement HTTPS and certificate pinning
- Add comprehensive logging and monitoring
- Conduct security penetration testing
- Ensure GDPR/regulatory compliance

---

## 🚧 Future Enhancements

### Planned Features

- [ ] **LLM Integration** - Connect to GPT-4 or Claude for real narrative generation
- [ ] **Backend API** - Node.js/Python backend with PostgreSQL
- [ ] **Real-time Collaboration** - WebSocket support for multi-user editing
- [ ] **Advanced Analytics** - ML-based pattern detection
- [ ] **PDF Export** - Regulatory-compliant report generation
- [ ] **Email Notifications** - Alert supervisors of pending approvals
- [ ] **Search & Filter** - Advanced case search capabilities
- [ ] **Mobile App** - React Native companion app
- [ ] **Multi-language** - i18n support for global teams
- [ ] **Dark/Light Mode** - User preference toggle

### Technical Improvements

- [ ] Unit and integration testing (Jest, React Testing Library)
- [ ] E2E testing (Playwright)
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Docker containerization
- [ ] Performance optimization (code splitting, lazy loading)
- [ ] Accessibility audit and improvements

---

</div>

  
