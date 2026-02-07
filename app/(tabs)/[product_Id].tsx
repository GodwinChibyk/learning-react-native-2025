import { useGetPokemonDetail } from "@/base/hooks/useGetPokemonDetail";
import { useHomeScreenStore } from "@/base/store/useHomeScreenStore";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image } from "expo-image";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ProductScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemon_url } = useLocalSearchParams();
  const url = pokemon_url as string;
  const colorScheme = useColorScheme();

  const { data, isLoading, error } = useGetPokemonDetail(url as string);
  const { increment } = useHomeScreenStore();

  const { back, push } = useRouter();

  useFocusEffect(
    useCallback(() => {
      increment();
    }, [increment])
  );

  if (!isLoading && !data) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-black dark:text-white text-center">
          Pokemon not found
        </Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-black dark:text-white text-center">
          Loading...
        </Text>
      </View>
    );
  }
  if (error) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-black dark:text-white text-center">
          Error: {error.message}
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
          source={{ uri: data?.sprites?.front_default }}
          contentFit="cover"
          className="w-20 h-20"
          style={{ width: 100, height: 100 }}
        />
        <Text className="text-lg font-bold text-black dark:text-white">
          {data?.name}
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          {data?.base_experience}
        </Text>
        <Text className="text-sm text-gray-500 dark:text-gray-400">
          {data?.types.map((type) => type.type.name).join(", ")}
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
