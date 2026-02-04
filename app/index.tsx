import { IS_NEW_USER_KEY, storage } from "@/constants/mmkvStore";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const WelcomeScreen = () => {
  const { replace } = useRouter();

  const isNewUser = storage.getString(IS_NEW_USER_KEY);

  setTimeout(() => {
    if (isNewUser) {
      replace("/(tabs)/home");
    }
  }, 500);

  const handlePress = () => {
    replace("/(tabs)/home");
    storage.set(IS_NEW_USER_KEY, "newUser");
  };

  return (
    <>
      {!isNewUser ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl text-center text-black: dark:text-white font-semibold capitalize">
            Welcome to my App
          </Text>
          <Pressable className="mt-8" onPress={handlePress}>
            <Text className="text-xl font-bold text-blue-600">
              Go to home screen
            </Text>
          </Pressable>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default WelcomeScreen;
