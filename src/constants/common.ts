import analyticsIcon from "../assets/analytics.svg";
import buildingIcon from "../assets/building.svg";
import contactIcon from "../assets/contact.svg";
import gaugeIcon from "../assets/gauge.svg";
import phoneIcon from "../assets/phone.svg";
import recieptIcon from "../assets/reciept.svg";
import documentIcon from "../assets/document.svg";

import analyticsActiveIcon from "../assets/active/analytics.svg";
import buildingActiveIcon from "../assets/active/building.svg";
import contactActiveIcon from "../assets/active/contact.svg";
import gaugeActiveIcon from "../assets/active/gauge.svg";
import phoneActiveIcon from "../assets/active/phone.svg";
import recieptActiveIcon from "../assets/active/reciept.svg";
import documentActiveIcon from "../assets/active/document.svg";

export const LEFT_MENU = [
  {
    id: "relation",
    name: "Relationship Dashboard",
    activeIcon: gaugeActiveIcon,
    icon: gaugeIcon,
  },
  {
    id: "portfolio",
    name: "Portfolio Dashboard",
    activeIcon: buildingActiveIcon,
    icon: buildingIcon,
  },
  {
    id: "financial-statements",
    name: "Financial Statements",
    activeIcon: documentActiveIcon,
    icon: documentIcon,
  },
  {
    id: "distributions",
    name: "Distributions",
    activeIcon: documentActiveIcon,
    icon: documentIcon,
  },
  {
    id: "cash-calls",
    name: "Cash Calls",
    activeIcon: phoneActiveIcon,
    icon: phoneIcon,
  },
  {
    id: "k1",
    name: "K-1 s",
    activeIcon: recieptActiveIcon,
    icon: recieptIcon,
  },
  {
    id: "analytics",
    name: "Analytics",
    activeIcon: analyticsActiveIcon,
    icon: analyticsIcon,
  },
  {
    id: "contacts",
    name: "Contact List",
    activeIcon: contactActiveIcon,
    icon: contactIcon,
  },
];
