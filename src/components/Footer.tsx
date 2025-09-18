import { Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Link className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">Interlnk</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md">
              The 4PL platform that orchestrates your entire e-commerce logistics ecosystem. 
              Connect everything, see everything, optimize everything.
            </p>
            <div className="text-background/60">
              <p>© 2024 Interlnk. All rights reserved.</p>
              <p className="mt-2">SOC 2 Type II Certified • GDPR Compliant</p>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#platform" className="text-background/80 hover:text-secondary transition-colors">Platform</a></li>
              <li><a href="#integrations" className="text-background/80 hover:text-secondary transition-colors">Integrations</a></li>
              <li><a href="#api" className="text-background/80 hover:text-secondary transition-colors">API Docs</a></li>
              <li><a href="#pricing" className="text-background/80 hover:text-secondary transition-colors">Pricing</a></li>
              <li><a href="#security" className="text-background/80 hover:text-secondary transition-colors">Security</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-background/80 hover:text-secondary transition-colors">About</a></li>
              <li><a href="#careers" className="text-background/80 hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#blog" className="text-background/80 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#support" className="text-background/80 hover:text-secondary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#privacy" className="text-background/60 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-background/60 hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-background/60 hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
            <div className="text-background/60">
              <p>Built for enterprise logistics at scale</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;