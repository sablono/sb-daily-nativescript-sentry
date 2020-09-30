import { ErrorHandler, Inject, Injectable } from '@angular/core';
import { isIOS } from '@nativescript/core';
import { Sentry } from '../';
import { SentryService } from './app.module';

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  private _discardUncaughtJsExceptions: boolean = false;

  constructor(@Inject(SentryService) private config) {
    this._setDSN();
    this._setDiscardUncaughtJsExceptions();
  }

  handleError(err): void {
    try {
      Sentry.captureException(err);
    } catch (e) {
      console.log('[NativeScript-Sentry - SentryErrorHandler]', e);
    }

    if (this._discardUncaughtJsExceptions) return;
    throw err;
  }

  /*
   * Private
   */

  private _setDSN() {
    if (this.config && this.config.dsn) {
      Sentry.init(this.config.dsn);
    } else {
      throw '[SentryAngular]: You need to provide your dsn on the forRoot method';
    }
  }

  private async _setDiscardUncaughtJsExceptions() {
    try {
      const { default: config } = await import('~/../nativescript.config');
      const platform = isIOS ? 'ios' : 'android';
      if (config && config[platform].discardUncaughtJsExceptions) {
        this._discardUncaughtJsExceptions = config[platform].discardUncaughtJsExceptions;
      }
    } catch (e) {}
  }
}
