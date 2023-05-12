import { ValueOf } from "@/utils/types";
import { POKEAPI_BASEURL } from ".";

const baseUrl = "/api";

export const APIEndpoints = {
  TEST_ENDPOINT: `${baseUrl}/sample`,
  TEST_HELLO_ENDPOINT: `${baseUrl}/hello`,
  TEST_COORDINATE_ENDPOINT: `${baseUrl}/coordinates`,
  POKEMON_NAME: `${POKEAPI_BASEURL}/pokemon`,
};

export type APIEndpointName = keyof typeof APIEndpoints;
export type APIEndpoint = ValueOf<typeof APIEndpoints>;
