import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ACHIEVEMENTS = [
  "Outstanding Youth Leadership Participant 2025",
  "Best Community Development Project Nominee 2025",
  "Finalist National Technology Innovation Competition",
  "Finalist National Essay Competition",
  "Active Contributor in Community Development Programs",
  "Participant of Various National Technology Seminars",
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-5 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors border border-white/5 hover:border-primary/30"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Star className="w-5 h-5 text-primary fill-primary/20" />
              </div>
              <p className="text-foreground/90 font-medium text-sm md:text-base leading-snug">
                {achievement}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
