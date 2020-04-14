/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
/// <reference path="./typings/sentry-api.android.d.ts" />

import * as utils from 'tns-core-modules/utils/utils';
import { BreadCrumb, ExceptionOptions, MessageOptions, SentryUser } from './';

export class Sentry {
  public static init(dsn: string) {
    // Starting with sentry-android 2.0.0 the init method of Sentry does not work out of the box
    // because with NativeScript. This is because it is not possible to call a Java/Kotlin Lambda
    // function from NativeScript.
    // Instead configure the DSN and further config in your AndroidManifest.xml.
    // Add <meta-data android:name="io.sentry.dsn" android:value="__YOUR_DSN_HERE__" /> within the
    // application tag.
  }

  public static captureMessage(message: string, options?: MessageOptions) {
    // Create event
    let event = new io.sentry.core.SentryEvent();

    // Set level
    const level = options && options.level ? options.level : null;
    event.setLevel(this._convertSentryEventLevel(level));

    // Set message
    const msg = new io.sentry.core.protocol.Message();
    msg.setMessage(message);
    event.setMessage(msg);

    // Set extras
    if (options && options.extra) {
      Object.keys(options.extra).forEach(key => {
        // @link: https://github.com/danielgek/nativescript-sentry/issues/22
        const nativeDataValue = Sentry._convertDataTypeToJavaObject(options.extra[key]);
        event.setExtra(key, nativeDataValue);
      });
    }

    // Set tags
    if (options && options.tags) {
      // tags are required as strings
      Object.keys(options.tags).forEach(key => {
        event.setTag(key, options.tags[key].toString());
      });
    }

    // Send event
    io.sentry.core.Sentry.captureEvent(event);
  }

  public static captureException(exception: Error, options?: ExceptionOptions) {
    // TODO: attach tags and extra directly on the exeption
    if (options && options.extra) {
      this.setContextExtra(options.extra);
    }

    if (options && options.tags) {
      this.setContextTags(options.tags);
    }

    const cause = new java.lang.Throwable(exception.stack);

    // creating a new Exception to send to Sentry which will include the
    // JS Error stacktrace as the "cause" and the JS Error message as the Throwable "message"
    // https://developer.android.com/reference/java/lang/Exception.html#Exception(java.lang.String,%20java.lang.Throwable)
    const ex = new java.lang.Exception(exception.message, cause);
    io.sentry.core.Sentry.captureException(ex);
  }

  public static captureBreadcrumb(breadcrumb: BreadCrumb) {
    // Create BreadCrumb
    const nativeBreadCrumb = new io.sentry.core.Breadcrumb();
    nativeBreadCrumb.setLevel(this._convertSentryEventLevel(breadcrumb.level));
    nativeBreadCrumb.setCategory(breadcrumb.category);
    nativeBreadCrumb.setMessage(breadcrumb.message);

    // Add BreadCrumb
    io.sentry.core.Sentry.addBreadcrumb(nativeBreadCrumb);
  }

  public static setContextUser(user: SentryUser) {
    // handle the data object if provided
    let nativeMapObject: java.util.HashMap<any, any>;
    if (user.data) {
      nativeMapObject = new java.util.HashMap<any, any>();
      Object.keys(user.data).forEach(key => {
        // @link: https://github.com/danielgek/nativescript-sentry/issues/22
        const nativeDataValue = Sentry._convertDataTypeToJavaObject(user.data[key]);
        nativeMapObject.put(key, nativeDataValue);
      });
    }

    const nativeUser = new io.sentry.core.protocol.User();
    nativeUser.setId(user.id);
    nativeUser.setEmail(user.email ? user.email : '');
    nativeUser.setUsername(user.username ? user.username : '');
    nativeUser.setOthers(nativeMapObject ? nativeMapObject : null);
    io.sentry.core.Sentry.setUser(nativeUser);
  }

  public static setContextTags(tags: object) {
    Object.keys(tags).forEach(key => {
      io.sentry.core.Sentry.setTag(key, tags[key].toString());
    });
  }

  public static setContextExtra(extra: object) {
    Object.keys(extra).forEach(key => {
      // adding type check to not force toString on the extra
      // @link: https://github.com/danielgek/nativescript-sentry/issues/22
      const nativeDataValue = Sentry._convertDataTypeToJavaObject(extra[key]);
      io.sentry.core.Sentry.setExtra(
        key,
        nativeDataValue.toString()
      );
    });
  }

  public static clearContext() {
    // Nothing to do here?
  }

  /**
   * Returns the android Sentry Level for the provided TNS_SentryLevel
   * @default - INFO
   */
  private static _convertSentryEventLevel(level: Level) {
    if (!level) {
      return io.sentry.core.SentryLevel.INFO;
    }

    switch (level) {
      case Level.Info:
        return io.sentry.core.SentryLevel.INFO;
      case Level.Warning:
        return io.sentry.core.SentryLevel.WARNING;
      case Level.Fatal:
        return io.sentry.core.SentryLevel.FATAL;
      case Level.Error:
        return io.sentry.core.SentryLevel.ERROR;
      case Level.Debug:
        return io.sentry.core.SentryLevel.DEBUG;
      default:
        return io.sentry.core.SentryLevel.INFO;
    }
  }

  /**
   * Takes the provided value and checks for boolean or number and creates a native data type instance.
   * @param value
   */
  private static _convertDataTypeToJavaObject(value: any) {
    if (value === null) {
      return null;
    }

    switch (typeof value) {
      case 'object':
        if (value instanceof Date) {
          return new java.lang.String(value.toISOString());
        }

        if (Array.isArray(value)) {
          const nativeList = new java.util.ArrayList();
          value.forEach(data => {
            nativeList.add(this._convertDataTypeToJavaObject(data));
          });
          return nativeList;
        }

        const nativeObject = new java.util.HashMap();
        Object.keys(value).forEach(itemKey => {
          nativeObject.put(itemKey, this._convertDataTypeToJavaObject(value[itemKey]));
        });

        return nativeObject;
      case 'number':
        if (this._numberIs64Bit(value)) {
          if (this._numberHasDecimals(value)) {
            return new java.lang.Double(value);
          } else {
            return new java.lang.Long(value);
          }
        } else {
          if (this._numberHasDecimals(value)) {
            return new java.lang.Float(value);
          } else {
            return new java.lang.Integer(value);
          }
        }
      case 'boolean':
        return new java.lang.Boolean(value);
    }

    return new java.lang.String(value);
  }

  private static _numberHasDecimals(value: number) {
    return !(value % 1 === 0);
  }

  private static _numberIs64Bit(value: number) {
    return value < -Math.pow(2, 31) + 1 || value > Math.pow(2, 31) - 1;
  }
}

export enum Level {
  Fatal = 'fatal',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Debug = 'debug'
}
