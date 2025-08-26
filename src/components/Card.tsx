type Props = {
  heading: string;
  backgroundColor: string;
  logo: string;
  count: string | number;
};

const Card = ({ heading, backgroundColor, logo, count }: Props) => {
  return (
    <div className="p-8 bg-white rounded-md">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl">{heading}</p>
        <div className={`${backgroundColor} ml-4 p-2 rounded-full`}>
          <img src={logo} alt="" />
        </div>
      </div>
      <p className="text-5xl">{count}</p>
    </div>
  );
};

export default Card;
