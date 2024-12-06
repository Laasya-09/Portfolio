import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons from React Icons

const Footer = () => (
  <footer className="bg-blue-800 text-white py-6">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p>&copy; 2024 Laasya Vaddepally. All Rights Reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/laasya-vaddepally"
          className="flex items-center hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Laasya-09"
          className="flex items-center hover:text-black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>

        {/* Email */}
        <a
          href="mailto:vaddepallylaasya@gmail.com"
          className="flex items-center hover:text-black"
        >
          <FaEnvelope className="mr-2" /> Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

