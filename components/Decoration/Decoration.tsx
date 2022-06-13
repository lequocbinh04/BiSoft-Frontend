const Decoration = () => {
  return (
    <div>
      {" "}
      <img
        alt=""
        src="/assets/images/grid.svg"
        className="top-0 left-0 absolute z-[1]"
      />
      <div
        className="top-10 left-10 absolute w-80 h-80 bg-[#7C3EFF] bg-opacity-70 rounded-full z-[2]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
    </div>
  );
};
export default Decoration;
