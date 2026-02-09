import { ExploreModal } from "@/components/ui/modals/ExploreModal";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";
import { magicModal } from "react-native-magic-modal";

export default function TabTwoScreen() {
  const openModal = () => {
    magicModal.show(ExploreModal);
  };
  const openSheet = () => {
    SheetManager.show("explore-sheet", {
      payload: {
        count: 5,
        increment: () => {},
        decrement: () => {},
      },
    });
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 py-4 px-8"
    >
      <View>
        <Pressable className="bg-blue-500 p-2 rounded-md" onPress={openModal}>
          <Text className="text-white text-center font-bold">Open Modal</Text>
        </Pressable>
      </View>

      <Pressable
        className="bg-blue-500 py-3 px-5 rounded-md mt-8"
        onPress={openSheet}
      >
        <Text className="text-white text-center font-bold">Open Sheet</Text>
      </Pressable>
    </ScrollView>
  );
}
