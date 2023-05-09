export type ErrorReportHelperType = {
  err: any;
};

export const useErrorReportHelper = function ({ err }: ErrorReportHelperType) {
  console.error(`ErrorReport error: ${err}`);
};
