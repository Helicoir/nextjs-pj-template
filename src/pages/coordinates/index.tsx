import { Coordinate } from "@/components/templates/Coordinate";
import { useCoordinateMutators, useCoordinateState } from "@/stores/Coordinate";
import { UseForecast } from "@/usecases/Forecast";
import { useEffect } from "react";

const CoordinatesPage = (props: any) => {
  const { update } = useCoordinateMutators();

  useEffect(() => {
    update({ coordinate: props.forecastResult[0].publishingOffice });
  }, []);

  useEffect(() => console.log("rendered"), []);

  return <Coordinate {...props} />;
};

export async function getStaticProps() {
  return await UseForecast();
}

export default CoordinatesPage;
