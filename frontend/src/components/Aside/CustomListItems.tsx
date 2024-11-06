import { CustomListItemPropType } from "@/types/type";

const CustomListItems = ({label, isActive}:CustomListItemPropType) => <li className={`px-2 text-sm font-medium  cursor-pointer py-1 transition-colors hover:text-gray-800 ${isActive ? "text-gray-800" : "text-[#6b7280]"}`}>{label}</li>
 export default CustomListItems