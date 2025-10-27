import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: {
      title: "Platform",
      links: [
        { name: "Mockup Labs", href: "#" },
        { name: "Aptitude Sprint", href: "#" },
        { name: "Campus Connect", href: "#" },
        { name: "CourseHive", href: "#" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Interview Decoded", href: "#" },
        { name: "InternArena", href: "#" },
        { name: "HackArena", href: "#" },
        { name: "Roadmap", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Disclaimer", href: "#" },
      ],
    },
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="gradient-bg p-2 rounded-lg shadow-glow group-hover:shadow-hover transition-all">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">NEXORA</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Empowering students worldwide with AI-powered learning tools, 
              career guidance, and community support.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.values(footerLinks).map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Subscribe to our newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get weekly updates on new courses, hackathons, and career opportunities
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
              />
              <button className="px-6 py-2 gradient-bg text-white rounded-lg font-medium hover:shadow-hover transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 NEXORA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Help Center</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
