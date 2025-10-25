import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "@/assets/7labs-logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isStartupContext = location.pathname === "/startup-ecosystem";

  const regularSolutions = [
    { href: "/services/performance-optimization", title: "Performance Optimization" },
    { href: "/services/organization-structure", title: "Organization Structure & Hierarchy" },
    { href: "/services/process-optimisation", title: "Process Optimisation" },
    { href: "/services/inventory-supply-chain", title: "Inventory & Supply Chain" },
    { href: "/services/financial-planning", title: "Financial Planning & Budget" },
    { href: "/services/erp-implementation", title: "ERP Implementation" }
  ];

  const startupSolutions = [
    { href: "/startup-ecosystem#financial", title: "Financial Services & Modeling" },
    { href: "/startup-ecosystem#due-diligence", title: "Transaction & Due Diligence" },
    { href: "/startup-ecosystem#strategic", title: "Strategic & Operational Services" }
  ];

  const currentSolutions = isStartupContext ? startupSolutions : regularSolutions;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-primary">7 Labs Vision</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    {isStartupContext ? "Startup Solutions" : "Business Solutions"}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover border border-border shadow-lg z-50">
                  {currentSolutions.map((solution, index) => (
                    <DropdownMenuItem key={index}>
                      <Link to={solution.href} className="w-full">{solution.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* For Startup Ecosystem */}
              <Button variant="ghost" asChild>
                <Link to={isStartupContext ? "/" : "/startup-ecosystem"} className="flex items-center group">
                  {isStartupContext ? "Click here - For Business Ecosystem" : "Click here - For Startup Ecosystem"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>

              {/* About Us */}
              <Button variant="ghost" asChild>
                <Link to="/about">About Us</Link>
              </Button>

              {/* Contact Us */}
              <Button variant="ghost" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>

              {/* CTA Button */}
              <Button asChild>
                <Link to="/contact">Schedule Free Audit</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[260px] sm:w-[300px]">
                <div className="flex flex-col space-y-2 mt-4">
                  {/* Mobile Logo */}
                  <div className="mb-4">
                    <img src={logo} alt="7 Labs Vision" className="h-7 w-auto" />
                  </div>
                  
                  {/* Mobile Solutions */}
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-foreground mb-2">
                      {isStartupContext ? "Startup Solutions" : "Business Solutions"}
                    </div>
                    {currentSolutions.map((solution, index) => (
                      <Link 
                        key={index}
                        to={solution.href}
                        className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {solution.title}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile For Startup Ecosystem */}
                  <Link 
                    to={isStartupContext ? "/" : "/startup-ecosystem"}
                    className="flex items-center px-2 py-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {isStartupContext ? "Click here - For Business Ecosystem" : "Click here - For Startup Ecosystem"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  {/* Mobile About Us */}
                  <Link 
                    to="/about" 
                    className="block px-2 py-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Mobile Contact Us */}
                  <Link 
                    to="/contact" 
                    className="block px-2 py-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>

                  {/* Mobile CTA Button */}
                  <Button size="sm" className="mt-4 w-full" onClick={() => setIsMobileMenuOpen(false)} asChild>
                    <Link to="/contact">Schedule Free Audit</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;