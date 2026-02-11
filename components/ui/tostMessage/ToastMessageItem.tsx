import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
interface ToastMessageItemProps {
  type: "success" | "error" | "warning" | "info";
  text1: string;
  text2: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

export const ToastMessageItem = ({
  type,
  text1,
  text2,
  icon,
  onClose,
}: ToastMessageItemProps) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-green-50";
      case "error":
        return "bg-red-50";
      case "info":
        return "bg-blue-50";
      case "warning":
        return "bg-yellow-50";
      default:
        return "bg-green-50";
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case "success":
        return "border-green-600";
      case "error":
        return "border-red-500";
      case "info":
        return "border-blue-300";
      case "warning":
        return "border-yellow-500";
      default:
        return "border-green-600";
    }
  };
  return (
    <View
      style={{
        marginHorizontal: 20,
        borderRadius: 24,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.25,
        boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.14)",
      }}
      className={`${getBackgroundColor()} ${getBorderColor()} border`}
    >
      {/* Text Content */}
      <View className="flex-1 ml-3 justify-center relative">
        {icon && (
          <TouchableOpacity
            className="absolute right-0 top-0 p-1 z-20"
            onPress={() => onClose?.()}
          >
            {icon}
          </TouchableOpacity>
        )}
        <View className="flex-row space-x-2 items-start">
          <Text
            className={"text-[14px] font-bold text-black text-center flex-1"}
          >
            {text1}
          </Text>
          {/* Close Icon - Inline position */}
        </View>
        <Text className="text-black font-[14px] leading-[21px] text-center">
          {text2}
        </Text>
      </View>
    </View>
  );
};
