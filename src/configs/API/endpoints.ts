import { ValueOf } from "@/utils/types";

const baseUrl = "/api";

export const APIEndpoints = {
  TEST_ENDPOINT: `${baseUrl}/test`,
  TEST_HELLO_ENDPOINT: `${baseUrl}/hello`,
};

export type APIEndpointName = keyof typeof APIEndpoints;
export type APIEndpoint = ValueOf<typeof APIEndpoints>;
