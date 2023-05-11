import { useCoordinateRequestFetcher } from "@/hooks/fetchers/CoordinateRequest";
import { useTestRequestFetcher } from "@/hooks/fetchers/TestRequest";
import { useEffect, useState } from "react";

export type UseTestRequestType = {};

export const UseTestRequest = function () {
  const { data, isError, error } = useTestRequestFetcher();
  const { data: coordinateData } = useCoordinateRequestFetcher();

  return { data, error, isError, coordinateData };
};
