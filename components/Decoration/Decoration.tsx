const Decoration = () => {
  return (
    <div className="">
      <img
        alt=""
        src="/assets/images/grid.svg"
        className="top-0 left-0 absolute z-[-1]"
      />
      <div
        className="top-10 left-10 absolute w-80 h-80 bg-[#7C3EFF] bg-opacity-50 rounded-full z-[-1]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
      <div
        className="-top-20 -right-10 absolute w-80 h-80 bg-[#BE229C] bg-opacity-50 rounded-full z-[-1]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
      <div
        className="top-full left-0 absolute w-80 h-80 bg-[#22B5BE] bg-opacity-50 rounded-full z-[-1]"
        style={{
          filter: "blur(90px)",
          transform: "translateY(-100%)",
        }}
      ></div>
    </div>
  );
};
export default Decoration;
