import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, TrendingUp, FileText, Lightbulb, ChevronDown, ChevronUp, Building, ShoppingCart, DollarSign, Users, Target, BarChart3, Laptop } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content?: string;
  cover_image: string | null;
  created_at: string;
  category?: string;
  read_time?: number;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedBlog, setExpandedBlog] = useState<string | null>(null);

  // intentionally run once on mount; loadBlogs is stable here (uses supabase) and
  // including it in deps may cause unnecessary re-fetches. Disable the exhaustive-deps rule.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("id, title, slug, excerpt, cover_image, created_at")
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (data && data.length > 0) {
      setBlogs(data);
    } else {
      setBlogs(sampleBlogs);
    }
    setLoading(false);
  };

  const sampleBlogs: Blog[] = [
    {
      id: "1",
      title: "ERP Implementation for SMEs in India: The Complete 2026 Guide",
      slug: "erp-implementation-sme-india-guide",
      excerpt: "Still running your ₹5-50 Cr business on Tally, WhatsApp and Excel? Here's everything Indian SME owners need to know about ERP implementation — costs, timelines, platforms, and how to avoid the 50% failure rate.",
      content: `
# ERP Implementation for SMEs in India: The Complete 2026 Guide

Your business crossed ₹5 Crore. You have 30+ employees. Orders come in on WhatsApp, billing happens on Tally, inventory is tracked on Excel, and you're fielding 40+ calls a day because nobody has the information they need.

Sound familiar? You're not alone. According to CRISIL, only 53% of Indian SMEs have adopted even basic digital platforms. The rest — including most businesses in the ₹5-50 Cr range — are still running on a patchwork of disconnected tools.

This guide covers everything you need to know about implementing an ERP system for your SME in India — from choosing the right platform to understanding real costs to avoiding the mistakes that cause 50% of ERP projects to fail.

## What is ERP and Why Does Your MSME Need It?

ERP (Enterprise Resource Planning) is a single software system that connects every department in your business — sales, purchase, inventory, accounting, HR, and manufacturing — into one platform. Instead of checking Tally for finances, Excel for inventory, and WhatsApp for order status, everything lives in one place.

For Indian MSMEs, ERP solves three critical problems:

**1. Owner Dependency**
When every decision requires you because information is scattered across 5 different places, you become the bottleneck. An ERP gives your team self-serve access to the data they need — stock levels, customer history, payment status — without calling you.

**2. No Real-Time Financial Visibility**
Most MSME owners discover their actual profit only after the CA prepares year-end accounts. With an ERP, you get real-time P&L, cash flow tracking, and budget vs. actual variance — every single day.

**3. Inability to Scale**
You can manage 10 orders a day on WhatsApp. You cannot manage 100. ERP provides the operational backbone that lets your business grow from ₹10 Cr to ₹50 Cr without everything breaking.

## The Three ERP Platforms That Matter for Indian SMEs

For businesses in the ₹5-50 Cr range, three platforms dominate:

### ERPNext (Open Source, Made in India)

- **License cost:** Free (open-source)
- **Hosting:** Self-hosted or Frappe Cloud from ₹410/month
- **Best for:** Manufacturing, trading, and distribution businesses with some in-house IT capability
- **GST compliance:** Built-in e-invoicing, e-way bill, and GSTR filing
- **Strengths:** Zero license fees, deep India-specific features, strong manufacturing (MRP) module, active Indian community
- **Watch out for:** Requires a good implementation partner; self-implementation without expertise often fails

### Zoho One

- **License cost:** ₹1,500/employee/month (billed annually in India)
- **Best for:** Service businesses, professional firms, and companies wanting a quick SaaS rollout
- **GST compliance:** Native support
- **Strengths:** 45+ integrated apps (CRM, Books, Payroll, Inventory), low-code customization, fast deployment
- **Watch out for:** Manufacturing/MRP capabilities are limited compared to ERPNext and Odoo; costs scale linearly with headcount

### Odoo Enterprise

- **License cost:** $24-54/user/month depending on plan
- **Best for:** Mid-size businesses with complex workflows and heavy customization needs
- **GST compliance:** Via modules
- **Strengths:** Highly modular — pick only what you need; strong manufacturing and inventory; large global ecosystem
- **Watch out for:** Enterprise license costs add up; customizations can increase total cost of ownership significantly over 3 years

## What Does ERP Implementation Actually Cost?

This is the question every MSME owner asks first. Here's the honest answer based on our experience implementing all three platforms:

### Small Deployment (5-20 users)

| Component | ERPNext | Zoho One | Odoo |
|---|---|---|---|
| Software/License | Free | ₹1.8-3.6 lakh/year | ₹2.4-6.5 lakh/year |
| Implementation | ₹2-5 lakh | ₹1.5-3.5 lakh | ₹3-10 lakh |
| Data Migration | ₹50K-1.5 lakh | ₹30K-1 lakh | ₹1-3 lakh |
| Training | ₹30K-1 lakh | ₹20K-50K | ₹50K-1.5 lakh |
| **Year 1 Total** | **₹3-8 lakh** | **₹4-8.5 lakh** | **₹7-21 lakh** |

### Mid-Size Deployment (20-50 users)

| Component | ERPNext | Zoho One | Odoo |
|---|---|---|---|
| Software/License | Free | ₹3.6-9 lakh/year | ₹5.8-16 lakh/year |
| Implementation | ₹5-15 lakh | ₹3.5-10 lakh | ₹15-50 lakh |
| **Year 1 Total** | **₹7-20 lakh** | **₹8-22 lakh** | **₹25-70 lakh** |

**Rule of thumb:** Indian SMEs in the ₹5-50 Cr revenue range typically budget 1-3% of annual revenue for ERP implementation.

## Why 50% of ERP Implementations Fail (And How to Avoid It)

Global statistics are sobering: 50% of ERP implementations fail on their first attempt. Gartner predicts 70% won't meet business goals by 2027. In India, the failure rate is arguably higher for MSMEs because of three additional factors:

**1. Choosing Software Before Fixing Processes**
The most common mistake. If your purchase process is chaotic, putting it on an ERP just gives you digitised chaos. You need to map and fix your business processes FIRST, then configure the ERP to support them.

This is exactly why we use our "What Could Go Wrong" methodology — we map every process, identify every risk point, design the corrected workflow, and THEN implement it in the ERP.

**2. No Change Management**
Your team has been doing things a certain way for years. Dropping an ERP on them without training, handholding, and on-site support guarantees resistance. The technology works — it's the people adoption that fails.

We sit in your office during implementation. Not remote calls. Not training videos. Physical presence until your team is comfortable and the system is running.

**3. Hiring a Software Vendor Instead of a Business Partner**
ERP vendors implement software. They configure modules, migrate data, and hand you the keys. But they don't understand your purchase approval workflow, your inventory counting problems, or why your Agra warehouse always has stock mismatches.

You need a partner who understands both the business process AND the technology. A CA firm that implements ERP combines financial controls expertise with technical implementation — a combination that's rare at the SME level.

## The ERP Implementation Timeline: What's Realistic?

Forget vendor claims of "go-live in 2 weeks." Here's what actually happens:

**Phase 1: Discovery & Process Mapping (Weeks 1-4)**
- Document current workflows across all departments
- Identify pain points, bottlenecks, and "What Could Go Wrong" risks
- Design target-state processes and SOPs
- Define KPIs and dashboards needed

**Phase 2: Configuration & Setup (Weeks 5-10)**
- Configure ERP modules to match designed processes
- Set up chart of accounts, GST settings, and tax rules
- Build custom fields and workflows specific to your business
- Create user roles and permission hierarchies

**Phase 3: Data Migration (Weeks 8-12)**
- Clean master data (customers, suppliers, items, BOMs)
- Migrate opening balances from Tally
- Reconcile and validate migrated data
- Set up historical reference data

**Phase 4: Testing & Training (Weeks 10-14)**
- Parallel run (old system + new system simultaneously)
- Department-wise hands-on training
- User acceptance testing with real transactions
- Fix issues and refine configurations

**Phase 5: Go-Live & Stabilization (Weeks 14-20)**
- Switch to the new system
- On-site support during the critical first month
- Daily check-ins and issue resolution
- Performance monitoring and optimization

**Realistic timeline: 4-5 months for a ₹10-25 Cr business with 20-40 users.**

## The Tally Migration Question

Most Indian MSMEs run on Tally. The question isn't whether to keep using Tally — it's when to migrate. With mandatory e-invoicing for businesses above ₹5 Cr turnover and increasing GST compliance requirements, the Tally-to-ERP migration wave is accelerating.

Key considerations:

- **Don't migrate everything at once.** Start with purchase-to-pay and order-to-cash cycles. Add manufacturing/inventory later.
- **Run parallel systems for at least one month.** This catches data discrepancies early.
- **Your Tally data is valuable.** Migrate opening balances, customer/supplier masters, and item masters carefully. Bad master data is the #1 cause of post-migration problems.
- **Train your accountant first.** If your accounts team isn't comfortable, the entire implementation stalls.

## Government Support: Budget 2026 Subsidies for ERP

The Union Budget 2026-27 has earmarked ₹10,000 Cr for MSME capability building, with specific focus on digital modernization. The Digital MSME Initiative 2.0 promotes cloud-based ERP adoption at subsidized rates. This means your ERP implementation may qualify for government co-funding — check with your CA or local District Industries Centre.

## How to Choose the Right ERP Implementation Partner

Ask these five questions:

1. **"Do you fix our processes first, or just install software?"** If they jump straight to software configuration, they're a vendor, not a partner.

2. **"Will you be physically present in our office during implementation?"** Remote implementations have significantly higher failure rates for SMEs.

3. **"Do you understand our finances, not just our technology?"** An implementation partner with CA/financial expertise catches issues that pure tech teams miss — like incorrect GST configurations or chart of accounts problems.

4. **"How many Indian MSME implementations have you completed?"** Enterprise experience doesn't translate to SME reality. You need someone who's worked with ₹5-50 Cr businesses.

5. **"What happens after go-live?"** The first 90 days post-implementation are critical. You need a partner who stays, not one who disappears after handing over the login credentials.

## Conclusion: The Best Time to Implement ERP Was Yesterday

Every month you delay ERP implementation, you're losing:
- Visibility into your actual financial position
- Time spent on manual data entry and reconciliation
- Opportunities to scale because your systems can't handle growth
- Money on inventory mismatches, duplicate orders, and missed follow-ups

The ERP market in India is growing at 13.2% CAGR. Your competitors are moving. The government is subsidising adoption. And for the first time, platforms like ERPNext make enterprise-grade ERP accessible to ₹5 Cr businesses — not just ₹500 Cr corporates.

The question isn't whether your business needs ERP. It's who will help you implement it right.

**Seven Labs Vision implements ERPNext, Zoho, and Odoo for Indian SMEs with a unique approach: we fix your processes first, then implement the technology. We sit in your office until your business runs without you being the bottleneck. 40+ organisations and 3000+ employees transformed.**

Ready to stop running your business on WhatsApp and Excel? Get your free business audit today.
      `,
      cover_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      created_at: "2026-03-18T10:00:00Z",
      category: "erp",
      read_time: 15
    },
    {
      id: "2",
      title: "ERPNext vs Zoho vs Odoo: Which ERP is Right for Your Indian MSME?",
      slug: "erpnext-vs-zoho-vs-odoo-indian-msme",
      excerpt: "A no-nonsense comparison of India's top 3 SME ERP platforms — ERPNext, Zoho One, and Odoo — based on our experience implementing all three for ₹5-50 Cr businesses.",
      content: `
# ERPNext vs Zoho vs Odoo: Which ERP is Right for Your Indian MSME?

If you're an Indian SME owner researching ERP systems, you've probably narrowed your options to three names: ERPNext, Zoho, and Odoo. These are the three platforms that actually make sense for businesses in the ₹5-50 Cr range — everything else is either too expensive (SAP, Oracle) or too basic (just Tally).

We implement all three. We don't have a financial incentive to push one over another. Here's the honest comparison based on 40+ implementations across manufacturing, trading, distribution, and service businesses.

## The Quick Answer

- **Choose ERPNext** if you're a manufacturer or trader who wants zero license costs and full control over customization, and you have (or will hire) someone technically inclined on your team.
- **Choose Zoho One** if you're a service business or professional firm that wants a quick, cloud-based rollout with integrated CRM, email, and HR — and you're comfortable with per-employee pricing.
- **Choose Odoo** if you need deep customization for complex workflows, have a larger budget, and want a modular system where you only pay for what you use.

## Detailed Comparison

### 1. Cost — The Real Numbers Over 3 Years

For a 25-user business, here's what you'll actually spend:

**ERPNext (Self-Hosted or Frappe Cloud)**
- Year 1: ₹3-8 lakh (implementation + hosting)
- Year 2: ₹50K-1.5 lakh (hosting + support)
- Year 3: ₹50K-1.5 lakh (hosting + support)
- **3-Year Total: ₹4-11 lakh**

**Zoho One**
- Year 1: ₹6-12 lakh (license + implementation)
- Year 2: ₹4.5 lakh (license renewal)
- Year 3: ₹4.5 lakh (license renewal)
- **3-Year Total: ₹15-21 lakh**

**Odoo Enterprise**
- Year 1: ₹15-40 lakh (license + implementation)
- Year 2: ₹4-10 lakh (license renewal)
- Year 3: ₹4-10 lakh (license renewal)
- **3-Year Total: ₹23-60 lakh**

ERPNext wins on cost by a massive margin because there are no license fees. You're paying only for implementation expertise and hosting.

### 2. India-Specific Features (GST, TDS, e-Invoicing)

**ERPNext: Best-in-class for India**
- Native GST with CGST, SGST, IGST ledgers
- e-Invoicing and IRN generation built-in
- e-Way bill integration
- TDS calculation and deduction
- GST filing reports (GSTR-1, GSTR-3B)
- Indian payroll with PF, ESI, and professional tax

ERPNext is built in India (by Frappe, headquartered in Mumbai) and India compliance is a first-class feature, not an afterthought.

**Zoho One: Strong India support**
- Zoho Books has good GST compliance
- e-Invoicing support
- TDS handling
- Indian payroll via Zoho Payroll
- However, inventory + manufacturing modules are weaker

**Odoo: Adequate with modules**
- GST support through localization modules
- e-Invoicing available
- Less tightly integrated than ERPNext's native approach
- May require additional configuration for Indian compliance

### 3. Manufacturing & Inventory

If you're a manufacturer, this is often the deciding factor:

**ERPNext: Strong**
- Full MRP (Material Requirements Planning)
- BOM (Bill of Materials) management
- Work Order tracking
- Production planning
- Quality inspection
- Batch and serial number tracking

**Odoo: Strong**
- Comprehensive manufacturing module
- MRP with scheduling
- Quality management
- Maintenance management
- PLM (Product Lifecycle Management)

**Zoho: Weak**
- Zoho Inventory handles basic stock management
- No true MRP or production planning
- Not suitable for manufacturing businesses
- Better suited for trading and service companies

### 4. CRM & Sales

**Zoho: Best-in-class**
- Zoho CRM is one of the best SME CRMs globally
- Email campaigns, social media, telephony integration
- Advanced analytics and AI (Zia)
- Seamless integration with Zoho Books

**ERPNext: Functional but basic**
- Built-in CRM module covers essentials
- Lead, opportunity, and quotation management
- Not as polished as dedicated CRM tools

**Odoo: Good**
- Decent CRM with pipeline management
- Marketing automation
- Website builder integration

### 5. Ease of Use

**Zoho: Easiest** — Modern SaaS interface, minimal training needed
**ERPNext: Moderate** — Clean interface but requires understanding of ERP concepts
**Odoo: Moderate to Complex** — Powerful but the sheer number of options can overwhelm

### 6. Implementation Timeline

**Zoho: 4-8 weeks** — SaaS, mostly configuration
**ERPNext: 8-16 weeks** — More process design involved
**Odoo: 12-24 weeks** — Customization-heavy implementations take longer

## Our Recommendation Matrix

| If your business is... | Choose |
|---|---|
| Manufacturing, ₹5-25 Cr, cost-conscious | **ERPNext** |
| Trading/Distribution with inventory | **ERPNext** or **Odoo** |
| Service/Professional firm | **Zoho One** |
| Heavy customization needs | **Odoo** |
| Want fastest go-live | **Zoho One** |
| Need strong CRM + accounting | **Zoho One** |
| Manufacturing with complex BOM | **ERPNext** or **Odoo** |
| Budget under ₹10 lakh total | **ERPNext** |

## The Hidden Factor: Your Implementation Partner Matters More Than the Platform

Here's what most comparison articles won't tell you: the platform you choose matters less than who implements it.

A well-implemented ERPNext will outperform a poorly-implemented Odoo every time. The difference between a successful ERP and a failed one isn't the software — it's whether someone:

1. Fixed your business processes before configuring the software
2. Stayed on-site until your team was genuinely comfortable
3. Understood your financial controls, not just the technology
4. Continued supporting you after go-live

At Seven Labs Vision, we implement all three platforms because we believe in recommending what's right for your business — not what gives us the highest commission. Our approach starts with understanding your operations, designing your processes, and only then selecting and implementing the right ERP.

**40+ organisations transformed. 3000+ employees covered. Delhi NCR and Agra.**

Want help choosing the right ERP for your business? Book a free business audit — we'll assess your operations and recommend the platform that fits.
      `,
      cover_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      created_at: "2026-03-12T10:00:00Z",
      category: "erp",
      read_time: 12
    },
    {
      id: "3",
      title: "SOP Development for Indian MSMEs: How to Create SOPs Your Team Actually Follows",
      slug: "sop-development-guide-msme-india",
      excerpt: "Your business has processes — they're just in your head. Here's a practical guide to documenting SOPs that reduce owner dependency and make your operations run without you.",
      content: `
# SOP Development for Indian MSMEs: How to Create SOPs Your Team Actually Follows

Here's a scene we see in almost every ₹5-25 Cr business we work with: the owner gets 40+ calls a day. Not because the team is incompetent — because nobody knows the "right" way to handle situations. There's no documented process. The process is the owner's brain.

SOPs (Standard Operating Procedures) change this. But most MSME owners either think SOPs are "for big companies" or they've tried creating them and nobody followed them.

This guide shows you how to build SOPs that actually work — drawn from our experience implementing process systems across 40+ Indian organisations.

## Why Your MSME Needs SOPs (Even If You Think You Don't)

**The Owner Dependency Test:**
Can you take a 7-day vacation without your phone ringing? If the answer is no, you don't have a business — you have a job that you own.

SOPs are the bridge between "everything depends on me" and "the business runs without me." They capture the decisions you make 50 times a day and turn them into documented rules that anyone on your team can follow.

**Real impact we've seen:**
- Owner call volume dropping from 40+/day to under 10
- New employee onboarding time reduced from 3 months to 3 weeks
- Error rates in order processing dropping by 60-70%
- Customer complaints reducing because of consistent service delivery

## The "What Could Go Wrong" Framework for SOP Design

Most SOP guides tell you to "document your current process." That's wrong. Your current process might be broken. You should design your TARGET process, and documenting it as an SOP is the mechanism for getting there.

Our proprietary "What Could Go Wrong" methodology works like this:

**Step 1: Map the Current Process**
Walk through the actual workflow — not what people say they do, but what they actually do. Observe. Sit with the team. Watch where the bottlenecks, errors, and confusion happen.

**Step 2: Identify Every Risk Point**
For each step, ask: "What could go wrong here?" Examples:
- Purchase order placed but wrong quantity entered
- Material received but quality not checked
- Invoice raised but payment terms not matched to contract
- Stock transferred but not updated in the register

**Step 3: Design Controls for Each Risk**
For every "what could go wrong," design a control:
- Maker-checker approval for purchase orders above ₹50,000
- Mandatory quality inspection checklist before GRN
- Auto-matching of invoice terms against purchase order
- Real-time stock update trigger on transfer

**Step 4: Write the SOP Around the Controlled Process**
Now document the process WITH the controls built in. This isn't a description of what happens — it's a prescription for what SHOULD happen.

## How to Write SOPs That People Actually Follow

### Keep It Visual
Nobody reads a 20-page Word document. Use:
- Flowcharts for decision points
- Checklists for sequential steps
- Screenshots for software-based processes
- One-page summaries with links to detail

### Write for the Newest Person on Your Team
If a person joining tomorrow can't follow your SOP without asking questions, the SOP isn't good enough. Use simple language. Hindi/Hinglish is fine if that's what your team speaks.

### Include the "Why"
Don't just write "Check quality before accepting goods." Write "Check quality before accepting goods — last year we lost ₹3.2 lakh on a defective batch because we skipped inspection."

When people understand WHY a step exists, they follow it. When they see it as bureaucracy, they skip it.

### Build SOPs into Your ERP
The most powerful SOPs aren't documents — they're workflows embedded in your ERP system:
- Purchase orders can't be submitted without approval
- GRN can't be processed without quality check completion
- Sales invoices auto-populate payment terms from the contract
- Stock transfers auto-update inventory in real-time

This is why we combine SOP design with ERP implementation. The SOP becomes the system configuration, not a file gathering dust in a folder.

## The 5 SOPs Every MSME Should Create First

Based on our experience, start with these — they cover 80% of daily chaos:

### 1. Purchase-to-Pay (P2P)
From indent to payment:
- Who can raise a purchase request?
- What are the approval limits?
- How are suppliers selected and compared?
- What happens when goods arrive?
- How are invoices matched and payments released?

### 2. Order-to-Cash (O2C)
From customer inquiry to collection:
- How are quotations prepared and approved?
- What are the credit terms and credit limit rules?
- How is dispatch triggered?
- When and how are invoices raised?
- What is the follow-up process for overdue payments?

### 3. Inventory Management
- When and how is stock counted?
- What are the minimum stock levels and reorder points?
- How are stock transfers between locations handled?
- What is the process for dead/slow-moving stock?
- How is wastage/scrap accounted for?

### 4. Employee Onboarding
- What documents are collected on day 1?
- Who provides system access and training?
- What is the 30/60/90-day checklist?
- Who is the assigned mentor?
- When is the first performance check-in?

### 5. Customer Complaint Resolution
- How are complaints logged?
- What is the response time commitment?
- Who owns resolution for different complaint types?
- How is the customer updated on progress?
- What is the escalation path?

## Implementation Tips from 40+ Projects

**Start small.** Don't try to document 50 SOPs at once. Pick the 3 processes causing the most pain and start there.

**Involve the team.** SOPs designed in a boardroom fail. SOPs designed WITH the people who execute the process succeed. They know where the real problems are.

**Review quarterly.** Your business changes. Your SOPs should too. Set a calendar reminder to review and update every quarter.

**Measure compliance.** What gets measured gets done. Track SOP adherence through your ERP or a simple checklist system. Share compliance data in weekly team meetings.

**Celebrate improvements.** When error rates drop or customer complaints reduce because of SOPs, acknowledge it. This builds the culture of process discipline.

## The Bigger Picture: SOPs as the Foundation for Scale

SOPs aren't an end in themselves — they're the foundation for everything else:
- **ERP implementation** succeeds because processes are already designed
- **KPI dashboards** work because there are defined processes to measure
- **New hires** become productive faster because there's a clear playbook
- **Quality** becomes consistent because there's a standard to follow
- **The owner** gets their time back because decisions are delegated through documented rules

This is what we mean by "making business predictable." Not through expensive software or fancy frameworks — through the disciplined work of mapping, designing, and implementing processes that work.

**At Seven Labs Vision, SOP development is part of every engagement. Whether we're implementing ERP, building KPI systems, or restructuring your organisation — we start with process design. Because technology without process is just expensive confusion.**

Ready to stop being the bottleneck in your own business? Talk to us about a free business audit.
      `,
      cover_image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      created_at: "2026-03-05T10:00:00Z",
      category: "operations",
      read_time: 11
    },
    {
      id: "4",
      title: "Virtual CFO Services for SMEs: Does Your ₹5-50 Cr Business Need One?",
      slug: "virtual-cfo-services-sme-india",
      excerpt: "Most ₹5-50 Cr businesses can't afford a full-time CFO but desperately need financial leadership. Here's how virtual CFO services work, what they cost, and when you should get one.",
      content: `
# Virtual CFO Services for SMEs: Does Your ₹5-50 Cr Business Need One?

You know your business makes money. But do you know exactly how much? Which product line is profitable and which one is actually bleeding cash? Whether you'll have enough working capital next month? What your break-even point is?

If you're running a ₹5-50 Cr business and your financial visibility is limited to whatever your CA tells you at year-end — you have a CFO-shaped gap in your operations.

A full-time CFO costs ₹25-50 lakh per year. Your business can't justify that expense. But the problems that a CFO solves — poor cash flow management, no budgeting discipline, zero financial forecasting — are costing you far more than ₹25 lakh annually.

This is where virtual CFO services come in.

## What Does a Virtual CFO Actually Do?

A virtual (or fractional) CFO provides part-time, senior-level financial leadership. Unlike your accountant who records transactions, or your CA who handles compliance, a virtual CFO does strategic financial management:

**Financial Planning & Analysis (FP&A)**
- Monthly budgets with department-wise breakdowns
- Budget vs. actual variance analysis
- Rolling financial forecasts
- Cash flow projections and management

**Management Information Systems (MIS)**
- Real-time P&L statements (not just year-end)
- Product/service-wise profitability analysis
- Working capital dashboards
- Key financial ratios tracking

**Strategic Financial Advice**
- Pricing strategy recommendations
- Make vs. buy decisions
- Expansion/investment analysis
- Banking and credit facility negotiations

**Financial Controls**
- Expense approval frameworks
- Payment authorization matrices
- Internal audit checkpoints
- Fraud prevention controls

## The Accountant vs. CA vs. CFO Distinction

This confusion is extremely common in Indian MSMEs:

**Your Accountant** records transactions, reconciles bank statements, and maintains books of accounts. They're focused on accuracy of past data.

**Your CA** handles statutory compliance — tax returns, GST filings, audit, ROC filings. They ensure you're legally compliant.

**A CFO (virtual or full-time)** uses financial data to drive business decisions. They're focused on the FUTURE — planning, forecasting, and optimising financial performance.

Most ₹5-50 Cr businesses have the first two but not the third. That's like having a speedometer and odometer but no GPS — you know how fast you're going and how far you've come, but you have no idea where you're heading or whether you'll run out of fuel.

## When Does Your Business Need a Virtual CFO?

You need virtual CFO services when:

- **Revenue crossed ₹5 Cr** and you're losing track of where money goes
- **You're planning expansion** (new location, new product line, new market) and need financial modelling
- **Cash flow is unpredictable** — you have revenue but are always short on cash
- **You're seeking funding** — banks or investors want financial projections you can't produce
- **Profitability is unclear** — revenue is growing but profit isn't growing proportionally
- **You want to reduce owner dependency** in financial decisions

## What Do Virtual CFO Services Cost in India?

For ₹5-50 Cr businesses, virtual CFO services typically cost:

| Service Level | Monthly Cost | What You Get |
|---|---|---|
| Basic MIS & Reporting | ₹30,000-50,000 | Monthly P&L, cash flow tracking, basic dashboards |
| Standard FP&A | ₹50,000-1,00,000 | Above + budgeting, variance analysis, financial planning |
| Strategic CFO | ₹1,00,000-1,50,000 | Above + fundraising support, investor relations, board reporting |

Compare this to a full-time CFO at ₹25-50 lakh/year. A virtual CFO gives you 80% of the capability at 20-30% of the cost.

## What to Look for in a Virtual CFO Partner

**1. CA Qualification + Business Acumen**
Your virtual CFO should be a qualified Chartered Accountant who ALSO understands business operations. Pure compliance CAs often lack the strategic mindset. Pure consultants often lack the financial rigour.

**2. Technology Implementation Capability**
Financial planning without systems is just Excel spreadsheets that nobody updates. Your virtual CFO should be able to set up dashboards, configure ERP financial modules, and build automated MIS reports.

**3. On-Site Presence (At Least Initially)**
The first 2-3 months require deep understanding of your business — product mix, cost structure, team dynamics, customer payment patterns. This can't be done over Zoom calls alone. Your virtual CFO partner should spend meaningful time in your office.

**4. Industry-Relevant Experience**
A virtual CFO who's worked with manufacturing MSMEs understands inventory costing, WIP valuation, and material cost variances. One who's only done IT services will miss these nuances.

## The Real-Time P&L: The Single Most Valuable Output

If there's ONE thing a virtual CFO should deliver for your business, it's this: a real-time Profit & Loss statement.

Most MSME owners discover their actual profit 6-12 months after the financial year ends — when the CA prepares the audit. By then, it's too late to course-correct.

A real-time P&L means:
- You know your gross margin THIS MONTH, not last year
- You can see which product line is profitable and which isn't
- You can spot expense overruns BEFORE they become crises
- You can make pricing decisions based on actual costs, not guesses

This single output — a reliable, real-time P&L — is worth the entire cost of virtual CFO services. Because the decisions it enables (killing unprofitable products, renegotiating supplier terms, adjusting pricing) typically deliver 5-10x ROI on the virtual CFO fee.

## How We Deliver Virtual CFO Services

At Seven Labs Vision, our virtual CFO service is different because it's integrated with everything else we do:

**Month 1-2: Setup**
- Understand your business model and cost structure
- Set up chart of accounts in your ERP
- Configure real-time P&L and cash flow dashboards
- Design budget templates and variance tracking

**Month 3-6: Rhythm**
- Monthly MIS delivery with commentary
- Quarterly budget reviews
- Cash flow forecasting and management
- Banking relationship support

**Ongoing: Strategic Partner**
- Financial modelling for business decisions
- Profitability improvement recommendations
- Tax planning and optimization
- Board/investor reporting (if applicable)

The difference? We don't just send you Excel reports. We implement the systems (ERP, dashboards, processes) that generate financial insights automatically. We build capability, not dependency.

**40+ organisations. 3000+ employees covered. CA-led financial expertise combined with technology implementation. Delhi NCR and Agra.**

Ready to move from year-end surprises to real-time financial clarity? Schedule your free business audit today.
      `,
      cover_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      created_at: "2026-02-25T10:00:00Z",
      category: "finance",
      read_time: 10
    },
    {
      id: "5",
      title: "KPI Dashboards for MSME Owners: Track What Actually Matters",
      slug: "kpi-dashboards-msme-owners-india",
      excerpt: "You don't need 50 metrics. You need 7-10 KPIs that tell you exactly how your business is performing — updated daily, not annually. Here's how to build KPI dashboards that drive real decisions.",
      content: `
# KPI Dashboards for MSME Owners: Track What Actually Matters

Ask any MSME owner "How's business?" and you'll hear: "Chal raha hai" or "Theek hai." Ask them for their exact gross margin this month, their customer acquisition cost, or their inventory turnover ratio — and you'll get silence.

This isn't because the data doesn't exist. It's because nobody has organised it into a format that helps the owner make decisions. That's what a KPI dashboard does.

## What Are KPIs and Why Should You Care?

KPIs (Key Performance Indicators) are the 7-10 numbers that tell you whether your business is healthy or heading for trouble. Think of them as the vital signs of your business — like blood pressure and heart rate, but for operations.

Most MSME owners make decisions based on gut feeling. That works when you're doing ₹1-2 Cr. At ₹10-50 Cr, gut feeling becomes guesswork — and guesswork gets expensive.

KPI dashboards replace guesswork with data. Not complex analytics or machine learning — just the right numbers, updated daily, visible on your phone.

## The 10 KPIs Every MSME Owner Should Track

Based on our work with 40+ organisations, these are the metrics that matter most:

### Financial KPIs

**1. Revenue (Daily/Weekly/Monthly)**
Not just the total — broken down by product line, customer segment, and sales channel. You need to see WHERE the money comes from.

**2. Gross Margin %**
Revenue minus direct costs, divided by revenue. If this number is shrinking month over month, you have a pricing or cost problem. Most MSME owners don't track this monthly — they discover the problem at year-end.

**3. Operating Cash Flow**
Profit on paper means nothing if cash isn't in the bank. Track actual cash inflows vs. outflows weekly. Many profitable businesses fail because of cash flow — they have money owed to them but can't pay their own bills.

**4. Accounts Receivable Ageing**
How much is owed to you, and for how long? If your average collection period is 90 days but your payment terms say 30 days, you're essentially giving your customers a free loan.

### Operational KPIs

**5. Order Fulfillment Rate**
What percentage of orders are delivered on time and in full? If this drops below 95%, you're losing customers — they just haven't told you yet.

**6. Inventory Turnover**
How many times does your inventory cycle through in a year? Low turnover means dead stock eating up working capital. High turnover means you're efficient. For most trading/manufacturing MSMEs, the target should be 6-12 turns per year.

**7. Production/Service Delivery Efficiency**
For manufacturers: what's your actual output vs. planned output? For service businesses: what's your utilisation rate? This tells you whether your team's capacity is being used effectively.

### People KPIs

**8. Employee Attrition Rate**
If you're losing 30-40% of your team every year, you're spending more on hiring and training than on growth. Track this monthly, not annually.

**9. Revenue per Employee**
Total revenue divided by total employees. This is your productivity benchmark. If headcount grows faster than revenue, efficiency is declining.

### Customer KPIs

**10. Customer Complaints/Returns Rate**
The percentage of orders that result in complaints or returns. Track the trend — if it's increasing, something in your process is breaking down.

## How to Build Your KPI Dashboard (Without Expensive Software)

### Option 1: ERP-Based Dashboards (Best)
If you're on ERPNext, Zoho, or Odoo, dashboards are built-in:
- ERPNext has a powerful dashboard builder with charts, KPI cards, and scheduled reports
- Zoho Analytics connects to Zoho Books/CRM for automated dashboards
- Odoo has customisable dashboard views per module

This is the ideal approach because data flows automatically — no manual entry, no outdated numbers.

### Option 2: Google Sheets Dashboard (Good Start)
If you're not ready for ERP, start with a structured Google Sheet:
- Create a template with your 10 KPIs
- Assign someone to update it daily (15 minutes)
- Review it in your morning standup
- It's free and accessible on mobile

### Option 3: Power BI or Metabase (Advanced)
For businesses with data in multiple systems, tools like Power BI or Metabase can pull data from different sources into one dashboard. This requires some technical setup but gives you a unified view.

## The Daily Rhythm: How to Actually Use Your Dashboard

A dashboard nobody looks at is worse than no dashboard — it creates a false sense of control. Here's how to build the habit:

**Morning (5 minutes):** Check yesterday's revenue, cash position, and any red flags (overdue receivables, low stock items, customer complaints)

**Weekly (30 minutes):** Review weekly trends in all 10 KPIs. Compare against targets. Identify the ONE metric that needs the most attention this week.

**Monthly (2 hours):** Deep dive into each KPI. Analyse root causes for any that are off-target. Adjust plans and targets for next month. Share results with department heads.

**Quarterly (Half day):** Review and update KPI targets. Add or remove KPIs based on business changes. Celebrate improvements and address persistent problems.

## KPIs for Your Team: KRAs and Performance Management

KPIs aren't just for the owner — every team member should have 3-5 KRAs (Key Result Areas) that connect to the business KPIs:

**Sales Team KRAs:**
- New customer acquisition (number and value)
- Revenue from existing accounts
- Average deal size
- Pipeline value
- Collection efficiency

**Operations Team KRAs:**
- On-time delivery rate
- Quality pass rate
- Inventory accuracy
- Wastage percentage
- Production efficiency

**Finance Team KRAs:**
- Invoice accuracy
- Collection days outstanding
- Vendor payment compliance
- MIS delivery timeline
- Reconciliation completion

When every person has measurable KRAs that roll up to business KPIs, you shift from "managing by presence" to "managing by performance." You don't need to watch what everyone is doing — you just need to check the numbers.

## From KPIs to Appraisals: Closing the Loop

The most powerful use of KPIs is in performance appraisals. Instead of subjective reviews ("he works hard," "she has attitude problems"), you have data-driven conversations:

"Your target was 50 new customer meetings this quarter. You did 62. Your conversion rate was 18% vs. a target of 15%. Your revenue per deal was ₹1.2 lakh vs. target of ₹1.5 lakh. Let's talk about how to improve deal size."

This makes appraisals fair, transparent, and actionable. Your best performers get recognised. Underperformance gets addressed with specifics, not opinions.

## Implementation: How We Set Up KPI Systems

At Seven Labs Vision, KPI implementation is a structured process:

**Week 1-2:** Define KPIs aligned with business goals. Get owner alignment on what matters.

**Week 3-4:** Build dashboards — either in your ERP or as a standalone tracking system. Automate data collection wherever possible.

**Week 5-6:** Define KRAs for every role. Link individual KRAs to business KPIs. Get team buy-in.

**Week 7-8:** Train the team on reading dashboards, updating data, and using KPIs in daily decision-making.

**Month 3:** First KPI-based performance review cycle. Refine targets based on actual data.

The goal is to create a culture where data drives decisions — from the shop floor to the boardroom.

**40+ organisations. 3000+ employees covered. From "chal raha hai" to real-time performance visibility.**

Ready to know exactly how your business is performing — every single day? Get your free business audit.
      `,
      cover_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      created_at: "2026-02-15T10:00:00Z",
      category: "operations",
      read_time: 13
    }
  ];

  const categories = [
    { id: "all", label: "All Insights", icon: <FileText className="w-4 h-4" /> },
    { id: "erp", label: "ERP & Technology", icon: <Laptop className="w-4 h-4" /> },
    { id: "operations", label: "Operations & Processes", icon: <Target className="w-4 h-4" /> },
    { id: "finance", label: "Finance & CFO", icon: <DollarSign className="w-4 h-4" /> },
  ];

  const filteredBlogs = selectedCategory === "all" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const toggleBlog = (blogId: string) => {
    setExpandedBlog(expandedBlog === blogId ? null : blogId);
  };

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let tableRows: string[][] = [];
    let inTable = false;

    const flushTable = () => {
      if (tableRows.length === 0) return;
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                {tableRows[0].map((cell, ci) => (
                  <th key={ci} className="border border-border bg-secondary/30 px-3 py-2 text-left font-semibold text-foreground">{renderInline(cell.trim())}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-border px-3 py-2 text-muted-foreground">{renderInline(cell.trim())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    };

    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];

      // Table separator line (|---|---|)
      if (/^\|[\s\-:|]+\|$/.test(line.trim())) {
        continue;
      }

      // Table row
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        const cells = line.trim().slice(1, -1).split('|');
        tableRows.push(cells);
        inTable = true;
        continue;
      }

      // If we were in a table and now we're not, flush it
      if (inTable) {
        flushTable();
      }

      if (line.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">{line.substring(2)}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl font-bold text-foreground mt-6 mb-3">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">{line.substring(4)}</h3>);
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(<p key={index} className="font-semibold text-foreground mt-3 mb-2">{line.replace(/\*\*/g, '')}</p>);
      } else if (/^\d+\.\s/.test(line)) {
        const text = line.replace(/^\d+\.\s/, '');
        elements.push(<li key={index} className="text-muted-foreground ml-6 mb-1 list-decimal">{renderInline(text)}</li>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={index} className="text-muted-foreground ml-6 mb-1 list-disc">{renderInline(line.substring(2))}</li>);
      } else if (line.trim() === '') {
        elements.push(<div key={index} className="h-2"></div>);
      } else {
        elements.push(<p key={index} className="text-muted-foreground leading-relaxed mb-3">{renderInline(line)}</p>);
      }
    }

    // Flush any remaining table
    if (inTable) {
      flushTable();
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights <span className="text-primary">&amp; Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay ahead with our latest thinking on business transformation, strategic planning, 
              and financial optimization for modern enterprises.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex gap-2 overflow-x-auto py-4 no-scrollbar"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {loading ? (
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-secondary/50 h-48 rounded-t-xl"></div>
                  <div className="p-6 bg-card rounded-b-xl border border-border">
                    <div className="h-4 bg-secondary/50 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-secondary/50 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-secondary/50 rounded w-full mb-2"></div>
                    <div className="h-3 bg-secondary/50 rounded w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto space-y-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* outer layout wrapper to animate grid/size changes */}
                <motion.div layout transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
                    <motion.div layout className={`grid ${expandedBlog === blog.id ? 'lg:grid-cols-1' : 'lg:grid-cols-3'} gap-0`} transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}>
                    {blog.cover_image && (
                      <div className={`relative ${expandedBlog === blog.id ? 'h-64' : 'h-48 lg:h-full'} overflow-hidden bg-secondary/20`}>
                        <img
                          src={blog.cover_image}
                          alt={blog.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          {blog.category && (
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold capitalize">
                              {blog.category}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    <div className={`${expandedBlog === blog.id ? 'col-span-1' : 'lg:col-span-2'} p-6 lg:p-8`}>
                      <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(blog.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        {blog.read_time && (
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {blog.read_time} min read
                          </span>
                        )}
                      </div>
                      
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {blog.title}
                      </h2>
                      
                      {blog.excerpt && !expandedBlog && (
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      )}

                      <AnimatePresence>
                        {expandedBlog === blog.id && blog.content && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="prose prose-lg max-w-none mb-6"
                          >
                            <div className="text-muted-foreground leading-relaxed">
                              {renderContent(blog.content)}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        onClick={() => toggleBlog(blog.id)}
                        className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
                      >
                        {expandedBlog === blog.id ? (
                          <>
                            Show Less
                            <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                          </>
                        ) : (
                          <>
                            Read Full Article
                            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>
                    </motion.div>
                  </Card>
              </motion.div>
              </motion.div>
            ))}

            {/* Empty State for Filtered Results */}
            {filteredBlogs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  No Articles Found
                </h3>
                <p className="text-muted-foreground text-lg">
                  No articles found in this category yet. Check back soon for new content!
                </p>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;