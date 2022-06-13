import Typewriter from "typewriter-effect";

const TypeWriter = () => {
  return (
    <div
      className="mr-8 mb-8 px-8 py-2.5 min-w-[12rem] text-center relative z-10"
      style={{
        border: "10px solid transparent",
        borderImage: "url(/assets/images/sketch-border.svg) 8.8%",
        transform: "rotate(-20deg)",
      }}
    >
      <Typewriter
        options={{
          strings: ["Developer", "Coder"],
          autoStart: true,
          loop: true,
          cursor: "_",
          delay: 50,
          deleteSpeed: 70,
        }}
      />
      <img
        alt=""
        src="/assets/images/sketch1.svg"
        className="absolute top-0 right-0"
        style={{
          transform: "translate(100%, -100%)",
        }}
      />
    </div>
  );
};

export default TypeWriter;
