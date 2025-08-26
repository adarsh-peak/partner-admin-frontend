import { LEFT_MENU } from "../constants/common";

type Props = {
  activeTabId: string;
}

const Header = ({ activeTabId }: Props) => {
  const tab = LEFT_MENU.find((item) => item?.id === activeTabId);

  return (
    <section className="p-4 border-b-[1px] border-gray-300 w-full h-[69.66px] flex flex-col justify-left bg-white">
      <p className="text-xl font-medium">{tab?.name || ""}</p>
      <p className="text-sm">Welcome back, Adarsh Goswami</p>
    </section>
  );
};

export default Header;
