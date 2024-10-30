import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, #1f1f38, #2c2c6c)',
          zIndex: -1,
        }}
      />
    );
    jjjj
  };

export default AnimatedBackground