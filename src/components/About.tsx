import { motion } from "framer-motion";
import Counter from "./Counter";
import { GraduationCap, Award, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold gold-gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8 glass-panel p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <p className="text-foreground/80 leading-relaxed text-lg mb-8">
              Saya adalah mahasiswa D4 Teknologi Rekayasa Sistem Elektronika yang memiliki minat besar dalam bidang teknologi, robotika, Internet of Things (IoT), sistem tertanam (Embedded System), dan pengembangan perangkat lunak. Saya aktif dalam berbagai kegiatan pengembangan kepemudaan, organisasi, volunteer, dan proyek teknologi yang membantu mengembangkan kemampuan kepemimpinan, komunikasi, manajemen proyek, dan problem solving.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-primary w-6 h-6" />
                  <h3 className="font-serif font-bold text-xl text-primary">Vision</h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Menjadi profesional di bidang teknologi yang mampu menciptakan inovasi berkelanjutan serta memberikan dampak positif bagi masyarakat melalui pengembangan teknologi yang bermanfaat.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-primary w-6 h-6" />
                  <h3 className="font-serif font-bold text-xl text-primary">Motto</h3>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic">
                  "Success is built through continuous learning, consistent effort, and the courage to embrace challenges."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-4 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary h-full flex flex-col justify-center">
              <div className="flex items-start gap-4 mb-4">
                <GraduationCap className="text-primary w-8 h-8 shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Education</h3>
                  <p className="text-primary font-medium">Politeknik Caltex Riau</p>
                  <p className="text-sm text-foreground/60 mb-2">D4 Teknologi Rekayasa Sistem Elektronika</p>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">2024 - Present</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 h-full">
              {[
                { label: "Leadership Experiences", count: 15 },
                { label: "Technology Projects", count: 10 },
                { label: "Volunteer Hours", count: 500 },
                { label: "Training & Certifications", count: 20 }
              ].map((stat, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl text-center flex flex-col items-center justify-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    <Counter end={stat.count} suffix="+" />
                  </div>
                  <div className="text-xs text-foreground/70 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
