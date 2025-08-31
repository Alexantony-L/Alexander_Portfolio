"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Users,
  Lightbulb,
  Target,
  Globe,
  Bot,
  Database,
  Cloud,
  Monitor,
  Server,
  Cpu,
  MessageSquare,
  Send,
  FileJson 
} from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [getYear, setGetYear] = useState(new Date().getFullYear());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfilePhoto(event.target.result as string);
          toast({
            title: "Photo Updated",
            description: "Profile photo has been updated successfully.",
            variant: "default",
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
          variant: "default",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to send message.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };
const certifications = [
  {
    title: "AWS Solution Architect",
    provider: "Coursera",
    badgeColor: "bg-yellow-500"
  },
  {
    title: "AWS DevOps Engineer",
    provider: "Udemy",
   badgeColor: "bg-yellow-500"
  },
  {
    title: "System Design Fundamentals",
    provider: "Udemy",
    badgeColor: "bg-yellow-500"
  },
  {
    title: "Serverless Architecture",
    provider: "Udemy",
   badgeColor: "bg-yellow-500"
  }
];

  const projects = [
    {
      title: "AI Chatbot",
      description:
        "RAG Intelligent conversational AI system with natural language processing capabilities",
      technologies: ["OpenAI", "React", "Node.js", "WebSocket","SQL server"],
      image: "/project1.jpg",
    },
    {
      title: " Candidate Trainer",
      description:
        "AI-powered training platform with real-time feedback and assessment",
      technologies: ["Vertex AI", "ASP.Net MVC","jquery", "Python", "SQL Server"],
  
      image: "/project2.jpg",
    },
    {
      title: "Document Management System",
      description:
        "Scalable document handling with advanced search and collaboration features",
      technologies: ["React", "Express", "postgreSql", "AWS S3","Redis"],
     
      image: "/project3.jpg",
    },
    {
      title: "Voice Bot System",
      description:
        "Real-time voice interaction system with AI evaluation and scoring",
      technologies: ["Dialogflow CX", "python", "Node.js", "React"],
      image: "/project4.jpg",
    },
  ];

const skills = {
  frontend: [
    {
      name: 'Javscript',
      level: 90,
      icon: <FileJson className="w-8 h-8" />,
      color: 'text-yellow-500',
    },
    {
      name: 'React',
      level: 85,
      icon: <Code className="w-8 h-8" />,
      color: 'text-blue-500',
    },
    {
      name: 'Redux',
      level: 85,
      icon: <Zap className="w-8 h-8" />,
      color: 'text-purple-500',
    },
    {
      name: 'Next.js',
      level: 90,
      icon: <Monitor className="w-8 h-8" />,
      color: 'text-gray-700 dark:text-gray-300',
    },
    {
      name: 'Tailwind CSS',
      level: 88,
      icon: <Palette className="w-8 h-8" />,
      color: 'text-teal-500',
    },
  ],
  backend: [
    {
      name: 'Node.js',
      level: 92,
      icon: <Server className="w-8 h-8" />,
      color: 'text-green-600',
    },
    {
      name: 'Express',
      level: 88,
      icon: <Cpu className="w-8 h-8" />,
      color: 'text-gray-700 dark:text-gray-300',
    },
    {
      name: 'ASP.NET',
      level: 80,
      icon: <Database className="w-8 h-8" />,
      color: 'text-blue-600',
    },
    {
      name: 'Python',
      level: 85,
      icon: <Code className="w-8 h-8" />,
      color: 'text-yellow-500',
    },
  ],
  cloud: [
    {
      name: 'AWS',
      level: 82,
      icon: <Cloud className="w-8 h-8" />,
      color: 'text-orange-500',
    },
    {
      name: 'Azure',
      level: 78,
      icon: <Cloud className="w-8 h-8" />,
      color: 'text-blue-500',
    },
    {
      name: 'DevOps',
      level: 75,
      icon: <Cpu className="w-8 h-8" />,
      color: 'text-red-500',
    },
    {
      name: 'WebSocket',
      level: 90,
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'text-green-500',
    },
  ],
  ai: [
    {
      name: 'OpenAI',
      level: 88,
      icon: <Bot className="w-8 h-8" />,
      color: 'text-green-600',
    },
    {
      name: 'Vertex AI',
      level: 82,
      icon: <Bot className="w-8 h-8" />,
      color: 'text-blue-600',
    },
    {
      name: 'Langchain',
      level: 80,
      icon: <Bot className="w-8 h-8" />,
      color: 'text-purple-600',
    },
    {
      name: 'Dialogflow CX',
      level: 85,
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'text-orange-600',
    },
  ],
};

  const ideas = [
    "Voice-first resume builder",
    "AI-integrated knowledge base for SMEs",
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/95"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-bold text-amber-800 dark:text-amber-200"
            >
              Alexander.dev
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {["home", "about", "projects", "skills","certifications", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item
                        ? "bg-amber-600 text-white dark:bg-amber-700"
                        : "text-amber-800 hover:bg-amber-100 dark:text-amber-200 dark:hover:bg-amber-900/50"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu?.classList.toggle("hidden");
                }}
                className="p-2 rounded-lg text-amber-800 hover:bg-amber-100 dark:text-amber-200 dark:hover:bg-amber-900/50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {["home", "about", "projects", "skills", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      document
                        .getElementById("mobile-menu")
                        ?.classList.add("hidden");
                    }}
                    className={`px-3 py-2 rounded-lg transition-all duration-200 text-left ${
                      activeSection === item
                        ? "bg-amber-600 text-white dark:bg-amber-700"
                        : "text-amber-800 hover:bg-amber-100 dark:text-amber-200 dark:hover:bg-amber-900/50"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Home Section - Welcome Desk */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="skeuo-wood p-6 md:p-8 rounded-2xl mb-6 md:mb-8">
                <div className="skeuo-paper p-4 md:p-6 rounded-xl">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-amber-900 dark:text-amber-200 mb-3 md:mb-4">
                    Hi, I'm Alexander L
                  </h1>
                  <p className="text-lg md:text-xl text-amber-800 dark:text-amber-300 mb-4 md:mb-6">
                    Full Stack Developer 
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                <div className="skeuo-sticky p-3 md:p-4 rounded-lg inline-block">
                  <div className="flex items-center space-x-2 text-amber-900 dark:text-amber-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full pulse-animation"></div>
                    <span className="font-semibold text-sm md:text-base">
                      Available for Remote Work
                    </span>
                  </div>
                </div>

                <div className="skeuo-sticky p-3 md:p-4 rounded-lg inline-block">
                  <div className="flex items-center space-x-2 text-amber-900 dark:text-amber-200">
                    <span className="font-semibold text-sm md:text-base">
                      💼 Open to New Opportunities
                    </span>
                  </div>
                </div>
            
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="skeuo-card p-6 md:p-8 rounded-2xl w-full max-w-sm">
                <div className="relative group">
                  <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full flex items-center justify-center skeuo-metal overflow-hidden">
                    {/* {profilePhoto ? ( */}
<Image
  src="/Alex.jpg"
  alt="Alexander L"
  width={256} 
  height={256}
  className="object-cover mb-[25px] rounded-full"
/>

                  </div>
                <div className="mt-5">
          <a  href="/api/download" target="_blank" >
  <Button className="w-full skeuo-button text-white cursor-pointer">
    <Download className="w-4 h-4 mr-2" />
    Download Resume
  </Button>
</a>
      </div>
            
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-200 mb-4">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="skeuo-paper p-6 md:p-8 rounded-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4">
                Bio
              </h3>
              <p className="text-amber-800 dark:text-amber-300 leading-relaxed mb-6">
                A passionate full-stack engineer with a flair for AI-powered web
                applications, real-time systems. My mission is to solve complex problems with
                beautiful, user-friendly solutions.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-200 mb-4">
                Career Highlights
              </h3>
              <ul className="space-y-3 text-amber-800 dark:text-amber-300">
                <li className="flex items-start space-x-2">
                  <Bot className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-1 flex-shrink-0" />
                  <span>
                    Integrated ChatGPT, Vertex AI for smart chat systems
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <MessageSquare className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-1 flex-shrink-0" />
                  <span>
                    Delivered voice-based AI bots for candidate training
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <Monitor className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-1 flex-shrink-0" />
                  <span>Real-time dashboards with data visualization</span>
                </li>
              </ul>

              <div className="mt-6 p-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <p className="text-amber-800 dark:text-amber-300 italic">
                  "Beyond writing code, I'm passionate about exploring new technologies and expanding my knowledge to grow as a developer"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="skeuo-card p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">
                  Why Me?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="skeuo-dial w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 flex items-center justify-center">
                      <Target className="w-6 h-6 md:w-8 md:h-8 text-amber-600 dark:text-amber-500 z-10" />
                    </div>
                    <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300">
                      Always curious
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="skeuo-dial w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 flex items-center justify-center">
                      <Globe className="w-6 h-6 md:w-8 md:h-8 text-amber-600 dark:text-amber-500  z-10" />
                    </div>
                    <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300">
                      Remote ready
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="skeuo-dial w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 flex items-center justify-center">
                      <Users className="w-6 h-6 md:w-8 md:h-8 text-amber-600 dark:text-amber-500  z-10" />
                    </div>
                    <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300">
                      Team player
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="skeuo-dial w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-amber-600 dark:text-amber-500  z-10" />
                    </div>
                    <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300">
                      Problem solver
                    </p>
                  </div>
                </div>
              </div>

              <div className="skeuo-card p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">
                  Tech I Enjoy Exploring
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    
                    "System Design",
                    "Prompt Engineering",
                    "Agentic AI",
                    "React js",
                    "Node js",
                    "Javascript",
                    "Sql",
                    "No Sql",
                    "Mongodb",
                    "python",
                    "AWS",
                    "HTML/CSS",
                    "Tailwind css",
                    "bootstrap",
                    "jquery",
                    "ASp.net MVC"


                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-20 px-4 bg-amber-100/30 dark:bg-amber-900/20"
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-200 mb-4">
              Projects
            </h2>
            <p className="text-lg md:text-xl text-amber-800 dark:text-amber-300">
              My portfolio of work
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="skeuo-folder p-4 md:p-6 rounded-2xl"
              >
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 md:p-4 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-amber-900 dark:text-amber-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-amber-800 dark:text-amber-300 mb-4 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-amber-600 text-amber-800 dark:border-amber-500 dark:text-amber-300 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

          
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-200 mb-4">
              Skills
            </h2>
            <p className="text-lg md:text-xl text-amber-800 dark:text-amber-300">
              Technical expertise
            </p>
          </motion.div>

         <div className="skeuo-card p-4 md:p-8 rounded-2xl">
      <Tabs defaultValue="frontend" className="w-full">
 <TabsList className="   grid w-full grid-cols-2 lg:grid-cols-4 gap-2 
    mb-6 md:mb-8 
    !h-auto min-h-0">

  {["frontend", "backend", "cloud", "ai"].map((tab) => (
    <TabsTrigger
      key={tab}
      value={tab}
      className="
    
        w-full
        text-center
        text-xs md:text-sm
        px-2 py-1.5 md:px-3 md:py-2
        rounded-md
        bg-gray-100 dark:bg-gray-800
        data-[state=active]:bg-amber-400 data-[state=active]:text-white
        transition-colors duration-300
        truncate
        whitespace-nowrap
        overflow-hidden
      "
    >
      {tab === "frontend" ? "Frontend" :
       tab === "backend" ? "Backend" :
       tab === "cloud" ? "Cloud/DevOps" :
       "AI Tools"}
    </TabsTrigger>
  ))}
</TabsList>


        {Object.entries(skills).map(([category, skillList]) => (
          <TabsContent key={category} value={category} className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {skillList.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="skeuo-dial w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 flex items-center justify-center">
                    <div className={`${skill.color} text-3xl z-10`}>
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-amber-900 dark:text-amber-200 text-sm md:text-base mb-2">
                    {skill.name}
                  </h3>
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-amber-400 dark:bg-amber-600 opacity-60"
                      />
                    ))}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="text-xs font-bold text-amber-700 dark:text-amber-400">
                      {skill.level}%
                    </div>
                    <div className="w-full bg-amber-200 dark:bg-amber-800 rounded-full h-1 mt-1">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
        </div>
      </section>
      {/* certifications */}
<section id="certifications" className="py-16 md:py-20 px-4">
  <div className="container mx-auto max-w-4xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-8 md:mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-200 mb-4">
        Certifications
      </h2>
      <p className="text-lg md:text-xl text-amber-800 dark:text-amber-300">
        Verified achievements
      </p>
    </motion.div>

    <div className="space-y-6">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="skeuo-card p-4 md:p-6 rounded-xl flex items-center gap-4"
        >
          <div className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full ${cert.badgeColor}`}>
            <span className="text-white text-sm font-bold">✔</span>
          </div>
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-semibold text-amber-900 dark:text-amber-200">
              {cert.title}
            </h3>
            <p className="text-sm text-amber-700 dark:text-amber-400">
              {cert.provider}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-20 px-4 bg-amber-100/30 dark:bg-amber-900/20"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-200 mb-4">
              Contact
            </h2>
            <p className="text-lg md:text-xl text-amber-800 dark:text-amber-300">
              Let's work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="skeuo-paper p-6 md:p-8 rounded-2xl"
            >
              <h3 className="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-200 mb-6">
                Get In Touch
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-amber-800 dark:text-amber-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-amber-300 dark:border-amber-600 rounded-lg focus:border-amber-500 focus:outline-none bg-white/50 dark:bg-gray-800/50 text-amber-900 dark:text-amber-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 dark:text-amber-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-amber-300 dark:border-amber-600 rounded-lg focus:border-amber-500 focus:outline-none bg-white/50 dark:bg-gray-800/50 text-amber-900 dark:text-amber-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-amber-800 dark:text-amber-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-3 border-2 border-amber-300 dark:border-amber-600 rounded-lg focus:border-amber-500 focus:outline-none bg-white/50 dark:bg-gray-800/50 text-amber-900 dark:text-amber-200"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full skeuo-button text-white cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6"
            >
              <div className="skeuo-card p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">
                  Contact Information
                </h3>
             <div className="space-y-4">
  {/* Email Link */}
  <a href="mailto:antonyofficiall4@gmail.com" className="flex items-center space-x-3 cursor-pointer">
    <Mail className="w-5 h-5 text-amber-600 dark:text-amber-500" />
    <span className="text-amber-800 dark:text-amber-300 text-sm md:text-base">
      antonyofficiall4@gmail.com
    </span>
  </a>

  {/* LinkedIn Link */}
  <a
    href="https://www.linkedin.com/in/alexander-l-b592791b7/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 cursor-pointer"
  >
    <Linkedin className="w-5 h-5 text-amber-600 dark:text-amber-500" />
    <span className="text-amber-800 dark:text-amber-300 text-sm md:text-base">
      LinkedIn Profile
    </span>
  </a>

  {/* GitHub Link */}
  <a
    href="https://github.com/Alexantony-L"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 cursor-pointer"
  >
    <Github className="w-5 h-5 text-amber-600 dark:text-amber-500" />
    <span className="text-amber-800 dark:text-amber-300 text-sm md:text-base">
      GitHub Profile
    </span>
  </a>
</div>

              </div>

              <div className="skeuo-card p-4 md:p-6 rounded-2xl">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">
                  Blueprints for Tomorrow
                </h3>
                <div className="space-y-3">
                    <div  className="skeuo-sticky p-3 rounded-lg">
                      <p className="text-amber-900 dark:text-amber-200 text-sm">
                       These are just glimpses of what's possible when curiosity meets creativity. We're constantly experimenting, refining, and learning — driven by a passion to solve real problems with thoughtful, innovative solutions. The ideas you see here are only the beginning. We're building for tomorrow, one bold step at a time.
                      </p>
                    </div>
                </div>
              </div>

          <a  href="/api/download" target="_blank">
  <Button className="w-full skeuo-button text-white cursor-pointer">
    <Download className="w-4 h-4 mr-2" />
    Download Resume
  </Button>
</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 dark:bg-gray-950 text-amber-100 dark:text-amber-200 py-3 md:py-4 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm md:text-base mb-2">
            © {getYear}  All rights reserved.
          </p>
          {/* <div className="flex justify-center space-x-4 md:space-x-6">
            <Github className="w-5 h-5 md:w-6 md:h-6 hover:text-amber-300 dark:hover:text-amber-400 cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 hover:text-amber-300 dark:hover:text-amber-400 cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 md:w-6 md:h-6 hover:text-amber-300 dark:hover:text-amber-400 cursor-pointer transition-colors" />
          </div> */}
        </div>
      </footer>

      <Toaster />
    </div>
  );
}
