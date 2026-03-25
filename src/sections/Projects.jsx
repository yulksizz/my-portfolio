import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useNavigate } from "react-router-dom";

const projects = [
    {
        title: "Midterm Task 1. Data Cleaning and Preparation using Excel",
        description: 
            "Performed data cleaning and preparation in Excel, including removing duplicates, handling missing values, and organizing data for analysis.",
        image: "/projects/midtermTask1.png",
        tags: ["Excel", "Validation", "Data Cleaning"],
        link: "https://classroom.google.com/c/ODQwOTE3NzE4NjI3/a/ODQ0NjQ4NjY5ODc2/details",
        github: "#",
    },

    {
        title: "Midterm Task 2. Data Analysis using Pivot Table",
        description: 
            "Conducted data analysis using Pivot Tables in Excel to summarize and visualize key information. Generated insights by organizing, filtering, and comparing datasets effectively.",
        image: "/projects/MidtermTask2.png",
        tags: ["Excel", "Pivot Table", "Data Cleaning"],
        link: "https://classroom.google.com/c/ODQwOTE3NzE4NjI3/a/ODQ1NjQzMzAzNjY1/details",
        github: "#",
    },

    {
        title: "Practice Task 2. Sales DashBoard Submission Link",
        description: 
            "Created and submitted a Sales Dashboard using Excel to visualize sales performance and trends. Utilized charts, tables, and interactive features to present data clearly and effectively.",
        image: "/projects/PairedTask3.png",
        tags: ["Excel", "Data Cleaning", "Normalization"],
        link: "https://classroom.google.com/c/ODQwOTE3NzE4NjI3/a/ODI1Nzg3NDA0MzI5/details",
        github: "#",
    },

    {
        title: "Practice Task 1 Sales Revenue Dataset",
        description: 
            "Analyzed a Sales Revenue dataset in Excel to track and interpret sales performance. Cleaned, organized, and summarized data for clearer insights and reporting.",
        image: "/projects/PairedTask1.png",
        tags: ["Excel", "Normalization", "Data Cleaning"],
        link: "https://classroom.google.com/c/ODQwOTE3NzE4NjI3/a/ODQzNDIzMTEwODMz/details",
        github: "#",
    },
];


export const Projects = () => {
    const navigate = useNavigate();
    return (
    
    <section id="projects" className="py-32 relative overflow-hidden">
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
        {/* Bg glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Data Analytics
                    <span className="font-serif italic font-normal text-white"> 
                        {" "}
                        Output
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of my midterm and final output, from complex database to innovative tools that solve real-world problems. 
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{animationDelay : `${(idx + 1) * 100}ms` }}>
                        {/* Image */}
                        <div 
                            className="relative overflow-hidden aspect-video">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div 
                                className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"
                            />

                            {/* Overlay Links */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a 
                                    href={project.link} 
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a 
                                    href={project.github} 
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 
                                    className="text-xl font-semibold group-hover:text-primary transition-colors"> {project.title}
                                </h3>
                                <ArrowUpRight 
                                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all"
                                />
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIdx) => (
                                <span 
                                    key={tagIdx} 
                                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                            ))}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View all CTA */}
            <div className="text-center mt-12 animate-fade-in animation-delay-500">
                <AnimatedBorderButton onClick={() => navigate("/activity")}>
                    View All Projects
                    <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
            </div>
        </div>
    </section>
    );
};