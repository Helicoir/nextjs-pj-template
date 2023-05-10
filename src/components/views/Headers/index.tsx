import React, { useMemo } from "react";
import { DefaultHeader } from "@/components/organisms/DefaultHeader";
import { useRouter } from "next/router";

type RenderHeadersProps = { pathname: string };

const headerList = {
  DEFAULT_HEADER: "DEFAULT_HEADER",
};

const RenderHeaders = React.memo(({ pathname }: RenderHeadersProps) => {
  const matchHeaderName = useMemo(() => {
    return headerList.DEFAULT_HEADER;
  }, [pathname]);
  return (
    <>{matchHeaderName === headerList.DEFAULT_HEADER && <DefaultHeader />}</>
  );
});

export const Headers = () => {
  const { pathname } = useRouter();
  return (
    <header>
      <RenderHeaders pathname={pathname} />
    </header>
  );
};
