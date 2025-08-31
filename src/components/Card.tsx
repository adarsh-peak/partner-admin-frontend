type Props = {
  heading: string;
  backgroundColor: string;
  logo: string;
  count: string | number;
  active: boolean;
  onClick: () => void;
};

const Card = ({ heading, backgroundColor, logo, count, active, onClick }: Props) => {
  return (
    <div
      className={`p-8 rounded-md cursor-pointer ${
        active ? "bg-[#f2fbfb] border-[1px] border-[#01a7a5] text-[#01a7a5]" : "bg-[#fff]"
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-xl">{heading}</p>
        <div className={`${backgroundColor} p-2 rounded-full`}>
          <img src={logo} alt="" />
        </div>
      </div>
      <p className="text-5xl">{count}</p>
    </div>
  );
};

export default Card;
