import { motion, useScroll, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 100) { // Changed from 400 to 100 for earlier appearance
        controls.start({ opacity: 1, scale: 1 });
      } else {
        controls.start({ opacity: 0, scale: 0 });
      }
    });
  }, [controls, scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg z-50 w-12 h-12 flex items-center justify-center text-xl"
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default BackToTop;