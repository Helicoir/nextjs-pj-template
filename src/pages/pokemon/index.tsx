import { Pokemon } from "@/components/templates/Pokemon";
import {
  usePokeApiPrefetcher,
  usePokemonSpeciesPrefetch,
} from "@/hooks/fetchers/PokeApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";

const PokemonPage = (props: any) => {
  console.log(props);
  return <Pokemon />;
};

export async function getStaticProps() {
  const queryClientForPrefetch = new QueryClient();
  usePokeApiPrefetcher({
    queryClientForPrefetch,
    pokemonId: 600,
  });
  usePokemonSpeciesPrefetch({
    queryClientForPrefetch,
    pokemonId: 600,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClientForPrefetch),
    },
  };
}

export default PokemonPage;
