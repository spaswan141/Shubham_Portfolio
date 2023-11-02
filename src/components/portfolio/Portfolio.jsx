import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Fade } from "react-awesome-reveal";

const items = [
  {
    id: 1,
    title: "Lumen5 Clone",
    img: "/lumen5.png",
    tech:"HTML CSS JavaScript",
    desc: "LumenClone: A dynamic web app crafted with HTML, CSS, and Vanilla JavaScript, empowering users to effortlessly create captivating video content from text using elegant, user-friendly design and features.",
    location:"https://github.com/spaswan141/lumen5"
  },
  {
    id: 2,
    title: "Mamaearth Clone",
    img: "/mamaearth.png",
    tech:"React Js",
    desc: "An innovative Mamaearth clone developed with React JS, offering a user-friendly platform for natural and eco-friendly beauty and baby care products, just like the original, with a modern touch",
    location:"https://github.com/spaswan141/Clone_MamaEarth"
  },
  {
    id: 3,
    title: "Kimaye Clone",
    img: "/kimaye.png",
    tech:"React NodeJs ExpressJs MongoDB",
    desc: "Kimaye Clone is a web application built using MongoDB, Express, React, and Node (MERN stack) that replicates Kimaye's functionality for efficient, data-driven produce management and monitoring",
    location:"https://github.com/spaswan141/Kimaye"
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <Fade delay={1e3} cascade damping={1e-1} className="title">{item.title}</Fade>
            <Fade className="tech" delay={1e3} cascade damping={1e-1} style={{color:"#663399",fontSize:"20px"}}>{item.tech}</Fade>
            <p>{item.desc}</p>
            <button onClick={()=>{
              window.location.href=item.location
            }}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
