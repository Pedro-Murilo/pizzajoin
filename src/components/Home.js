import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)",
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.4)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const containerVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0.7,
    rotateZ: 15,
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateZ: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
      type: "spring",
      stiffness: 150,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2
        initial={{
          scale: 0.1,
        }}
        animate={{
          scale: 1,
          fontSize: 50,
          color: "#e029a9",
          y: -50,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
