import featuredImg from '../assets/features-image.jpg'
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from '../variants'; 

const Features = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto"  id='features'>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 ">
        <motion.div 
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4 ">
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
          <p className="text-base text-tertiary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis delectus nulla deserunt voluptatem. Dolorem provident officia velit quo ea asperiores?</p>
        </motion.div>
        {/* Features cards */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        className="w-full lg:w-3/4">
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8'>
          <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
            <div>
               <img src={featuredImg} alt="" className='h-30 w-40'/>
               <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Lorem, ipsum dolor.</h5>
            </div>
          </div>
          <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16'>
            <div>
               <img src={featuredImg} alt="" className='h-30 w-40'/>
               <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Lorem, ipsum dolor.</h5>
            </div>
          </div>
          <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer'>
            <div>
               <img src={featuredImg} alt="" className='h-30 w-40'/>
               <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Lorem, ipsum dolor.</h5>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;