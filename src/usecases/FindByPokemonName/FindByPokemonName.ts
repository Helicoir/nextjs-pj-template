import { usePokeApiFetcher, usePokemonSpecies } from "@/hooks/fetchers/PokeApi";

export type UseFindByPokemonNameType = (payload: { pokemonId: number }) => any;

export const UseFindByPokemonName: UseFindByPokemonNameType = function ({
  pokemonId,
}) {
  const { data: nameData, isLoading: nameIsLoading } = usePokeApiFetcher({
    pokemonId,
  });
  const { data: speciesData, isLoading: speciesIsLoading } = usePokemonSpecies({
    pokemonId,
  });
  const isLoading = nameIsLoading || speciesIsLoading;
  return { data: nameData, species: speciesData, isLoading };
};
