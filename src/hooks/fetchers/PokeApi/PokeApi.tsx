import {
  useFetch,
  usePrefetchQueryManager,
  useQueryManager,
} from "@/hooks/helpers/RequestManager";
import { APIEndpoints } from "@/configs/API/endpoints";
import { queryClientForPrefetch } from "@/utils/types/fetcher";

export type PokeApiFetcherType = { pokemonId: number };
export type PokeApiPrefetcherType = queryClientForPrefetch & PokeApiFetcherType;

export const usePokeApiFetcher = function ({ pokemonId }: PokeApiFetcherType) {
  return useQueryManager(
    [APIEndpoints.POKEMON_NAME, { pokemonId }],
    async () => await useFetch(`${APIEndpoints.POKEMON_NAME}/${pokemonId}`),
    {}
  );
};

export const usePokeApiPrefetcher = function ({
  queryClientForPrefetch,
  pokemonId,
}: PokeApiPrefetcherType) {
  return usePrefetchQueryManager(
    queryClientForPrefetch,
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
export const usePokemonSpeciesPrefetch = function ({
  queryClientForPrefetch,
  pokemonId,
}: PokeApiPrefetcherType) {
  return usePrefetchQueryManager(
    queryClientForPrefetch,
    [APIEndpoints.POKEMON_SPECIES, { pokemonId }],
    async () => await useFetch(`${APIEndpoints.POKEMON_SPECIES}/${pokemonId}`),
    {}
  );
};
