const Footer = () => {
  return <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">Seven Labs</div>
            <p className="text-muted-foreground text-sm">
              Transform chaotic manual processes into clear, controlled operations with our proven methodology.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookies-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-use" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/sub-processors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Sub-processors
                </a>
              </li>
              <li>
                <a href="/report-vulnerability" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Report a Vulnerability
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/corporate-information" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/performance-optimization" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Performance Optimization
                </a>
              </li>
              <li>
                <a href="/services/structure-design" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Structure Design
                </a>
              </li>
              <li>
                <a href="/services/process-optimization" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Process Optimization
                </a>
              </li>
              <li>
                <a href="/services/stock-systems" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Stock Systems
                </a>
              </li>
              <li>
                <a href="/services/financial-control" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Financial Control
                </a>
              </li>
              <li>
                <a href="/services/technology-setup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Technology Setup
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 BusinessFlow. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-muted-foreground">
                Making Business Predictable
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;