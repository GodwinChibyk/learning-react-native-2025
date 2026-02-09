import { ExploreModal } from "@/components/ui/modals/ExploreModal";
import { Pressable, ScrollView, Text, View } from "react-native";
import { magicModal } from "react-native-magic-modal";

export default function TabTwoScreen() {
  const openModal = () => {
    magicModal.show(ExploreModal);
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
    </ScrollView>
  );
}
