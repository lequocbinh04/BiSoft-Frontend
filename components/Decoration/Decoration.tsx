import { useTypewriter, Typewriter } from "react-simple-typewriter";

const Decoration = () => {
  const { text } = useTypewriter({
    words: ["Hello", "From", "Typewriter", "Hook!"],
    loop: 0,
  });
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
      <div
        className="absolute top-1/2 left-1/2 px-8 py-4 min-w-[12rem] text-center"
        style={{
          border: "10px solid transparent",
          borderImage: "url(/assets/images/sketch-border.svg) 8.8%",
          transform: "rotate(-20deg)",
        }}
      >
        <Typewriter
          words={["Developer", "Coder"]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </div>
    </div>
  );
};
export default Decoration;
