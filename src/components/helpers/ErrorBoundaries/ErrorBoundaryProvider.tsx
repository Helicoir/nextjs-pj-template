import React, { Suspense, useCallback } from "react";
import type { ReactNode } from "react";
import { BaseErrorBoundary } from "./__BaseErrorBoundary";
import { useErrorReportHelper } from "@/hooks/helpers/ErrorReport";
import { Loading } from "../Loading/Loading";

type Props = {
  children: React.ReactNode;
};

const fallbackComponent = (error: unknown) => (
  <>
    {error instanceof Error ? (
      <span>
        ErrorBoundaryによるエラーを表示しています。: {error.name}:{" "}
        {error.message}
      </span>
    ) : (
      <span>
        ErrorBoundaryによるエラーを表示しています。: {JSON.stringify(error)}
      </span>
    )}
  </>
);

export const ErrorBoundaryProvider: React.FC<Props> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const onError = useCallback((err: unknown) => {
    useErrorReportHelper({ err });
  }, []);

  const renderFallback = useCallback(
    (error: unknown) => fallbackComponent(error),
    []
  );

  return (
    <BaseErrorBoundary onError={onError} fallbackRender={renderFallback}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </BaseErrorBoundary>
  );
};
