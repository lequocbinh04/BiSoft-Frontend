interface IconProps {
  name: String;
  className?: String;
}
const RiIcon = ({ name, className }: IconProps) => {
  if (className === undefined) className = "";
  return <i className={className + " ri-" + name} />;
};

export default RiIcon;
