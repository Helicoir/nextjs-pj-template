---
name: 'nextjs-pj-template'
root: '.'
output: '**/*'
ignore: []
questions:
  value: 'Please enter any text.'
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from './{{ inputs.name }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
export type Props = React.PropsWithChildren<{}>;

export const {{ inputs.name | pascal }}: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
```

# `{{ !inputs.story && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

export default { component: {{ inputs.name | pascal }} };
export const Overview = { args: {} };
```

