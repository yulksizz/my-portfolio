import { Github, Facebook, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/yulksizz", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/jpparagas11", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/yulksizz/?hl=en", label: "Instagram" },
];

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 SAME LOGIC AS NAVBAR
  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <button
              onClick={() => navigate("/")}
              className="text-xl font-bold tracking-tight"
            >
              JP<span className="text-primary">.</span>
            </button>

            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} City College of Angeles. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() =>
                  handleNavClick(link.href.replace("#", ""))
                }
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};