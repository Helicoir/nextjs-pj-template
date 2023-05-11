import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export type Props = React.PropsWithChildren<{}>;

export const Entrance: React.FC<Props> = ({ children }) => {
  return (
    <RecoilRoot>
      <main>
        {children}
      </main>
    </RecoilRoot>
  );
};