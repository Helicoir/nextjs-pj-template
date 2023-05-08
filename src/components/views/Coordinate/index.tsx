import { useCallback } from "react";
import { useCoordinateMutators, useCoordinateState } from "@/stores/Coordinate";
import Link from "next/link";

export const Coordinate: React.FC = (props) => {
  const { coordinate } = useCoordinateState();
  return (
    <main>
      <p>testtesttest</p>
      <p>{coordinate || "何もセットされてません"}</p>
      {/* <button onClick={onClick}>文字列をセットする</button> */}
      <Link href="/">top</Link>
    </main>
  );
};
