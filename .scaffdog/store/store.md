---
name: "generate: store"
root: "."
output: "./src/stores"
ignore: ["."]
questions:
  name: "src/components/stores 配下にrecoil stateを作成します。\n⚠️ 他のファイルと名前がかぶらないようにしてください。\nEnter file name ✏️"
---

# `{{ inputs.name | pascal }}/index.ts`

```tsx
import { useCallback } from 'react';
import {
  atom,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

type {{ inputs.name | pascal }}State = {
  {{ inputs.name | pascal }}: any
}

const {{ inputs.name | pascal }}RecoilState = atom<{{ inputs.name | pascal }}State>({
  key: '{{ inputs.name | pascal }}',
  default: { {{ inputs.name | pascal }}: null },
})


export const use{{ inputs.name | pascal }}State = () => {
  return useRecoilValue({{ inputs.name | pascal }}RecoilState)
}

export const use{{ inputs.name | pascal }}Mutators = () => {
  const setState = useSetRecoilState(({{ inputs.name | pascal }}RecoilState));

  const set = useCallback((payload: {{ inputs.name | pascal }}State) => setState(payload), [setState]);

  return { set };
}
```
