import { useFetch, useQueryManager } from "@/hooks/helpers/RequestManager";
import { APIEndpoints } from "@/configs/API/endpoints";

export type PokeApiFetcherType = { pokemonId: number };

export const usePokeApiFetcher = function ({ pokemonId }: PokeApiFetcherType) {
  return useQueryManager(
    [APIEndpoints.POKEMON_NAME, { pokemonId }],
    async () => await useFetch(`${APIEndpoints.POKEMON_NAME}/${pokemonId}`),
    {}
  );
};

export const usePokemonSpecies = function ({ pokemonId }: PokeApiFetcherType) {
  return useQueryManager(
    [APIEndpoints.POKEMON_SPECIES, { pokemonId }],
    async () => await useFetch(`${APIEndpoints.POKEMON_SPECIES}/${pokemonId}`),
    {}
  );
};
