import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

const settingsScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-red-600">
      <AntDesign name="setting" size={24} color="white" />
      <Text className="text-2xl font-bold text-white">settings Screen</Text>
      <Link href="../modal">
        <Text className="text-2xl font-bold text-white">Go to modal</Text>
      </Link>
      <Link href="../auth">
        <Text className="text-2xl font-bold text-white">Go to auth</Text>
      </Link>
    </View>
  );
};

export default settingsScreen;
