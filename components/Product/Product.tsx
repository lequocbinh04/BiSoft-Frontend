import RiIcon from "../RiIcon";
import ContentLoader from "react-content-loader";
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const defaultVariant = {
  end: { opacity: 1 },
  start: { opacity: 0 },
};

const Product = () => {
  const imgRef = useRef<null | HTMLImageElement>(null);
  const wrapperRef = useRef<null | HTMLDivElement>(null);
  const titleRef = useRef<null | HTMLHeadingElement>(null);
  const contentRef = useRef<null | HTMLDivElement>(null);
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
      variants={defaultVariant}
      initial="start"
      animate={control}
      className="max-w-[85rem] mx-auto mt-12 md:mt-24 px-4 md:px-8"
    >
      <h1 className="text-3xl font-bold text-center" ref={ref}>
        Các sản phẩm của BiSoft
      </h1>
      <div className="flex justify-between w-full max-w-lg mx-auto mt-6">
        <button className="cursor-pointer text-orange-300 font-medium text-sm">
          All
        </button>
        <button className="cursor-pointer text-slate-300 text-sm ">
          Website
        </button>
        <button className="cursor-pointer text-slate-300 text-sm">
          Application
        </button>
        <button className="cursor-pointer text-slate-300 text-sm">
          Extension
        </button>
        <button className="cursor-pointer text-slate-300 text-sm">
          Branding
        </button>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-8">
        <div className="flex flex-col" ref={wrapperRef}>
          <span className="relative w-fit">
            <img ref={imgRef} alt="image 1" src="/assets/images/bivps.png" />{" "}
            <button
              className="flex items-center absolute bg-orange-300 rounded-full px-5 py-2.5 font-medium text-dark outline-none border-0 hover:bg-orange-400 transition-all duration-200 bottom-4 right-4"
              style={{
                boxShadow: "0px 5px 30px -5px rgba(253,186,116,0.8)",
              }}
            >
              Xem thêm
              <RiIcon name="arrow-right-up-line" className="ml-1" />
            </button>
          </span>
          <h1 className="text-2xl font-bold mt-4 inline" ref={titleRef}>
            BiVPS - Nền tảng quản lý VPS
          </h1>
          <div
            className="text-slate-300 font-light mt-1.5 leading-7"
            ref={contentRef}
          >
            Bạn có quá nhiều máy chủ / VPS? BiVPS là nên tảng giúp bạn quản lý
            chúng một cách dễ dàng. Với những nhu cầu cơ bản, BiVPS hoàn toàn
            miễn phí! Đăng ký sử dụng dịch vụ ngay.
          </div>
        </div>
        <ContentPlaceholder
          contentRef={contentRef}
          wrapperRef={wrapperRef}
          imgRef={imgRef}
          titleRef={titleRef}
        />
      </div>
    </motion.div>
  );
};
export default Product;
function ContentPlaceholder({ contentRef, wrapperRef, imgRef, titleRef }: any) {
  return (
    <div className="hidden md:block">
      {contentRef.current != null &&
      wrapperRef.current != null &&
      imgRef.current != null &&
      titleRef.current != null ? (
        <ContentLoader
          viewBox={`0 0 ${wrapperRef.current?.clientWidth} ${wrapperRef.current?.clientHeight}`}
          backgroundColor={"#353F5B"}
          foregroundColor={"#4D5774"}
        >
          <rect
            x="0"
            y="0"
            rx="10"
            ry="10"
            width={imgRef.current?.width}
            height={imgRef.current?.height}
          />
          <rect
            x="0"
            y={imgRef.current?.height + 16}
            rx="6"
            ry="6"
            width={imgRef.current?.clientWidth}
            height={titleRef.current?.clientHeight}
          />
          <rect
            x="0"
            y={
              imgRef.current?.height + 16 + 12 + titleRef.current?.clientHeight
            }
            rx="6"
            ry="6"
            width={imgRef.current?.clientWidth}
            height={contentRef.current?.clientHeight - 12}
          />
        </ContentLoader>
      ) : null}
    </div>
  );
}
// 77553342
