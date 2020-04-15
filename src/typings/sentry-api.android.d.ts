declare module com {
	export module google {
		export module gson {
			export abstract class TypeAdapter<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.google.gson.TypeAdapter<any>>;
				public write(param0: any, param1: T): void;
				public fromJson(param0: java.io.Reader): T;
				public toJsonTree(param0: T): any;
				public toJson(param0: T): string;
				public nullSafe(): com.google.gson.TypeAdapter<T>;
				public fromJson(param0: string): T;
				public toJson(param0: java.io.Writer, param1: T): void;
				public fromJsonTree(param0: any): T;
				public read(param0: any): T;
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module gson {
			export class DefaultDateTypeAdapter extends com.google.gson.TypeAdapter<java.util.Date> {
				public static class: java.lang.Class<com.google.gson.DefaultDateTypeAdapter>;
				public constructor(param0: number, param1: number);
				public read(param0: any): any;
				public read(param0: any): java.util.Date;
				public write(param0: any, param1: java.util.Date): void;
				public write(param0: any, param1: any): void;
				public constructor(param0: java.lang.Class<any>, param1: number, param2: number);
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module io {
  export module sentry {
    export module core {
      export class AsyncConnectionFactory {
        public static class: java.lang.Class<io.sentry.core.AsyncConnectionFactory>;
        public static create(param0: io.sentry.core.SentryOptions, param1: io.sentry.core.cache.IEventCache): io.sentry.core.transport.AsyncConnection;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class Breadcrumb extends io.sentry.core.IUnknownPropertiesConsumer {
        public static class: java.lang.Class<io.sentry.core.Breadcrumb>;
        public getTimestamp(): java.util.Date;
        public getType(): string;
        public setData(param0: string, param1: any): void;
        public setCategory(param0: string): void;
        public setType(param0: string): void;
        public constructor(param0: string);
        public setLevel(param0: io.sentry.core.SentryLevel): void;
        public constructor();
        public getCategory(): string;
        public getLevel(): io.sentry.core.SentryLevel;
        public clone(): io.sentry.core.Breadcrumb;
        public setMessage(param0: string): void;
        public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
        public getMessage(): string;
        public removeData(param0: string): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class CircularFifoQueue<E>  extends java.util.AbstractCollection<any> {
        public static class: java.lang.Class<io.sentry.core.CircularFifoQueue<any>>;
        public remove(): any;
        public element(): any;
        public peek(): any;
        public iterator(): java.util.Iterator<any>;
        public get(param0: number): any;
        public constructor();
        public size(): number;
        public poll(): any;
        public constructor(param0: java.util.Collection<any>);
        public maxSize(): number;
        public add(param0: any): boolean;
        public offer(param0: any): boolean;
        public clear(): void;
        public isFull(): boolean;
        public isAtFullCapacity(): boolean;
        public isEmpty(): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class CredentialsSettingConfigurator extends io.sentry.core.transport.IConnectionConfigurator {
        public static class: java.lang.Class<io.sentry.core.CredentialsSettingConfigurator>;
        public configure(param0: java.net.HttpURLConnection): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class DateUtils {
        public static class: java.lang.Class<io.sentry.core.DateUtils>;
        public static getCurrentDateTime(): java.util.Date;
        public static getDateTime(param0: string): java.util.Date;
        public static getDateTimeWithMillsPrecision(param0: string): java.util.Date;
        public static getTimestamp(param0: java.util.Date): string;
        public static getTimestampIsoFormat(param0: java.util.Date): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class DiagnosticLogger extends io.sentry.core.ILogger {
        public static class: java.lang.Class<io.sentry.core.DiagnosticLogger>;
        public log(param0: io.sentry.core.SentryLevel, param1: string, param2: native.Array<any>): void;
        public constructor(param0: io.sentry.core.SentryOptions, param1: io.sentry.core.ILogger);
        public getLogger(): io.sentry.core.ILogger;
        public isEnabled(param0: io.sentry.core.SentryLevel): boolean;
        public log(param0: io.sentry.core.SentryLevel, param1: string, param2: java.lang.Throwable): void;
        public log(param0: io.sentry.core.SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export abstract class DirectoryProcessor {
        public static class: java.lang.Class<io.sentry.core.DirectoryProcessor>;
        public isRelevantFileName(param0: string): boolean;
        public processFile(param0: java.io.File): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class Dsn {
        public static class: java.lang.Class<io.sentry.core.Dsn>;
        public getPublicKey(): string;
        public getPath(): string;
        public getProjectId(): string;
        public getSecretKey(): string;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class EnvelopeReader extends io.sentry.core.IEnvelopeReader {
        public static class: java.lang.Class<io.sentry.core.EnvelopeReader>;
        public read(param0: java.io.InputStream): io.sentry.core.SentryEnvelope;
        public constructor();
      }
      export module EnvelopeReader {
        export class SentryEnvelopeHeaderAdapter extends com.google.gson.TypeAdapter<io.sentry.core.SentryEnvelopeHeader> {
          public static class: java.lang.Class<io.sentry.core.EnvelopeReader.SentryEnvelopeHeaderAdapter>;
          public write(param0: any, param1: io.sentry.core.SentryEnvelopeHeader): void;
          public read(param0: any): io.sentry.core.SentryEnvelopeHeader;
        }
        export class SentryEnvelopeItemHeaderAdapter extends com.google.gson.TypeAdapter<io.sentry.core.SentryEnvelopeItemHeader> {
          public static class: java.lang.Class<io.sentry.core.EnvelopeReader.SentryEnvelopeItemHeaderAdapter>;
          public write(param0: any, param1: io.sentry.core.SentryEnvelopeItemHeader): void;
          public read(param0: any): io.sentry.core.SentryEnvelopeItemHeader;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class EnvelopeSender extends io.sentry.core.DirectoryProcessor implements io.sentry.core.IEnvelopeSender {
        public static class: java.lang.Class<io.sentry.core.EnvelopeSender>;
        public processEnvelopeFile(param0: string): void;
        public constructor(param0: io.sentry.core.IHub, param1: io.sentry.core.IEnvelopeReader, param2: io.sentry.core.ISerializer, param3: io.sentry.core.ILogger);
        public isRelevantFileName(param0: string): boolean;
        public processFile(param0: java.io.File): void;
      }
      export module EnvelopeSender {
        export class CachedEnvelopeHint implements io.sentry.core.hints.Cached, io.sentry.core.hints.Retryable, io.sentry.core.hints.SubmissionResult {
          public static class: java.lang.Class<io.sentry.core.EnvelopeSender.CachedEnvelopeHint>;
          public reset(): void;
          public setRetry(param0: boolean): void;
          public getRetry(): boolean;
          public setResult(param0: boolean): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class EventProcessor {
        public static class: java.lang.Class<io.sentry.core.EventProcessor>;
        /**
         * Constructs a new instance of the io.sentry.core.EventProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          process(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.SentryEvent;
        });
        public constructor();
        public process(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.SentryEvent;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class HttpTransportFactory {
        public static class: java.lang.Class<io.sentry.core.HttpTransportFactory>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class Hub extends io.sentry.core.IHub {
        public static class: java.lang.Class<io.sentry.core.Hub>;
        public constructor(param0: io.sentry.core.SentryOptions);
        public popScope(): void;
        public bindClient(param0: io.sentry.core.ISentryClient): void;
        public removeExtra(param0: string): void;
        public setFingerprint(param0: java.util.List<string>): void;
        public captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
        public setUser(param0: io.sentry.core.protocol.User): void;
        public setExtra(param0: string, param1: string): void;
        public removeTag(param0: string): void;
        public withScope(param0: io.sentry.core.ScopeCallback): void;
        public addBreadcrumb(param0: string): void;
        public setTag(param0: string, param1: string): void;
        public addBreadcrumb(param0: string, param1: string): void;
        public captureMessage(param0: string): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
        public close(): void;
        public pushScope(): void;
        public clearBreadcrumbs(): void;
        public getLastEventId(): io.sentry.core.protocol.SentryId;
        public configureScope(param0: io.sentry.core.ScopeCallback): void;
        public setLevel(param0: io.sentry.core.SentryLevel): void;
        public setTransaction(param0: string): void;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb, param1: any): void;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
        public isEnabled(): boolean;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb): void;
        public clone(): io.sentry.core.IHub;
        public captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
        public flush(param0: number): void;
      }
      export module Hub {
        export class StackItem {
          public static class: java.lang.Class<io.sentry.core.Hub.StackItem>;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class HubAdapter extends io.sentry.core.IHub {
        public static class: java.lang.Class<io.sentry.core.HubAdapter>;
        public popScope(): void;
        public bindClient(param0: io.sentry.core.ISentryClient): void;
        public removeExtra(param0: string): void;
        public setFingerprint(param0: java.util.List<string>): void;
        public captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
        public setUser(param0: io.sentry.core.protocol.User): void;
        public setExtra(param0: string, param1: string): void;
        public removeTag(param0: string): void;
        public withScope(param0: io.sentry.core.ScopeCallback): void;
        public addBreadcrumb(param0: string): void;
        public setTag(param0: string, param1: string): void;
        public addBreadcrumb(param0: string, param1: string): void;
        public captureMessage(param0: string): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
        public close(): void;
        public pushScope(): void;
        public clearBreadcrumbs(): void;
        public getLastEventId(): io.sentry.core.protocol.SentryId;
        public configureScope(param0: io.sentry.core.ScopeCallback): void;
        public setLevel(param0: io.sentry.core.SentryLevel): void;
        public setTransaction(param0: string): void;
        public static getInstance(): io.sentry.core.HubAdapter;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb, param1: any): void;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
        public isEnabled(): boolean;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb): void;
        public clone(): io.sentry.core.IHub;
        public captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
        public flush(param0: number): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class IEnvelopeReader {
        public static class: java.lang.Class<io.sentry.core.IEnvelopeReader>;
        /**
         * Constructs a new instance of the io.sentry.core.IEnvelopeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          read(param0: java.io.InputStream): io.sentry.core.SentryEnvelope;
        });
        public constructor();
        public read(param0: java.io.InputStream): io.sentry.core.SentryEnvelope;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class IEnvelopeSender {
        public static class: java.lang.Class<io.sentry.core.IEnvelopeSender>;
        /**
         * Constructs a new instance of the io.sentry.core.IEnvelopeSender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          processEnvelopeFile(param0: string): void;
        });
        public constructor();
        public processEnvelopeFile(param0: string): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class IHub {
        public static class: java.lang.Class<io.sentry.core.IHub>;
        /**
         * Constructs a new instance of the io.sentry.core.IHub interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          isEnabled(): boolean;
          captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
          captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
          captureMessage(param0: string): io.sentry.core.protocol.SentryId;
          captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
          captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
          captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
          close(): void;
          addBreadcrumb(param0: io.sentry.core.Breadcrumb, param1: any): void;
          addBreadcrumb(param0: io.sentry.core.Breadcrumb): void;
          addBreadcrumb(param0: string): void;
          addBreadcrumb(param0: string, param1: string): void;
          setLevel(param0: io.sentry.core.SentryLevel): void;
          setTransaction(param0: string): void;
          setUser(param0: io.sentry.core.protocol.User): void;
          setFingerprint(param0: java.util.List<string>): void;
          clearBreadcrumbs(): void;
          setTag(param0: string, param1: string): void;
          removeTag(param0: string): void;
          setExtra(param0: string, param1: string): void;
          removeExtra(param0: string): void;
          getLastEventId(): io.sentry.core.protocol.SentryId;
          pushScope(): void;
          popScope(): void;
          withScope(param0: io.sentry.core.ScopeCallback): void;
          configureScope(param0: io.sentry.core.ScopeCallback): void;
          bindClient(param0: io.sentry.core.ISentryClient): void;
          flush(param0: number): void;
          clone(): io.sentry.core.IHub;
        });
        public constructor();
        public popScope(): void;
        public bindClient(param0: io.sentry.core.ISentryClient): void;
        public removeExtra(param0: string): void;
        public setFingerprint(param0: java.util.List<string>): void;
        public captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
        public setUser(param0: io.sentry.core.protocol.User): void;
        public setExtra(param0: string, param1: string): void;
        public removeTag(param0: string): void;
        public withScope(param0: io.sentry.core.ScopeCallback): void;
        public addBreadcrumb(param0: string): void;
        public setTag(param0: string, param1: string): void;
        public addBreadcrumb(param0: string, param1: string): void;
        public captureMessage(param0: string): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
        public close(): void;
        public pushScope(): void;
        public clearBreadcrumbs(): void;
        public getLastEventId(): io.sentry.core.protocol.SentryId;
        public configureScope(param0: io.sentry.core.ScopeCallback): void;
        public setLevel(param0: io.sentry.core.SentryLevel): void;
        public setTransaction(param0: string): void;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb, param1: any): void;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
        public isEnabled(): boolean;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb): void;
        public clone(): io.sentry.core.IHub;
        public captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
        public flush(param0: number): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class ILogger {
        public static class: java.lang.Class<io.sentry.core.ILogger>;
        /**
         * Constructs a new instance of the io.sentry.core.ILogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          log(param0: io.sentry.core.SentryLevel, param1: string, param2: native.Array<any>): void;
          log(param0: io.sentry.core.SentryLevel, param1: string, param2: java.lang.Throwable): void;
          log(param0: io.sentry.core.SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
        });
        public constructor();
        public log(param0: io.sentry.core.SentryLevel, param1: string, param2: native.Array<any>): void;
        public log(param0: io.sentry.core.SentryLevel, param1: string, param2: java.lang.Throwable): void;
        public log(param0: io.sentry.core.SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class ISentryClient {
        public static class: java.lang.Class<io.sentry.core.ISentryClient>;
        /**
         * Constructs a new instance of the io.sentry.core.ISentryClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          isEnabled(): boolean;
          captureEvent(param0: io.sentry.core.SentryEvent, param1: io.sentry.core.Scope, param2: any): io.sentry.core.protocol.SentryId;
          close(): void;
          flush(param0: number): void;
          captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
          captureEvent(param0: io.sentry.core.SentryEvent, param1: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
          captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
          captureMessage(param0: string, param1: io.sentry.core.SentryLevel, param2: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
          captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
          captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
          captureException(param0: java.lang.Throwable, param1: io.sentry.core.Scope, param2: any): io.sentry.core.protocol.SentryId;
          captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
          captureException(param0: java.lang.Throwable, param1: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        });
        public constructor();
        public captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
        public close(): void;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: io.sentry.core.Scope, param2: any): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable, param1: io.sentry.core.Scope, param2: any): io.sentry.core.protocol.SentryId;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel, param2: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable, param1: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
        public isEnabled(): boolean;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
        public flush(param0: number): void;
        public captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class ISerializer {
        public static class: java.lang.Class<io.sentry.core.ISerializer>;
        /**
         * Constructs a new instance of the io.sentry.core.ISerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          deserializeEvent(param0: java.io.Reader): io.sentry.core.SentryEvent;
          serialize(param0: io.sentry.core.SentryEvent, param1: java.io.Writer): void;
        });
        public constructor();
        public deserializeEvent(param0: java.io.Reader): io.sentry.core.SentryEvent;
        public serialize(param0: io.sentry.core.SentryEvent, param1: java.io.Writer): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class IUnknownPropertiesConsumer {
        public static class: java.lang.Class<io.sentry.core.IUnknownPropertiesConsumer>;
        /**
         * Constructs a new instance of the io.sentry.core.IUnknownPropertiesConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          acceptUnknownProperties(param0: java.util.Map<string,any>): void;
        });
        public constructor();
        public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class Integration {
        public static class: java.lang.Class<io.sentry.core.Integration>;
        /**
         * Constructs a new instance of the io.sentry.core.Integration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          register(param0: io.sentry.core.IHub, param1: io.sentry.core.SentryOptions): void;
        });
        public constructor();
        public register(param0: io.sentry.core.IHub, param1: io.sentry.core.SentryOptions): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class InvalidDsnException {
        public static class: java.lang.Class<io.sentry.core.InvalidDsnException>;
        public getDsn(): string;
        public constructor(param0: string);
        public constructor(param0: string, param1: string);
        public constructor(param0: string, param1: string, param2: java.lang.Throwable);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class MainEventProcessor extends io.sentry.core.EventProcessor {
        public static class: java.lang.Class<io.sentry.core.MainEventProcessor>;
        public process(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.SentryEvent;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class NoOpHub extends io.sentry.core.IHub {
        public static class: java.lang.Class<io.sentry.core.NoOpHub>;
        public popScope(): void;
        public bindClient(param0: io.sentry.core.ISentryClient): void;
        public removeExtra(param0: string): void;
        public setFingerprint(param0: java.util.List<string>): void;
        public captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
        public setUser(param0: io.sentry.core.protocol.User): void;
        public setExtra(param0: string, param1: string): void;
        public removeTag(param0: string): void;
        public withScope(param0: io.sentry.core.ScopeCallback): void;
        public addBreadcrumb(param0: string): void;
        public setTag(param0: string, param1: string): void;
        public addBreadcrumb(param0: string, param1: string): void;
        public captureMessage(param0: string): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
        public close(): void;
        public pushScope(): void;
        public clearBreadcrumbs(): void;
        public getLastEventId(): io.sentry.core.protocol.SentryId;
        public configureScope(param0: io.sentry.core.ScopeCallback): void;
        public setLevel(param0: io.sentry.core.SentryLevel): void;
        public setTransaction(param0: string): void;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb, param1: any): void;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
        public static getInstance(): io.sentry.core.NoOpHub;
        public isEnabled(): boolean;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb): void;
        public clone(): io.sentry.core.IHub;
        public captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
        public flush(param0: number): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class NoOpLogger extends io.sentry.core.ILogger {
        public static class: java.lang.Class<io.sentry.core.NoOpLogger>;
        public log(param0: io.sentry.core.SentryLevel, param1: string, param2: native.Array<any>): void;
        public static getInstance(): io.sentry.core.NoOpLogger;
        public log(param0: io.sentry.core.SentryLevel, param1: string, param2: java.lang.Throwable): void;
        public log(param0: io.sentry.core.SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class NoOpSentryClient extends io.sentry.core.ISentryClient {
        public static class: java.lang.Class<io.sentry.core.NoOpSentryClient>;
        public captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
        public close(): void;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: io.sentry.core.Scope, param2: any): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public static getInstance(): io.sentry.core.NoOpSentryClient;
        public captureException(param0: java.lang.Throwable, param1: io.sentry.core.Scope, param2: any): io.sentry.core.protocol.SentryId;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel, param2: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable, param1: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
        public isEnabled(): boolean;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
        public flush(param0: number): void;
        public captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class NoOpSerializer extends io.sentry.core.ISerializer {
        public static class: java.lang.Class<io.sentry.core.NoOpSerializer>;
        public static getInstance(): io.sentry.core.NoOpSerializer;
        public deserializeEvent(param0: java.io.Reader): io.sentry.core.SentryEvent;
        public serialize(param0: io.sentry.core.SentryEvent, param1: java.io.Writer): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class OptionsContainer<T>  extends java.lang.Object {
        public static class: java.lang.Class<io.sentry.core.OptionsContainer<any>>;
        public createInstance(): T;
        public static create(param0: java.lang.Class<any>): io.sentry.core.OptionsContainer<any>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class Scope {
        public static class: java.lang.Class<io.sentry.core.Scope>;
        public constructor(param0: io.sentry.core.SentryOptions);
        public removeExtra(param0: string): void;
        public setFingerprint(param0: java.util.List<string>): void;
        public clearBreadcrumbs(): void;
        public clone(): io.sentry.core.Scope;
        public setUser(param0: io.sentry.core.protocol.User): void;
        public setLevel(param0: io.sentry.core.SentryLevel): void;
        public setTransaction(param0: string): void;
        public setExtra(param0: string, param1: string): void;
        public getLevel(): io.sentry.core.SentryLevel;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb, param1: any): void;
        public removeTag(param0: string): void;
        public clear(): void;
        public getTransaction(): string;
        public getUser(): io.sentry.core.protocol.User;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb): void;
        public addEventProcessor(param0: io.sentry.core.EventProcessor): void;
        public setTag(param0: string, param1: string): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class ScopeCallback {
        public static class: java.lang.Class<io.sentry.core.ScopeCallback>;
        /**
         * Constructs a new instance of the io.sentry.core.ScopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          run(param0: io.sentry.core.Scope): void;
        });
        public constructor();
        public run(param0: io.sentry.core.Scope): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SendCachedEvent extends io.sentry.core.DirectoryProcessor {
        public static class: java.lang.Class<io.sentry.core.SendCachedEvent>;
        public isRelevantFileName(param0: string): boolean;
        public processFile(param0: java.io.File): void;
      }
      export module SendCachedEvent {
        export class SendCachedEventHint implements io.sentry.core.hints.Cached, io.sentry.core.hints.Retryable, io.sentry.core.hints.SubmissionResult {
          public static class: java.lang.Class<io.sentry.core.SendCachedEvent.SendCachedEventHint>;
          public setRetry(param0: boolean): void;
          public getRetry(): boolean;
          public setResult(param0: boolean): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SendCachedEventFireAndForgetIntegration extends io.sentry.core.Integration {
        public static class: java.lang.Class<io.sentry.core.SendCachedEventFireAndForgetIntegration>;
        public register(param0: io.sentry.core.IHub, param1: io.sentry.core.SentryOptions): void;
      }
      export module SendCachedEventFireAndForgetIntegration {
        export class SendFireAndForget {
          public static class: java.lang.Class<io.sentry.core.SendCachedEventFireAndForgetIntegration.SendFireAndForget>;
          /**
           * Constructs a new instance of the io.sentry.core.SendCachedEventFireAndForgetIntegration$SendFireAndForget interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            send(): void;
          });
          public constructor();
          public send(): void;
        }
        export class SendFireAndForgetFactory {
          public static class: java.lang.Class<io.sentry.core.SendCachedEventFireAndForgetIntegration.SendFireAndForgetFactory>;
          /**
           * Constructs a new instance of the io.sentry.core.SendCachedEventFireAndForgetIntegration$SendFireAndForgetFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            create(param0: io.sentry.core.IHub, param1: io.sentry.core.SentryOptions): io.sentry.core.SendCachedEventFireAndForgetIntegration.SendFireAndForget;
          });
          public constructor();
          public create(param0: io.sentry.core.IHub, param1: io.sentry.core.SentryOptions): io.sentry.core.SendCachedEventFireAndForgetIntegration.SendFireAndForget;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class Sentry {
        public static class: java.lang.Class<io.sentry.core.Sentry>;
        public static init(): void;
        public static addBreadcrumb(param0: io.sentry.core.Breadcrumb): void;
        public static init(param0: io.sentry.core.OptionsContainer<any>, param1: io.sentry.core.Sentry.OptionsConfiguration<any>, param2: boolean): void;
        public static clearBreadcrumbs(): void;
        public static captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
        public static addBreadcrumb(param0: string, param1: string): void;
        public static init(param0: io.sentry.core.OptionsContainer<any>, param1: io.sentry.core.Sentry.OptionsConfiguration<any>): void;
        public static setTransaction(param0: string): void;
        public static popScope(): void;
        public static addBreadcrumb(param0: io.sentry.core.Breadcrumb, param1: any): void;
        public static captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
        public static setLevel(param0: io.sentry.core.SentryLevel): void;
        public static setExtra(param0: string, param1: string): void;
        public static getLastEventId(): io.sentry.core.protocol.SentryId;
        public static bindClient(param0: io.sentry.core.ISentryClient): void;
        public static withScope(param0: io.sentry.core.ScopeCallback): void;
        public static configureScope(param0: io.sentry.core.ScopeCallback): void;
        public static removeExtra(param0: string): void;
        public static init(param0: io.sentry.core.Sentry.OptionsConfiguration<io.sentry.core.SentryOptions>, param1: boolean): void;
        public static flush(param0: number): void;
        public static setFingerprint(param0: java.util.List<string>): void;
        public static init(param0: io.sentry.core.Sentry.OptionsConfiguration<io.sentry.core.SentryOptions>): void;
        public static captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
        public static captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
        public static isEnabled(): boolean;
        public static removeTag(param0: string): void;
        public static close(): void;
        public static captureMessage(param0: string): io.sentry.core.protocol.SentryId;
        public static setTag(param0: string, param1: string): void;
        public static addBreadcrumb(param0: string): void;
        public static pushScope(): void;
        public static captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
        public static setUser(param0: io.sentry.core.protocol.User): void;
      }
      export module Sentry {
        export class OptionsConfiguration<T>  extends java.lang.Object {
          public static class: java.lang.Class<io.sentry.core.Sentry.OptionsConfiguration<any>>;
          /**
           * Constructs a new instance of the io.sentry.core.Sentry$OptionsConfiguration interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            configure(param0: T): void;
          });
          public constructor();
          public configure(param0: T): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryClient extends io.sentry.core.ISentryClient {
        public static class: java.lang.Class<io.sentry.core.SentryClient>;
        public captureException(param0: java.lang.Throwable): io.sentry.core.protocol.SentryId;
        public close(): void;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: io.sentry.core.Scope, param2: any): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable, param1: io.sentry.core.Scope, param2: any): io.sentry.core.protocol.SentryId;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel, param2: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public captureException(param0: java.lang.Throwable, param1: io.sentry.core.Scope): io.sentry.core.protocol.SentryId;
        public captureEvent(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.protocol.SentryId;
        public constructor(param0: io.sentry.core.SentryOptions, param1: io.sentry.core.transport.Connection);
        public isEnabled(): boolean;
        public captureMessage(param0: string, param1: io.sentry.core.SentryLevel): io.sentry.core.protocol.SentryId;
        public flush(param0: number): void;
        public captureException(param0: java.lang.Throwable, param1: any): io.sentry.core.protocol.SentryId;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryEnvelope {
        public static class: java.lang.Class<io.sentry.core.SentryEnvelope>;
        public constructor(param0: io.sentry.core.protocol.SentryId, param1: string, param2: java.lang.Iterable<io.sentry.core.SentryEnvelopeItem>);
        public getItems(): java.lang.Iterable<io.sentry.core.SentryEnvelopeItem>;
        public getHeader(): io.sentry.core.SentryEnvelopeHeader;
        public constructor(param0: io.sentry.core.protocol.SentryId, param1: java.lang.Iterable<io.sentry.core.SentryEnvelopeItem>);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryEnvelopeHeader {
        public static class: java.lang.Class<io.sentry.core.SentryEnvelopeHeader>;
        public getAuth(): string;
        public getEventId(): io.sentry.core.protocol.SentryId;
        public constructor(param0: io.sentry.core.protocol.SentryId);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryEnvelopeItem {
        public static class: java.lang.Class<io.sentry.core.SentryEnvelopeItem>;
        public getData(): native.Array<number>;
        public getHeader(): io.sentry.core.SentryEnvelopeItemHeader;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryEnvelopeItemHeader {
        public static class: java.lang.Class<io.sentry.core.SentryEnvelopeItemHeader>;
        public getType(): string;
        public getContentType(): string;
        public getFileName(): string;
        public getLength(): number;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryEvent extends io.sentry.core.IUnknownPropertiesConsumer {
        public static class: java.lang.Class<io.sentry.core.SentryEvent>;
        public setExceptions(param0: java.util.List<io.sentry.core.protocol.SentryException>): void;
        public getSdk(): io.sentry.core.protocol.SdkVersion;
        public setEventId(param0: io.sentry.core.protocol.SentryId): void;
        public setBreadcrumbs(param0: java.util.List<io.sentry.core.Breadcrumb>): void;
        public setServerName(param0: string): void;
        public setSdk(param0: io.sentry.core.protocol.SdkVersion): void;
        public constructor(param0: java.lang.Throwable);
        public constructor();
        public getBreadcrumbs(): java.util.List<io.sentry.core.Breadcrumb>;
        public setMessage(param0: io.sentry.core.protocol.Message): void;
        public getEnvironment(): string;
        public getLevel(): io.sentry.core.SentryLevel;
        public getExceptions(): java.util.List<io.sentry.core.protocol.SentryException>;
        public setContexts(param0: io.sentry.core.protocol.Contexts): void;
        public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
        public getRelease(): string;
        public setRelease(param0: string): void;
        public setTag(param0: string, param1: string): void;
        public getTimestamp(): java.util.Date;
        public removeModule(param0: string): void;
        public getLogger(): string;
        public constructor(param0: java.util.Date);
        public getUnknown(): java.util.Map<string,any>;
        public setLevel(param0: io.sentry.core.SentryLevel): void;
        public getEventId(): io.sentry.core.protocol.SentryId;
        public setFingerprints(param0: java.util.List<string>): void;
        public getContexts(): io.sentry.core.protocol.Contexts;
        public setEnvironment(param0: string): void;
        public getUser(): io.sentry.core.protocol.User;
        public addBreadcrumb(param0: io.sentry.core.Breadcrumb): void;
        public setExtras(param0: java.util.Map<string,any>): void;
        public getServerName(): string;
        public removeExtra(param0: string): void;
        public getRequest(): io.sentry.core.protocol.Request;
        public setThrowable(param0: java.lang.Throwable): void;
        public setModule(param0: string, param1: string): void;
        public setUser(param0: io.sentry.core.protocol.User): void;
        public setTags(param0: java.util.Map<string,string>): void;
        public getMessage(): io.sentry.core.protocol.Message;
        public removeTag(param0: string): void;
        public getDist(): string;
        public setPlatform(param0: string): void;
        public setExtra(param0: string, param1: any): void;
        public setLogger(param0: string): void;
        public getTransaction(): string;
        public getDebugMeta(): io.sentry.core.protocol.DebugMeta;
        public setRequest(param0: io.sentry.core.protocol.Request): void;
        public setThreads(param0: java.util.List<io.sentry.core.protocol.SentryThread>): void;
        public getThreads(): java.util.List<io.sentry.core.protocol.SentryThread>;
        public setTransaction(param0: string): void;
        public setDebugMeta(param0: io.sentry.core.protocol.DebugMeta): void;
        public getPlatform(): string;
        public setModules(param0: java.util.Map<string,string>): void;
        public setDist(param0: string): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryExceptionFactory {
        public static class: java.lang.Class<io.sentry.core.SentryExceptionFactory>;
        public constructor(param0: io.sentry.core.SentryStackTraceFactory);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryLevel {
        public static class: java.lang.Class<io.sentry.core.SentryLevel>;
        public static LOG: io.sentry.core.SentryLevel;
        public static DEBUG: io.sentry.core.SentryLevel;
        public static INFO: io.sentry.core.SentryLevel;
        public static WARNING: io.sentry.core.SentryLevel;
        public static ERROR: io.sentry.core.SentryLevel;
        public static FATAL: io.sentry.core.SentryLevel;
        public static values(): native.Array<io.sentry.core.SentryLevel>;
        public static valueOf(param0: string): io.sentry.core.SentryLevel;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryOptions {
        public static class: java.lang.Class<io.sentry.core.SentryOptions>;
        public getEventProcessors(): java.util.List<io.sentry.core.EventProcessor>;
        public isDebug(): boolean;
        public getShutdownTimeout(): number;
        public setServerName(param0: string): void;
        public addInAppExclude(param0: string): void;
        public constructor();
        public setMaxBreadcrumbs(param0: number): void;
        public setShutdownTimeout(param0: number): void;
        public getBeforeBreadcrumb(): io.sentry.core.SentryOptions.BeforeBreadcrumbCallback;
        public getEnvironment(): string;
        public getInAppIncludes(): java.util.List<string>;
        public getDiagnosticLevel(): io.sentry.core.SentryLevel;
        public getRelease(): string;
        public getTransportGate(): io.sentry.core.transport.ITransportGate;
        public setRelease(param0: string): void;
        public getDsn(): string;
        public getOutboxPath(): string;
        public getInAppExcludes(): java.util.List<string>;
        public setSampleRate(param0: java.lang.Double): void;
        public addInAppInclude(param0: string): void;
        public isAttachThreads(): boolean;
        public getIntegrations(): java.util.List<io.sentry.core.Integration>;
        public setTransport(param0: io.sentry.core.transport.ITransport): void;
        public setBeforeSend(param0: io.sentry.core.SentryOptions.BeforeSendCallback): void;
        public setAttachStacktrace(param0: boolean): void;
        public setLogger(param0: io.sentry.core.ILogger): void;
        public setSerializer(param0: io.sentry.core.ISerializer): void;
        public setEnvironment(param0: string): void;
        public addEventProcessor(param0: io.sentry.core.EventProcessor): void;
        public getSampleRate(): java.lang.Double;
        public getCacheDirSize(): number;
        public addIntegration(param0: io.sentry.core.Integration): void;
        public getLogger(): io.sentry.core.ILogger;
        public getServerName(): string;
        public setAttachThreads(param0: boolean): void;
        public getCacheDirPath(): string;
        public getTransport(): io.sentry.core.transport.ITransport;
        public setDebug(param0: boolean): void;
        public getDist(): string;
        public setProxy(param0: java.net.Proxy): void;
        public setEnableNdk(param0: boolean): void;
        public setDiagnosticLevel(param0: io.sentry.core.SentryLevel): void;
        public getMaxBreadcrumbs(): number;
        public setSentryClientName(param0: string): void;
        public isAttachStacktrace(): boolean;
        public setTransportGate(param0: io.sentry.core.transport.ITransportGate): void;
        public setCacheDirSize(param0: number): void;
        public getSerializer(): io.sentry.core.ISerializer;
        public setDsn(param0: string): void;
        public getSentryClientName(): string;
        public setCacheDirPath(param0: string): void;
        public setBeforeBreadcrumb(param0: io.sentry.core.SentryOptions.BeforeBreadcrumbCallback): void;
        public getProxy(): java.net.Proxy;
        public setDist(param0: string): void;
        public isEnableNdk(): boolean;
        public getBeforeSend(): io.sentry.core.SentryOptions.BeforeSendCallback;
      }
      export module SentryOptions {
        export class BeforeBreadcrumbCallback {
          public static class: java.lang.Class<io.sentry.core.SentryOptions.BeforeBreadcrumbCallback>;
          /**
           * Constructs a new instance of the io.sentry.core.SentryOptions$BeforeBreadcrumbCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            execute(param0: io.sentry.core.Breadcrumb, param1: any): io.sentry.core.Breadcrumb;
          });
          public constructor();
          public execute(param0: io.sentry.core.Breadcrumb, param1: any): io.sentry.core.Breadcrumb;
        }
        export class BeforeSendCallback {
          public static class: java.lang.Class<io.sentry.core.SentryOptions.BeforeSendCallback>;
          /**
           * Constructs a new instance of the io.sentry.core.SentryOptions$BeforeSendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            execute(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.SentryEvent;
          });
          public constructor();
          public execute(param0: io.sentry.core.SentryEvent, param1: any): io.sentry.core.SentryEvent;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryStackTraceFactory {
        public static class: java.lang.Class<io.sentry.core.SentryStackTraceFactory>;
        public constructor(param0: java.util.List<string>, param1: java.util.List<string>);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryThreadFactory {
        public static class: java.lang.Class<io.sentry.core.SentryThreadFactory>;
        public constructor(param0: io.sentry.core.SentryStackTraceFactory, param1: boolean);
        public constructor(param0: io.sentry.core.SentryStackTraceFactory);
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SentryValues<T>  extends java.lang.Object {
        public static class: java.lang.Class<io.sentry.core.SentryValues<any>>;
        public getValues(): java.util.List<T>;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SynchronizedCollection<E>  extends java.lang.Object {
        public static class: java.lang.Class<io.sentry.core.SynchronizedCollection<any>>;
        public addAll(param0: java.util.Collection<any>): boolean;
        public contains(param0: any): boolean;
        public toArray(param0: native.Array<any>): native.Array<any>;
        public toString(): string;
        public retainAll(param0: java.util.Collection<any>): boolean;
        public toArray(): native.Array<any>;
        public size(): number;
        public containsAll(param0: java.util.Collection<any>): boolean;
        public add(param0: E): boolean;
        public hashCode(): number;
        public removeAll(param0: java.util.Collection<any>): boolean;
        public clear(): void;
        public equals(param0: any): boolean;
        public static synchronizedCollection(param0: java.util.Collection<any>): io.sentry.core.SynchronizedCollection<any>;
        public iterator(): java.util.Iterator<E>;
        public decorated(): java.util.Collection<E>;
        public isEmpty(): boolean;
        public remove(param0: any): boolean;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SynchronizedQueue<E>  extends io.sentry.core.SynchronizedCollection<any> implements java.util.Queue<any>  {
        public static class: java.lang.Class<io.sentry.core.SynchronizedQueue<any>>;
        public remove(): any;
        public decorated(): java.util.Queue<any>;
        public element(): any;
        public hashCode(): number;
        public peek(): any;
        public offer(param0: any): boolean;
        public decorated(): java.util.Collection<any>;
        public equals(param0: any): boolean;
        public constructor(param0: java.util.Queue<any>, param1: any);
        public remove(param0: any): boolean;
        public poll(): any;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class SystemOutLogger extends io.sentry.core.ILogger {
        public static class: java.lang.Class<io.sentry.core.SystemOutLogger>;
        public log(param0: io.sentry.core.SentryLevel, param1: string, param2: native.Array<any>): void;
        public log(param0: io.sentry.core.SentryLevel, param1: string, param2: java.lang.Throwable): void;
        public constructor();
        public log(param0: io.sentry.core.SentryLevel, param1: java.lang.Throwable, param2: string, param3: native.Array<any>): void;
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class UncaughtExceptionHandler {
        public static class: java.lang.Class<io.sentry.core.UncaughtExceptionHandler>;
        /**
         * Constructs a new instance of the io.sentry.core.UncaughtExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
          setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
        });
        public constructor();
        public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
        public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
      }
      export module UncaughtExceptionHandler {
        export class Adapter extends io.sentry.core.UncaughtExceptionHandler {
          public static class: java.lang.Class<io.sentry.core.UncaughtExceptionHandler.Adapter>;
          public getDefaultUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
          public setDefaultUncaughtExceptionHandler(param0: java.lang.Thread.UncaughtExceptionHandler): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export class UncaughtExceptionHandlerIntegration extends io.sentry.core.Integration {
        public static class: java.lang.Class<io.sentry.core.UncaughtExceptionHandlerIntegration>;
        public close(): void;
        public register(param0: io.sentry.core.IHub, param1: io.sentry.core.SentryOptions): void;
        public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
      }
      export module UncaughtExceptionHandlerIntegration {
        export class UncaughtExceptionHint extends io.sentry.core.hints.DiskFlushNotification {
          public static class: java.lang.Class<io.sentry.core.UncaughtExceptionHandlerIntegration.UncaughtExceptionHint>;
          public markFlushed(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module cache {
        export class DiskCache extends io.sentry.core.cache.IEventCache {
          public static class: java.lang.Class<io.sentry.core.cache.DiskCache>;
          public static FILE_SUFFIX: string;
          public iterator(): java.util.Iterator<io.sentry.core.SentryEvent>;
          public discard(param0: io.sentry.core.SentryEvent): void;
          public store(param0: io.sentry.core.SentryEvent): void;
          public constructor(param0: io.sentry.core.SentryOptions);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module cache {
        export class IEventCache extends java.lang.Iterable<io.sentry.core.SentryEvent> {
          public static class: java.lang.Class<io.sentry.core.cache.IEventCache>;
          /**
           * Constructs a new instance of the io.sentry.core.cache.IEventCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            store(param0: io.sentry.core.SentryEvent): void;
            discard(param0: io.sentry.core.SentryEvent): void;
          });
          public constructor();
          public discard(param0: io.sentry.core.SentryEvent): void;
          public store(param0: io.sentry.core.SentryEvent): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module exception {
        export class ExceptionMechanismException {
          public static class: java.lang.Class<io.sentry.core.exception.ExceptionMechanismException>;
          public getThrowable(): java.lang.Throwable;
          public getExceptionMechanism(): io.sentry.core.protocol.Mechanism;
          public constructor(param0: io.sentry.core.protocol.Mechanism, param1: java.lang.Throwable, param2: java.lang.Thread);
          public getThread(): java.lang.Thread;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module hints {
        export class Cached {
          public static class: java.lang.Class<io.sentry.core.hints.Cached>;
          /**
           * Constructs a new instance of the io.sentry.core.hints.Cached interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
          });
          public constructor();
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module hints {
        export class DiskFlushNotification {
          public static class: java.lang.Class<io.sentry.core.hints.DiskFlushNotification>;
          /**
           * Constructs a new instance of the io.sentry.core.hints.DiskFlushNotification interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            markFlushed(): void;
          });
          public constructor();
          public markFlushed(): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module hints {
        export class Retryable {
          public static class: java.lang.Class<io.sentry.core.hints.Retryable>;
          /**
           * Constructs a new instance of the io.sentry.core.hints.Retryable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getRetry(): boolean;
            setRetry(param0: boolean): void;
          });
          public constructor();
          public setRetry(param0: boolean): void;
          public getRetry(): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module hints {
        export class SubmissionResult {
          public static class: java.lang.Class<io.sentry.core.hints.SubmissionResult>;
          /**
           * Constructs a new instance of the io.sentry.core.hints.SubmissionResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            setResult(param0: boolean): void;
          });
          public constructor();
          public setResult(param0: boolean): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class App extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.App>;
          public static TYPE: string;
          public getAppIdentifier(): string;
          public setAppBuild(param0: string): void;
          public getAppName(): string;
          public setAppStartTime(param0: java.util.Date): void;
          public setDeviceAppHash(param0: string): void;
          public getBuildType(): string;
          public setBuildType(param0: string): void;
          public getAppBuild(): string;
          public getAppVersion(): string;
          public setAppVersion(param0: string): void;
          public constructor();
          public getAppStartTime(): java.util.Date;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public getDeviceAppHash(): string;
          public setAppIdentifier(param0: string): void;
          public setAppName(param0: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class Browser extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.Browser>;
          public static TYPE: string;
          public setVersion(param0: string): void;
          public getVersion(): string;
          public constructor();
          public getName(): string;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setName(param0: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class Contexts extends java.util.concurrent.ConcurrentHashMap<string,any> {
          public static class: java.lang.Class<io.sentry.core.protocol.Contexts>;
          public setGpu(param0: io.sentry.core.protocol.Gpu): void;
          public setDevice(param0: io.sentry.core.protocol.Device): void;
          public getRuntime(): io.sentry.core.protocol.SentryRuntime;
          public getGpu(): io.sentry.core.protocol.Gpu;
          public getApp(): io.sentry.core.protocol.App;
          public setOperatingSystem(param0: io.sentry.core.protocol.OperatingSystem): void;
          public getBrowser(): io.sentry.core.protocol.Browser;
          public setApp(param0: io.sentry.core.protocol.App): void;
          public getDevice(): io.sentry.core.protocol.Device;
          public getOperatingSystem(): io.sentry.core.protocol.OperatingSystem;
          public constructor();
          public setRuntime(param0: io.sentry.core.protocol.SentryRuntime): void;
          public setBrowser(param0: io.sentry.core.protocol.Browser): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class DebugImage extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.DebugImage>;
          public getImageAddr(): string;
          public getCodeId(): string;
          public setImageSize(param0: java.lang.Long): void;
          public setType(param0: string): void;
          public setDebugId(param0: string): void;
          public setUuid(param0: string): void;
          public getDebugFile(): string;
          public setCodeFile(param0: string): void;
          public setDebugFile(param0: string): void;
          public getCodeFile(): string;
          public getDebugId(): string;
          public setImageAddr(param0: string): void;
          public constructor();
          public setArch(param0: string): void;
          public getArch(): string;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public getUuid(): string;
          public getType(): string;
          public getImageSize(): java.lang.Long;
          public setCodeId(param0: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class DebugMeta extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.DebugMeta>;
          public getSdkInfo(): io.sentry.core.protocol.SdkInfo;
          public getImages(): java.util.List<io.sentry.core.protocol.DebugImage>;
          public constructor();
          public setSdkInfo(param0: io.sentry.core.protocol.SdkInfo): void;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setImages(param0: java.util.List<io.sentry.core.protocol.DebugImage>): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class Device extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.Device>;
          public static TYPE: string;
          public getFreeMemory(): java.lang.Long;
          public setOnline(param0: java.lang.Boolean): void;
          public getId(): string;
          public getModel(): string;
          public isOnline(): java.lang.Boolean;
          public getScreenDpi(): java.lang.Integer;
          public isSimulator(): java.lang.Boolean;
          public getUsableMemory(): java.lang.Long;
          public getScreenDensity(): java.lang.Float;
          public constructor();
          public setMemorySize(param0: java.lang.Long): void;
          public setFamily(param0: string): void;
          /** @deprecated */
          public getArch(): string;
          public getScreenWidthPixels(): java.lang.Integer;
          public setArchs(param0: native.Array<string>): void;
          public setConnectionType(param0: string): void;
          public setExternalFreeStorage(param0: java.lang.Long): void;
          public setTimezone(param0: java.util.TimeZone): void;
          public setOrientation(param0: io.sentry.core.protocol.Device.DeviceOrientation): void;
          public getBrand(): string;
          public getFamily(): string;
          public setScreenWidthPixels(param0: java.lang.Integer): void;
          public getMemorySize(): java.lang.Long;
          public getBootTime(): java.util.Date;
          /** @deprecated */
          public setArch(param0: string): void;
          public setName(param0: string): void;
          public isCharging(): java.lang.Boolean;
          public setLanguage(param0: string): void;
          public getExternalFreeStorage(): java.lang.Long;
          public setManufacturer(param0: string): void;
          public setBatteryLevel(param0: java.lang.Float): void;
          public setScreenDpi(param0: java.lang.Integer): void;
          public setScreenHeightPixels(param0: java.lang.Integer): void;
          public setModel(param0: string): void;
          public getModelId(): string;
          public setExternalStorageSize(param0: java.lang.Long): void;
          public isLowMemory(): java.lang.Boolean;
          public getConnectionType(): string;
          public getStorageSize(): java.lang.Long;
          public setFreeStorage(param0: java.lang.Long): void;
          public setSimulator(param0: java.lang.Boolean): void;
          public getTimezone(): java.util.TimeZone;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public getScreenHeightPixels(): java.lang.Integer;
          public setModelId(param0: string): void;
          /** @deprecated */
          public getScreenResolution(): string;
          /** @deprecated */
          public setScreenResolution(param0: string): void;
          public setCharging(param0: java.lang.Boolean): void;
          public getBatteryLevel(): java.lang.Float;
          public getArchs(): native.Array<string>;
          public getOrientation(): io.sentry.core.protocol.Device.DeviceOrientation;
          public setScreenDensity(param0: java.lang.Float): void;
          public getManufacturer(): string;
          public getFreeStorage(): java.lang.Long;
          public setUsableMemory(param0: java.lang.Long): void;
          public getExternalStorageSize(): java.lang.Long;
          public setBrand(param0: string): void;
          public getName(): string;
          public setFreeMemory(param0: java.lang.Long): void;
          public setId(param0: string): void;
          public getLanguage(): string;
          public setStorageSize(param0: java.lang.Long): void;
          public setLowMemory(param0: java.lang.Boolean): void;
          public setBootTime(param0: java.util.Date): void;
        }
        export module Device {
          export class DeviceOrientation {
            public static class: java.lang.Class<io.sentry.core.protocol.Device.DeviceOrientation>;
            public static PORTRAIT: io.sentry.core.protocol.Device.DeviceOrientation;
            public static LANDSCAPE: io.sentry.core.protocol.Device.DeviceOrientation;
            public static valueOf(param0: string): io.sentry.core.protocol.Device.DeviceOrientation;
            public static values(): native.Array<io.sentry.core.protocol.Device.DeviceOrientation>;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class Gpu extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.Gpu>;
          public static TYPE: string;
          public getVersion(): string;
          public getApiType(): string;
          public setApiType(param0: string): void;
          public getVendorName(): string;
          public setId(param0: java.lang.Integer): void;
          public getVendorId(): java.lang.Integer;
          public setVendorId(param0: java.lang.Integer): void;
          public setNpotSupport(param0: string): void;
          public getMemorySize(): java.lang.Integer;
          public setName(param0: string): void;
          public getNpotSupport(): string;
          public setVersion(param0: string): void;
          public setMultiThreadedRendering(param0: java.lang.Boolean): void;
          public constructor();
          public getName(): string;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setMemorySize(param0: java.lang.Integer): void;
          public isMultiThreadedRendering(): java.lang.Boolean;
          public setVendorName(param0: string): void;
          public getId(): java.lang.Integer;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class Mechanism extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.Mechanism>;
          public setDescription(param0: string): void;
          public constructor(param0: java.lang.Thread);
          public setType(param0: string): void;
          public setHelpLink(param0: string): void;
          public isHandled(): java.lang.Boolean;
          public setSynthetic(param0: java.lang.Boolean): void;
          public getMeta(): java.util.Map<string,any>;
          public getSynthetic(): java.lang.Boolean;
          public getHelpLink(): string;
          public getData(): java.util.Map<string,any>;
          public setMeta(param0: java.util.Map<string,any>): void;
          public constructor();
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setData(param0: java.util.Map<string,any>): void;
          public getType(): string;
          public getDescription(): string;
          public setHandled(param0: java.lang.Boolean): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class Message extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.Message>;
          public setFormatted(param0: string): void;
          public constructor();
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public getMessage(): string;
          public getParams(): java.util.List<string>;
          public setMessage(param0: string): void;
          public getFormatted(): string;
          public setParams(param0: java.util.List<string>): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class OperatingSystem extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.OperatingSystem>;
          public static TYPE: string;
          public getVersion(): string;
          public setKernelVersion(param0: string): void;
          public isRooted(): java.lang.Boolean;
          public setRooted(param0: java.lang.Boolean): void;
          public getKernelVersion(): string;
          public setName(param0: string): void;
          public setVersion(param0: string): void;
          public setBuild(param0: string): void;
          public constructor();
          public getName(): string;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public getRawDescription(): string;
          public setRawDescription(param0: string): void;
          public getBuild(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class Request extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.Request>;
          public setCookies(param0: string): void;
          public getHeaders(): java.util.Map<string,string>;
          public getData(): any;
          public setEnvs(param0: java.util.Map<string,string>): void;
          public getOthers(): java.util.Map<string,string>;
          public setData(param0: any): void;
          public getUrl(): string;
          public constructor();
          public getCookies(): string;
          public setUrl(param0: string): void;
          public getQueryString(): string;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setMethod(param0: string): void;
          public getEnvs(): java.util.Map<string,string>;
          public setOthers(param0: java.util.Map<string,string>): void;
          public getMethod(): string;
          public setQueryString(param0: string): void;
          public setHeaders(param0: java.util.Map<string,string>): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SdkInfo extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.SdkInfo>;
          public setVersionMinor(param0: java.lang.Integer): void;
          public setSdkName(param0: string): void;
          public constructor();
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setVersionPatchlevel(param0: java.lang.Integer): void;
          public getVersionMajor(): java.lang.Integer;
          public setVersionMajor(param0: java.lang.Integer): void;
          public getVersionMinor(): java.lang.Integer;
          public getSdkName(): string;
          public getVersionPatchlevel(): java.lang.Integer;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SdkVersion extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.SdkVersion>;
          public setVersion(param0: string): void;
          public getVersion(): string;
          public constructor();
          public getName(): string;
          public addPackage(param0: string, param1: string): void;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public addIntegration(param0: string): void;
          public setName(param0: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SentryException extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.SentryException>;
          public getModule(): string;
          public setType(param0: string): void;
          public setModule(param0: string): void;
          public setValue(param0: string): void;
          public setStacktrace(param0: io.sentry.core.protocol.SentryStackTrace): void;
          public getThreadId(): java.lang.Long;
          public setThreadId(param0: java.lang.Long): void;
          public getValue(): string;
          public constructor();
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public getType(): string;
          public getStacktrace(): io.sentry.core.protocol.SentryStackTrace;
          public getMechanism(): io.sentry.core.protocol.Mechanism;
          public setMechanism(param0: io.sentry.core.protocol.Mechanism): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SentryId {
          public static class: java.lang.Class<io.sentry.core.protocol.SentryId>;
          public static EMPTY_ID: io.sentry.core.protocol.SentryId;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor(param0: string);
          public constructor();
          public hashCode(): number;
          public constructor(param0: java.util.UUID);
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SentryPackage extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.SentryPackage>;
          public setVersion(param0: string): void;
          public getVersion(): string;
          public constructor();
          public getName(): string;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setName(param0: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SentryRuntime extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.SentryRuntime>;
          public static TYPE: string;
          public setVersion(param0: string): void;
          public getVersion(): string;
          public constructor();
          public getName(): string;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public getRawDescription(): string;
          public setRawDescription(param0: string): void;
          public setName(param0: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SentryStackFrame extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.SentryStackFrame>;
          public getPreContext(): java.util.List<string>;
          public getFunction(): string;
          public setInApp(param0: java.lang.Boolean): void;
          public getColno(): java.lang.Integer;
          public getFramesOmitted(): java.util.List<java.lang.Integer>;
          public setFunction(param0: string): void;
          public setModule(param0: string): void;
          public isInApp(): java.lang.Boolean;
          public setPlatform(param0: string): void;
          public setContextLine(param0: string): void;
          public setLineno(param0: java.lang.Integer): void;
          public getPostContext(): java.util.List<string>;
          public setPackage(param0: string): void;
          public setSymbolAddr(param0: string): void;
          public getRawFunction(): string;
          public constructor();
          public setPostContext(param0: java.util.List<string>): void;
          public getVars(): java.util.Map<string,string>;
          public getFilename(): string;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public isNative(): java.lang.Boolean;
          public getInstructionAddr(): string;
          public getSymbolAddr(): string;
          public getImageAddr(): string;
          public setColno(param0: java.lang.Integer): void;
          public getModule(): string;
          public getLineno(): java.lang.Integer;
          public setNative(param0: java.lang.Boolean): void;
          public setRawFunction(param0: string): void;
          public getPlatform(): string;
          public setVars(param0: java.util.Map<string,string>): void;
          public setFilename(param0: string): void;
          public setAbsPath(param0: string): void;
          public getAbsPath(): string;
          public getPackage(): string;
          public setImageAddr(param0: string): void;
          public setFramesOmitted(param0: java.util.List<java.lang.Integer>): void;
          public setInstructionAddr(param0: string): void;
          public setPreContext(param0: java.util.List<string>): void;
          public getContextLine(): string;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SentryStackTrace extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.SentryStackTrace>;
          public constructor(param0: java.util.List<io.sentry.core.protocol.SentryStackFrame>);
          public getFrames(): java.util.List<io.sentry.core.protocol.SentryStackFrame>;
          public constructor();
          public getRegisters(): java.util.Map<string,string>;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setFrames(param0: java.util.List<io.sentry.core.protocol.SentryStackFrame>): void;
          public setRegisters(param0: java.util.Map<string,string>): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class SentryThread extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.SentryThread>;
          public setState(param0: string): void;
          public setCrashed(param0: java.lang.Boolean): void;
          public setCurrent(param0: java.lang.Boolean): void;
          public getState(): string;
          public getId(): java.lang.Long;
          public setName(param0: string): void;
          public setStacktrace(param0: io.sentry.core.protocol.SentryStackTrace): void;
          public constructor();
          public setId(param0: java.lang.Long): void;
          public getName(): string;
          public setDaemon(param0: java.lang.Boolean): void;
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public isCrashed(): java.lang.Boolean;
          public isCurrent(): java.lang.Boolean;
          public getPriority(): java.lang.Integer;
          public getStacktrace(): io.sentry.core.protocol.SentryStackTrace;
          public setPriority(param0: java.lang.Integer): void;
          public isDaemon(): java.lang.Boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module protocol {
        export class User extends io.sentry.core.IUnknownPropertiesConsumer {
          public static class: java.lang.Class<io.sentry.core.protocol.User>;
          public getId(): string;
          public getOthers(): java.util.Map<string,string>;
          public clone(): io.sentry.core.protocol.User;
          public setIpAddress(param0: string): void;
          public getUsername(): string;
          public getIpAddress(): string;
          public setUsername(param0: string): void;
          public constructor();
          public acceptUnknownProperties(param0: java.util.Map<string,any>): void;
          public setId(param0: string): void;
          public setOthers(param0: java.util.Map<string,string>): void;
          public getEmail(): string;
          public setEmail(param0: string): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class AsyncConnection extends io.sentry.core.transport.Connection {
          public static class: java.lang.Class<io.sentry.core.transport.AsyncConnection>;
          public close(): void;
          public send(param0: io.sentry.core.SentryEvent): void;
          public send(param0: io.sentry.core.SentryEvent, param1: any): void;
          public constructor(param0: io.sentry.core.transport.ITransport, param1: io.sentry.core.transport.ITransportGate, param2: io.sentry.core.cache.IEventCache, param3: number, param4: io.sentry.core.SentryOptions);
        }
        export module AsyncConnection {
          export class AsyncConnectionThreadFactory {
            public static class: java.lang.Class<io.sentry.core.transport.AsyncConnection.AsyncConnectionThreadFactory>;
            public newThread(param0: java.lang.Runnable): java.lang.Thread;
          }
          export class EventSender extends io.sentry.core.transport.Retryable {
            public static class: java.lang.Class<io.sentry.core.transport.AsyncConnection.EventSender>;
            public run(): void;
            public getSuggestedRetryDelayMillis(): number;
            public getResponseCode(): number;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class Connection {
          public static class: java.lang.Class<io.sentry.core.transport.Connection>;
          /**
           * Constructs a new instance of the io.sentry.core.transport.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            send(param0: io.sentry.core.SentryEvent, param1: any): void;
            send(param0: io.sentry.core.SentryEvent): void;
            close(): void;
          });
          public constructor();
          public close(): void;
          public send(param0: io.sentry.core.SentryEvent): void;
          public send(param0: io.sentry.core.SentryEvent, param1: any): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class HttpTransport extends io.sentry.core.transport.ITransport {
          public static class: java.lang.Class<io.sentry.core.transport.HttpTransport>;
          public send(param0: io.sentry.core.SentryEvent): io.sentry.core.transport.TransportResult;
          public constructor(param0: io.sentry.core.SentryOptions, param1: io.sentry.core.transport.IConnectionConfigurator, param2: number, param3: number, param4: boolean, param5: java.net.URL);
          public close(): void;
          public open(param0: java.net.Proxy): java.net.HttpURLConnection;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class IConnectionConfigurator {
          public static class: java.lang.Class<io.sentry.core.transport.IConnectionConfigurator>;
          /**
           * Constructs a new instance of the io.sentry.core.transport.IConnectionConfigurator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            configure(param0: java.net.HttpURLConnection): void;
          });
          public constructor();
          public configure(param0: java.net.HttpURLConnection): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class ITransport {
          public static class: java.lang.Class<io.sentry.core.transport.ITransport>;
          /**
           * Constructs a new instance of the io.sentry.core.transport.ITransport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            send(param0: io.sentry.core.SentryEvent): io.sentry.core.transport.TransportResult;
          });
          public constructor();
          public send(param0: io.sentry.core.SentryEvent): io.sentry.core.transport.TransportResult;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class ITransportGate {
          public static class: java.lang.Class<io.sentry.core.transport.ITransportGate>;
          /**
           * Constructs a new instance of the io.sentry.core.transport.ITransportGate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            isSendingAllowed(): boolean;
          });
          public constructor();
          public isSendingAllowed(): boolean;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class NoOpEventCache extends io.sentry.core.cache.IEventCache {
          public static class: java.lang.Class<io.sentry.core.transport.NoOpEventCache>;
          public static getInstance(): io.sentry.core.transport.NoOpEventCache;
          public iterator(): java.util.Iterator<io.sentry.core.SentryEvent>;
          public discard(param0: io.sentry.core.SentryEvent): void;
          public store(param0: io.sentry.core.SentryEvent): void;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class Retryable {
          public static class: java.lang.Class<io.sentry.core.transport.Retryable>;
          /**
           * Constructs a new instance of the io.sentry.core.transport.Retryable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getSuggestedRetryDelayMillis(): number;
            getResponseCode(): number;
          });
          public constructor();
          public getResponseCode(): number;
          public getSuggestedRetryDelayMillis(): number;
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export class RetryingThreadPoolExecutor {
          public static class: java.lang.Class<io.sentry.core.transport.RetryingThreadPoolExecutor>;
          public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
          public constructor(param0: number, param1: number, param2: java.util.concurrent.ThreadFactory, param3: java.util.concurrent.RejectedExecutionHandler);
          public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
          public beforeExecute(param0: java.lang.Thread, param1: java.lang.Runnable): void;
          public submit(param0: io.sentry.core.transport.Retryable): void;
          public decorateTask(param0: java.lang.Runnable, param1: java.util.concurrent.RunnableScheduledFuture<any>): java.util.concurrent.RunnableScheduledFuture<any>;
          public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future<any>;
          public submit(param0: java.util.concurrent.Callable<any>): java.util.concurrent.Future<any>;
        }
        export module RetryingThreadPoolExecutor {
          export class AttemptedRunnable<V>  extends java.util.concurrent.RunnableScheduledFuture<any> {
            public static class: java.lang.Class<io.sentry.core.transport.RetryingThreadPoolExecutor.AttemptedRunnable<any>>;
            public isDone(): boolean;
            public isPeriodic(): boolean;
            public run(): void;
            public isCancelled(): boolean;
            public getDelay(param0: java.util.concurrent.TimeUnit): number;
            public cancel(param0: boolean): boolean;
            public equals(param0: any): boolean;
            public hashCode(): number;
            public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
            public compareTo(param0: java.util.concurrent.Delayed): number;
            public get(): any;
            public toString(): string;
          }
          export class CancelledFuture<T>  extends java.util.concurrent.Future<any> {
            public static class: java.lang.Class<io.sentry.core.transport.RetryingThreadPoolExecutor.CancelledFuture<any>>;
            public isDone(): boolean;
            public isCancelled(): boolean;
            public cancel(param0: boolean): boolean;
            public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
            public get(): any;
          }
          export class NextAttempt {
            public static class: java.lang.Class<io.sentry.core.transport.RetryingThreadPoolExecutor.NextAttempt>;
            public run(): void;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module transport {
        export abstract class TransportResult {
          public static class: java.lang.Class<io.sentry.core.transport.TransportResult>;
          public getResponseCode(): number;
          public getRetryMillis(): number;
          public static success(): io.sentry.core.transport.TransportResult;
          public static error(param0: number, param1: number): io.sentry.core.transport.TransportResult;
          public isSuccess(): boolean;
        }
        export module TransportResult {
          export class ErrorTransportResult extends io.sentry.core.transport.TransportResult {
            public static class: java.lang.Class<io.sentry.core.transport.TransportResult.ErrorTransportResult>;
            public isSuccess(): boolean;
            public getResponseCode(): number;
            public getRetryMillis(): number;
          }
          export class SuccessTransportResult extends io.sentry.core.transport.TransportResult {
            public static class: java.lang.Class<io.sentry.core.transport.TransportResult.SuccessTransportResult>;
            public isSuccess(): boolean;
            public getResponseCode(): number;
            public getRetryMillis(): number;
          }
        }
      }
    }
  }
}

declare module io {
  export module sentry {
    export module core {
      export module util {
        export class Objects {
          public static class: java.lang.Class<io.sentry.core.util.Objects>;
          public static requireNonNull(param0: any, param1: string): any;
        }
      }
    }
  }
}

//Generics information:
//io.sentry.core.CircularFifoQueue:1
//io.sentry.core.OptionsContainer:1
//io.sentry.core.Sentry.OptionsConfiguration:1
//io.sentry.core.SentryValues:1
//io.sentry.core.SynchronizedCollection:1
//io.sentry.core.SynchronizedQueue:1
//io.sentry.core.transport.RetryingThreadPoolExecutor.AttemptedRunnable:1
//io.sentry.core.transport.RetryingThreadPoolExecutor.CancelledFuture:1
