import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      data-testid="loading-screen"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-bold tracking-wider gold-gradient-text"
        >
          Sesilia
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          className="absolute -bottom-4 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        
        <motion.div 
          animate={{ 
            boxShadow: ["0 0 0px rgba(212, 175, 55, 0)", "0 0 30px rgba(212, 175, 55, 0.4)", "0 0 0px rgba(212, 175, 55, 0)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-lg pointer-events-none"
        />
      </div>
    </motion.div>
  );
}
