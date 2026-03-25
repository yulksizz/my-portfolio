import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import {Button} from "@/components/Button"
import { useState } from "react";
import emailjs from "@emailjs/browser"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "paragas.patrick04@gmail.com",
    href: "mailto:paragas.patrick04@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 961 584 3887",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Angeles City, Pampanga",
    href: "#",
  },
];

export const Contacts = () => {
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        message: ""
    }); 
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, 
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publickKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publickKey) {
                throw new Error (
                    "EmailJS configuration is missing. Please check your environmemt variables."
                ); 
            }
            
            await emailjs.send(serviceId, templateId, {
                name: formData.name, 
                email: formData.email,
                message: formData.message,
            }, publickKey
        );

        setSubmitStatus({
            type: "success",
            message: "Message sent successfully! i'll get back to you soon.",
        });
        } catch (err) {
            console.error("EmailJS error: ", error);
            setSubmitStatus({
                type: "error",
                message: error.text || "Failed to send message. Please try again later."
            });

        } finally {
            setIsLoading(false)
        }
    };
    return (
        <section className="py-32 relative overflow-hidden" id="contact">
            {/* Red Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#FF4433",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${
                                15 + Math.random() * 20
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
                <div className="absolute bottom-1/4 right-1/4 w-64 bg-highlight/5 rounded-full blur-3xl"/>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let's build{" "}
                        <span className="font-serif italic font-normal text-white">
                        something great.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Have a project in mind? I'd love to hear about it. Send me a message
                        and let's discuss how we can work together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    required 
                                    placeholder="Your name..." 
                                    value={formData.name}
                                    onChange={(e) => 
                                        setFormData({ ...formData,name: e.target.value})
                                    }   
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                            </div>

                            <div>
                                <label 
                                    htmlFor="email" 
                                    type="email"
                                    className="block text-sm font-medium mb-2"
                                    >
                                    Email</label>
                                <input 
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"  
                                    required
                                    placeholder="your@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => 
                                        setFormData({ ...formData, email: e.target.value})
                                    }   
                                    />
                            </div>

                            <div>
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium mb-2"
                                >
                                Message
                                </label>
                                <textarea 
                                    rows={5}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    required
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) => 
                                        setFormData({ ...formData, message: e.target.value})
                                    }   
                                />
                            </div>

                            <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                                { isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5"/>
                                    </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div className={`flex items-center gap-3 
                                p-4 rounded-xl 
                                ${submitStatus.type === "success" ? "bg-green-500/10 border-border-green-500/20 text-green-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}>
                                
                                {submitStatus.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                )}
                                <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <a 
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                        <div className="text-sm text-muted-foreground">
                                            {item.label}
                                        </div>
                                        <div className="font-medium">{item.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-medium">Currently Available</span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                I'm currently open to new opportunities and exciting projects.
                                Whether you need freelance consultant,
                                let's talk!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};