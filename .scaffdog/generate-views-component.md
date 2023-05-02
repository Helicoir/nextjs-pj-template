---
name: "generate-view-component"
root: "."
output: "./src/components/views"
questions:
  name: "Please enter a view component name."
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export type Props = React.PropsWithChildren<{}>;

export const {{ inputs.name | pascal }}: React.FC<Props> = ({ children }) => {
  return (
    <RecoilRoot>
      <main>
        {children}
      </main>
    </RecoilRoot>
  );
};
```
