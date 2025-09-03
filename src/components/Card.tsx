type Props = {
  heading: string;
  backgroundColor?: string;
  logo?: string;
  count: string | number;
  active?: boolean;
  onClick?: () => void;
  size?: "regular" | "small";
};

const Card = ({
  heading,
  backgroundColor,
  logo,
  count,
  active,
  onClick,
  size = "regular",
}: Props) => {
  return (
    <div
      className={`p-${size === "small" ? "4" : "8"} ${
        size === "small" ? "border-[1px] border-gray-300" : ""
      } rounded-md ${onClick && 'cursor-pointer'} ${
        active
          ? "bg-[#f2fbfb] border-[1px] border-[#01a7a5] text-[#01a7a5]"
          : "bg-[#fff]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <p className={`${size == "small" ? "text-lg": "text-xl"}`}>{heading}</p>
        <div className={`${backgroundColor} p-2 rounded-full`}>
          <img src={logo} alt="" />
        </div>
      </div>
      <p className={`${size === "small" ? "text-2xl" : "text-5xl"}`}>{count}</p>
    </div>
  );
};

export default Card;
