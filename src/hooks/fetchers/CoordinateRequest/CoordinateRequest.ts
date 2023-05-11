import { useFetch, useQueryManager } from "@/hooks/helpers/RequestManager";
import { APIEndpoints } from "@/configs/API/endpoints";

export const useCoordinateRequestFetcher = function () {
  return useQueryManager(
    [APIEndpoints.TEST_COORDINATE_ENDPOINT],
    () => useFetch(APIEndpoints.TEST_COORDINATE_ENDPOINT),
    {}
  );
};
