import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2, 
        title: "Clean Code",
        description: 
            "Writing maintainable, scalable code that stands the test of time.",
    },

    {
        icon: Rocket, 
        title: "Performance",
        description: 
            "Optimizing for speed and delivering lightning-fast user experience.",
    },

    {
        icon: Users, 
        title: "Collaboration",
        description: 
            "Working closely with teams to bring ideas to life.",
    },

    {
        icon: Lightbulb, 
        title: "Innovation",
        description: 
            "Staying ahead with the lastest technologies and best practices.",
    },
]


export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">
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
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Building my future,
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            one project at a time.
                        </span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            I am a 3rd year Computer Science student with a strong passion for building digital solutions and continuously improving my skills in software development. My journey started with curiosity about how systems and applications work, and it has grown into a commitment to learning and creating meaningful projects.
                        </p>
                        <p>
                            I specialize in React, Next.js, and TypeScript, developing projects that range from simple web applications to more structured systems. I focus on writing clean, efficient code while also paying attention to user experience.
                        </p>
                        <p>
                            Outside of coding, I enjoy exploring new technologies, working on personal projects, and learning from the developer community to further enhance my skills. 
                        </p>
                    </div>
                    
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My goal is to grow as a developer by creating projects that are not only functional but also useful and user-friendly."
                        </p>
                    </div>
                </div>

                {/* Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>

    );
};