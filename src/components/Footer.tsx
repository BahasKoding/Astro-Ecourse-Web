import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, href: '#' },
    { name: 'Twitter', icon: <FaTwitter />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram />, href: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, href: '#' },
    { name: 'YouTube', icon: <FaYoutube />, href: '#' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-200 py-16"> {/* Changed bg to a darker shade */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-500">DevCourse</h3>
            <p className="text-gray-400">
              Platform pembelajaran coding terbaik untuk membangun karir sebagai Full Stack Developer profesional
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Menu</h4> {/* Changed text color */}
            <ul className="space-y-3">
              <li><a href="#program" className="text-gray-400 hover:text-primary-500 transition-colors">Program</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary-500 transition-colors">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary-500 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Kontak</h4> {/* Changed text color */}
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary-500" />
                info@devcourse.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary-500" />
                +62 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary-500" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Sosial Media</h4> {/* Changed text color */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400"> {/* Changed border color */}
          <p>&copy; {currentYear} DevCourse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;