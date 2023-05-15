import { useTestRequestFetcher } from "@/hooks/fetchers/TestRequest";

export type UseTestRequestType = {};

export const UseTestRequest = function () {
  const { data, isError, error } = useTestRequestFetcher();

  return { data, error, isError };
};
