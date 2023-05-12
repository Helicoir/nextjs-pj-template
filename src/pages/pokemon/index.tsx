import { Pokemon } from "@/components/templates/Pokemon";
import { UseFindByPokemonName } from "@/usecases/FindByPokemonName";
import { UseForecast } from "@/usecases/Forecast";

const PokemonPage = (props: any) => {

  return <Pokemon />;
};

export async function getStaticProps() {
  return await UseForecast();
}

export default PokemonPage;
