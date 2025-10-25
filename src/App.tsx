import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PerformanceOptimization from "./pages/services/PerformanceOptimization";
import OrganizationStructure from "./pages/services/OrganizationStructure";
import ProcessOptimisation from "./pages/services/ProcessOptimisation";
import InventorySupplyChain from "./pages/services/InventorySupplyChain";
import FinancialPlanning from "./pages/services/FinancialPlanning";
import ERPImplementation from "./pages/services/ERPImplementation";
import StartupEcosystem from "./pages/StartupEcosystem";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/performance-optimization" element={<PerformanceOptimization />} />
          <Route path="/services/organization-structure" element={<OrganizationStructure />} />
          <Route path="/services/process-optimisation" element={<ProcessOptimisation />} />
          <Route path="/services/inventory-supply-chain" element={<InventorySupplyChain />} />
          <Route path="/services/financial-planning" element={<FinancialPlanning />} />
          <Route path="/services/erp-implementation" element={<ERPImplementation />} />
          <Route path="/startup-ecosystem" element={<StartupEcosystem />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
