---
name: "generate: hooks/fetchers"
root: "."
output: "./src/hooks/fetchers"
questions:
  name: "Enter the fetcher name..."
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from "./{{ inputs.name }}";
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import { useFetch, useQueryManager } from "@/hooks/helpers/RequestManager";
import { APIEndpoints } from "@/configs/API/endpoints";

export type {{ inputs.name | pascal }}FetcherType = {};

export const use{{ inputs.name | pascal }}Fetcher = function({}: {{ inputs.name | pascal }}FetcherType) {
  return useQueryManager([APIEndpoints.API_KEY_NAME], () => useFetch(APIEndpoints.API_KEY_NAME), {});
};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.spec.ts`

```typescript
// {{ inputs.name | pascal }}/{{ inputs.name | pascal }}
```
