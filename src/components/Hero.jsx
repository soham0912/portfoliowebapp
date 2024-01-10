import { motion } from 'framer-motion';

import { styles } from '../styles';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
    <div className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5 bg-zinc-900]`}>
      <div className="flex flex-col justify-center items-center mt-5 ">
        <div className="w-5 h-5 rounded-full bg-[#FFEA00]" />
        <div className="w-1 sm:h-80 h-80 bg-gradient-to-b from-yellow-300 to-zinc-900" />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Soham <span className='text-[#FFF300]'>WEWEWEWE</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Unleashing the Power of Data Science and Machine Learning
        </p>
      </div>
    </div>
    <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
    </div>
    </section>
  )
}

export default Hero