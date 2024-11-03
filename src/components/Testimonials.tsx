import { motion } from 'framer-motion';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

const Testimonials = () => {
  const shouldAnimate = useOneTimeAnimation();

  const testimonials = [
    {
      name: "Rizki Pratama",
      role: "Software Engineer",
      company: "Tokopedia",
      image: "/testimonials/person1.jpg", // Pastikan gambar ada di public/testimonials/
      content: "Program ini membuka jalan karir saya di Tokopedia. Materi yang diajarkan sangat relevan dengan tech stack yang kami gunakan sehari-hari."
    },
    {
      name: "Sarah Putri",
      role: "Frontend Developer",
      company: "Gojek",
      image: "/testimonials/person2.jpg",
      content: "Dari yang awalnya bingung mulai dari mana, sekarang sudah percaya diri develop aplikasi. Mentornya super helpful!"
    },
    {
      name: "Budi Santoso",
      role: "Full Stack Developer",
      company: "Traveloka",
      image: "/testimonials/person3.jpg",
      content: "Worth it! Dalam 6 bulan sudah bisa dapat job di unicorn. Review code dan sesi mentoring sangat membantu proses belajar."
    }
  ];



  return (
    <section id="testimonials" className="py-24 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Testimonials */}
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Kisah Sukses Alumni
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Bergabung dengan ratusan alumni yang telah berhasil berkarir di perusahaan teknologi terkemuka
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-light">{testimonial.name}</h3>
                  <p className="text-primary-500 text-sm font-medium">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;