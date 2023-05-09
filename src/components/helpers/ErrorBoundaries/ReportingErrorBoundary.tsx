import React, { useCallback } from "react";
import type { ReactNode } from "react";
import { BaseErrorBoundary } from "./__BaseErrorBoundary";
import { useErrorReportHelper } from "@/hooks/helpers/ErrorReport";

const fallbackComponent = (error: unknown) => (
  <>
    {error instanceof Error ? (
      <span>
        reported!!: {error.name}: {error.message}
      </span>
    ) : (
      <span>reported!!: {JSON.stringify(error)}</span>
    )}
  </>
);

export const ReportingErrorBoundary = ({
  children,
}: {
  children: ReactNode;
}) => {
  const onError = useCallback((err: unknown) => {
    // useReportSomething
    useErrorReportHelper({ err });
  }, []);

  const renderFallback = useCallback(
    (error: unknown) => fallbackComponent({ error }),
    []
  );
  return (
    <BaseErrorBoundary onError={onError} fallbackRender={renderFallback}>
      {children}
    </BaseErrorBoundary>
  );
};
