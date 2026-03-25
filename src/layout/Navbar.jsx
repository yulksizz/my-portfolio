import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 🔥 NAVIGATION FUNCTION
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

        setIsMobileMenuOpen(false);
    };

    // 🔥 LOGO CLICK (UPDATED)
    const handleLogoClick = () => {
        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
                isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
            } z-50`}
        >
            <nav className="container mx-auto px-6 flex items-center justify-between">
                
                {/* ✅ LOGO FIXED */}
                <button
                    onClick={handleLogoClick}
                    className="text-xl font-bold tracking-tight hover:text-primary"
                >
                    JP<span className="text-primary">.</span>
                </button>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    handleNavClick(link.href.replace("#", ""))
                                }
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTACT BUTTON */}
                <div
                    className="hidden md:block"
                    onClick={() => handleNavClick("contact")}
                >
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() =>
                        setIsMobileMenuOpen((prev) => !prev)
                    }
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    handleNavClick(link.href.replace("#", ""))
                                }
                                className="text-lg text-muted-foreground hover:text-foreground py-2 text-left"
                            >
                                {link.label}
                            </button>
                        ))}

                        <Button onClick={() => handleNavClick("contact")}>
                            Contact Me
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};