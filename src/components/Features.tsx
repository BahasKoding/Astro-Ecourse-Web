import { motion } from 'framer-motion';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

const Features = () => {
  const shouldAnimate = useOneTimeAnimation();

  const features = [
    {
      title: "Pembelajaran Terstruktur",
      description: "Kurikulum dirancang sistematis dari dasar hingga mahir dengan studi kasus nyata yang relevan dengan kebutuhan industri",
      icon: "📚",
      highlight: "12 Minggu Program"
    },
    {
      title: "Live Mentoring",
      description: "Sesi mentoring langsung dengan praktisi berpengalaman setiap minggu untuk memastikan pemahaman materi",
      icon: "🎯",
      highlight: "24x Live Session"
    },
    {
      title: "Real-World Projects",
      description: "Bangun portfolio dengan proyek nyata menggunakan tech stack terkini yang digunakan di industri",
      icon: "💻",
      highlight: "6 Portfolio Projects"
    },
    {
      title: "Career Preparation",
      description: "Persiapkan karir dengan mock interview dan CV review bersama HR partner untuk memaksimalkan peluang karir",
      icon: "🚀",
      highlight: "100% Job Ready"
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Program Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-light">
            Fitur Unggulan Program
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Kembangkan skill programming Anda dengan metode pembelajaran yang telah terbukti efektif
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 flex flex-col">
                {/* Icon - Fixed Height */}
                <div className="h-12 mb-6">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
                
                {/* Title - Fixed Height */}
                <h3 className="text-xl font-bold text-light min-h-[56px] flex items-center">
                  {feature.title}
                </h3>
                
                {/* Description - Fixed Height */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 min-h-[80px]">
                  {feature.description}
                </p>

                {/* Highlight - Always at Bottom */}
                <div className="mt-auto">
                  <span className="inline-block text-primary-500 text-sm font-semibold py-1 px-3 bg-primary-500/10 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;