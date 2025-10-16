import { Link } from "react-router-dom";
import logo from "@/assets/7labs-logo.png";
const Footer = () => {
  return <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="7 Labs Vision" className="h-16 w-auto mb-4" />
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
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
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
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
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
                <Link to="/services/performance-optimization" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/organization-structure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Structure Design
                </Link>
              </li>
              <li>
                <Link to="/services/process-optimisation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Process Optimization
                </Link>
              </li>
              <li>
                <Link to="/services/inventory-supply-chain" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Stock Systems
                </Link>
              </li>
              <li>
                <Link to="/services/financial-planning" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Financial Control
                </Link>
              </li>
              <li>
                <Link to="/services/erp-implementation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Technology Setup
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 7 Labs Vision. All rights reserved.
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
