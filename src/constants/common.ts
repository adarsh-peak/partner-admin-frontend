import analyticsIcon from "../assets/analytics.svg";
import buildingIcon from "../assets/building.svg";
import contactIcon from "../assets/contact.svg";
import documentIcon from "../assets/document.svg";
import gaugeIcon from "../assets/gauge.svg";
import phoneIcon from "../assets/phone.svg";
import recieptIcon from "../assets/reciept.svg";

import analyticsActiveIcon from "../assets/active/analytics.svg";
import buildingActiveIcon from "../assets/active/building.svg";
import contactActiveIcon from "../assets/active/contact.svg";
import documentActiveIcon from "../assets/active/document.svg";
import gaugeActiveIcon from "../assets/active/gauge.svg";
import phoneActiveIcon from "../assets/active/phone.svg";
import recieptActiveIcon from "../assets/active/reciept.svg";

import activityLogo from "../assets/activity.svg";
import reminderLogo from "../assets/reminder.svg";
import reportLogo from "../assets/report.svg";

export const LEFT_MENU = [
  {
    id: "dashboard",
    name: "Dashboard",
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

export const HOME_TABS = [
  {
    id: "reminder",
    name: "Reminders",
    icon: reminderLogo,
    bgColor: "bg-[#fff3d6]",
  },
  {
    id: "recent-activity",
    name: "Recent Activity",
    icon: activityLogo,
    bgColor: "bg-[#f2fbfb]",
  },
  // {
  //   id: "fund-raising",
  //   name: "Fund Raising",
  //   icon: reminderLogo,
  //   bgColor: "bg-[#f2fbfb]"
  // },
  {
    id: "latest-report",
    name: "Latest Reports",
    icon: reportLogo,
    bgColor: "bg-[#FFDED1]",
  },
];

export const QUATERLY_REPORT_ROWS_LIST = [
  { id: "Committed_Capital", name: "Comitted Capital" },
  { id: "Open_Capital_Account", name: "Opening Capital Account" },
  { id: "Capital_Contribution", name: "Capital Contribution" },
  { id: "Operating_Income", name: "Operating Income (Loss)" },
  { id: "Investment_Gain_Realized", name: "Realized Investment Gain (Loss)" },
  {
    id: "Investment_Gain_Unrealized",
    name: "Unrealized Investment Gain (Loss)",
  },
  {
    id: "Net_Priority_Reallocation",
    name: "Unrealized Investment Gain (Loss)",
    showIfData: true,
  },
  {
    id: "Restructuring_Reallocation",
    name: "Restructuring Reallocation",
    showIfData: true,
  },
  {
    id: "Reallocation_Due_To_Excess_Fund_Investment",
    name: "Reallocation Due To Excess Fund Investment",
    showIfData: true,
  },
  { id: "Distributions", name: "Distributions" },
  {
    id: "LP_Transfer",
    name: "LP Transfer",
    showIfData: true,
  },
  { id: "Closing_Capital_Account", name: "Closing Capital Account" },
];
