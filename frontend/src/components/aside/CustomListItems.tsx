"use client";
import { CustomListItemPropType } from "@/types/type";
import { useRouter } from "next/navigation";

const CustomListItems = ({ label, isActive, pointer, setActiveLink }: CustomListItemPropType) => {
  const router = useRouter();

  const handleRouting = () => {
    if (pointer) {
      setActiveLink!(label);
      router.push(`/${pointer}`);
    }
  };

  return (
    <li onClick={handleRouting} className={`px-2 text-sm font-medium  cursor-pointer py-1 transition-colors hover:text-gray-800 ${isActive ? "text-gray-800" : "text-[#6b7280]"}`}>
      {label}
    </li>
  );
};
export default CustomListItems;
