import { useGetPokemon } from "@/base/hooks/useGetPokemon";
import { Result } from "@/base/interface/IPokemon";
import { useHomeScreenStore } from "@/base/store/useHomeScreenStore";
import { LegendList } from "@legendapp/list";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const { push } = useRouter();
  const { data, isLoading, error, refetch } = useGetPokemon();
  const { count } = useHomeScreenStore();

  useFocusEffect(
    useCallback(() => {
      if (count > 0) {
        refetch();
      }
    }, [count, refetch])
  );

  const renderProduct = useCallback(
    (item: Result, index: number) => (
      <View
        key={item.name}
        className="pb-4 border-b border-gray-200 dark:border-gray-800"
      >
        <Pressable
          onPress={() => push(`/(tabs)/${index}?pokemon_url=${item.url}`)}
        >
          {/* <Image
            source={{ uri: item.url }}
            contentFit="cover"
            className="w-20 h-20"
            style={{ width: 100, height: 100 }}
          /> */}
          <Text className="text-lg font-bold text-black dark:text-white">
            {item.name}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {100}
          </Text>
        </Pressable>
      </View>
    ),
    []
  );

  return (
    <View className="flex-1" style={{ paddingTop: top + 10 }}>
      <Text className="text-2xl font-bold text-black dark:text-white text-center">
        Pokemon
      </Text>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1"
        style={{ paddingTop: 10 }}
      > */}
      {/* Products list */}
      {!isLoading && data?.results?.length && data?.results?.length > 0 ? (
        <LegendList
          data={data?.results}
          renderItem={({ item, index }: { item: Result; index: number }) =>
            renderProduct(item, index)
          }
          keyExtractor={(item: Result) => item.name}
          extraData={data?.results}
          showsVerticalScrollIndicator={false}
          className="flex-1"
          style={{ paddingTop: 10, paddingHorizontal: 16 }}
        />
      ) : null}
      {isLoading && (
        <Text className="text-center text-gray-500 dark:text-gray-400">
          Loading...
        </Text>
      )}
      {error && (
        <Text className="text-center text-red-500 dark:text-red-400">
          Error: {error.message}
        </Text>
      )}
      {!isLoading && !data?.results?.length && (
        <Text className="text-center text-gray-500 dark:text-gray-400">
          No data found
        </Text>
      )}
      {/* </ScrollView> */}
    </View>
  );
}
