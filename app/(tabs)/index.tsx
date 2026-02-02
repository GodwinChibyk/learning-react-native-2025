import { products } from "@/base/mockData/products";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const { push } = useRouter();
  const renderProduct = useCallback(
    (item: (typeof products)[number]) => (
      <View key={item.id} className="pb-8">
        <Pressable onPress={() => push(`/(tabs)/${item.id}`)}>
          <Image
            source={{ uri: item.image }}
            contentFit="cover"
            className="w-20 h-20"
            style={{ width: 100, height: 100 }}
          />
        </Pressable>
        <Text className="text-lg font-bold text-black dark:text-white">
          {item.name}
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          {item.price}
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          {item.description}
        </Text>
      </View>
    ),
    [],
  );

  return (
    <View className="flex-1" style={{ paddingTop: top + 10 }}>
      <Text className="text-2xl font-bold text-black dark:text-white text-center">
        Products
      </Text>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        style={{ paddingTop: 10 }}
      > */}
      {/* Products list */}
      <FlatList
        data={products}
        renderItem={({ item }) => renderProduct(item)}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        className="flex-1"
        style={{ paddingTop: 10, paddingHorizontal: 16 }}
      />
      {/* </ScrollView> */}
    </View>
  );
}
