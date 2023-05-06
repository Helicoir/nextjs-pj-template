import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

type CoordinateState = {
  coordinate: any;
};

const CoordinateRecoilState = atom<CoordinateState>({
  key: "Coordinate",
  default: { coordinate: null },
});

export const useCoordinateState = () => {
  return useRecoilValue(CoordinateRecoilState);
};

export const useCoordinateMutators = () => {
  const setState = useSetRecoilState(CoordinateRecoilState);

  const update = useCallback(
    (payload: CoordinateState) => setState(payload),
    [setState]
  );

  return { update };
};
