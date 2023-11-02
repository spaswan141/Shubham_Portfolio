import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img height={150} width={150} src="/logo.png"></img>
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/shubham.paswan.965" target="_blank">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/im_shubham_paswan/" target="_blank">
            <img src="/instagram.png" alt="instagram"  />
          </a>
          <a href="https://www.linkedin.com/in/shubhammpaswan/" target="_blank">
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.github.com/spaswan141" target="_blank">
            <img src="/github.png" alt="github" target="_blank" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
