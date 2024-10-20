
import './App.css';
import { BsPhoneVibrateFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePlumbing } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { BiSolidBuilding } from "react-icons/bi";
import { animate, motion } from 'framer-motion';
import {useState} from 'react';
function App() {
  const [hover1, setHover1] = useState(false);

  const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false)

  return (
    <div id='assignment  ' >


      <div className="relative m-8 p-4 height-fit overflow-hidden">


        <div className=' relative z-50 '>
          <div className='flex  flex-col gap-12'>

            <span className='text-5xl m-8  font-semibold text-white'>OUR SERVICES</span>



            <div className='flex flex-wrap md:flex-row md:gap-0 gap-10 flex-col justify-evenly rounded-sm items-center'>
              <div className='flex   rounded-md md:w-1/5 w-90% m-5'>

                <div
                onMouseEnter={()=>setHover1(true)} 
                onMouseLeave={()=>setHover1(false)} 
                 className='relative pb-14  rounded-sm  shadow-xl justify-center items-center flex flex-col gap-4 p-5  bg-white'>
                  <motion.div
               
                      animate={hover1?{rotate:360}:{rotate:0}}
                 


                   className=' absolute flex items-center justify-center bg-white border-4 border-[#2A1768] w-24 h-24  rounded-full -top-12'>
                    <BsPhoneVibrateFill size={48} color="#2A1768" />
                  </motion.div>
                  <span className='font-bold text-2xl text-[#38393A] mt-10 text-center'>Emergency Plumbing Services</span>
                  <p className='text-zinc-500  text-lg font-medium text-center'>all plumbers are ready to go 24/7 for emergency including Nights we can and holidays</p>
                  <div className='text-[#2A1768] font-bold text-xl flex  items-center justify-center'>EXPLORE THIS SERVICE  <IoIosArrowForward size={24} /></div>
                </div>
              </div>

              <div className='flex   rounded-md md:w-1/5 w-90% m-5'>
                <div
                 onMouseEnter={()=>setHover2(true)} 
                 onMouseLeave={()=>setHover2(false)} 
                 className='relative pb-14 rounded-sm  shadow-xl justify-center items-center flex flex-col gap-4 p-5  bg-white'>
                  <motion.div
                   animate={hover2?{rotate:360}:{rotate:0}}
                   className=' absolute flex items-center justify-center bg-white border-4 border-[#2A1768] w-24 h-24  rounded-full -top-12'>
                    <MdOutlinePlumbing size={48} color="#2A1768" />
                  </motion.div>
                  <span className='font-bold text-2xl text-[#38393A] mt-10 text-center'>Plumbing and Drains</span>
                  <p className='text-zinc-500  text-lg font-medium text-center'>As the largest plumbing and drain service company we make thousands of repairs everyday</p>
                  <div className='text-[#2A1768] font-bold text-xl flex  items-center justify-center'>EXPLORE THIS SERVICE  <IoIosArrowForward size={24} /></div>
                </div>
              </div>

              <div className='flex  rounded-md md:w-1/5  w-90% m-5'>

                <div 
                 onMouseEnter={()=>setHover3(true)} 
                 onMouseLeave={()=>setHover3(false)} 
                className='relative pb-14 rounded-sm  shadow-xl justify-center items-center flex flex-col gap-4 p-5  bg-white'>
                  <motion.div
                   animate={hover3?{rotate:360}:{rotate:0}}
                  className=' absolute flex items-center justify-center bg-white border-4 border-[#2A1768] w-24 h-24  rounded-full -top-12'>
                    <IoIosWater size={48} color="#2A1768" />
                  </motion.div>
                  <span className='font-bold text-2xl text-[#38393A] mt-10 text-center'>Water Damage</span>
                  <p className='text-zinc-500  text-lg font-medium text-center'>Our teams are equipped with state of the art water extraction and clean up equipment</p>
                  <div className='text-[#2A1768] font-bold text-xl flex  items-center  justify-center'>EXPLORE THIS SERVICE  <IoIosArrowForward size={24} /></div>
                </div>
              </div>
              <div className='flex  rounded-md md:w-1/5 w-90% m-5'>

                <div
                 onMouseEnter={()=>setHover4(true)} 
                 onMouseLeave={()=>setHover4(false)} 
                 className='relative pb-14 rounded-sm  shadow-xl justify-center items-center flex flex-col gap-4 p-5  bg-white'>
                  <motion.div
                    animate={hover4?{rotate:360}:{rotate:0}}
                   className=' absolute flex items-center justify-center bg-white border-4 border-[#2A1768] w-24 h-24 rounded-full -top-12'>
                    <BiSolidBuilding size={48} color="#2A1768" />
                  </motion.div>
                  <span className='font-bold text-2xl text-[#38393A] mt-10 text-center'>Water Heater</span>
                  <p className='text-zinc-500  text-lg font-medium text-center'>Trust roto-rooter for repair and replacement of gas electric and tankless water heaters.</p>
                  <div className='text-[#2A1768] font-bold text-xl flex  items-center justify-center '>EXPLORE THIS SERVICE  <IoIosArrowForward size={24} /></div>
                </div>
              </div>





            </div>



          </div>
        </div>

        {/* Green Half */}
        <div className="absolute  z-10 inset-0 bg-[#2A1768] clip-half-left"></div>
        {/* Pink Half */}
        <div className="absolute  z-10 inset-0 bg-[#ECEEF6] clip-half-right"></div>

        <style jsx>{`
                .clip-half-left {
                    clip-path: polygon(0% 100%, 100% 100%,0 );
                  
                }
                .clip-half-right {
                    clip-path: polygon(100% 0%, 100% 100%, 0 100%);
                     
                }
            `}</style>
      </div>


    </div>
  );
}

export default App;
