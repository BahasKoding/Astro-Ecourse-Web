import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-700/50"
    >
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={onClick}
      >
        <span className="text-lg font-semibold text-light pr-8">{question}</span>
        <span className={`text-primary-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? 'auto' : 0, 
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 24 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

const Faq = () => {
  const shouldAnimate = useOneTimeAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk menjadi Full Stack Developer?",
      answer: "Program ini dirancang intensif selama 12 minggu dengan total 24 sesi live mentoring. Dengan mengikuti timeline yang kami sediakan, Anda bisa menguasai Full Stack Development dalam 3 bulan. Namun, Anda tetap memiliki akses seumur hidup ke materi untuk belajar sesuai kecepatan Anda."
    },
    {
      question: "Apakah saya bisa mengikuti program ini sambil bekerja?",
      answer: "Ya! Program kami dirancang fleksibel dengan recorded video dan materi yang bisa diakses 24/7. Live session juga dilakukan di luar jam kerja (malam hari) untuk mengakomodasi peserta yang bekerja. Banyak alumni kami yang berhasil belajar sambil bekerja full-time."
    },
    {
      question: "Apakah ada jaminan mendapat pekerjaan setelah lulus?",
      answer: "Kami bermitra dengan 20+ perusahaan teknologi yang aktif merekrut alumni kami. Meski tidak memberikan garansi kerja, kami menyediakan career support penuh: CV review, interview preparation, LinkedIn optimization, dan akses ke job opportunity dari partner recruitment kami."
    },
    {
      question: "Saya pemula total, apakah bisa mengikuti program ini?",
      answer: "Tentu! Kurikulum kami dirancang step-by-step dari dasar. Anda akan mulai dari fundamental programming hingga advanced topics. Mentor kami juga sangat berpengalaman dalam membimbing pemula. Yang terpenting adalah komitmen dan kemauan belajar Anda."
    },
    {
      question: "Apa saja yang akan saya dapatkan dari program ini?",
      answer: "Anda akan mendapatkan: akses seumur hidup ke materi pembelajaran, 24x live mentoring session, 6 real-world projects untuk portfolio, career preparation (CV & interview), sertifikat kelulusan, dan akses ke komunitas alumni untuk networking."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-light">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Temukan jawaban lengkap seputar program Full Stack Developer kami
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;