import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Smart Plant Monitoring System",
    description: "An automated system to monitor plant health using soil moisture sensors and provide real-time feedback for optimal watering.",
    tags: ["Arduino", "IoT", "Sensor Soil Moisture"],
  },
  {
    title: "Autonomous Line Follower Robot",
    description: "A precision-driven robotic vehicle capable of following complex line paths autonomously using infrared sensor arrays.",
    tags: ["Arduino", "Infrared Sensor"],
  },
  {
    title: "Kebab Sultan Web Application",
    description: "A comprehensive e-commerce platform for ordering kebabs online with dynamic menus, cart functionality, and order management.",
    tags: ["Flask", "HTML", "CSS", "MySQL"],
  },
  {
    title: "Personal Portfolio Website",
    description: "A dynamic portfolio website showcasing professional experience, technical skills, and projects with a responsive dark-mode design.",
    tags: ["Flask", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Smart Attendance System",
    description: "An efficient attendance tracking system utilizing RFID technology connected to a central database for real-time monitoring.",
    tags: ["ESP32", "RFID"],
  },
  {
    title: "IoT Weather Monitoring Station",
    description: "A localized weather station capturing environmental data and pushing analytics to a real-time IoT dashboard for visualization.",
    tags: ["ESP32", "IoT Dashboard"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col h-full group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] transition-all duration-300 border border-white/5 hover:border-primary/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <button className="text-foreground/40 hover:text-primary transition-colors" aria-label={`View ${project.title}`}>
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
              
              <p className="text-sm text-foreground/60 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-foreground/80 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
