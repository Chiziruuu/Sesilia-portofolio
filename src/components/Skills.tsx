import { motion } from "framer-motion";
import { Code2, BrainCircuit } from "lucide-react";

const TECHNICAL_SKILLS = [
  { name: "HTML", progress: 90 },
  { name: "CSS", progress: 88 },
  { name: "Arduino", progress: 88 },
  { name: "Python", progress: 85 },
  { name: "ESP32", progress: 85 },
  { name: "Canva", progress: 85 },
  { name: "JavaScript", progress: 82 },
  { name: "IoT", progress: 82 },
  { name: "Flask", progress: 80 },
  { name: "Embedded System", progress: 80 },
  { name: "Robotics", progress: 78 },
  { name: "MySQL", progress: 75 },
  { name: "Figma", progress: 75 },
];

const PROFESSIONAL_SKILLS = [
  "Leadership",
  "Project Management",
  "Public Speaking",
  "Communication",
  "Strategic Planning",
  "Critical Thinking",
  "Problem Solving",
  "Event Management",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-primary w-6 h-6" />
              <h3 className="font-serif font-bold text-2xl">Technical Skills</h3>
            </div>

            <div className="space-y-5">
              {TECHNICAL_SKILLS.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm text-foreground/90">{skill.name}</span>
                    <span className="text-xs text-primary font-bold">{skill.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: 0.1 + index * 0.05, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] w-[200%] animate-[shimmer_2s_infinite]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-panel p-8 rounded-2xl h-fit"
          >
            <div className="flex items-center gap-3 mb-8">
              <BrainCircuit className="text-primary w-6 h-6" />
              <h3 className="font-serif font-bold text-2xl">Professional Skills</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {PROFESSIONAL_SKILLS.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary-foreground font-medium text-sm shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:bg-primary hover:text-background transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
