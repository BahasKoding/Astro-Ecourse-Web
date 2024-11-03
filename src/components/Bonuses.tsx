import { motion } from 'framer-motion';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

const Bonuses = () => {
  const shouldAnimate = useOneTimeAnimation();

  const bonuses = [
    {
      title: "Akses Seumur Hidup",
      description: "Dapatkan akses permanen ke seluruh materi pembelajaran dan update konten terbaru tanpa biaya tambahan",
      icon: "🔑",
      highlight: "Lifetime Access"
    },
    {
      title: "Komunitas Eksklusif",
      description: "Bergabung dengan komunitas alumni untuk networking, sharing knowledge, dan info lowongan kerja terkini",
      icon: "👥",
      highlight: "500+ Members"
    },
    {
      title: "Career Support",
      description: "Persiapan karir lengkap dengan CV review, interview preparation, dan personal branding di LinkedIn",
      icon: "🚀",
      highlight: "HR Partner"
    }
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Program Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-light">
            Bonus Eksklusif Program
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Maksimalkan pengalaman belajar Anda dengan berbagai benefit tambahan yang akan mendukung kesuksesan karir
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={bonus.title}
              initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{bonus.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary-500">
                {bonus.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {bonus.description}
              </p>
              <span className="text-sm font-semibold text-gray-400 bg-gray-700/50 px-4 py-2 rounded-full">
                {bonus.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;