---
name: "generate-component-templates"
root: "."
output: "./src/components/templates"
questions:
  name: "Please enter a component name."
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import React from 'react';
import styles from './{{ inputs.name | pascal }}.module.scss'

export type Props = {};

export const {{ inputs.name | pascal }}: React.FC<Props> = ({ children }) => {
  return (
      <main>
        {children}
      </main>
  );
};
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.scss`

```scss
// write stylesheet here
```
