---
name: "generate-component-organisms"
root: "."
output: "./src/components/organisms"
questions:
  name: "Please enter a organism component name."
  story:
    confirm: "Do you need a story?"
    initial: true
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from "./{{ inputs.name }}";
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
export type Props = JSX.Elements<{}>;

export const {{ inputs.name | pascal }}: React.FC<Props> = () => {
  return <div>{children}</div>;
};
```

# `{{ !inputs.story && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

export default { component: {{ inputs.name | pascal }} };
export const Overview = { args: {} };
```
