import React, { useCallback } from "react";
import type { ReactNode } from "react";
import { BaseErrorBoundary } from "./__BaseErrorBoundary";
import { useErrorReportHelper } from "@/hooks/helpers/ErrorReport";

const fallbackComponent = (error: unknown) => (
  <>
    {error instanceof Error ? (
      <span>
        予期せぬエラーが発生しました: {error.name}: {error.message}
      </span>
    ) : (
      <span>予期せぬエラーが発生しました: {JSON.stringify(error)}</span>
    )}
  </>
);

export const PreventCrashErrorBoundary = ({
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
      {children}
    </BaseErrorBoundary>
  );
};
