import { motion } from 'framer-motion';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

const CtaSection = () => {
  const shouldAnimate = useOneTimeAnimation();

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
              Your Journey Starts Here
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-light">
              Siap Menjadi <span className="text-primary-500">Full Stack Developer</span> Profesional?
            </h2>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Gabung dengan 500+ alumni yang telah berkarir di perusahaan teknologi terkemuka. Program dimulai setiap bulan dengan kuota terbatas.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex flex-col items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300 w-full sm:w-auto"
                >
                  Daftar Batch Berikutnya
                </motion.button>
                <span className="text-primary-500 text-sm mt-2">Batch Mei - Tersisa 5 Slot</span>
              </div>
              
              <div className="flex flex-col items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-colors duration-300 w-full sm:w-auto"
                >
                  Jadwalkan Konsultasi
                </motion.button>
                <span className="text-gray-400 text-sm mt-2">Gratis 30 Menit</span>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-gray-800">
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary-500 mb-2">500+</h3>
                  <p className="text-gray-400">Alumni Sukses</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary-500 mb-2">12</h3>
                  <p className="text-gray-400">Minggu Program</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary-500 mb-2">100%</h3>
                  <p className="text-gray-400">Money Back Guarantee</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;