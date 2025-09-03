import { isNullOrUndefined } from "../utils/common";

type Props = {
  value: number;
};

const Number = ({ value }: Props) => {
  return (
    <p
      className={`text-right ${value < 0 ? "text-red-500": ""}`}
    >
      {isNullOrUndefined(value) ? "-" : `$ ${value}`}
    </p>
  );
};

export default Number;
