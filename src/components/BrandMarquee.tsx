import { motion } from 'framer-motion';
import { useOneTimeAnimation } from '../hooks/useOneTimeAnimation';

const BrandMarquee = () => {
  const shouldAnimate = useOneTimeAnimation();

  const brands = [
    { name: "Tokopedia", logo: "/brands/tokopedia.svg" },
    { name: "Gojek", logo: "/brands/gojek.svg" },
    { name: "Traveloka", logo: "/brands/traveloka.svg" },
    { name: "Bukalapak", logo: "/brands/bukalapak.svg" },
    { name: "Shopee", logo: "/brands/shopee.svg" },
    { name: "Blibli", logo: "/brands/blibli.svg" },
    // Duplicate for seamless loop
    { name: "Tokopedia", logo: "/brands/tokopedia.svg" },
    { name: "Gojek", logo: "/brands/gojek.svg" },
    { name: "Traveloka", logo: "/brands/traveloka.svg" },
    { name: "Bukalapak", logo: "/brands/bukalapak.svg" },
  ];

  return (
    <section className="py-20 bg-dark">
      <motion.div
        initial={shouldAnimate ? { opacity: 0 } : false}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Trusted By</span>
          <h3 className="text-2xl font-bold mt-2 text-gray-300">Alumni Kami Bekerja di Perusahaan Terkemuka</h3>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex whitespace-nowrap">
            <div className="flex space-x-8 sm:space-x-12 md:space-x-16 animate-[marquee_25s_linear_infinite]">
              {brands.map((brand, index) => (
                <div 
                  key={`${brand.name}-${index}`}
                  className="flex items-center justify-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px] h-16 sm:h-20 md:h-24 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 sm:h-14 md:h-16 object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Duplicate for seamless loop */}
            <div className="flex space-x-8 sm:space-x-12 md:space-x-16 animate-[marquee_25s_linear_infinite]">
              {brands.map((brand, index) => (
                <div 
                  key={`${brand.name}-duplicate-${index}`}
                  className="flex items-center justify-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px] h-16 sm:h-20 md:h-24 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 sm:h-14 md:h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BrandMarquee;