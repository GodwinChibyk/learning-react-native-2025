import { useQuery } from "@tanstack/react-query";
import { IPokemonDetail } from "../interface/IPokemon";

export const useGetPokemonDetail = (url: string) => {
  //
  const handleGetPokemonDetail = async () => {
    const response = await fetch(url);
    const data: IPokemonDetail = await response.json();
    return data;
  };
  //
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon-detail", url],
    queryFn: handleGetPokemonDetail,
  });

  return { data, isLoading, error };
};