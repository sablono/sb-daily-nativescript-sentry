declare function NSErrorFromSentryError(error: SentryError, description: string): NSError;

declare class SentryAsynchronousOperation extends NSOperation {
  static alloc(): SentryAsynchronousOperation; // inherited from NSObject

  static new(): SentryAsynchronousOperation; // inherited from NSObject

  completeOperation(): void;
}

declare class SentryBreadcrumb extends NSObject implements SentrySerializable {
  static alloc(): SentryBreadcrumb; // inherited from NSObject

  static new(): SentryBreadcrumb; // inherited from NSObject

  category: string;

  data: NSDictionary<string, any>;

  level: SentrySeverity;

  message: string;

  timestamp: Date;

  type: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { level: SentrySeverity; category: string; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithLevelCategory(level: SentrySeverity, category: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryBreadcrumbStore extends NSObject implements SentrySerializable {
  static alloc(): SentryBreadcrumbStore; // inherited from NSObject

  static new(): SentryBreadcrumbStore; // inherited from NSObject

  maxBreadcrumbs: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly; // inherited from NSObjectProtocol

  constructor(o: { fileManager: SentryFileManager; });

  addBreadcrumb(crumb: SentryBreadcrumb): void;

  class(): typeof NSObject;

  clear(): void;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  count(): number;

  initWithFileManager(fileManager: SentryFileManager): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryBreadcrumbTracker extends NSObject {
  static alloc(): SentryBreadcrumbTracker; // inherited from NSObject

  static new(): SentryBreadcrumbTracker; // inherited from NSObject

  start(): void;
}

declare class SentryClient extends NSObject {
  static alloc(): SentryClient; // inherited from NSObject

  static new(): SentryClient; // inherited from NSObject

  _debugMeta: NSArray<SentryDebugMeta>;

  _snapshotThreads: NSArray<SentryThread>;

  beforeSendRequest: (p1: SentryNSURLRequest) => void;

  beforeSerializeEvent: (p1: SentryEvent) => void;

  breadcrumbs: SentryBreadcrumbStore;

  dist: string;

  enabled: number;

  environment: string;

  extra: NSDictionary<string, any>;

  lastContext: NSDictionary<string, any>;

  lastEvent: SentryEvent;

  maxBreadcrumbs: number;

  maxEvents: number;

  releaseName: string;

  sampleRate: number;

  shouldQueueEvent: (p1: SentryEvent, p2: NSHTTPURLResponse, p3: NSError) => boolean;

  shouldSendEvent: (p1: SentryEvent) => boolean;

  tags: NSDictionary<string, string>;

  user: SentryUser;

  static logLevel: SentryLogLevel;

  static readonly sdkName: string;

  static sharedClient: SentryClient;

  static readonly versionString: string;

  constructor(o: { dsn: string; });

  constructor(o: { options: NSDictionary<string, any>; });

  appendStacktraceToEvent(event: SentryEvent): void;

  clearContext(): void;

  crash(): void;

  crashedLastLaunch(): boolean;

  enableAutomaticBreadcrumbTracking(): void;

  initWithDsnDidFailWithError(dsn: string): this;

  initWithOptionsDidFailWithError(options: NSDictionary<string, any>): this;

  reportUserExceptionReasonLanguageLineOfCodeStackTraceLogAllThreadsTerminateProgram(name: string, reason: string, language: string, lineOfCode: string, stackTrace: NSArray<any> | any[], logAllThreads: boolean, terminateProgram: boolean): void;

  sendEventWithCompletionHandler(event: SentryEvent, completionHandler: (p1: NSError) => void): void;

  snapshotStacktrace(snapshotCompleted: () => void): void;

  startCrashHandlerWithError(): boolean;

  storeEvent(event: SentryEvent): void;

  trackMemoryPressureAsEvent(): void;
}

declare class SentryContext extends NSObject implements SentrySerializable {

  static alloc(): SentryContext; // inherited from NSObject

  static new(): SentryContext; // inherited from NSObject

  appContext: NSDictionary<string, any>;

  deviceContext: NSDictionary<string, any>;

  osContext: NSDictionary<string, any>;
  otherContexts: NSDictionary<string, any>;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryCrash extends NSObject {

  static alloc(): SentryCrash; // inherited from NSObject

  static new(): SentryCrash; // inherited from NSObject

  static sharedInstance(): SentryCrash;

  readonly activeDurationSinceLastCrash: number;

  readonly activeDurationSinceLaunch: number;

  addConsoleLogToReport: boolean;

  readonly backgroundDurationSinceLastCrash: number;

  readonly backgroundDurationSinceLaunch: number;

  catchZombies: boolean;

  readonly crashedLastLaunch: boolean;

  currentSnapshotUserReportedExceptionHandler: interop.Pointer | interop.Reference<interop.FunctionReference<(p1: NSException) => void>>;

  deadlockWatchdogInterval: number;

  deleteBehaviorAfterSendAll: SentryCrashCDeleteBehavior;

  demangleLanguages: SentryCrashDemangleLanguage;

  doNotIntrospectClasses: NSArray<any>;

  introspectMemory: boolean;

  readonly launchesSinceLastCrash: number;

  maxReportCount: number;

  monitoring: SentryCrashMonitorType;

  onCrash: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>;

  printPreviousLog: boolean;

  readonly reportCount: number;

  readonly sessionsSinceLastCrash: number;

  readonly sessionsSinceLaunch: number;

  sink: SentryCrashReportFilter;

  readonly systemInfo: NSDictionary<any, any>;

  uncaughtExceptionHandler: interop.Pointer | interop.Reference<interop.FunctionReference<(p1: NSException) => void>>;

  userInfo: NSDictionary<any, any>;

  constructor(o: { basePath: string; });

  deleteAllReports(): void;

  deleteReportWithID(reportID: number): void;

  initWithBasePath(basePath: string): this;

  install(): boolean;

  reportIDs(): NSArray<any>;

  reportUserExceptionReasonLanguageLineOfCodeStackTraceLogAllThreadsTerminateProgram(name: string, reason: string, language: string, lineOfCode: string, stackTrace: NSArray<any> | any[], logAllThreads: boolean, terminateProgram: boolean): void;

  reportWithID(reportID: number): NSDictionary<any, any>;

  sendAllReportsWithCompletion(onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;
}

interface SentryCrashBinaryImage {
  address: number;
  vmAddress: number;
  size: number;
  name: string;
  uuid: string;
  cpuType: number;
  cpuSubType: number;
  majorVersion: number;
  minorVersion: number;
  revisionVersion: number;
}
declare var SentryCrashBinaryImage: interop.StructType<SentryCrashBinaryImage>;

interface SentryCrashBufferedReader {
  buffer: string;
  bufferLength: number;
  dataStartPos: number;
  dataEndPos: number;
  fd: number;
}
declare var SentryCrashBufferedReader: interop.StructType<SentryCrashBufferedReader>;

interface SentryCrashBufferedWriter {
  buffer: string;
  bufferLength: number;
  position: number;
  fd: number;
}
declare var SentryCrashBufferedWriter: interop.StructType<SentryCrashBufferedWriter>;

declare const enum SentryCrashCDeleteBehavior {

  Never = 0,

  OnSucess = 1,

  Always = 2
}

declare class SentryCrashCString extends NSObject {

  static alloc(): SentryCrashCString; // inherited from NSObject

  static new(): SentryCrashCString; // inherited from NSObject

  static stringWithCString(string: string | interop.Pointer | interop.Reference<any>): SentryCrashCString;

  static stringWithData(data: NSData): SentryCrashCString;

  static stringWithDataLength(data: string | interop.Pointer | interop.Reference<any>, length: number): SentryCrashCString;

  static stringWithString(string: string): SentryCrashCString;

  readonly bytes: string;

  readonly length: number;

  constructor(o: { CString: string | interop.Pointer | interop.Reference<any>; });

  constructor(o: { data: NSData; });

  constructor(o: { data: string | interop.Pointer | interop.Reference<any>; length: number; });

  constructor(o: { string: string; });

  initWithCString(string: string | interop.Pointer | interop.Reference<any>): this;

  initWithData(data: NSData): this;

  initWithDataLength(data: string | interop.Pointer | interop.Reference<any>, length: number): this;

  initWithString(string: string): this;
}

declare const enum SentryCrashDemangleLanguage {

  None = 0,

  CPlusPlus = 1,

  Swift = 2,

  All = -2
}

declare class SentryCrashDoctor extends NSObject {

  static alloc(): SentryCrashDoctor; // inherited from NSObject

  static doctor(): SentryCrashDoctor;

  static new(): SentryCrashDoctor; // inherited from NSObject

  diagnoseCrash(crashReport: NSDictionary<any, any>): string;
}

declare class SentryCrashExceptionApplication extends NSObject {

  static alloc(): SentryCrashExceptionApplication; // inherited from NSObject

  static new(): SentryCrashExceptionApplication; // inherited from NSObject
}

declare var SentryCrashFrameworkVersionNumber: number;

declare var SentryCrashFrameworkVersionString: interop.Reference<number>;

declare class SentryCrashInstallation extends NSObject {

  static alloc(): SentryCrashInstallation; // inherited from NSObject

  static new(): SentryCrashInstallation; // inherited from NSObject

  onCrash: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>;

  constructor(o: { requiredProperties: NSArray<any> | any[]; });

  addPreFilter(filter: SentryCrashReportFilter): void;

  initWithRequiredProperties(requiredProperties: NSArray<any> | any[]): this;

  install(): void;

  makeKeyPath(keyPath: string): string;

  makeKeyPaths(keyPaths: NSArray<any> | any[]): NSArray<any>;

  reportFieldForPropertySetKey(propertyName: string, key: any): void;

  reportFieldForPropertySetValue(propertyName: string, value: any): void;

  sendAllReportsWithCompletion(onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  sink(): SentryCrashReportFilter;
}

declare class SentryCrashJSONCodec extends NSObject {

  static alloc(): SentryCrashJSONCodec; // inherited from NSObject

  static decodeOptionsError(JSONData: NSData, options: SentryCrashJSONDecodeOption): any;

  static encodeOptionsError(object: any, options: SentryCrashJSONEncodeOption): NSData;

  static new(): SentryCrashJSONCodec; // inherited from NSObject
}

interface SentryCrashJSONDecodeCallbacks {
  onBooleanElement: interop.FunctionReference<(p1: string, p2: boolean, p3: interop.Pointer | interop.Reference<any>) => number>;
  onFloatingPointElement: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>;
  onIntegerElement: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>;
  onNullElement: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => number>;
  onStringElement: interop.FunctionReference<(p1: string, p2: string, p3: interop.Pointer | interop.Reference<any>) => number>;
  onBeginObject: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => number>;
  onBeginArray: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => number>;
  onEndContainer: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => number>;
  onEndData: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<any>) => number>;
}
declare var SentryCrashJSONDecodeCallbacks: interop.StructType<SentryCrashJSONDecodeCallbacks>;

declare const enum SentryCrashJSONDecodeOption {

  None = 0,

  IgnoreNullInArray = 1,

  IgnoreNullInObject = 2,

  IgnoreAllNulls = 3,

  KeepPartialObject = 4
}

interface SentryCrashJSONEncodeContext {
  addJSONData: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>;
  userData: interop.Pointer | interop.Reference<any>;
  containerLevel: number;
  isObject: interop.Reference<boolean>;
  containerFirstEntry: boolean;
  prettyPrint: boolean;
}
declare var SentryCrashJSONEncodeContext: interop.StructType<SentryCrashJSONEncodeContext>;

declare const enum SentryCrashJSONEncodeOption {

  None = 0,

  Pretty = 1,

  Sorted = 2
}

declare const SentryCrashJSON_ERROR_CANNOT_ADD_DATA: number;

declare const SentryCrashJSON_ERROR_DATA_TOO_LONG: number;

declare const SentryCrashJSON_ERROR_INCOMPLETE: number;

declare const SentryCrashJSON_ERROR_INVALID_CHARACTER: number;

declare const SentryCrashJSON_ERROR_INVALID_DATA: number;

declare const SentryCrashJSON_OK: number;

declare const enum SentryCrashMonitorType {

  MachException = 1,

  Signal = 2,

  CPPException = 4,

  NSException = 8,

  MainThreadDeadlock = 16,

  UserReported = 32,

  System = 64,

  ApplicationState = 128,

  Zombie = 256
}

declare const enum SentryCrashObjCClassType {

  Unknown = 0,

  String = 1,

  Date = 2,

  URL = 3,

  Array = 4,

  Dictionary = 5,

  Number = 6,

  Exception = 7
}

interface SentryCrashObjCIvar {
  name: string;
  type: string;
  index: number;
}
declare var SentryCrashObjCIvar: interop.StructType<SentryCrashObjCIvar>;

declare const enum SentryCrashObjCType {

  Unknown = 0,

  Class = 1,

  Object = 2,

  Block = 3
}

declare class SentryCrashReportConverter extends NSObject {

  static alloc(): SentryCrashReportConverter; // inherited from NSObject

  static new(): SentryCrashReportConverter; // inherited from NSObject

  userContext: NSDictionary<any, any>;

  constructor(o: { report: NSDictionary<any, any>; });

  convertReportToEvent(): SentryEvent;

  initWithReport(report: NSDictionary<any, any>): this;
}

interface SentryCrashReportFilter extends NSObjectProtocol {

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;
}
declare var SentryCrashReportFilter: {

  prototype: SentryCrashReportFilter;
};

declare class SentryCrashReportFilterCombine extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportFilterCombine; // inherited from NSObject

  static filterWithFiltersAndKeys(firstFilter: any): SentryCrashReportFilterCombine;

  static new(): SentryCrashReportFilterCombine; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { filtersAndKeys: any; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  initWithFiltersAndKeys(firstFilter: any): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class SentryCrashReportFilterConcatenate extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportFilterConcatenate; // inherited from NSObject

  static filterWithSeparatorFmtKeys(separatorFmt: string, firstKey: any): SentryCrashReportFilterConcatenate;

  static new(): SentryCrashReportFilterConcatenate; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { separatorFmt: string; keys: any; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  initWithSeparatorFmtKeys(separatorFmt: string, firstKey: any): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class SentryCrashReportFilterDataToString extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportFilterDataToString; // inherited from NSObject

  static filter(): SentryCrashReportFilterDataToString;

  static new(): SentryCrashReportFilterDataToString; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class SentryCrashReportFilterObjectForKey extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportFilterObjectForKey; // inherited from NSObject

  static filterWithKeyAllowNotFound(key: any, allowNotFound: boolean): SentryCrashReportFilterObjectForKey;

  static new(): SentryCrashReportFilterObjectForKey; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { key: any; allowNotFound: boolean; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  initWithKeyAllowNotFound(key: any, allowNotFound: boolean): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class SentryCrashReportFilterPassthrough extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportFilterPassthrough; // inherited from NSObject

  static filter(): SentryCrashReportFilterPassthrough;

  static new(): SentryCrashReportFilterPassthrough; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class SentryCrashReportFilterPipeline extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportFilterPipeline; // inherited from NSObject

  static filterWithFilters(firstFilter: any): SentryCrashReportFilterPipeline;

  static new(): SentryCrashReportFilterPipeline; // inherited from NSObject

  readonly filters: NSArray<any>;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { filters: any; });

  addFilter(filter: SentryCrashReportFilter): void;

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  initWithFilters(firstFilter: any): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class SentryCrashReportFilterStringToData extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportFilterStringToData; // inherited from NSObject

  static filter(): SentryCrashReportFilterStringToData;

  static new(): SentryCrashReportFilterStringToData; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class SentryCrashReportFilterSubset extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportFilterSubset; // inherited from NSObject

  static filterWithKeys(firstKeyPath: any): SentryCrashReportFilterSubset;

  static new(): SentryCrashReportFilterSubset; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { keys: any; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  initWithKeys(firstKeyPath: any): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

declare class SentryCrashReportSink extends NSObject implements SentryCrashReportFilter {

  static alloc(): SentryCrashReportSink; // inherited from NSObject

  static new(): SentryCrashReportSink; // inherited from NSObject

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  filterReportsOnCompletion(reports: NSArray<any> | any[], onCompletion: (p1: NSArray<any>, p2: boolean, p3: NSError) => void): void;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;
}

interface SentryCrashReportWriter {
  addBooleanElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: boolean) => void>;
  addFloatingPointElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: number) => void>;
  addIntegerElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: number) => void>;
  addUIntegerElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: number) => void>;
  addStringElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string) => void>;
  addTextFileElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string) => void>;
  addTextFileLinesElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string) => void>;
  addJSONFileElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string, p4: boolean) => void>;
  addDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string, p4: number) => void>;
  beginDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string) => void>;
  appendDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: number) => void>;
  endDataElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>;
  addUUIDElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string) => void>;
  addJSONElement: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string, p3: string, p4: boolean) => void>;
  beginObject: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string) => void>;
  beginArray: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>, p2: string) => void>;
  endContainer: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>;
  context: interop.Pointer | interop.Reference<any>;
}
declare var SentryCrashReportWriter: interop.StructType<SentryCrashReportWriter>;

interface SentryCrashStackCursor {
  stackEntry: { address: number; imageName: string; imageAddress: number; symbolName: string; symbolAddress: number; };
  state: { currentDepth: number; hasGivenUp: boolean; };
  resetCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => void>;
  advanceCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => boolean>;
  symbolicate: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => boolean>;
  context: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare var SentryCrashStackCursor: interop.StructType<SentryCrashStackCursor>;

interface SentryCrashStackCursor_Backtrace_Context {
  skippedEntries: number;
  backtraceLength: number;
  backtrace: interop.Pointer | interop.Reference<number>;
}
declare var SentryCrashStackCursor_Backtrace_Context: interop.StructType<SentryCrashStackCursor_Backtrace_Context>;

interface SentryCrash_AppState {
  activeDurationSinceLastCrash: number;
  backgroundDurationSinceLastCrash: number;
  launchesSinceLastCrash: number;
  sessionsSinceLastCrash: number;
  activeDurationSinceLaunch: number;
  backgroundDurationSinceLaunch: number;
  sessionsSinceLaunch: number;
  crashedLastLaunch: boolean;
  crashedThisLaunch: boolean;
  appStateTransitionTime: number;
  applicationIsActive: boolean;
  applicationIsInForeground: boolean;
}
declare var SentryCrash_AppState: interop.StructType<SentryCrash_AppState>;

declare class SentryDebugMeta extends NSObject implements SentrySerializable {

  static alloc(): SentryDebugMeta; // inherited from NSObject

  static new(): SentryDebugMeta; // inherited from NSObject

  cpuSubType: number;

  cpuType: number;

  imageAddress: string;

  imageSize: number;

  imageVmAddress: string;

  majorVersion: number;

  minorVersion: number;

  name: string;

  revisionVersion: number;

  type: string;

  uuid: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryDsn extends NSObject {

  static alloc(): SentryDsn; // inherited from NSObject

  static new(): SentryDsn; // inherited from NSObject

  url: NSURL;

  constructor(o: { string: string; });

  getHash(): string;

  initWithStringDidFailWithError(dsnString: string): this;
}

declare const enum SentryError {

  kSentryErrorUnknownError = -1,

  kSentryErrorInvalidDsnError = 100,

  kSentryErrorSentryCrashNotInstalledError = 101,

  kSentryErrorInvalidCrashReportError = 102,

  kSentryErrorCompressionError = 103,

  kSentryErrorJsonConversionError = 104,

  kSentryErrorCouldNotFindDirectory = 105,

  kSentryErrorRequestError = 106,

  kSentryErrorEventNotSent = 107
}

declare var SentryErrorDomain: string;

declare class SentryEvent extends NSObject implements SentrySerializable {

  static alloc(): SentryEvent; // inherited from NSObject

  static new(): SentryEvent; // inherited from NSObject

  breadcrumbsSerialized: NSDictionary<string, any>;

  context: SentryContext;

  debugMeta: NSArray<SentryDebugMeta>;

  dist: string;

  environment: string;

  eventId: string;

  exceptions: NSArray<SentryException>;

  extra: NSDictionary<string, any>;

  fingerprint: NSArray<string>;

  infoDict: NSDictionary<any, any>;

  json: NSData;

  level: SentrySeverity;

  logger: string;

  message: string;

  modules: NSDictionary<string, string>;

  platform: string;

  releaseName: string;

  sdk: NSDictionary<string, any>;

  serverName: string;

  stacktrace: SentryStacktrace;

  startTimestamp: Date;

  tags: NSDictionary<string, string>;

  threads: NSArray<SentryThread>;

  timestamp: Date;

  transaction: string;

  type: string;

  user: SentryUser;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { JSON: NSData; });

  constructor(o: { level: SentrySeverity; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithJSON(json: NSData): this;

  initWithLevel(level: SentrySeverity): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryException extends NSObject implements SentrySerializable {

  static alloc(): SentryException; // inherited from NSObject

  static new(): SentryException; // inherited from NSObject

  mechanism: SentryMechanism;

  module: string;

  thread: SentryThread;

  type: string;

  userReported: number;

  value: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { value: string; type: string; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithValueType(value: string, type: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryFileManager extends NSObject {

  static alloc(): SentryFileManager; // inherited from NSObject

  static createDirectoryAtPathWithError(path: string): boolean;

  static new(): SentryFileManager; // inherited from NSObject

  maxBreadcrumbs: number;

  maxEvents: number;

  constructor(o: { dsn: SentryDsn; });

  allFilesInFolder(path: string): NSArray<string>;

  deleteAllFolders(): void;

  deleteAllStoredBreadcrumbs(): void;

  deleteAllStoredEvents(): void;

  getAllStoredBreadcrumbs(): NSArray<NSDictionary<string, any>>;

  getAllStoredEvents(): NSArray<NSDictionary<string, any>>;

  initWithDsnDidFailWithError(dsn: SentryDsn): this;

  removeFileAtPath(path: string): boolean;

  storeBreadcrumb(crumb: SentryBreadcrumb): string;

  storeBreadcrumbMaxCount(crumb: SentryBreadcrumb, maxCount: number): string;

  storeDictionaryToPath(dictionary: NSDictionary<any, any>, path: string): string;

  storeEvent(event: SentryEvent): string;
}

declare class SentryFrame extends NSObject implements SentrySerializable {

  static alloc(): SentryFrame; // inherited from NSObject

  static new(): SentryFrame; // inherited from NSObject

  columnNumber: number;

  fileName: string;

  function: string;

  imageAddress: string;

  instructionAddress: string;

  lineNumber: number;

  module: string;

  package: string;

  platform: string;

  symbolAddress: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryInstallation extends SentryCrashInstallation {

  static alloc(): SentryInstallation; // inherited from NSObject

  static new(): SentryInstallation; // inherited from NSObject

  sendAllReports(): void;
}

declare class SentryJavaScriptBridgeHelper extends NSObject {

  static alloc(): SentryJavaScriptBridgeHelper; // inherited from NSObject

  static convertReactNativeStacktrace(stacktrace: NSArray<any> | any[]): NSArray<SentryFrame>;

  static createSentryBreadcrumbFromJavaScriptBreadcrumb(jsonBreadcrumb: NSDictionary<any, any>): SentryBreadcrumb;

  static createSentryEventFromJavaScriptEvent(jsonEvent: NSDictionary<any, any>): SentryEvent;

  static createSentryUserFromJavaScriptUser(user: NSDictionary<any, any>): SentryUser;

  static new(): SentryJavaScriptBridgeHelper; // inherited from NSObject

  static parseJavaScriptStacktrace(stacktrace: string): NSArray<any>;

  static sanitizeDictionary(dictionary: NSDictionary<any, any>): NSDictionary<any, any>;

  static sentryLogLevelFromJavaScriptLevel(level: number): SentryLogLevel;
}

declare class SentryLog extends NSObject {

  static alloc(): SentryLog; // inherited from NSObject

  static logWithMessageAndLevel(message: string, level: SentryLogLevel): void;

  static new(): SentryLog; // inherited from NSObject
}

declare const enum SentryLogLevel {

  kSentryLogLevelNone = 1,

  kSentryLogLevelError = 2,

  kSentryLogLevelDebug = 3,

  kSentryLogLevelVerbose = 4
}

declare class SentryMechanism extends NSObject implements SentrySerializable {

  static alloc(): SentryMechanism; // inherited from NSObject

  static new(): SentryMechanism; // inherited from NSObject

  data: NSDictionary<string, any>;

  desc: string;

  handled: number;

  helpLink: string;

  meta: NSDictionary<string, string>;

  type: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { type: string; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithType(type: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryNSURLRequest extends NSMutableURLRequest {

  static alloc(): SentryNSURLRequest; // inherited from NSObject

  static new(): SentryNSURLRequest; // inherited from NSObject

  static requestWithURL(URL: NSURL): SentryNSURLRequest; // inherited from NSURLRequest

  static requestWithURLCachePolicyTimeoutInterval(URL: NSURL, cachePolicy: NSURLRequestCachePolicy, timeoutInterval: number): SentryNSURLRequest; // inherited from NSURLRequest

  constructor(o: { storeRequestWithDsn: SentryDsn; andData: NSData; });

  constructor(o: { storeRequestWithDsn: SentryDsn; andEvent: SentryEvent; });

  initStoreRequestWithDsnAndDataDidFailWithError(dsn: SentryDsn, data: NSData): this;

  initStoreRequestWithDsnAndEventDidFailWithError(dsn: SentryDsn, event: SentryEvent): this;
}

declare class SentryOptions extends NSObject {

  static alloc(): SentryOptions; // inherited from NSObject

  static new(): SentryOptions; // inherited from NSObject

  dist: string;

  dsn: SentryDsn;

  enabled: number;

  environment: string;

  releaseName: string;

  constructor(o: { options: NSDictionary<string, any>; });

  initWithOptionsDidFailWithError(options: NSDictionary<string, any>): this;
}

declare class SentryQueueableRequestManager extends NSObject implements SentryRequestManager {

  static alloc(): SentryQueueableRequestManager; // inherited from NSObject

  static new(): SentryQueueableRequestManager; // inherited from NSObject

  readonly ready: boolean; // inherited from SentryRequestManager

  constructor(o: { session: NSURLSession; }); // inherited from SentryRequestManager

  addRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSHTTPURLResponse, p2: NSError) => void): void;

  cancelAllOperations(): void;

  initWithSession(session: NSURLSession): this;
}

interface SentryRequestManager {

  ready: boolean;

  addRequestCompletionHandler(request: NSURLRequest, completionHandler: (p1: NSHTTPURLResponse, p2: NSError) => void): void;

  cancelAllOperations(): void;

  initWithSession?(session: NSURLSession): SentryRequestManager;
}
declare var SentryRequestManager: {

  prototype: SentryRequestManager;
};

declare class SentryRequestOperation extends SentryAsynchronousOperation {

  static alloc(): SentryRequestOperation; // inherited from NSObject

  static new(): SentryRequestOperation; // inherited from NSObject

  constructor(o: { session: NSURLSession; request: NSURLRequest; completionHandler: (p1: NSHTTPURLResponse, p2: NSError) => void; });

  initWithSessionRequestCompletionHandler(session: NSURLSession, request: NSURLRequest, completionHandler: (p1: NSHTTPURLResponse, p2: NSError) => void): this;
}

interface SentrySerializable extends NSObjectProtocol {

  serialize(): NSDictionary<string, any>;
}
declare var SentrySerializable: {

  prototype: SentrySerializable;
};

declare const enum SentrySeverity {

  kSentrySeverityFatal = 0,

  kSentrySeverityError = 1,

  kSentrySeverityWarning = 2,

  kSentrySeverityInfo = 3,

  kSentrySeverityDebug = 4
}

declare class SentryStacktrace extends NSObject implements SentrySerializable {

  static alloc(): SentryStacktrace; // inherited from NSObject

  static new(): SentryStacktrace; // inherited from NSObject

  frames: NSArray<SentryFrame>;

  registers: NSDictionary<string, string>;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { frames: NSArray<SentryFrame> | SentryFrame[]; registers: NSDictionary<string, string>; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  fixDuplicateFrames(): void;

  initWithFramesRegisters(frames: NSArray<SentryFrame> | SentryFrame[], registers: NSDictionary<string, string>): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentrySwizzle extends NSObject {

  static alloc(): SentrySwizzle; // inherited from NSObject

  static new(): SentrySwizzle; // inherited from NSObject

  static swizzleClassMethodInClassNewImpFactory(selector: string, classToSwizzle: typeof NSObject, factoryBlock: (p1: SentrySwizzleInfo) => any): void;

  static swizzleInstanceMethodInClassNewImpFactoryModeKey(selector: string, classToSwizzle: typeof NSObject, factoryBlock: (p1: SentrySwizzleInfo) => any, mode: SentrySwizzleMode, key: interop.Pointer | interop.Reference<any>): boolean;
}

declare class SentrySwizzleInfo extends NSObject {

  static alloc(): SentrySwizzleInfo; // inherited from NSObject

  static new(): SentrySwizzleInfo; // inherited from NSObject

  readonly selector: string;

  getOriginalImplementation(): interop.FunctionReference<() => void>;
}

declare const enum SentrySwizzleMode {

  Always = 0,

  OncePerClass = 1,

  OncePerClassAndSuperclasses = 2
}

declare class SentryThread extends NSObject implements SentrySerializable {

  static alloc(): SentryThread; // inherited from NSObject

  static new(): SentryThread; // inherited from NSObject

  crashed: number;

  current: number;

  name: string;

  stacktrace: SentryStacktrace;

  threadId: number;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { threadId: number; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithThreadId(threadId: number): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare class SentryUser extends NSObject implements SentrySerializable {

  static alloc(): SentryUser; // inherited from NSObject

  static new(): SentryUser; // inherited from NSObject

  email: string;

  extra: NSDictionary<string, any>;

  userId: string;

  username: string;

  readonly debugDescription: string; // inherited from NSObjectProtocol

  readonly description: string; // inherited from NSObjectProtocol

  readonly hash: number; // inherited from NSObjectProtocol

  readonly isProxy: boolean; // inherited from NSObjectProtocol

  readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

  readonly  // inherited from NSObjectProtocol

  constructor(o: { userId: string; });

  class(): typeof NSObject;

  conformsToProtocol(aProtocol: any /* Protocol */): boolean;

  initWithUserId(userId: string): this;

  isEqual(object: any): boolean;

  isKindOfClass(aClass: typeof NSObject): boolean;

  isMemberOfClass(aClass: typeof NSObject): boolean;

  performSelector(aSelector: string): any;

  performSelectorWithObject(aSelector: string, object: any): any;

  performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

  respondsToSelector(aSelector: string): boolean;

  retainCount(): number;

  self(): this;

  serialize(): NSDictionary<string, any>;
}

declare var SentryVersionNumber: number;

declare var SentryVersionNumberVar: number;

declare var SentryVersionString: interop.Reference<number>;

declare var SentryVersionStringVar: interop.Reference<number>;

interface __CFArray {
  _base: CFRuntimeBase;
  _count: number;
  _mutations: number;
  _mutInProgress: number;
  _store: interop.Pointer | interop.Reference<any>;
}
declare var __CFArray: interop.StructType<__CFArray>;

interface __CFArrayBucket {
  _item: interop.Pointer | interop.Reference<any>;
}
declare var __CFArrayBucket: interop.StructType<__CFArrayBucket>;

interface __CFArrayDeque {
  _leftIdx: number;
  _capacity: number;
}
declare var __CFArrayDeque: interop.StructType<__CFArrayDeque>;

interface __CFBasicHash {
  base: CFRuntimeBase;
  bits: { mutations: number; hash_style: number; keys_offset: number; counts_offset: number; counts_width: number; hashes_offset: number; strong_values: number; strong_keys: number; weak_values: number; weak_keys: number; int_values: number; int_keys: number; indirect_keys: number; used_buckets: number; deleted: number; num_buckets_idx: number; __kret: number; __vret: number; __krel: number; __vrel: number; __: number; null_rc: number; fast_grow: number; finalized: number; __kdes: number; __vdes: number; __kequ: number; __vequ: number; __khas: number; __kget: number; };
  pointers: interop.Reference<interop.Pointer | interop.Reference<any>>;
}
declare var __CFBasicHash: interop.StructType<__CFBasicHash>;

interface __CFBasicHashCallbacks {
  retainValue: interop.FunctionReference<(p1: any, p2: number) => number>;
  retainKey: interop.FunctionReference<(p1: any, p2: number) => number>;
  releaseValue: interop.FunctionReference<(p1: any, p2: number) => void>;
  releaseKey: interop.FunctionReference<(p1: any, p2: number) => void>;
  equateValues: interop.FunctionReference<(p1: number, p2: number) => boolean>;
  equateKeys: interop.FunctionReference<(p1: number, p2: number) => boolean>;
  hashKey: interop.FunctionReference<(p1: number) => number>;
  getIndirectKey: interop.FunctionReference<(p1: number) => number>;
  copyValueDescription: interop.FunctionReference<(p1: number) => NSMutableString>;
  copyKeyDescription: interop.FunctionReference<(p1: number) => NSMutableString>;
}
declare var __CFBasicHashCallbacks: interop.StructType<__CFBasicHashCallbacks>;

interface __CFDate {
  _cfisa: number;
  _time: number;
}
declare var __CFDate: interop.StructType<__CFDate>;

interface __CFNumber {
  _base: CFRuntimeBase;
  _pad: number;
}
declare var __CFNumber: interop.StructType<__CFNumber>;

interface __CFURL {
  _cfBase: CFRuntimeBase;
  _flags: number;
  _encoding: number;
  _string: NSMutableString;
  _base: NSURL;
  _extra: interop.Pointer | interop.Reference<any>;
  _resourceInfo: interop.Pointer | interop.Reference<any>;
  _ranges: interop.Reference<CFRange>;
}
declare var __CFURL: interop.StructType<__CFURL>;

interface __inline1 {
  length: number;
}
declare var __inline1: interop.StructType<__inline1>;

interface __notInlineImmutable1 {
  buffer: interop.Pointer | interop.Reference<any>;
  length: number;
  contentsDeallocator: any;
}
declare var __notInlineImmutable1: interop.StructType<__notInlineImmutable1>;

interface __notInlineImmutable2 {
  buffer: interop.Pointer | interop.Reference<any>;
  contentsDeallocator: any;
}
declare var __notInlineImmutable2: interop.StructType<__notInlineImmutable2>;

interface __notInlineMutable {
  buffer: interop.Pointer | interop.Reference<any>;
  length: number;
  capacity: number;
  hasGap: number;
  isFixedCapacity: number;
  isExternalMutable: number;
  capacityProvidedExternally: number;
  desiredCapacity: number;
  contentsAllocator: any;
}
declare var __notInlineMutable: interop.StructType<__notInlineMutable>;

interface class_ro_t {
  flags: number;
  instanceStart: number;
  instanceSize: number;
  ivarLayout: string;
  name: string;
  baseMethodList: interop.Pointer | interop.Reference<method_list_t>;
  baseProtocols: interop.Pointer | interop.Reference<protocol_list_t>;
  ivars: interop.Pointer | interop.Reference<ivar_list_t>;
  weakIvarLayout: string;
  baseProperties: interop.Pointer | interop.Reference<property_list_t>;
}
declare var class_ro_t: interop.StructType<class_ro_t>;

interface class_rw_t {
  flags: number;
  version: number;
  ro: interop.Pointer | interop.Reference<class_ro_t>;
  methods: method_list_t;
  properties: property_list_t;
  protocols: protocol_list_t;
  firstSubclass: typeof NSObject;
  nextSiblingClass: typeof NSObject;
  demangledName: string;
}
declare var class_rw_t: interop.StructType<class_rw_t>;

interface class_t {
  isa: interop.Pointer | interop.Reference<class_t>;
  superclass: interop.Pointer | interop.Reference<class_t>;
  cache: interop.Pointer | interop.Reference<any>;
  vtable: interop.Pointer | interop.Reference<interop.FunctionReference<() => void>>;
  data_NEVER_USE: number;
}
declare var class_t: interop.StructType<class_t>;

interface ivar_list_t {
  entsizeAndFlags: number;
  count: number;
  first: ivar_t;
}
declare var ivar_list_t: interop.StructType<ivar_list_t>;

interface ivar_t {
  offset: interop.Pointer | interop.Reference<number>;
  name: string;
  type: string;
  alignment_raw: number;
  size: number;
}
declare var ivar_t: interop.StructType<ivar_t>;

interface method_list_t {
  entsizeAndFlags: number;
  count: number;
  first: method_t;
}
declare var method_list_t: interop.StructType<method_list_t>;

interface method_t {
  name: string;
  types: string;
  imp: interop.FunctionReference<() => void>;
}
declare var method_t: interop.StructType<method_t>;

interface property_list_t {
  entsizeAndFlags: number;
  count: number;
  first: property_t;
}
declare var property_list_t: interop.StructType<property_list_t>;

interface property_t {
  name: string;
  attributes: string;
}
declare var property_t: interop.StructType<property_t>;

interface protocol_list_t {
  entsizeAndFlags: number;
  count: number;
  first: protocol_t;
}
declare var protocol_list_t: interop.StructType<protocol_list_t>;

interface protocol_t {
  isa: typeof NSObject;
  mangledName: string;
  protocols: interop.Pointer | interop.Reference<protocol_list_t>;
  instanceMethods: interop.Pointer | interop.Reference<method_list_t>;
  classMethods: interop.Pointer | interop.Reference<method_list_t>;
  optionalInstanceMethods: interop.Pointer | interop.Reference<method_list_t>;
  optionalClassMethods: interop.Pointer | interop.Reference<method_list_t>;
  instanceProperties: interop.Pointer | interop.Reference<property_list_t>;
  size: number;
  flags: number;
  extendedMethodTypes: interop.Pointer | interop.Reference<string>;
  _demangledName: string;
}
declare var protocol_t: interop.StructType<protocol_t>;

declare function sentrycrash_addUserReport(report: string | interop.Pointer | interop.Reference<any>, reportLength: number): number;

declare function sentrycrash_deleteAllReports(): void;

declare function sentrycrash_deleteReportWithID(reportID: number): void;

declare function sentrycrash_getReportCount(): number;

declare function sentrycrash_getReportIDs(reportIDs: interop.Pointer | interop.Reference<number>, count: number): number;

declare function sentrycrash_install(appName: string | interop.Pointer | interop.Reference<any>, installPath: string | interop.Pointer | interop.Reference<any>): SentryCrashMonitorType;

declare function sentrycrash_notifyAppActive(isActive: boolean): void;

declare function sentrycrash_notifyAppCrash(): void;

declare function sentrycrash_notifyAppInForeground(isInForeground: boolean): void;

declare function sentrycrash_notifyAppTerminate(): void;

declare function sentrycrash_readReport(reportID: number): string;

declare function sentrycrash_reportUserException(name: string | interop.Pointer | interop.Reference<any>, reason: string | interop.Pointer | interop.Reference<any>, language: string | interop.Pointer | interop.Reference<any>, lineOfCode: string | interop.Pointer | interop.Reference<any>, stackTrace: string | interop.Pointer | interop.Reference<any>, logAllThreads: boolean, terminateProgram: boolean): void;

declare function sentrycrash_setAddConsoleLogToReport(shouldAddConsoleLogToReport: boolean): void;

declare function sentrycrash_setCrashNotifyCallback(onCrashNotify: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>): void;

declare function sentrycrash_setDeadlockWatchdogInterval(deadlockWatchdogInterval: number): void;

declare function sentrycrash_setDoNotIntrospectClasses(doNotIntrospectClasses: interop.Pointer | interop.Reference<string>, length: number): void;

declare function sentrycrash_setIntrospectMemory(introspectMemory: boolean): void;

declare function sentrycrash_setMaxReportCount(maxReportCount: number): void;

declare function sentrycrash_setMonitoring(monitors: SentryCrashMonitorType): SentryCrashMonitorType;

declare function sentrycrash_setPrintPreviousLog(shouldPrintPreviousLog: boolean): void;

declare function sentrycrash_setUserInfoJSON(userInfoJSON: string | interop.Pointer | interop.Reference<any>): void;

declare function sentrycrashccd_freeze(): void;

declare function sentrycrashccd_getAllThreads(threadCount: interop.Pointer | interop.Reference<number>): interop.Pointer | interop.Reference<number>;

declare function sentrycrashccd_getQueueName(thread: number): string;

declare function sentrycrashccd_getThreadName(thread: number): string;

declare function sentrycrashccd_init(pollingIntervalInSeconds: number): void;

declare function sentrycrashccd_unfreeze(): void;

declare function sentrycrashcm_getActiveMonitors(): SentryCrashMonitorType;

declare function sentrycrashcm_notifyFatalExceptionCaptured(isAsyncSafeEnvironment: boolean): boolean;

declare function sentrycrashcm_reportUserException(name: string | interop.Pointer | interop.Reference<any>, reason: string | interop.Pointer | interop.Reference<any>, language: string | interop.Pointer | interop.Reference<any>, lineOfCode: string | interop.Pointer | interop.Reference<any>, stackTrace: string | interop.Pointer | interop.Reference<any>, logAllThreads: boolean, terminateProgram: boolean): void;

declare function sentrycrashcm_setActiveMonitors(monitorTypes: SentryCrashMonitorType): void;

declare function sentrycrashcm_setDeadlockHandlerWatchdogInterval(value: number): void;

declare function sentrycrashcpu_currentArch(): string;

declare function sentrycrashcpu_exceptionRegisterName(regNumber: number): string;

declare function sentrycrashcpu_i_fillState(thread: number, state: interop.Pointer | interop.Reference<number>, flavor: number, stateCount: number): boolean;

declare function sentrycrashcpu_normaliseInstructionPointer(ip: number): number;

declare function sentrycrashcpu_numExceptionRegisters(): number;

declare function sentrycrashcpu_numRegisters(): number;

declare function sentrycrashcpu_registerName(regNumber: number): string;

declare function sentrycrashcpu_stackGrowDirection(): number;

declare function sentrycrashcrf_fixupCrashReport(crashReport: string | interop.Pointer | interop.Reference<any>): string;

declare function sentrycrashcrs_addUserReport(report: string | interop.Pointer | interop.Reference<any>, reportLength: number): number;

declare function sentrycrashcrs_deleteAllReports(): void;

declare function sentrycrashcrs_deleteReportWithID(reportID: number): void;

declare function sentrycrashcrs_getNextCrashReportPath(crashReportPathBuffer: string | interop.Pointer | interop.Reference<any>): void;

declare function sentrycrashcrs_getReportCount(): number;

declare function sentrycrashcrs_getReportIDs(reportIDs: interop.Pointer | interop.Reference<number>, count: number): number;

declare function sentrycrashcrs_initialize(appName: string | interop.Pointer | interop.Reference<any>, reportsPath: string | interop.Pointer | interop.Reference<any>): void;

declare function sentrycrashcrs_readReport(reportID: number): string;

declare function sentrycrashcrs_setMaxReportCount(maxReportCount: number): void;

declare function sentrycrashdate_utcStringFromTimestamp(timestamp: number, buffer21Chars: string | interop.Pointer | interop.Reference<any>): void;

declare function sentrycrashdebug_isBeingTraced(): boolean;

declare function sentrycrashdl_dladdr(address: number, info: interop.Pointer | interop.Reference<Dl_info>): boolean;

declare function sentrycrashdl_getBinaryImage(index: number, buffer: interop.Pointer | interop.Reference<SentryCrashBinaryImage>): boolean;

declare function sentrycrashdl_imageCount(): number;

declare function sentrycrashdl_imageNamed(imageName: string | interop.Pointer | interop.Reference<any>, exactMatch: boolean): number;

declare function sentrycrashdl_imageUUID(imageName: string | interop.Pointer | interop.Reference<any>, exactMatch: boolean): string;

declare function sentrycrashfu_closeBufferedReader(reader: interop.Pointer | interop.Reference<SentryCrashBufferedReader>): void;

declare function sentrycrashfu_closeBufferedWriter(writer: interop.Pointer | interop.Reference<SentryCrashBufferedWriter>): void;

declare function sentrycrashfu_deleteContentsOfPath(path: string | interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashfu_flushBufferedWriter(writer: interop.Pointer | interop.Reference<SentryCrashBufferedWriter>): boolean;

declare function sentrycrashfu_lastPathEntry(path: string | interop.Pointer | interop.Reference<any>): string;

declare function sentrycrashfu_makePath(absolutePath: string | interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashfu_openBufferedReader(reader: interop.Pointer | interop.Reference<SentryCrashBufferedReader>, path: string | interop.Pointer | interop.Reference<any>, readBuffer: string | interop.Pointer | interop.Reference<any>, readBufferLength: number): boolean;

declare function sentrycrashfu_openBufferedWriter(writer: interop.Pointer | interop.Reference<SentryCrashBufferedWriter>, path: string | interop.Pointer | interop.Reference<any>, writeBuffer: string | interop.Pointer | interop.Reference<any>, writeBufferLength: number): boolean;

declare function sentrycrashfu_readBufferedReader(reader: interop.Pointer | interop.Reference<SentryCrashBufferedReader>, dstBuffer: string | interop.Pointer | interop.Reference<any>, byteCount: number): number;

declare function sentrycrashfu_readBufferedReaderUntilChar(reader: interop.Pointer | interop.Reference<SentryCrashBufferedReader>, ch: number, dstBuffer: string | interop.Pointer | interop.Reference<any>, length: interop.Pointer | interop.Reference<number>): boolean;

declare function sentrycrashfu_readBytesFromFD(fd: number, bytes: string | interop.Pointer | interop.Reference<any>, length: number): boolean;

declare function sentrycrashfu_readEntireFile(path: string | interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<string>, length: interop.Pointer | interop.Reference<number>, maxLength: number): boolean;

declare function sentrycrashfu_readLineFromFD(fd: number, buffer: string | interop.Pointer | interop.Reference<any>, maxLength: number): number;

declare function sentrycrashfu_removeFile(path: string | interop.Pointer | interop.Reference<any>, mustExist: boolean): boolean;

declare function sentrycrashfu_writeBufferedWriter(writer: interop.Pointer | interop.Reference<SentryCrashBufferedWriter>, data: string | interop.Pointer | interop.Reference<any>, length: number): boolean;

declare function sentrycrashfu_writeBytesToFD(fd: number, bytes: string | interop.Pointer | interop.Reference<any>, length: number): boolean;

declare function sentrycrashfu_writeStringToFD(fd: number, string: string | interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashid_generate(destinationBuffer37Bytes: string | interop.Pointer | interop.Reference<any>): void;

declare function sentrycrashjson_addBooleanElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>, value: boolean): number;

declare function sentrycrashjson_addDataElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>, value: string | interop.Pointer | interop.Reference<any>, length: number): number;

declare function sentrycrashjson_addFloatingPointElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>, value: number): number;

declare function sentrycrashjson_addIntegerElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>, value: number): number;

declare function sentrycrashjson_addJSONElement(encodeContext: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>, jsonData: string | interop.Pointer | interop.Reference<any>, jsonDataLength: number, closeLastContainer: boolean): number;

declare function sentrycrashjson_addJSONFromFile(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>, filename: string | interop.Pointer | interop.Reference<any>, closeLastContainer: boolean): number;

declare function sentrycrashjson_addNullElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashjson_addRawJSONData(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, data: string | interop.Pointer | interop.Reference<any>, length: number): number;

declare function sentrycrashjson_addStringElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>, value: string | interop.Pointer | interop.Reference<any>, length: number): number;

declare function sentrycrashjson_appendDataElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, value: string | interop.Pointer | interop.Reference<any>, length: number): number;

declare function sentrycrashjson_appendStringElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, value: string | interop.Pointer | interop.Reference<any>, length: number): number;

declare function sentrycrashjson_beginArray(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashjson_beginDataElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashjson_beginElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashjson_beginEncode(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, prettyPrint: boolean, addJSONData: interop.FunctionReference<(p1: string, p2: number, p3: interop.Pointer | interop.Reference<any>) => number>, userData: interop.Pointer | interop.Reference<any>): void;

declare function sentrycrashjson_beginObject(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashjson_beginStringElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>, name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashjson_decode(data: string | interop.Pointer | interop.Reference<any>, length: number, stringBuffer: string | interop.Pointer | interop.Reference<any>, stringBufferLength: number, callbacks: interop.Pointer | interop.Reference<SentryCrashJSONDecodeCallbacks>, userData: interop.Pointer | interop.Reference<any>, errorOffset: interop.Pointer | interop.Reference<number>): number;

declare function sentrycrashjson_endContainer(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>): number;

declare function sentrycrashjson_endDataElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>): number;

declare function sentrycrashjson_endEncode(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>): number;

declare function sentrycrashjson_endStringElement(context: interop.Pointer | interop.Reference<SentryCrashJSONEncodeContext>): number;

declare function sentrycrashjson_stringForError(error: number): string;

declare function sentrycrashlog_clearLogFile(): boolean;

declare function sentrycrashlog_setLogFilename(filename: string | interop.Pointer | interop.Reference<any>, overwrite: boolean): boolean;

declare function sentrycrashmach_exceptionName(exceptionType: number): string;

declare function sentrycrashmach_kernelReturnCodeName(returnCode: number): string;

declare function sentrycrashmach_machExceptionForSignal(signal: number): number;

declare function sentrycrashmach_signalForMachException(exception: number, code: number): number;

declare function sentrycrashmc_addReservedThread(thread: number): void;

declare function sentrycrashmc_contextSize(): number;

declare function sentrycrashmc_resumeEnvironment(): void;

declare function sentrycrashmc_suspendEnvironment(): void;

declare function sentrycrashmem_copyMaxPossible(src: interop.Pointer | interop.Reference<any>, dst: interop.Pointer | interop.Reference<any>, byteCount: number): number;

declare function sentrycrashmem_copySafely(src: interop.Pointer | interop.Reference<any>, dst: interop.Pointer | interop.Reference<any>, byteCount: number): boolean;

declare function sentrycrashmem_isMemoryReadable(memory: interop.Pointer | interop.Reference<any>, byteCount: number): boolean;

declare function sentrycrashmem_maxReadableBytes(memory: interop.Pointer | interop.Reference<any>, tryByteCount: number): number;

declare function sentrycrashmonitortype_name(monitorType: SentryCrashMonitorType): string;

declare function sentrycrashobjc_arrayContents(arrayPtr: interop.Pointer | interop.Reference<any>, contents: interop.Pointer | interop.Reference<number>, count: number): number;

declare function sentrycrashobjc_arrayCount(arrayPtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_baseClass(classPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function sentrycrashobjc_className(classPtr: interop.Pointer | interop.Reference<any>): string;

declare function sentrycrashobjc_copyStringContents(string: interop.Pointer | interop.Reference<any>, dst: string | interop.Pointer | interop.Reference<any>, maxLength: number): number;

declare function sentrycrashobjc_copyURLContents(nsurl: interop.Pointer | interop.Reference<any>, dst: string | interop.Pointer | interop.Reference<any>, maxLength: number): number;

declare function sentrycrashobjc_dateContents(datePtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_dictionaryCount(dict: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_dictionaryFirstEntry(dict: interop.Pointer | interop.Reference<any>, key: interop.Pointer | interop.Reference<number>, value: interop.Pointer | interop.Reference<number>): boolean;

declare function sentrycrashobjc_getDescription(object: interop.Pointer | interop.Reference<any>, buffer: string | interop.Pointer | interop.Reference<any>, bufferLength: number): number;

declare function sentrycrashobjc_isClassNamed(classPtr: interop.Pointer | interop.Reference<any>, className: string | interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isKindOfClass(classPtr: interop.Pointer | interop.Reference<any>, className: string | interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isMetaClass(classPtr: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isRootClass(classPtr: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isTaggedPointer(pointer: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isValidObject(object: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isValidTaggedPointer(pointer: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_isaPointer(objectOrClassPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function sentrycrashobjc_ivarCount(classPtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_ivarList(classPtr: interop.Pointer | interop.Reference<any>, dstIvars: interop.Pointer | interop.Reference<SentryCrashObjCIvar>, ivarsCount: number): number;

declare function sentrycrashobjc_ivarNamed(classPtr: interop.Pointer | interop.Reference<any>, name: string | interop.Pointer | interop.Reference<any>, dst: interop.Pointer | interop.Reference<SentryCrashObjCIvar>): boolean;

declare function sentrycrashobjc_ivarValue(objectPtr: interop.Pointer | interop.Reference<any>, ivarIndex: number, dst: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_numberAsFloat(object: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_numberAsInteger(object: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_numberIsFloat(object: interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashobjc_objectClassName(objectPtr: interop.Pointer | interop.Reference<any>): string;

declare function sentrycrashobjc_objectClassType(object: interop.Pointer | interop.Reference<any>): SentryCrashObjCClassType;

declare function sentrycrashobjc_objectType(objectOrClassPtr: interop.Pointer | interop.Reference<any>): SentryCrashObjCType;

declare function sentrycrashobjc_stringLength(stringPtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashobjc_superClass(classPtr: interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function sentrycrashobjc_taggedPointerPayload(taggedObjectPtr: interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashreport_setDoNotIntrospectClasses(doNotIntrospectClasses: interop.Pointer | interop.Reference<string>, length: number): void;

declare function sentrycrashreport_setIntrospectMemory(shouldIntrospectMemory: boolean): void;

declare function sentrycrashreport_setUserInfoJSON(userInfoJSON: string | interop.Pointer | interop.Reference<any>): void;

declare function sentrycrashreport_setUserSectionWriteCallback(userSectionWriteCallback: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashReportWriter>) => void>): void;

declare function sentrycrashsc_initCursor(cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>, resetCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => void>, advanceCursor: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<SentryCrashStackCursor>) => boolean>): void;

declare function sentrycrashsc_initSelfThread(cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>, skipEntries: number): void;

declare function sentrycrashsc_initWithBacktrace(cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>, backtrace: interop.Pointer | interop.Reference<number>, backtraceLength: number, skipEntries: number): void;

declare function sentrycrashsc_resetCursor(cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>): void;

declare function sentrycrashsignal_fatalSignals(): interop.Pointer | interop.Reference<number>;

declare function sentrycrashsignal_numFatalSignals(): number;

declare function sentrycrashsignal_signalCodeName(signal: number, code: number): string;

declare function sentrycrashsignal_signalName(signal: number): string;

declare function sentrycrashstate_currentState(): interop.Pointer | interop.Reference<SentryCrash_AppState>;

declare function sentrycrashstate_initialize(stateFilePath: string | interop.Pointer | interop.Reference<any>): void;

declare function sentrycrashstate_notifyAppActive(isActive: boolean): void;

declare function sentrycrashstate_notifyAppCrash(): void;

declare function sentrycrashstate_notifyAppInForeground(isInForeground: boolean): void;

declare function sentrycrashstate_notifyAppTerminate(): void;

declare function sentrycrashstate_reset(): boolean;

declare function sentrycrashstring_extractHexValue(string: string | interop.Pointer | interop.Reference<any>, stringLength: number, result: interop.Pointer | interop.Reference<number>): boolean;

declare function sentrycrashstring_isNullTerminatedUTF8String(memory: interop.Pointer | interop.Reference<any>, minLength: number, maxLength: number): boolean;

declare function sentrycrashsymbolicator_symbolicate(cursor: interop.Pointer | interop.Reference<SentryCrashStackCursor>): boolean;

declare function sentrycrashsysctl_getMacAddress(name: string | interop.Pointer | interop.Reference<any>, macAddressBuffer: string | interop.Pointer | interop.Reference<any>): boolean;

declare function sentrycrashsysctl_int32(major_cmd: number, minor_cmd: number): number;

declare function sentrycrashsysctl_int32ForName(name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashsysctl_int64(major_cmd: number, minor_cmd: number): number;

declare function sentrycrashsysctl_int64ForName(name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashsysctl_string(major_cmd: number, minor_cmd: number, value: string | interop.Pointer | interop.Reference<any>, maxSize: number): number;

declare function sentrycrashsysctl_stringForName(name: string | interop.Pointer | interop.Reference<any>, value: string | interop.Pointer | interop.Reference<any>, maxSize: number): number;

declare function sentrycrashsysctl_timeval(major_cmd: number, minor_cmd: number): timeval;

declare function sentrycrashsysctl_timevalForName(name: string | interop.Pointer | interop.Reference<any>): timeval;

declare function sentrycrashsysctl_uint32(major_cmd: number, minor_cmd: number): number;

declare function sentrycrashsysctl_uint32ForName(name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashsysctl_uint64(major_cmd: number, minor_cmd: number): number;

declare function sentrycrashsysctl_uint64ForName(name: string | interop.Pointer | interop.Reference<any>): number;

declare function sentrycrashthread_getThreadName(thread: number, buffer: string | interop.Pointer | interop.Reference<any>, bufLength: number): boolean;

declare function sentrycrashthread_self(): number;

declare function sentrycrashzombie_className(object: interop.Pointer | interop.Reference<any>): string;
