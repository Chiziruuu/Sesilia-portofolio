import { motion } from "framer-motion";
import { BookOpen, Edit3, Camera, Plane, Bot, Cpu, BrainCircuit, Code, Lightbulb } from "lucide-react";

const HOBBIES = [
  { name: "Reading", icon: BookOpen },
  { name: "Writing", icon: Edit3 },
  { name: "Photography", icon: Camera },
  { name: "Traveling", icon: Plane },
  { name: "Robotics", icon: Bot },
  { name: "Tech Exploration", icon: Cpu },
];

const INTERESTS = [
  { name: "Artificial Intelligence", icon: BrainCircuit },
  { name: "Robotics Engineering", icon: Bot },
  { name: "Embedded System", icon: Cpu },
  { name: "IoT", icon: Lightbulb },
  { name: "Web Development", icon: Code },
  { name: "Tech Innovation", icon: Lightbulb },
];

export default function Hobbies() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">Hobbies & Interests</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12">
          {/* Hobbies */}
          <div>
            <h3 className="text-xl font-bold text-center mb-8 text-foreground/80">Hobbies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {HOBBIES.map((hobby, index) => {
                const Icon = hobby.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-panel px-6 py-3 rounded-full flex items-center gap-3 border border-white/5 hover:border-primary/50 hover:text-primary transition-all group"
                  >
                    <Icon className="w-4 h-4 text-foreground/50 group-hover:text-primary transition-colors" />
                    <span className="font-medium text-sm">{hobby.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-xl font-bold text-center mb-8 text-foreground/80">Professional Interests</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {INTERESTS.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-primary/5 border border-primary/20 px-6 py-3 rounded-full flex items-center gap-3 hover:bg-primary/10 hover:border-primary/50 transition-all group"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="font-medium text-sm text-primary">{interest.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
