export type ErrorReportHelperType = {
  err: any;
};

export const useErrorReportHelper = function ({ err }: ErrorReportHelperType) {
  // useReportSomething
  console.error(`ErrorReport error: ${err}`);
};
