import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoutLogo from "../assets/active/logout.svg";
import peakLogo from "../assets/logo.svg";
import { LEFT_MENU } from "../constants/common";

type Props = {
  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
};

const Leftmenu = ({ activeTabId, setActiveTabId }: Props) => {
  const navigate = useNavigate();
  return (
    <section className="w-[260px] min-w-[260px] border-r-[1px] border-gray-300 flex flex-col justify-between">
      <div className="flex items-center justify-left border-b-[1px] border-gray-300 p-4">
        <img
          src={peakLogo}
          alt="sequoia"
          className="w-[120px] py-2"
          width="16"
          height="29"
        />
      </div>
      <div className="p-4 grow">
        {LEFT_MENU.map((item) => (
          <div
            className={`flex items-center mb-4 p-4 rounded-md cursor-pointer ${
              activeTabId === item?.id ? "bg-[#f2fbfb] text-[#01a7a5]" : ""
            }`}
            onClick={() => {
              setActiveTabId(item?.id)
              navigate(item?.id);
            }}
          >
            <img
              src={activeTabId === item?.id ? item.activeIcon : item.icon}
              alt={item.name}
            />
            <span className="ml-3">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="p-4">
        <Button
          component="label"
          role={undefined}
          variant="secondary-v2"
          tabIndex={-1}
          startIcon={<img src={logoutLogo} height="29" alt="logout" />}
        >
          Logout
        </Button>
      </div>
    </section>
  );
};

export default Leftmenu;
