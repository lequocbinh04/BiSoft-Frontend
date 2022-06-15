import RiIcon from "../RiIcon";

const Footer = () => {
  return (
    <div className="bg-white bg-opacity-20 mt-28 py-3">
      <div className=" max-w-[90rem] mx-auto flex justify-between items-center">
        <div>2022. All Rights Reserved</div>
        <div className="text-white">
          <a
            href="https://www.facebook.com/lequocbinh.04"
            target="_blank"
            rel="noreferrer"
            className="mr-2.5"
          >
            <RiIcon name="facebook-circle-fill text-2xl" />
          </a>
          <a
            href="https://github.com/lequocbinh04/BiSoft-Frontend"
            target="_blank"
            className="mr-2.5"
            rel="noreferrer"
          >
            <RiIcon name="github-fill text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
