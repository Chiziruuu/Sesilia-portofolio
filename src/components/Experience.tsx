import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Regional Coordinator",
    organization: "Cahaya Hijrah Community",
    period: "2025 - Present",
  },
  {
    role: "Youth Development Ambassador",
    organization: "Indonesia Youth Leadership Forum",
    period: "2025",
  },
  {
    role: "Community Project Manager",
    organization: "Smart Future Generation",
    period: "2025",
  },
  {
    role: "Technology Innovation Fellow",
    organization: "ASEAN Young Innovators Network",
    period: "2025",
  },
  {
    role: "Founder & Project Lead",
    organization: "Tech For Future Initiative",
    period: "2025 - Present",
  },
  {
    role: "Research Assistant",
    organization: "Smart Automation Research Group",
    period: "2025",
  },
  {
    role: "Administrative Officer",
    organization: "Himika Service Center",
    period: "2025",
  },
  {
    role: "Public Relations Coordinator",
    organization: "Indonesia Technology Community",
    period: "2025",
  },
  {
    role: "Lead Volunteer",
    organization: "National Nutrition Campaign",
    period: "2025",
  },
  {
    role: "Social Impact Volunteer",
    organization: "Cahaya Hijrah Foundation",
    period: "2024 - Present",
  },
  {
    role: "Robotics Education Mentor",
    organization: "Independent",
    period: "2025",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">Experience Journey</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/20 md:border-l-0 md:w-full">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2" />

          {EXPERIENCES.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8 md:mb-12`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)] md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`w-[calc(100%-20px)] ml-[20px] md:w-[calc(50%-40px)] md:ml-0 glass-panel p-6 rounded-xl hover:border-primary/50 hover:bg-white/10 transition-all duration-300 relative`}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">{exp.period}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-foreground/60">{exp.organization}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
