import React from 'react';
import { FaBrain, FaGithub, FaKaggle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            {/* <div className="text-2xl font-bold text-white mb-4">
              <span className="text-cyan-400">&lt;</span>
              Wadi Mkweza
              <span className="text-cyan-400">/&gt;</span>
            </div> */}
            <div className="flex items-center mb-4">
              {/* The Circle */}
              <span className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl font-bold text-gray-900">
                  W
                </span>
              </span>

              {/* Your Name */}
              <span className="text-2xl font-bold text-white">
                Wadi Mkweza
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Passionate developer creating innovative digital solutions with cutting-edge technology
              and exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {/* CHANGED: The array now includes an 'icon' property for each social link. */}
              {[
                { name: 'GitHub', url: 'https://github.com/your-username', icon: <FaGithub size={20} /> },
                { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', icon: <FaLinkedin size={20} /> },
                { name: 'Twitter', url: 'https://twitter.com/your-handle', icon: <FaTwitter size={20} /> },
                { name: 'Kaggle', url: 'https://www.kaggle.com/your-username', icon: <FaKaggle size={20} /> },
                { name: 'Hugging Face', url: 'https://huggingface.co/your-username', icon: <FaBrain size={20} /> }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-cyan-400 text-gray-400 hover:text-gray-900 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.name}
                >
                  {/* CHANGED: Instead of the first letter, we now render the icon component. */}
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Wadi Mkweza. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;