import { products } from "@/base/mockData/products";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductScreen = () => {
  const { top } = useSafeAreaInsets();
  const { product_Id } = useLocalSearchParams();
  const item = products.find((item) => item.id === Number(product_Id));
  const colorScheme = useColorScheme();

  const { back, push } = useRouter();

  if (!item) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-black dark:text-white text-center">
          Product not found
        </Text>
      </View>
    );
  }
  return (
    <View
      className="flex-1"
      style={{ paddingTop: top + 10, paddingHorizontal: 16 }}
    >
      <View className="flex-row items-center gap-x-5">
        <Pressable onPress={() => back()}>
          <IconSymbol
            name="chevron.left"
            size={28}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </Pressable>
        <Text className="text-2xl font-bold text-black dark:text-white text-center">
          Product Details
        </Text>
      </View>

      <View className="pb-8 mt-8">
        <Image
          source={{ uri: item.image }}
          contentFit="cover"
          className="w-20 h-20"
          style={{ width: 100, height: 100 }}
        />
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

      <Pressable onPress={() => push("/viewPrice")}>
        <Text className="text-sm text-blue-500 dark:text-blue-400">
          View Price
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductScreen;
