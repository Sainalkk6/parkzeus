import { CustomLabelPropType } from "@/types/type";

const CustomLabel = ({ image, label }: CustomLabelPropType) => {
    return (
      <div className="inline-flex item-center w-full cursor-pointer transition-colors duration-150 hover:text-gray-800  text-[#6b7280]">
        <img src={image} alt="" />
        <span className="ml-4 text-sm font-bold">{label}</span>
      </div>
    );
  };
  
  export default CustomLabel;