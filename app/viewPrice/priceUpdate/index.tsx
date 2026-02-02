import { useRouter } from "expo-router";
import { dismissAll } from "expo-router/build/global-state/routing";
import React from "react";
import { Pressable, Text, View } from "react-native";

const PriceUpdateScreen = () => {
  const { back, push, replace, canGoBack, dismiss,  } = useRouter();
  if(!canGoBack()) {
    console.log("No back history");
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-black dark:text-white">
        PriceUpdate Screen
      </Text>
      <Pressable onPress={() => replace("/viewPrice")} className="mt-4">
        <Text className="text-sm text-blue-500 dark:text-blue-400">Go Back</Text>
      </Pressable>
    </View>
  );
};

export default PriceUpdateScreen;
