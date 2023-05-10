---
name: "generate-view-component"
root: "."
output: "./src/components/views"
questions:
  name: "Please enter a view component name."
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
