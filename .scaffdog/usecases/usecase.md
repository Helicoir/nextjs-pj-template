---
name: "generate: usecase"
root: "."
output: "./src/usecases"
ignore: ["."]
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from "./{{ inputs.name }}";
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.ts`

```typescript
export type Use{{ inputs.name | pascal }}Type = {};

export const Use{{ inputs.name | pascal }} = function() {};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.spec.ts`

```typescript
describe("{{ output.dir }}/{{ inputs.name | pascal }}", () => {
  test("テスト", () => {
    expect(true).toEqual(true);
  });
});
```
