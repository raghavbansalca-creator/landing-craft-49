import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, TrendingUp, FileText, Lightbulb, ChevronDown, ChevronUp, Building, ShoppingCart, DollarSign, Users, Target, BarChart3 } from "lucide-react";
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
      .select("id, title, slug, excerpt, cover_image, created_at, category")
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
      title: "Strategic Planning in the Modern Enterprise",
      slug: "strategic-planning-modern-enterprise",
  excerpt: "Discover how established enterprises are reimagining their strategic planning processes to stay competitive in rapidly evolving markets.",
      content: `
# Strategic Planning in the Modern Enterprise

In today's rapidly changing business landscape, strategic planning has evolved from an annual exercise into a continuous process of adaptation and refinement. Our experience working with established enterprises and ambitious startups has revealed key principles that drive successful strategic planning.

## The Evolution of Strategic Planning

Traditional strategic planning often involved lengthy annual sessions that produced static five-year plans. However, modern enterprises require more agile approaches that can respond to market changes, technological disruptions, and shifting consumer behaviors.

### Key Components of Modern Strategic Planning:

**1. Vision Clarity and Alignment**
Your strategic vision must be crystal clear and communicated effectively across all organizational levels. We work with leadership teams to articulate compelling visions that inspire action and provide direction.

**2. Scenario Planning**
Instead of betting on a single future, successful organizations develop multiple scenarios and prepare flexible strategies. This approach has proven invaluable during periods of uncertainty, allowing companies to pivot quickly when conditions change.

**3. OKRs and Measurable Outcomes**
Objectives and Key Results (OKRs) provide a framework for translating strategic vision into actionable goals. We help organizations implement OKR systems that maintain alignment while allowing autonomy at team levels.

**4. Continuous Monitoring and Adjustment**
The best strategic plans include built-in review cycles. Quarterly strategic reviews allow organizations to assess progress, adjust tactics, and reallocate resources based on real-world results.

## Industry Applications

**Real Estate & Infrastructure**: Strategic planning in this sector requires balancing long-term asset development cycles with market volatility. We help clients optimize portfolio strategies and identify emerging opportunities.

**Consumer Markets**: Rapid shifts in consumer behavior demand agile strategic planning. Our frameworks help brands stay ahead of trends while maintaining operational efficiency.

**Government & Banking**: Regulatory compliance and stakeholder management add complexity. We specialize in strategic planning that balances innovation with risk management.

## Implementation Framework

Our proven framework includes:
- Stakeholder analysis and engagement
- SWOT analysis with competitive intelligence
- Strategic initiative prioritization
- Resource allocation modeling
- Change management planning
- Performance measurement systems

## Measuring Success

Strategic planning success isn't just about creating documents—it's about driving real business outcomes. Key metrics include:
- Revenue growth aligned with strategic goals
- Market share improvements
- Operational efficiency gains
- Employee engagement scores
- Customer satisfaction metrics

## Conclusion

Effective strategic planning combines visionary thinking with practical execution. Our professionals bring deep expertise across multiple domains to help organizations transform their strategic planning processes and achieve sustainable growth.

Ready to reimagine your strategic planning approach? Our experience serving established enterprises and innovative startups positions us to guide your transformation journey.
      `,
      cover_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      created_at: "2024-10-15T10:00:00Z",
      category: "planning",
      read_time: 8
    },
    {
      id: "2",
      title: "Financial Optimization: Unlocking Hidden Value",
      slug: "financial-optimization-hidden-value",
      excerpt: "Explore proven techniques for identifying cost savings and revenue opportunities that many organizations overlook.",
      content: `
# Financial Optimization: Unlocking Hidden Value in Your Operations

Financial optimization is about more than cost-cutting—it's about strategically allocating resources to maximize value creation. Through our work with diverse clients, we've identified consistent opportunities for improvement that can boost profitability by 15-30% within the first year.

## Understanding Financial Optimization

Financial optimization encompasses several key areas:

### 1. Cost Structure Analysis
We perform deep dives into your cost structure to identify inefficiencies:
- Fixed vs. variable cost optimization
- Overhead reduction opportunities
- Procurement and supplier management
- Process automation ROI analysis

### 2. Revenue Enhancement
Beyond cost reduction, we focus on revenue growth:
- Pricing strategy optimization
- Revenue stream diversification
- Upselling and cross-selling frameworks
- Customer lifetime value improvement

### 3. Working Capital Management
Efficient working capital management frees up cash for growth:
- Accounts receivable optimization
- Inventory management improvements
- Payables strategy
- Cash conversion cycle reduction

## Real-World Applications

**Case Study: Food & Beverage Company**
We helped a mid-size F&B company reduce operating costs by 22% while improving product quality. Key interventions included:
- Supplier consolidation and negotiation
- Production process optimization
- Waste reduction initiatives
- Energy efficiency improvements

**Case Study: Industrial Markets**
For an industrial client, we identified $3.2M in annual savings through:
- Equipment maintenance optimization
- Supply chain restructuring
- Labor efficiency improvements
- Quality control enhancements

## The Financial Health Framework

Our comprehensive framework examines:

**Profitability Metrics**
- Gross margin analysis
- Operating margin trends
- EBITDA optimization
- Return on investment calculations

**Liquidity Management**
- Current ratio optimization
- Quick ratio improvement
- Cash flow forecasting
- Short-term funding strategies

**Efficiency Ratios**
- Asset turnover optimization
- Inventory turnover improvement
- Receivables collection efficiency
- Fixed asset utilization

## Technology-Enabled Optimization

Modern financial optimization leverages technology:
- Real-time financial dashboards
- Predictive analytics for forecasting
- Automated expense management
- AI-powered anomaly detection

## Implementation Roadmap

**Phase 1: Assessment (Weeks 1-4)**
- Financial statement analysis
- Process mapping
- Benchmark comparison
- Opportunity identification

**Phase 2: Strategy Development (Weeks 5-8)**
- Initiative prioritization
- Business case development
- Implementation planning
- Stakeholder alignment

**Phase 3: Execution (Months 3-12)**
- Phased implementation
- Quick win initiatives
- Long-term transformation projects
- Continuous monitoring

**Phase 4: Optimization (Ongoing)**
- Performance tracking
- Adjustment and refinement
- Best practice standardization
- Capability building

## Key Success Factors

From our experience across multiple industries:

1. **Executive Sponsorship**: Leadership commitment is crucial
2. **Data-Driven Decisions**: Base actions on solid analysis
3. **Change Management**: Manage people aspects effectively
4. **Quick Wins**: Build momentum with early successes
5. **Sustainable Practices**: Focus on long-term improvements

## Measuring Impact

We track multiple metrics to demonstrate value:
- Cost savings (immediate and recurring)
- Revenue improvements
- Cash flow enhancements
- ROI on optimization initiatives
- Time-to-value metrics

## Industry-Specific Considerations

**Aviation**: Focus on fuel efficiency, crew optimization, and maintenance scheduling
**Real Estate**: Emphasis on occupancy rates, tenant management, and property-level profitability
**Consumer Markets**: Inventory turnover, marketing ROI, and channel optimization

## Conclusion

Financial optimization is a continuous journey, not a one-time project. Our integrated approach combines financial expertise with operational knowledge to deliver sustainable improvements that drive long-term value creation.

Partner with our team of financial and operational experts to unlock hidden value in your organization.
      `,
      cover_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      created_at: "2024-10-08T10:00:00Z",
      category: "finance",
      read_time: 10
    },
    {
      id: "3",
      title: "Process Excellence: Building Scalable Operations",
      slug: "process-excellence-scalable-operations",
  excerpt: "Learn how to design and implement processes that grow with your business, from startups to large enterprises.",
      content: `
# Process Excellence: Building Scalable Business Operations

Operational excellence is the foundation of sustainable growth. Whether you're a startup preparing to scale or an established enterprise optimizing performance, well-designed processes are essential for success.

## The Foundation of Process Excellence

Process excellence isn't about rigid bureaucracy—it's about creating efficient, flexible systems that enable your team to deliver consistent results while adapting to change.

### Core Principles

**1. Customer-Centricity**
Every process should ultimately serve customer needs. We map processes with the customer journey in mind, ensuring that operational efficiency translates to customer value.

**2. Continuous Improvement**
The best processes evolve over time. We implement kaizen principles and feedback loops that drive ongoing refinement and optimization.

**3. Data-Driven Design**
Process decisions should be based on data, not assumptions. We use analytics to identify bottlenecks, measure performance, and validate improvements.

**4. Scalability**
Processes must support growth without requiring complete redesign. We build flexibility into process architecture from the start.

## The Process Maturity Model

Organizations typically progress through five stages:

**Level 1: Ad Hoc**
- Processes are inconsistent and undocumented
- Success depends on individual heroics
- High variability in outcomes

**Level 2: Repeatable**
- Basic processes are documented
- Some consistency across teams
- Limited standardization

**Level 3: Defined**
- Processes are well-documented and standardized
- Training programs established
- Clear ownership and accountability

**Level 4: Managed**
- Processes are measured quantitatively
- Data-driven decision making
- Proactive problem solving

**Level 5: Optimizing**
- Continuous improvement culture
- Innovation and experimentation
- Adaptive and responsive processes

## Key Process Areas

### Supply Chain Operations
From procurement to delivery, supply chain processes impact every aspect of business:
- Vendor management
- Inventory control
- Logistics optimization
- Quality assurance
- Returns handling

### Financial Processes
Efficient financial operations support better decision-making:
- Accounts payable/receivable
- Budgeting and forecasting
- Financial reporting
- Audit and compliance
- Cash management

### Customer Service
Exceptional customer experiences require excellent processes:
- Inquiry handling
- Order processing
- Issue resolution
- Customer feedback management
- Service level agreement (SLA) management

### HR and Talent Management
People processes enable organizational success:
- Recruitment and onboarding
- Performance management
- Training and development
- Compensation and benefits
- Employee engagement

## Technology Enablement

Modern process excellence leverages technology strategically:

**Process Automation**
- Robotic Process Automation (RPA) for repetitive tasks
- Workflow automation tools
- Integration platforms
- Self-service portals

**Analytics and Monitoring**
- Real-time process dashboards
- Performance metrics tracking
- Predictive analytics
- Anomaly detection

**Collaboration Tools**
- Project management platforms
- Communication systems
- Knowledge management
- Document collaboration

## Implementation Methodology

Our proven approach follows five phases:

**Phase 1: Discovery**
- Current state assessment
- Pain point identification
- Stakeholder interviews
- Process mapping

**Phase 2: Design**
- Future state visioning
- Process redesign
- Technology selection
- Change impact analysis

**Phase 3: Pilot**
- Small-scale implementation
- Testing and validation
- Feedback collection
- Adjustment and refinement

**Phase 4: Rollout**
- Phased deployment
- Training and communication
- Support systems
- Performance monitoring

**Phase 5: Optimization**
- Continuous improvement
- Best practice sharing
- Innovation initiatives
- Regular reviews

## Industry Applications

**Industrial Markets**: Lean manufacturing, Six Sigma, and total quality management
**Consumer Markets**: Omnichannel fulfillment, inventory management, and customer experience
**Real Estate & Infrastructure**: Project management, compliance tracking, and stakeholder coordination

## Measuring Process Performance

Key metrics for process excellence:

**Efficiency Metrics**
- Cycle time
- Throughput
- Resource utilization
- Cost per transaction

**Quality Metrics**
- Error rates
- Rework percentage
- First-time-right
- Customer satisfaction

**Compliance Metrics**
- SLA adherence
- Regulatory compliance
- Policy adherence
- Audit findings

## Common Pitfalls to Avoid

1. **Over-Engineering**: Keep processes simple and practical
2. **Lack of Ownership**: Assign clear process owners
3. **Insufficient Training**: Invest in capability building
4. **Technology First**: Focus on process before tools
5. **Static Mindset**: Build in continuous improvement

## Building a Process-Oriented Culture

Long-term success requires cultural transformation:
- Leadership commitment
- Employee empowerment
- Recognition and rewards
- Knowledge sharing
- Innovation encouragement

## Conclusion

Process excellence is a journey that pays dividends throughout the organization. Our team brings expertise across multiple domains to help you build scalable, efficient operations that support your growth ambitions.

With experienced professionals serving clients across diverse industries, we bring deep process expertise to every engagement.
      `,
      cover_image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      created_at: "2024-10-01T10:00:00Z",
      category: "planning",
      read_time: 9
    },
    {
      id: "4",
      title: "Navigating Real Estate & Infrastructure Investments",
      slug: "real-estate-infrastructure-investments",
      excerpt: "Strategic insights for maximizing returns in real estate and infrastructure projects while mitigating risks.",
      content: `
# Navigating Real Estate & Infrastructure Investments

Real estate and infrastructure investments represent significant capital commitments that require careful planning, rigorous analysis, and strategic execution. Our expertise in this sector helps clients maximize returns while managing risk effectively.

## Understanding the Investment Landscape

The real estate and infrastructure sector offers diverse opportunities:

### Asset Classes
- **Commercial Real Estate**: Office, retail, hospitality
- **Residential**: Multi-family, single-family, mixed-use
- **Industrial**: Warehouses, manufacturing, logistics
- **Infrastructure**: Transportation, utilities, telecommunications
- **Specialized**: Healthcare facilities, data centers, educational

## Investment Analysis Framework

### Market Analysis
Understanding market dynamics is crucial:
- Supply and demand fundamentals
- Economic indicators and trends
- Demographic shifts
- Regulatory environment
- Competitive landscape

### Financial Modeling
Robust financial analysis includes:
- Cash flow projections
- Net present value (NPV) calculations
- Internal rate of return (IRR) analysis
- Sensitivity analysis
- Scenario planning

### Risk Assessment
Comprehensive risk evaluation covers:
- Market risk
- Development risk
- Financing risk
- Regulatory risk
- Environmental considerations
- Exit strategy risk

## Due Diligence Process

Thorough due diligence protects your investment:

**Physical Due Diligence**
- Property inspections
- Environmental assessments
- Engineering studies
- Zoning and compliance verification

**Financial Due Diligence**
- Historical performance analysis
- Tenant/customer analysis
- Operating expense review
- Capital expenditure planning

**Legal Due Diligence**
- Title examination
- Lease review
- Contract assessment
- Liability evaluation

## Financing Strategies

Optimal capital structure balances risk and return:

### Debt Financing
- Traditional mortgages
- Construction loans
- Bridge financing
- Mezzanine debt

### Equity Financing
- Joint ventures
- Fund structures
- REITs
- Crowdfunding platforms

### Hybrid Approaches
- Preferred equity
- Structured finance
- Sale-leaseback arrangements

## Development Projects

For ground-up or redevelopment projects:

**Pre-Development**
- Site selection
- Feasibility studies
- Entitlement process
- Design and planning

**Construction Phase**
- Contractor selection
- Cost management
- Schedule monitoring
- Quality control

**Stabilization**
- Lease-up strategies
- Operations setup
- Marketing and positioning
- Performance optimization

## Asset Management

Active asset management drives value:

**Operational Excellence**
- Property management
- Tenant relations
- Maintenance planning
- Cost control

**Value Enhancement**
- Capital improvements
- Repositioning strategies
- Revenue optimization
- Expense management

**Portfolio Management**
- Diversification strategies
- Performance monitoring
- Risk management
- Rebalancing decisions

## Market Trends and Opportunities

Current dynamics shaping the sector:

**Technology Integration**
- PropTech innovations
- Smart building systems
- Digital twin technology
- Virtual/augmented reality for marketing

**Sustainability Focus**
- Green building certifications
- Energy efficiency improvements
- ESG considerations
- Climate risk assessment

**Changing Use Patterns**
- Remote work impact on office space
- E-commerce effect on retail and industrial
- Healthcare facility modernization
- Mixed-use development trends

## Government and Public-Private Partnerships

Infrastructure projects often involve government collaboration:
- Procurement processes
- Regulatory compliance
- Stakeholder management
- Community engagement

## Exit Strategies

Planning the exit from day one:

**Disposition Options**
- Direct sale
- Portfolio sale
- 1031 exchanges
- Recapitalization

**Timing Considerations**
- Market cycles
- Tax implications
- Performance optimization
- Buyer landscape

## Risk Mitigation

Strategies to protect your investment:
- Diversification across markets and asset classes
- Conservative underwriting
- Active asset management
- Insurance and hedging
- Professional partnerships

## Key Success Factors

Based on our client engagements:
1. Thorough market research
2. Conservative financial assumptions
3. Strong local partnerships
4. Active management approach
5. Clear exit planning

## Conclusion

Real estate and infrastructure investments require specialized knowledge and careful execution. Our team combines financial expertise with operational know-how to help clients navigate this complex sector successfully.

Whether you're evaluating a single asset or building a portfolio, we bring the analytical rigor and industry insights needed to make informed investment decisions.
      `,
      cover_image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      created_at: "2024-09-24T10:00:00Z",
      category: "finance",
      read_time: 11
    },
    {
      id: "5",
      title: "Growth Capital Strategies for Ambitious Businesses",
      slug: "growth-capital-strategies",
      excerpt: "Navigate the complex landscape of funding options and financial structuring to fuel sustainable business growth.",
      content: `
# Growth Capital Strategies for Ambitious Businesses

Securing the right capital at the right time is crucial for business growth. This comprehensive guide explores funding options, structuring considerations, and strategic approaches to financing business expansion.

## Understanding Growth Capital

Growth capital serves multiple purposes:
- Funding expansion initiatives
- Supporting M&A activities
- Investing in technology and infrastructure
- Building team and capabilities
- Strengthening competitive position

## Funding Source Options

### Traditional Bank Financing
**Advantages:**
- Lower cost of capital
- Maintain ownership control
- Predictable terms
- Tax-deductible interest

**Considerations:**
- Collateral requirements
- Financial covenants
- Personal guarantees
- Limited flexibility

### Private Equity and Venture Capital
**Advantages:**
- Strategic partnership
- Industry expertise
- Network access
- Operational support

**Considerations:**
- Equity dilution
- Control implications
- Exit expectations
- Reporting requirements

### Strategic Investors
**Advantages:**
- Industry synergies
- Customer/supplier relationships
- Credibility enhancement
- Long-term partnership potential

**Considerations:**
- Strategic alignment
- Independence concerns
- Competitive implications

### Alternative Financing
Modern options expanding rapidly:
- Revenue-based financing
- Asset-based lending
- Invoice factoring
- Crowdfunding platforms
- Government grants and programs

## Financial Structuring Considerations

### Debt vs. Equity Balance
Optimal capital structure depends on:
- Business stage and maturity
- Cash flow characteristics
- Growth trajectory
- Industry norms
- Risk tolerance

### Term and Covenant Structure
Key considerations:
- Maturity schedules
- Prepayment options
- Financial covenants
- Reporting requirements
- Governance provisions

## The Fundraising Process

### Preparation Phase
**Business Planning**
- Strategic plan articulation
- Financial projections
- Use of proceeds detail
- Milestone identification

**Documentation**
- Executive summary
- Comprehensive business plan
- Financial model
- Management team bios
- Market analysis

### Execution Phase
**Investor Outreach**
- Target investor identification
- Pitch deck development
- Initial meetings
- Management presentations

**Due Diligence**
- Information requests
- Site visits
- Reference checks
- Legal review

**Negotiation and Close**
- Term sheet negotiation
- Legal documentation
- Final due diligence
- Funding and close

## Valuation Considerations

Multiple approaches to business valuation:

**Income Approach**
- Discounted cash flow (DCF)
- Capitalization of earnings
- Required return considerations

**Market Approach**
- Comparable company analysis
- Precedent transactions
- Industry multiples

**Asset Approach**
- Book value adjustments
- Liquidation value
- Replacement cost

## Financial Modeling Best Practices

Compelling financial models include:

**Revenue Projections**
- Market size and penetration
- Customer acquisition assumptions
- Pricing strategies
- Growth drivers

**Operating Assumptions**
- Cost structure
- Margin expectations
- Working capital needs
- Capital expenditure plans

**Sensitivity Analysis**
- Best/base/worst case scenarios
- Key assumption impact
- Break-even analysis
- Risk factors

## Post-Financing Considerations

### Investor Relations
Maintaining strong relationships:
- Regular communication
- Transparent reporting
- Problem-solving collaboration
- Strategic alignment

### Performance Management
Delivering on commitments:
- Milestone tracking
- KPI monitoring
- Course correction
- Governance compliance

### Planning for Next Round
Forward-looking approach:
- Continuous improvement
- Value creation focus
- Network building
- Market awareness

## Industry-Specific Strategies

### Consumer Markets
- Brand-building investment
- Channel expansion
- Technology platform development
- Customer acquisition

### Industrial Markets
- Equipment and capacity expansion
- Technology upgrades
- Geographic expansion
- Vertical integration

### Real Estate & Infrastructure
- Project development financing
- Portfolio acquisition
- Asset improvement
- Platform scaling

## Common Pitfalls to Avoid

1. **Overvaluation**: Unrealistic expectations damage credibility
2. **Inadequate Preparation**: Poor documentation delays process
3. **Wrong Partner Selection**: Misalignment causes problems
4. **Over-Dilution**: Retaining meaningful ownership matters
5. **Weak Governance**: Clear terms prevent future disputes

## Alternative Growth Strategies

Beyond external capital:

**Organic Growth**
- Reinvestment of profits
- Customer financing
- Supplier terms optimization
- Strategic partnerships

**Strategic Alliances**
- Joint ventures
- Co-development agreements
- Distribution partnerships
- Technology licensing

## Measuring Success

Key metrics for capital deployment:
- Return on invested capital (ROIC)
- Revenue growth rate
- Market share gains
- Profitability improvement
- Strategic milestone achievement

## Conclusion

Growth capital strategies must align with your business objectives, stage, and industry dynamics. Our experience helping numerous companies secure optimal financing enables us to guide you through this complex process.

Whether you're seeking your first institutional capital or planning a growth equity round, we provide the financial expertise and industry knowledge to structure the right solution for your business.
      `,
      cover_image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
      created_at: "2024-09-17T10:00:00Z",
      category: "finance",
      read_time: 12
    }
  ];

  const categories = [
    { id: "all", label: "All Insights", icon: <FileText className="w-4 h-4" /> },
    { id: "planning", label: "Strategic Planning", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "finance", label: "Finance & Growth", icon: <Lightbulb className="w-4 h-4" /> },
  ];

  const filteredBlogs = selectedCategory === "all" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const toggleBlog = (blogId: string) => {
    setExpandedBlog(expandedBlog === blogId ? null : blogId);
  };

  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-foreground mt-8 mb-4">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-foreground mt-6 mb-3">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-foreground mt-4 mb-2">{line.substring(4)}</h3>;
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-semibold text-foreground mt-3 mb-2">{line.replace(/\*\*/g, '')}</p>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="text-muted-foreground ml-6 mb-1 list-disc">{line.substring(2)}</li>;
      } else if (line.trim() === '') {
        return <div key={index} className="h-2"></div>;
      } else {
        return <p key={index} className="text-muted-foreground leading-relaxed mb-3">{line}</p>;
      }
    });
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