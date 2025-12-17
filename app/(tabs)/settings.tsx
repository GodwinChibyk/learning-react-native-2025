import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const settingsScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <AntDesign name="setting" size={24} color="white" />
      <Text className="text-2xl font-bold text-white">settings Screen</Text>
    </View>
  );
};

export default settingsScreen;
