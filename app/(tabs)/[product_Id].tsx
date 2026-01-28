import { products } from "@/base/mockData/products";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductScreen = () => {
  const { top } = useSafeAreaInsets();
  const { product_Id } = useLocalSearchParams();
  const item = products.find((item) => item.id === Number(product_Id));

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
      <Text className="text-2xl font-bold text-black dark:text-white text-center">
        Product Details
      </Text>

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
    </View>
  );
};

export default ProductScreen;
