import PesaIcon from "../../assets/icons/PesaIcon.svg";
import PesaDollarIcon from "../../assets/icons/PesaDollorIcon.svg";
import EtherIcon from "../../assets/icons/EtherIcon.svg";
import DaiIcon from "../../assets/icons/DaiIcon.svg";
import TetherIcon from "../../assets/icons/TetherIcon.svg";
import UsdcIcon from "../../assets/icons/UsdcIcon.svg";

export const NAV_ITEMS = [
  { id: 1, label: "My wallet", route: "/my-wallet" },
  { id: 2, label: "Contacts", route: "contacts" },
  { id: 3, label: "Transactions", route: "transactions" },
];
export const ASSETS_LIST = [
  {
    id: 1,
    name: "PESA",
    icon: PesaIcon,
    value: "565.649 PESA",
    dollar: "$4956.23",
  },
  {
    id: 2,
    name: "PESA Dollar",
    icon: PesaDollarIcon,
    value: "58.69 PUSD",
    dollar: "58.69 PUSD",
  },
  {
    id: 3,
    name: "Ether",
    icon: EtherIcon,
    value: "5.51 ETH",
    dollar: "5.51 ETH",
  },
  { id: 4, name: "Dai", icon: DaiIcon, value: "55.49 Dai", dollar: "$1956.23" },
  {
    id: 5,
    name: "Tether",
    icon: TetherIcon,
    value: "1000.00 USDT",
    dollar: "$256.23",
  },
  {
    id: 6,
    name: "USDC",
    icon: UsdcIcon,
    value: "10000.00 USDC",
    dollar: "$956.23",
  },
];
