import React from "react";
import {
  Database,
  Globe,
  Palette,
  Server,
  Code,
  Braces,
  PenTool,
  Layout,
} from "lucide-react";

const SkillCard = ({ icon: Icon, title, level, description }) => {
  return (
    <div
      className="group relative bg-base-100 p-6 rounded-xl shadow-lg border border-base-300 
      hover:border-primary transition-all duration-500 hover:-translate-y-2"
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative">
        <div
          className="w-14 h-14 bg-base-200 rounded-lg p-3 mb-4 group-hover:bg-base-300 
          transition-colors duration-300"
        >
          <Icon className="w-full h-full text-primary" />
        </div>

        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>

        <div className="w-full bg-base-300 rounded-full h-2 mb-4">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500 
              group-hover:shadow-[0_0_10px_rgba(255,158,107,0.3)]"
            style={{ width: `${level}%` }}
          />
        </div>

        <p className="text-base-content/80">{description}</p>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skills = [
    {
      icon: Globe,
      title: "HTML/CSS",
      level: 90,
      description:
        "Semantic HTML5, Modern CSS3, Responsive Design, CSS Grid & Flexbox",
    },
    {
      icon: Palette,
      title: "Tailwind & Bootstrap",
      level: 85,
      description:
        "Utility-first CSS, Custom Components, Responsive Frameworks",
    },
    {
      icon: Code,
      title: "JavaScript",
      level: 85,
      description:
        "ES6+, DOM Manipulation, Async Programming, Modern JS Features",
    },
    {
      icon: Braces,
      title: "React JS",
      level: 80,
      description: "Hooks, Context API, Redux, Next.js, React Router",
    },
    {
      icon: Server,
      title: "Node.js",
      level: 75,
      description: "Express.js, RESTful APIs, Middleware, Authentication",
    },
    {
      icon: Database,
      title: "MongoDB",
      level: 70,
      description: "Database Design, CRUD Operations, Mongoose, Aggregation",
    },
    {
      icon: Layout,
      title: "Firebase",
      level: 75,
      description: "Authentication, Firestore, Realtime Database, Hosting",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      level: 70,
      description: "User Interface Design, Prototyping, Responsive Layouts",
    },
  ];

  return (
    <div className="min-h-screen bg-base-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and tools.
            Always learning and expanding my skillset.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="opacity-0 animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
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

export default SkillsSection;
