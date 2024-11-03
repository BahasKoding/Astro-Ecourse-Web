import { motion } from 'framer-motion';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

const ProgramOverview = () => {
  const shouldAnimate = useOneTimeAnimation();

  const tracks = [
    {
      title: "PHP & Laravel Track",
      description: "Kuasai pengembangan web dengan PHP modern dan Laravel, framework PHP paling populer",
      duration: "6 Bulan",
      level: "Beginner Friendly",
      modules: [
        {
          title: "Fundamental PHP",
          topics: ["Sintaks Dasar", "Variabel & Tipe Data", "Array & Loop", "Function", "Error Handling"]
        },
        {
          title: "Object-Oriented PHP",
          topics: ["Class & Object", "Inheritance", "Interface", "Namespace", "Composer"]
        },
        {
          title: "Database & MySQL",
          topics: ["Database Design", "SQL Query", "CRUD Operations", "Relationships", "Optimization"]
        },
        {
          title: "Laravel Framework",
          topics: ["MVC Pattern", "Routing", "Eloquent ORM", "Authentication", "API Development"]
        },
        {
          title: "Real Project",
          topics: ["E-Commerce", "Payment Gateway", "REST API", "Testing", "Deployment"]
        }
      ]
    },
    {
      title: "JavaScript Full Stack Track",
      description: "Pelajari JavaScript dari dasar hingga pengembangan aplikasi modern dengan Node.js & React",
      duration: "6 Bulan",
      level: "Beginner Friendly",
      modules: [
        {
          title: "JavaScript Modern",
          topics: ["ES6+ Features", "DOM Manipulation", "Async/Await", "Modules", "Error Handling"]
        },
        {
          title: "Frontend Development",
          topics: ["React.js", "State Management", "Routing", "API Integration", "Performance"]
        },
        {
          title: "Backend with Node.js",
          topics: ["Express.js", "REST API", "Database NoSQL", "Authentication", "Security"]
        },
        {
          title: "Full Stack Integration",
          topics: ["API Design", "State Management", "Real-time Features", "Testing", "CI/CD"]
        },
        {
          title: "Capstone Project",
          topics: ["SaaS Application", "Cloud Services", "Performance", "Security", "Deployment"]
        }
      ]
    }
  ];

  return (
    <section id="program" className="py-24 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
            >
            <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">
                Learning Paths
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                Dua Jalur Menuju Full Stack Developer
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Pilih jalur pembelajaran yang sesuai dengan tujuan karir Anda. Setiap track dirancang komprehensif dengan studi kasus nyata.
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden"
            >
              <div className="p-8 border-b border-gray-700">
                <h3 className="text-2xl font-bold text-primary-500 mb-4">
                  {track.title}
                </h3>
                <p className="text-gray-300 mb-6">{track.description}</p>
                <div className="flex items-center space-x-6 text-sm">
                  <span className="text-gray-400">⏱ {track.duration}</span>
                  <span className="text-gray-400">📚 {track.level}</span>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {track.modules.map((module, moduleIndex) => (
                  <motion.div
                    key={moduleIndex}
                    initial={shouldAnimate ? { opacity: 0 } : false}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: moduleIndex * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {module.title}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2 text-gray-400">
                          <span className="text-primary-500">•</span>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;