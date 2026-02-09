import React from "react";
import { Pressable, Text, View } from "react-native";
import { useMagicModal } from "react-native-magic-modal";

export const ExploreModal = () => {
  const { hide } = useMagicModal();
  return (
    <View className="py-4 px-8 bg-white dark:bg-black rounded-lg items-center justify-center border border-gray-200 dark:border-gray-400">
      <Text className="text-2xl font-bold text-black dark:text-white">
        ExploreModal
      </Text>
      <Text className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
        This is the explore modal
      </Text>
      <Pressable
        className="bg-blue-500 py-3 px-5 rounded-md mt-8"
        onPress={() => hide(undefined)}
      >
        <Text className="text-white">Close</Text>
      </Pressable>
    </View>
  );
};
