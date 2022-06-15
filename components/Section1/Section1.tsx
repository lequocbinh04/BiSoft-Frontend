import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import LazyLoad from "react-lazyload";

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
          Với đội ngũ chuyên nghiệp, chúng tôi sẽ giúp những ý tưởng của bạn trở
          thành một web/app hoàn hảo. Để xem chi tiết hơn về những dịch vụ mà
          BiSoft hỗ trợ, bạn có thể xem ngay bên dưới.
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <LazyLoad>
          <img
            alt=""
            src="/assets/images/hihi.png"
            className="min-w-full md:min-w-full"
          />
        </LazyLoad>
      </div>
    </motion.div>
  );
};
export default Section1;
