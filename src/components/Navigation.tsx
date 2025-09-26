import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary">
              BusinessFlow
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Solutions Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    Solutions
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-popover border border-border shadow-lg z-50">
                  <DropdownMenuItem>
                    <a href="/services/performance-optimization" className="w-full">Performance Optimization</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/services/organization-structure" className="w-full">Organization Structure & Hierarchy</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/services/process-optimisation" className="w-full">Process Optimisation</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#structure" className="w-full">Structure Design</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#process" className="w-full">Process Optimization</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#inventory" className="w-full">Stock Systems</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#financial" className="w-full">Financial Control</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#technology" className="w-full">Technology Setup</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* About Us */}
              <Button variant="ghost" asChild>
                <a href="/about">About Us</a>
              </Button>

              {/* CTA Button */}
              <Button>
                Schedule Free Audit
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;