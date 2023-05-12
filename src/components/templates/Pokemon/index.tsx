import React, { Suspense, useCallback, useState } from "react";
import styles from "./Pokemon.module.scss";
import { PokemonDetail } from "@/components/organisms/PokemonDetail";
import { ErrorBoundaryProvider } from "@/components/helpers/ErrorBoundaries/ErrorBoundaryProvider";

type Props = {};

export const Pokemon: React.FC<Props> = () => {
  const [pokemonId, setPokemonId] = useState(331);
  const onChange = useCallback(
    (event: any) => setPokemonId(event.target.value),
    []
  );

  return (
    <main>
      <input type="text" onChange={onChange} />
      <ErrorBoundaryProvider>
        <PokemonDetail pokemonId={pokemonId} />
      </ErrorBoundaryProvider>
    </main>
  );
};
