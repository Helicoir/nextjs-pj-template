import { useEffect } from "react";
import { ReportingErrorBoundary } from "@/components/helpers/ErrorBoundaries/ReportingErrorBoundary";

export type Props = {};

const ErrorComponent = () => {
  useEffect(() => {
    // throw new Error("aaaaaaaa");
  }, []);

  return <p>uoo</p>;
};

export const BoundaryTest: React.FC<Props> = () => {
  return (
    <ReportingErrorBoundary>
      <div>うおおおお</div>
      <ErrorComponent />
    </ReportingErrorBoundary>
  );
};
