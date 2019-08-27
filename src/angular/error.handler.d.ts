import { ErrorHandler } from '@angular/core';
export declare class SentryErrorHandler extends ErrorHandler {
  private config;
  private _discardUncaughtJsExceptions;
  constructor(config: any);
  handleError(err: any): void;
  private _setDSN;
  private _setDiscardUncaughtJsExceptions;
}
