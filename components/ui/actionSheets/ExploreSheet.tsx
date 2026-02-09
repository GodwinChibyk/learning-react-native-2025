import React from "react";
import { Pressable, Text, View } from "react-native";
import ActionSheet, {
  SheetManager,
  useSheetPayload,
} from "react-native-actions-sheet";

export const ExploreSheet = () => {
  const { count } = useSheetPayload<"explore-sheet">("explore-sheet");
  const handleClose = () => {
    SheetManager.hide("explore-sheet");
  };
  return (
    <ActionSheet id="explore-sheet" gestureEnabled={true} closable={false}>
      <View className="py-4 px-8 bg-white dark:bg-black rounded-lg items-center justify-center border border-gray-200 dark:border-gray-400">
        <Text className="text-2xl font-bold text-black dark:text-white">
          ExploreSheet
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
          This is the explore sheet
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
          {count}
        </Text>
        <Pressable
          className="bg-blue-500 py-3 px-5 rounded-md mt-8"
          onPress={handleClose}
        >
          <Text className="text-white">Close</Text>
        </Pressable>
      </View>
    </ActionSheet>
  );
};
