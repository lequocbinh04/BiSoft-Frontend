import RiIcon from "../RiIcon";
import TypeWriter from "../TypeWriter";

const HeroSection = () => {
  return (
    <>
      <div className="flex items-center max-w-[85rem] mx-auto justify-between relative z-10 mt-48 px-8">
        <div className="relative z-10">
          <div className="flex">
            <TypeWriter />
            <h1 className="text-8xl font-bold">BiSoft</h1>
          </div>
          <div className="mt-6 text-slate-300 max-w-3xl relative z-10">
            Với sứ mệnh tạo nên nhữn g sản phẩm có giá trị tốt nhất cho cộng
            đồng. Bạn có ý tưởng độc đáo thú vị? Hãy liên hệ cho chúng tôi.
          </div>
          <button className="mt-6 bg-orange-300 rounded-lg px-5 py-2.5 font-medium text-dark focus:outline-none hover:bg-orange-400 transition-all duration-200 flex items-center relative z-10">
            Các dự án của chúng tôi{" "}
            <RiIcon className="ml-1 text-dark" name="arrow-right-up-line" />
          </button>
        </div>
        <div className="ml-16 relative">
          <img
            alt=""
            src="/assets/images/line.svg"
            className="absolute z-[1] top-0 left-0 w-full"
            style={{
              transform: "translate(-70%,-5%)",
            }}
          />
          <img
            alt=""
            src="/assets/images/star.svg"
            className="absolute z-[1] -top-24 right-14 min-w-max"
          />
          <img
            alt=""
            src="/assets/images/star.svg"
            className="absolute z-[1] bottom-14 -right-28 min-w-max"
          />

          <img
            alt=""
            src="/assets/images/hero-image.png"
            className="w-full h-full relative z-10"
          />
        </div>
        {/* 
        <img
          alt=""
          src="/assets/images/circle2.svg"
          className="absolute z-1 left-0 -bottom-24"
        /> */}
      </div>
      {/* <span className="absolute left-1/2 bottom-12 flex flex-col items-center animate-bounce cursor-pointer">
        Scroll down
        <RiIcon name="arrow-down-s-fill" />
      </span> */}
    </>
  );
};
export default HeroSection;
