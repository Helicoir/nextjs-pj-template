---
name: "generate-hooks-helpers"
root: "."
output: "./src/hooks/helpers"
questions:
  name: "Please enter a helper name."
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from "./{{ inputs.name }}";
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
export type {{ inputs.name | pascal }}HelperType = {};

export const {{ inputs.name | pascal }}Helper = function({}: {{ inputs.name | pascal }}HelperType) {};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.spec.tsx`

```typescript
// {{ inputs.name | pascal }}/{{ inputs.name | pascal }}
```
