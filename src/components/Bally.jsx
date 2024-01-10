import { useState, useRef } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Bally = () => {
  return (
    <div className="xl:flex-row flex-col-reverse flex overflow-hidden">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[800px] md:h-[600px] h-[500px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Bally, "")