import { motion } from 'framer-motion';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

const HeroSection = () => {
    const shouldAnimate = useOneTimeAnimation();

    return (
        <section className="h-screen bg-dark text-light flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
                <motion.div
                    initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <motion.h1
                        initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    >
                        Bangun Karir Sebagai
                        <span className="text-primary-500 block mt-2">Full Stack Developer</span>
                    </motion.h1>

                    <motion.p
                        initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                    >
                        Raih karir impian di industri teknologi dengan menjadi Full Stack Developer profesional dalam 6 bulan, dijamin sampai dapat kerja!
                    </motion.p>

                    <motion.div
                        initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300"
                        >
                            Mulai Belajar
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300"
                        >
                            Lihat Kurikulum
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;