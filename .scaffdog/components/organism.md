---
name: "generate: component - organisms"
root: "."
output: "./src/components/organisms"
ignore: ["."]
questions:
  name: "Please enter a organism component name."
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from "./{{ inputs.name | pascal }}";
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import React from 'react';
import styles from './{{ inputs.name | pascal }}.module.scss'

export type Props = {};

export const {{ inputs.name | pascal }}: React.FC<Props> = ({}) => {
  return <div>aaaa</div>;
};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

export default { component: {{ inputs.name | pascal }} };
export const Overview = { args: {} };
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```typescript
// write stylesheet here
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.spec.ts`

```typescript
describe("{{ output.dir }}/{{ inputs.name | pascal }}", () => {
  test("テスト", () => {
    expect(true).toEqual(true);
  });
});
```
