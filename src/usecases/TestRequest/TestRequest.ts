import { useTestRequestFetcher } from "@/hooks/fetchers/TestRequest";
import { useEffect, useState } from "react";

export type UseTestRequestType = {};

export const UseTestRequest = function () {
  const { data, isError, error } = useTestRequestFetcher();
  console.log(data);

  return { data, error, isError };
};
