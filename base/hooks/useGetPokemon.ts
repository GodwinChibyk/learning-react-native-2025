import { useQuery } from "@tanstack/react-query";
import { IPokemon } from "../interface/IPokemon";

export const useGetPokemon = () => {
  //
  const handleGetPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data: IPokemon = await response.json();
    return data;
  };
  //
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["pokemon"],
    queryFn: handleGetPokemon,
  });

  return { data, isLoading, error, refetch };
};
