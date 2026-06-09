import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-12 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
        <h2 className="text-2xl font-serif font-bold gold-gradient-text mb-2 tracking-wider">
          Sesilia.
        </h2>
        
        <p className="text-foreground/60 text-sm mb-8 max-w-md">
          Electronics Engineering Student & Technology Innovator from Pekanbaru, Indonesia.
        </p>

        <div className="flex gap-4 mb-8">
          <a
            href="mailto:sesilia24trse@mahasiswa.pcr.ac.id"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/6288263532014"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all"
            aria-label="WhatsApp"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/sesilia-sesilia-3630b63a5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/50 hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <p className="text-foreground/40 text-xs">
          &copy; {currentYear} Sesilia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
