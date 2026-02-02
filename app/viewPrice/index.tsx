import { useRouter } from "expo-router";
import { replace } from "expo-router/build/global-state/routing";
import React from "react";
import { Pressable, Text, View } from "react-native";

const ViewPriceScreen = () => {
  const { push, back, replace } = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-black dark:text-white">
        ViewPrice Screen
      </Text>
      <Pressable
        className="mt-4"
        onPress={() => replace("/viewPrice/priceUpdate")}
      >
        <Text className="text-sm text-blue-500 dark:text-blue-400">
          Goto Price Update
        </Text>
      </Pressable>

      <Pressable
        className="mt-4"
        onPress={() => back()}
      >
        <Text className="text-sm text-blue-500 dark:text-blue-400">
          Go Back
        </Text>
      </Pressable>
    </View>
  );
};

export default ViewPriceScreen;
