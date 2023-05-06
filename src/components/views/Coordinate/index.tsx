import { useCallback } from "react";
import { useCoordinateMutators, useCoordinateState } from "@/stores/Coordinate";
import Link from "next/link";

export type Props = { test?: any };

export const Coordinate: React.FC<Props> = ({ test }) => {
  const { coordinate } = useCoordinateState();
  const { update } = useCoordinateMutators();

  const onClick = useCallback(() => update({ coordinate: "aaaaaa" }), []);
  return (
    <main>
      <p>testtesttest</p>
      <p>{coordinate || "何もセットされてません"}</p>
      <button onClick={onClick}>文字列をセットする</button>
      <Link href="/">top</Link>
    </main>
  );
};
