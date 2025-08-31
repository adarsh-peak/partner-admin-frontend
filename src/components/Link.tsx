import { useNavigate } from "react-router-dom";

type Props = {
  value: string;
  redirect_url: string;
};

const Link = ({ value, redirect_url }: Props) => {
  const navigate = useNavigate();
  return (
    <p
      className="cursor-pointer decoration-solid decoration-2 underline-offset-3"
      onClick={() => navigate(redirect_url)}
    >
      {value}
    </p>
  );
};

export default Link;
