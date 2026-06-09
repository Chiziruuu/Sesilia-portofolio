import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Download, ArrowDown, Linkedin, Phone } from "lucide-react";
import profilePhoto from "@assets/IMG_20260609_075412_1780966465989.jpg";

const ROLES = [
  "Electronics Engineering Student",
  "Robotics Enthusiast",
  "Technology Innovator"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Particles placeholder */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [null, Math.random() * -100 - 50],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/60 to-rose-400/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/50 bg-background flex items-center justify-center p-1">
            {imageError ? (
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center border-2 border-primary/20">
                <span className="text-6xl font-serif font-bold gold-gradient-text">S</span>
              </div>
            ) : (
              <img
                src={profilePhoto}
                alt="Sesilia"
                className="w-full h-full object-cover rounded-full"
                onError={() => setImageError(true)}
              />
            )}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold mb-4 gold-gradient-text tracking-tight"
        >
          Sesilia
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 mb-6"
        >
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            {ROLES[roleIndex]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center text-foreground/60 mb-10 text-sm md:text-base bg-white/5 px-4 py-2 rounded-full border border-white/5"
        >
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          Pekanbaru, Riau, Indonesia
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            data-testid="link-hero-contact"
          >
            Contact Me
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
            data-testid="link-hero-cv"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-6"
        >
          {[
            { Icon: Mail, href: "mailto:sesilia24trse@mahasiswa.pcr.ac.id", label: "Email" },
            { Icon: Phone, href: "https://wa.me/6288263532014", label: "WhatsApp" },
            { Icon: Linkedin, href: "https://linkedin.com/in/sesilia-sesilia-3630b63a5", label: "LinkedIn" }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1"
              aria-label={label}
              data-testid={`link-social-${label.toLowerCase()}`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-12 rounded-full border border-white/20 flex justify-center pt-2 glass-panel"
            >
              <ArrowDown className="w-4 h-4 text-primary" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
