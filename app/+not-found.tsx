import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const NotFoundScreen = () => {
  const { push }: any = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-red-600">
      <Text className="text-2xl font-bold text-white">NotFoundScreen</Text>
      <Pressable onPress={() => push("/(tabs)/index")}>
        <Text className="text-2xl font-bold text-white">Go to home screen</Text>
      </Pressable>
    </View>
  );
};

export default NotFoundScreen;
