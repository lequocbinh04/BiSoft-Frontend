import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const defaultVariant = {
  end: { opacity: 1 },
  start: { opacity: 0 },
};

const Section1 = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const control = useAnimation();
  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        control.start("end");
      }, 100);
    }
  }, [control, inView]);
  return (
    <motion.div
      ref={ref}
      variants={defaultVariant}
      initial="start"
      animate={control}
      className="mt-32 max-w-[85rem] mx-auto md:flex justify-between w-full items-center px-5 md:px-8  relative z-10"
    >
      <div>
        <h1 className="font-bold text-4xl text-center md:text-left relative z-10">
          Mang đến trải nghiệm <br className="hidden md:block" /> tối ưu
        </h1>
        <div className="mt-4 text-slate-300 max-w-2xl  text-center md:text-left  relative z-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s,
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <img
          alt=""
          src="/assets/images/hihi.png"
          className="min-w-full md:min-w-full"
        />
      </div>
    </motion.div>
  );
};
export default Section1;
