import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";

const defaultVariant = {
  end: { opacity: 1 },
  start: { opacity: 0 },
};

const Statistic = () => {
  const [ref, inView] = useInView({
    threshold: 0.8,
  });
  const control = useAnimation();
  const isShow = useRef(false);
  const { start: start1 } = useCountUp({
    ref: "customers",
    end: 12,
    duration: 0.5,
  });
  const { start: start2 } = useCountUp({
    ref: "projects",
    end: 120,
    duration: 0.5,
  });
  const { start: start3 } = useCountUp({
    ref: "companies",
    end: 2,
    duration: 0.5,
  });
  const { start: start4 } = useCountUp({
    ref: "years",
    end: 5,
    duration: 0.5,
  });
  useEffect(() => {
    if (inView && !isShow.current) {
      setTimeout(() => {
        isShow.current = true;
        control.start("end");
        start1();
        start2();
        start3();
        start4();
      }, 100);
    }
  }, [control, inView, start1, start2, start3, start4]);
  return (
    <motion.div
      ref={ref}
      variants={defaultVariant}
      initial="start"
      animate={control}
      className="md:grid grid-cols-4 mt-16 px-4 md:px-8 max-w-[85rem] mx-auto text-center md:text-left"
    >
      <CountUp id="customers" title="Khách hàng" plus />
      <CountUp id="projects" title="Dự án" plus />
      <CountUp id="companies" title="Doanh nghiệp" plus />
      <CountUp id="years" title="Năm kinh nghiệm" plus={false} />
    </motion.div>
  );
};

function CountUp({
  id,
  title,
  plus,
}: {
  id: string;
  title: string;
  plus: boolean;
}) {
  return (
    <div className="flex flex-col mt-10 md:mt-0">
      <h1 className="font-bold text-5xl">
        <span id={id} />
        {plus && "+"}
      </h1>
      <div className="mt-2">{title}</div>
    </div>
  );
}
export default Statistic;
