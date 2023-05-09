import { Coordinate } from "@/components/views/Coordinate";
import { useCoordinateMutators } from "@/stores/Coordinate";
import { UseForecast } from "@/usecases/Forecast";
import { useEffect } from "react";

const CoordinatesPage = (props: any) => {
  const { update } = useCoordinateMutators();

  useEffect(() => {
    update({ coordinate: props.forecastResult[0].publishingOffice });
  }, []);

  return <Coordinate {...props} />;
};

export async function getStaticProps() {
  return await UseForecast();
}

export default CoordinatesPage;
