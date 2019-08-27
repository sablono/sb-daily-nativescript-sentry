import { ErrorHandler, InjectionToken, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { SentryErrorHandler } from './error.handler';

export interface SentryConfig {
  sentryServiceProvider?: Provider;
  config?: {
    dsn: string;
  };
}

export const SentryService = new InjectionToken<SentryConfig>('SentryConfig');

@NgModule()
export class SentryModule {
  static forRoot(options: SentryConfig): ModuleWithProviders {
    return {
      ngModule: SentryModule,
      providers: [
        options.sentryServiceProvider || { provide: SentryService, useValue: options.config },
        {
          provide: ErrorHandler,
          useFactory: provideSentryServiceOptions,
          deps: [SentryService]
        }
      ]
    };
  }
}

export function provideSentryServiceOptions(config: SentryConfig) {
  return new SentryErrorHandler(config);
}
