import { InjectionToken, ModuleWithProviders, Provider } from '@angular/core';
import { SentryErrorHandler } from './error.handler';
export interface SentryConfig {
  sentryServiceProvider?: Provider;
  config?: {
    dsn: string;
  };
}
export declare const SentryService: InjectionToken<SentryConfig>;
export declare class SentryModule {
  static forRoot(options: SentryConfig): ModuleWithProviders;
}
export declare function provideSentryServiceOptions(config: SentryConfig): SentryErrorHandler;
