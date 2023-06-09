import { APIEndpoint } from "@/configs/API/endpoints";
import { QueryClient, UseQueryOptions, useQuery } from "@tanstack/react-query";

export const useFetch = async (url: APIEndpoint) => {
  const res = await fetch(url);
  return res.json();
};

export const useQueryManager = <
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TQueryFnData,
  TError,
  TData = TQueryFnData
>(
  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1], token?: string) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<unknown, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey,
    queryFn: () => fetcher(queryKey[1]),
    ...options,
  });
};

export const usePrefetchQueryManager = <
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TQueryFnData,
  TError,
  TData = TQueryFnData
>(
  queryClient: QueryClient,
  queryKey: TQueryKey,
  fetcher: (params: TQueryKey[1], token?: string) => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<unknown, TError, TData, TQueryKey>,
    "queryKey" | "queryFn"
  >
) => {
  // getStaticPropsで呼ぶ場合prefetch用のqueryClientを上から渡す
  return queryClient.prefetchQuery({
    queryKey,
    queryFn: () => fetcher(queryKey[1]),
    ...options,
  });
};
