import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const IntroCard = () => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 250, damping: 20 },
      }}
      className="mx-auto mt-12 w-full max-w-2xl p-6 rounded-2xl bg-transparent border border-white/20 shadow-xl text-white cursor-pointer"
    >
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Hi, I’m <span className="text-[#915EFF]">Francis</span>
        </h1>
        <p className="mt-3 text-white/90 text-base sm:text-lg max-w-xl leading-relaxed">
            Specialist in Data Analytics and Web Development,<br className="sm:block hidden" />
            delivering actionable insights through advanced data modelling, SQL, Python, and interactive dashboards.<br />
            I build custom, scalable websites and data tools that help businesses optimise decisions and accelerate growth.
        </p>
    </div>


      <div className="text-sm sm:text-base space-y-2">
        <p>
          <span className="font-semibold">📧 Email:</span>{" "}
          francis@dataclubcenter.com
        </p>
        
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">🌐 Socials</h3>
        <div className="flex space-x-4">
          <a
            href="https://github.com/adrian"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#915EFF] transition-transform transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/adrian"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#915EFF] transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/adrian"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#915EFF] transition-transform transform hover:scale-110"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroCard;
