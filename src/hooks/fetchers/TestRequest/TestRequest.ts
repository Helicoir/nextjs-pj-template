import { useFetch, useQueryManager } from "@/hooks/helpers/RequestManager";
import { APIEndpoints } from "@/configs/API/endpoints";

export const useTestRequestFetcher = function () {
  return useQueryManager(
    [APIEndpoints.TEST_ENDPOINT],
    () => useFetch(APIEndpoints.TEST_ENDPOINT),
    {}
  );
};
