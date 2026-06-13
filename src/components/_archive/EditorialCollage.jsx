import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function EditorialCollage({ companies }) {
  const collageRef = useRef(null);
  const { scrollYProgress: collageScroll } = useScroll({
    target: collageRef,
    offset: ["start end", "end start"],
  });
  
  const y1 = useTransform(collageScroll, [0, 1], [100, -100]); // Top Center (Marriott)
  const y2 = useTransform(collageScroll, [0, 1], [60, -60]); // Middle Left (Amazon)
  const y3 = useTransform(collageScroll, [0, 1], [-50, 50]); // Middle Right (Chewy)
  const y4 = useTransform(collageScroll, [0, 1], [120, -120]); // Bottom Center-Left (Jesel)
  const y5 = useTransform(collageScroll, [0, 1], [80, -80]); // Bottom Right (Target)

  return (
      <section ref={collageRef} className="py-20 px-6 w-full relative z-20 flex flex-col items-center overflow-hidden mb-24">
        <motion.div
          className="flex flex-col items-center w-fit mx-auto relative pb-6 mb-16 z-30 pt-16"
          whileHover="hover"
        >
          <h2 className="text-2xl md:text-3xl font-bold cursor-default text-zinc-800 dark:text-zinc-200 tracking-tight">
            Where I've been
          </h2>
          <motion.svg
            className="absolute bottom-0 left-0 w-full text-[#bfa2f6] opacity-80"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hover: {
                  d: [
                    "M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                    "M5 8 Q 20 14, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                    "M5 8 Q 20 2, 35 8 T 65 8 T 95 8 T 125 8 T 155 8 T 185 8 T 215 8 T 245 8 T 275 8 T 305 8 T 335 8 T 365 8 T 395 8 T 425 8 T 455 8 T 485 8 T 515 8 T 545 8 T 575 8 T 605 8 T 635 8 T 665 8 T 695 8 T 725 8 T 755 8 T 785 8 T 815 8",
                  ],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            />
          </motion.svg>
        </motion.div>

        {/* Collage Container */}
        <div className="relative w-full max-w-[1440px] flex-1" style={{ minHeight: "1100px" }}>
          {/* Top Center - Marriott */}
          <motion.div 
            className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[60%] md:w-[45%] max-w-[510px] rounded-lg overflow-hidden shadow-2xl z-50 bg-zinc-800"
            style={{ y: y1, aspectRatio: "3/2" }}
          >
            <img src="/images/fabian-jones-gOjk0OeJH0g-unsplash.jpg" alt="Marriott Photograph" className="w-full h-full object-cover absolute inset-0 object-[center_80%]" />
            <div className="absolute inset-0  flex items-end p-6 md:p-8">
              <div 
                className={`${companies[0].className} bg-white opacity-90`}
                style={{
                  WebkitMaskImage: `url('${companies[0].src}')`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "left bottom",
                  WebkitMaskSize: "contain",
                  maskImage: `url('${companies[0].src}')`,
                  maskRepeat: "no-repeat",
                  maskPosition: "left bottom",
                  maskSize: "contain",
                }}
              />
            </div>
          </motion.div>

          {/* Middle Left - Amazon */}
          <motion.div 
            className="absolute top-[25%] left-[5%] w-[55%] md:w-[35%] max-w-[510px] rounded-lg overflow-hidden shadow-2xl z-20 bg-zinc-800"
            style={{ y: y2, aspectRatio: "3/2" }}
          >
            <img src="https://images.unsplash.com/photo-1553413002-9a28ad4600ce?q=80&w=800&auto=format&fit=crop" alt="Amazon Placeholder" className="w-full h-full object-cover absolute inset-0 " />
            <div className="absolute inset-0  flex flex-col justify-end p-6 md:p-8">
              <div 
                 className={`${companies[2].className} bg-white opacity-90`}
                style={{
                  WebkitMaskImage: `url('${companies[2].src}')`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "left bottom",
                  WebkitMaskSize: "contain",
                  maskImage: `url('${companies[2].src}')`,
                  maskRepeat: "no-repeat",
                  maskPosition: "left bottom",
                  maskSize: "contain",
                }}
              />
            </div>
          </motion.div>

          {/* Middle Right - Chewy */}
          <motion.div 
            className="absolute top-[35%] md:top-[40%] right-[5%] w-[50%] md:w-[45%] max-w-[510px] rounded-lg overflow-hidden shadow-2xl z-20 bg-amber-600"
            style={{ y: y3, aspectRatio: "3/2" }}
          >
            <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop" alt="Chewy Placeholder" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute inset-0  flex items-end p-6 md:p-8">
              <div 
                 className={`${companies[3].className} bg-white opacity-90`}
                style={{
                  WebkitMaskImage: `url('${companies[3].src}')`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "left bottom",
                  WebkitMaskSize: "contain",
                  maskImage: `url('${companies[3].src}')`,
                  maskRepeat: "no-repeat",
                  maskPosition: "left bottom",
                  maskSize: "contain",
                }}
              />
            </div>
          </motion.div>

          {/* Bottom Center Left - Jesel */}
          <motion.div 
            className="absolute top-[75%] left-[25%] md:left-[25%] w-[35%] md:w-[22%] max-w-[510px] rounded-lg overflow-hidden shadow-2xl z-30 bg-zinc-900"
            style={{ y: y4, aspectRatio: "3/2" }}
          >
            <img src="https://images.squarespace-cdn.com/content/v1/5a566c8232601e356d48b7c1/b0018b5e-3863-4408-9006-c7fd894bb09d/Esslinger+Followers+2023-455.jpg?format=2500w" alt="Jesel Image" className="w-full h-full object-cover absolute inset-0 scale-125" />
            <div className="absolute inset-0  flex items-end p-6 md:p-8">
              <div 
                 className={`${companies[1].className} bg-white opacity-90`}
                style={{
                  WebkitMaskImage: `url('${companies[1].src}')`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center bottom",
                  WebkitMaskSize: "contain",
                  maskImage: `url('${companies[1].src}')`,
                  maskRepeat: "no-repeat",
                  maskPosition: "center bottom",
                  maskSize: "contain",
                }}
              />
            </div>
          </motion.div>

          {/* Bottom Right - Target */}
          <motion.div 
            className="absolute top-[60%] md:top-[70%] right-[10%] md:right-[20%] w-[35%] md:w-[25%] max-w-[510px] rounded-lg overflow-hidden shadow-2xl z-30 bg-zinc-800"
            style={{ y: y5, aspectRatio: "3/2" }}
          >
            <img src="/images/target.jpg" alt="Target Photograph" className="w-full h-full object-cover absolute inset-0 scale-125 object-top" />
            <div className="absolute inset-0  flex items-end p-6 md:p-8">
              <div 
                 className={`${companies[4].className} bg-white opacity-90`}
                style={{
                  WebkitMaskImage: `url('${companies[4].src}')`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "left bottom",
                  WebkitMaskSize: "contain",
                  maskImage: `url('${companies[4].src}')`,
                  maskRepeat: "no-repeat",
                  maskPosition: "left bottom",
                  maskSize: "contain",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>
  );
}
