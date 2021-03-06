import { Transition } from "@headlessui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import RiIcon from "../RiIcon";

const defaultVariant = {
  end: { opacity: 1 },
  start: { opacity: 0 },
};

const Service = () => {
  const [ref, inView] = useInView({
    threshold: 0.8,
  });
  const control = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      setTimeout(() => {
        control.start("end");
      }, 100);
    }
  }, [control, inView]);
  return (
    <motion.div
      variants={defaultVariant}
      initial="start"
      animate={control}
      className="mt-24 md:mt-48 max-w-[85rem] mx-auto px-4 md:px-8"
    >
      <h1 ref={ref} className="text-4xl font-bold">
        Các dịch vụ BiSoft có thể giúp bạn
      </h1>
      <div className="md:grid md:grid-cols-2 mt-12 md:gap-x-14">
        <div>
          <div className="bg-[#353F5B] py-12 px-8 rounded-tl-[3rem]">
            <RiIcon name="global-line" className="text-orange-300 text-4xl" />
            <h2 className="text-2xl font-bold mt-3">Lập trình website</h2>
            <div className="mt-4 leading-7">
              Đáp ứng nhu cầu ngày càng nhiều của cộng đồng, BiSoft mang đến
              dịch vụ thiết kế / code website theo yêu cầu của khách hàng. Để
              tiếp tục hãy liên hệ ngay với chúng tôi bằng nút bên dưới nhé :3
            </div>
            <a
              href="https://facebook.com/lequocbinh.04"
              target="_blank"
              className="mx-auto mt-6 border-2 border-orange-300 rounded-full md:rounded-lg px-5 py-2.5 font-medium text-white focus:outline-none hover:bg-orange-300 transition-all duration-200 inline-flex items-center relative z-10"
              rel="noreferrer"
            >
              Liên hệ ngay
              <i className="ml-1 ri-arrow-right-up-line"></i>
            </a>
          </div>
          <div className="bg-[#353F5B] py-12 px-8 rounded-bl-[3rem] mt-8">
            <RiIcon name="compass-line" className="text-orange-300 text-4xl" />
            <h2 className="text-2xl font-bold mt-3">Lập trình extension</h2>
            <div className="mt-4 leading-7">
              Nếu bạn cần một công cụ thực thi một hành vi tự động trên chính
              trình duyệt của mình hay một công cụ giúp bạn sử dụng website tiện
              lợi dễ dàng hơn, BiSoft có thể giúp bạn. Liên hệ với tụi mình ngay
              nhé!
            </div>
            <a
              href="https://facebook.com/lequocbinh.04"
              target="_blank"
              className="mx-auto mt-6 border-2 border-orange-300 rounded-full md:rounded-lg px-5 py-2.5 font-medium text-white focus:outline-none hover:bg-orange-300 transition-all duration-200 inline-flex items-center relative z-10"
              rel="noreferrer"
            >
              Liên hệ ngay
              <i className="ml-1 ri-arrow-right-up-line"></i>
            </a>
          </div>
        </div>
        <div className="mt-12">
          <div className="bg-[#353F5B] py-12 px-8 rounded-tr-[3rem]">
            <RiIcon name="pencil-line" className="text-orange-300 text-4xl" />
            <h2 className="text-2xl font-bold mt-3">
              Thiết kế giao diện web/app
            </h2>
            <div className="mt-4">
              Nếu bạn muốn có một giao diện web hay app đẹp tuyệt vời, bạn có
              thể liên hệ với BiSoft ngay dễ được tư vấn kĩ hơn nhé!
            </div>
            <a
              href="https://facebook.com/lequocbinh.04"
              target="_blank"
              className="mx-auto mt-6 border-2 border-orange-300 rounded-full md:rounded-lg px-5 py-2.5 font-medium text-dark  bg-orange-300 focus:outline-none hover:bg-orange-300 transition-all duration-200 inline-flex items-center relative z-10"
              rel="noreferrer"
            >
              Liên hệ ngay
              <i className="ml-1 ri-arrow-right-up-line"></i>
            </a>
          </div>
          <div className="bg-[#353F5B] py-12 px-8 rounded-br-[3rem] mt-8">
            <RiIcon
              name="pencil-ruler-2-line"
              className="text-orange-300 text-4xl"
            />
            <h2 className="text-2xl font-bold mt-3">Xây dựng Branding</h2>
            <div className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
              consequat nunc id purus pretium sagittis. Nulla ridiculus nullam
              bibendum luctus viverra. Eu pellentesque sem sed platea diam
              dignissim duis purus.
            </div>
            <a
              href="https://facebook.com/lequocbinh.04"
              target="_blank"
              className="mx-auto mt-6 border-2 border-orange-300 rounded-full md:rounded-lg px-5 py-2.5 font-medium text-white focus:outline-none hover:bg-orange-300 transition-all duration-200 inline-flex items-center relative z-10"
              rel="noreferrer"
            >
              Liên hệ ngay
              <i className="ml-1 ri-arrow-right-up-line"></i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Service;
