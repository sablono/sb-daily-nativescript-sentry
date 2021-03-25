import { ErrorHandler } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SentryErrorHandler implements ErrorHandler {
    private _config;
    constructor(_config: any);
    handleError(err: any): void;
    private _setDSN;
    static ɵfac: i0.ɵɵFactoryDef<SentryErrorHandler, never>;
    static ɵprov: i0.ɵɵInjectableDef<SentryErrorHandler>;
}
