import { Linkedin, Twitter, Github, Instagram } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-navy-deep pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo iconSize={80} showText textSize="small" />
            <p className="text-sm text-primary-foreground/50 mb-4" style={{ lineHeight: 1.65 }}>
              Engineering the future, one line of code at a time.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-primary-foreground/40 hover:text-accent transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold font-display text-primary-foreground mb-4 uppercase tracking-wider">Services</h4>
            {["Web Applications", "Mobile Applications", "Enterprise Systems", "AI & Machine Learning", "UI/UX Design", "DevOps & Cloud"].map((s) => (
              <a key={s} href="#services" className="block text-sm text-primary-foreground/50 hover:text-accent transition-colors mb-2">{s}</a>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-bold font-display text-primary-foreground mb-4 uppercase tracking-wider">Company</h4>
            {[{ label: "About Us", href: "#" }, { label: "Careers", href: "#" }, { label: "Blog", href: "#" }, { label: "Contact", href: "#contact" }].map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-primary-foreground/50 hover:text-accent transition-colors mb-2">{l.label}</a>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-bold font-display text-primary-foreground mb-4 uppercase tracking-wider">Legal</h4>
            <a href="#" className="block text-sm text-primary-foreground/50 hover:text-accent transition-colors mb-2">Privacy Policy</a>
            <a href="#" className="block text-sm text-primary-foreground/50 hover:text-accent transition-colors mb-2">Terms of Service</a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-xs text-primary-foreground/30">
            © 2025 Sanabil Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
