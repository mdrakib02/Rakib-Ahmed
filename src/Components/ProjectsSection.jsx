import React, { useState } from "react";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import recofind from "../../src/Asset/Recofind.png";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-base-100 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-base-200 rounded-lg"
            >
              <X className="w-6 h-6 text-base-content" />
            </button>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          <div className="space-y-4">
            <p className="text-base-content/90">{project.longDescription}</p>

            <div>
              <h4 className="font-bold mb-2 text-primary">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-base-content/90">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-2 text-primary">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-base-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <div className="bg-base-100 rounded-xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
        <p className="text-base-content/80 mb-4">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-base-200 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-base-200 rounded-full text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onViewDetails(project)}
          className="flex items-center text-primary hover:gap-2 transition-all duration-300"
        >
          View Details <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "A Sports Equipment Store",
      shortDescription:
        "A comprehensive dashboard for managing online store operations",
      longDescription:
        "This is a sports accessories e-commerce website, a platform where customers can browse, purchase, and review various sports accessories, from gear to apparel, catering to different sports disciplines. The website will support user authentication and product management.",
      image: "../../src/Asset/Recofind.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Java Script",
        "Tailwind CSS",
      ],
      features: [
        "Real-time sales analytics and reporting",
        "Inventory management system",
        "Order processing and tracking",
        "Customer relationship management",
        "Integrated payment processing",
      ],
      liveLink: "https://reco-find.web.app/",
      githubLink: "https://github.com/mdrakib02",
    },
    {
      title: "Tech Accessorize Management",
      shortDescription:
        "A modern social networking application with real-time features",
      longDescription:
        "A feature-rich social media platform that allows users to connect, share content, and interact in real-time. Includes advanced features like live messaging and content recommendation.",
      image: "/src/Asset/Gadget Heaven.png",
      technologies: [
        "React",
        "Firebase",
        "Node.js",
        "Socket.io",
        "Express",
        "MongoDB",
      ],
      features: [
        "Real-time messaging and notifications",
        "Content sharing and interaction",
        "User profile management",
        "Friend recommendations",
        "Content moderation tools",
      ],
      liveLink: "https://dainty-monstera-7ac5be.netlify.app/",
      githubLink: "https://github.com/mdrakib02",
    },
    {
      title: "Task Management App",
      shortDescription: "A collaborative task management solution for teams",
      longDescription:
        "An intuitive task management application designed for team collaboration. Features include real-time updates, task assignment, progress tracking, and team communication tools.",
      image: "/api/placeholder/800/600",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
      features: [
        "Task creation and assignment",
        "Project timeline visualization",
        "Team collaboration tools",
        "Progress tracking and reporting",
        "File sharing and storage",
      ],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <div id="projects" className="min-h-screen bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="opacity-0 animate-slide-up"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <ProjectCard
                project={project}
                onViewDetails={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>

      <style jsx>{`
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;
