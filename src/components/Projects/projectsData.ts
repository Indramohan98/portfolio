interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const featuredProjects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps create engaging blog posts and social media content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "OpenAI API", "PostgreSQL", "AWS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];