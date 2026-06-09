import { motion } from "framer-motion";
import { Award } from "lucide-react";

const CERTIFICATIONS = [
  "Python Programming Fundamentals",
  "Web Development Essentials",
  "Internet of Things Fundamentals",
  "Embedded System Workshop",
  "Robotics and Automation Training",
  "Leadership and Public Speaking Training",
  "Digital Project Management Workshop",
  "Artificial Intelligence Introduction Program",
];

export default function Certifications() {
  return (
    <section className="py-20 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-panel p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform border border-white/5 hover:border-primary/40 group"
            >
              <div className="w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground/90 leading-snug">
                {cert}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
