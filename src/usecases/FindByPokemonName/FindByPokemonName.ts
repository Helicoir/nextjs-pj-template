import { usePokeApiFetcher } from "@/hooks/fetchers/PokeApi";

export type UseFindByPokemonNameType = (payload: { pokemonId: number }) => any;

export const UseFindByPokemonName: UseFindByPokemonNameType = function ({
  pokemonId,
}) {
  const { data, isLoading } = usePokeApiFetcher({ pokemonId });
  return { data, isLoading };
};
