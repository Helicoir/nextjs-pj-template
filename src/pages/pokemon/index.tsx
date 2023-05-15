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
  const {} = usePokeApiPrefetcher({
    queryClientForPrefetch,
    pokemonId: 1000,
  });
  const {} = usePokemonSpeciesPrefetch({
    queryClientForPrefetch,
    pokemonId: 1000,
  });

  return {
    dehydratedState: dehydrate(queryClientForPrefetch),
  };
}

export default PokemonPage;
