import { Pokemon } from "@/components/templates/Pokemon";
import {
  usePokeApiFetcher,
  usePokeApiPrefetcher,
  usePokemonSpeciesPrefetch,
} from "@/hooks/fetchers/PokeApi";
import { DehydratedState, QueryClient, dehydrate } from "@tanstack/react-query";

type Props = { dehydratedState: DehydratedState };

const PokemonPage = (props: Props) => {
  props.dehydratedState.queries.forEach((q) => console.log(q.state.data));
  return <Pokemon />;
};

export async function getStaticProps() {
  const queryClientForPrefetch = new QueryClient();
  await usePokeApiPrefetcher({
    queryClientForPrefetch,
    pokemonId: 432,
  });
  await usePokemonSpeciesPrefetch({
    queryClientForPrefetch,
    pokemonId: 432,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClientForPrefetch),
    },
  };
}

export default PokemonPage;
