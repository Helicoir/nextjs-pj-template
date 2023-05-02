---
name: "generate-usecase"
root: "."
output: "./src/usecases"
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from "./{{ inputs.name }}";
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
export type Use{{ inputs.name | pascal }}Type = {};

export const Use{{ inputs.name | pascal }} = function() {};
```