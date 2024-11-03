import { motion } from 'framer-motion';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

const PasSection = () => {
  const shouldAnimate = useOneTimeAnimation();

  const cards = [
    {
      icon: "🎯",
      title: "Tantangan",
      content: "Belajar coding terasa membingungkan? Tutorial yang tersebar dan tidak terstruktur membuat Anda kesulitan menentukan arah pembelajaran yang tepat."
    },
    {
      icon: "💡",
      title: "Solusi",
      content: "Kurikulum terstruktur yang dirancang khusus untuk pemula, dengan panduan langkah demi langkah menuju Full Stack Developer."
    },
    {
      icon: "🚀",
      title: "Hasil",
      content: "Kuasai teknologi yang dibutuhkan industri, bangun portfolio yang menarik, dan siap berkarir sebagai Full Stack Developer profesional."
    }
  ];

  return (
    <section className="py-24 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">
            Program Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Perjalanan Menuju Full Stack Developer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kami memahami tantangan Anda dalam belajar programming. Mari kita ubah tantangan menjadi kesuksesan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary-500">
                {card.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PasSection;