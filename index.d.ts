declare module 'emberplus' {
  export function Decoder(packet: any): any;
  export class EmberClient {
    public root: Node;
    constructor(host: string, port: number);
    on(method: 'error', cb: (err: Error) => void);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getElementByPath(path: string): Node;
    setValue(node: Node, val: string);
    getDirectory(qnode?: any): any;
    expand(node: Node): void;
  }
  export class DeviceTree {
    constructor(host: any, port: any);
    addListener(type: any, listener: any): any;
    addRequest(cb: any): void;
    clearTimeout(): void;
    connect(timeout: any): any;
    disconnect(): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    expand(node: any): any;
    finishRequest(): void;
    getDirectory(qnode: any): any;
    getMaxListeners(): any;
    getNodeByPath(path: any): any;
    handleNode(parent: any, node: any): any;
    handleQualifiedNode(parent: any, node: any): any;
    handleRoot(root: any): void;
    invokeFunction(fnNode: any, params: any): any;
    isConnected(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    makeRequest(): void;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    saveTree(f: any): void;
    setMaxListeners(n: any): any;
    setValue(node: any, value: any): any;
    subscribe(node: any, callback: any): void;
    timeoutRequest(id: any): void;
    unsubscribe(node: any, callback: any): void;
  }
  export namespace Ember {
    class Command {
      static decode(ber: any): any;
      constructor(number: any);
      number: any;
      fieldFlags: any;
      encode(ber: any): void;
    }
    function DEBUG(d: any): void;
    class FunctionContent {
      static decode(ber: any, ...args: any[]): any;
      encode(ber: any, ...args: any[]): void;
    }
    const GetDirectory: number;
    function InvocationResult(): void;
    namespace InvocationResult {
      function decode(ber: any): any;
    }
    const Invoke: number;
    class Label {
      static decode(ber: any): any;
      constructor(path: any);
      basePath: any;
      encode(ber: any): void;
    }
    class MatrixConnection {
      static decode(ber: any): any;
      constructor(target: any);
      target: any;
      connectSources(sources: any): void;
      disconnectSources(sources: any): void;
      encode(ber: any): void;
      setSources(sources: any): void;
    }
    class MatrixContents {
      static decode(ber: any): any;
      identifier: string;
      type: any;
      mode: any;
      targetCount: number;
      sourceCount: number;
      maximumConnectsPerTarget: number;
      description: string;
      encode(ber: any): void;
    }
    const MatrixDisposition: {
      enums: {
        has: any;
        is: any;
        key: any;
        toJSON: any;
        value: any;
        valueOf: any;
      }[];
      extend: Function;
      freezeEnums: Function;
      get: Function;
      getKey: Function;
      getValue: Function;
      indirection: number;
      isDefined: Function;
      isFlaggable: boolean;
      locked: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      modified: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      pending: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      set: Function;
      size: number;
      tally: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      toJSON: Function;
    };
    const MatrixMode: {
      enums: {
        has: any;
        is: any;
        key: any;
        toJSON: any;
        value: any;
        valueOf: any;
      }[];
      extend: Function;
      freezeEnums: Function;
      get: Function;
      getKey: Function;
      getValue: Function;
      indirection: number;
      isDefined: Function;
      isFlaggable: boolean;
      linear: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      nonLinear: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      set: Function;
      size: number;
      toJSON: Function;
    };
    class MatrixNode {
      static decode(ber: any): any;
      constructor(number: any);
      number: any;
      contents: MatrixContents;
      sources: any[];
      targets: any[];
      connections: any[];
      addCallback(callback: any): void;
      addChild(child: any): void;
      cancelCallbacks(): void;
      connect(connections: any): any;
      encode(ber: any): void;
      getChildren(): any;
      getDirectory(callback: any): any;
      getDuplicate(): any;
      getElement(id: any): any;
      getElementByIdentifier(identifier: any): any;
      getElementByNumber(index: any): any;
      getElementByPath(path: any): any;
      getMinimal(): any;
      getNodeByPath(client: any, path: any, callback: any): void;
      getPath(): any;
      getRoot(): any;
      getTreeBranch(child: any, modifier: any): any;
      isFunction(): any;
      isMatrix(): any;
      isParameter(): any;
      isQualified(): any;
      isStream(): any;
      subscribe(callback: any): any;
      toQualified(): any;
      unsubscribe(callback: any): any;
      update(other: any): any;
    }
    const MatrixOperation: {
      absolute: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      connect: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      disconnect: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      enums: {
        has: any;
        is: any;
        key: any;
        toJSON: any;
        value: any;
        valueOf: any;
      }[];
      extend: Function;
      freezeEnums: Function;
      get: Function;
      getKey: Function;
      getValue: Function;
      indirection: number;
      isDefined: Function;
      isFlaggable: boolean;
      set: Function;
      size: number;
      toJSON: Function;
    };
    const MatrixType: {
      enums: {
        has: any;
        is: any;
        key: any;
        toJSON: any;
        value: any;
        valueOf: any;
      }[];
      extend: Function;
      freezeEnums: Function;
      get: Function;
      getKey: Function;
      getValue: Function;
      indirection: number;
      isDefined: Function;
      isFlaggable: boolean;
      nToN: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      oneToN: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      oneToOne: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      set: Function;
      size: number;
      toJSON: Function;
    };
    class Node {
      static decode(ber: any): any;
      constructor(number: any);
      number: any;
      contents: NodeContents;
      addCallback(callback: any): void;
      addChild(child: any): void;
      cancelCallbacks(): void;
      encode(ber: any): void;
      getChildren(): any;
      getDirectory(callback: any): any;
      getDuplicate(): any;
      getElement(id: any): any;
      getElementByIdentifier(identifier: any): any;
      getElementByNumber(index: any): any;
      getElementByPath(path: any): any;
      getMinimal(): any;
      getNodeByPath(client: any, path: any, callback: any): void;
      getPath(): any;
      getRoot(): any;
      getTreeBranch(child: any, modifier: any): any;
      isFunction(): any;
      isMatrix(): any;
      isParameter(): any;
      isQualified(): any;
      isStream(): any;
      subscribe(callback: any): void;
      toQualified(): any;
      unsubscribe(callback: any): any;
      update(other: any): any;
      toJSON(): string;
    }
    class NodeContents {
      public identifier: string;
      static decode(ber: any): any;
      isOnline: any;
      encode(ber: any): void;
      value: string;
    }
    class Parameter {
      static decode(ber: any): any;
      constructor(number: any);
      number: any;
      contents: ParameterContents;
      addCallback(callback: any): void;
      addChild(child: any): void;
      cancelCallbacks(): void;
      encode(ber: any): void;
      getChildren(): any;
      getDirectory(callback: any): any;
      getDuplicate(): any;
      getElement(id: any): any;
      getElementByIdentifier(identifier: any): any;
      getElementByNumber(index: any): any;
      getElementByPath(path: any): any;
      getMinimal(): any;
      getNodeByPath(client: any, path: any, callback: any): void;
      getPath(): any;
      getRoot(): any;
      getTreeBranch(child: any, modifier: any): any;
      isFunction(): any;
      isMatrix(): any;
      isParameter(): any;
      isQualified(): any;
      isStream(): any;
      setValue(value: any, callback: any): any;
      subscribe(callback: any): any;
      toQualified(): any;
      unsubscribe(callback: any): any;
      update(other: any): any;
    }
    const ParameterAccess: {
      enums: {
        has: any;
        is: any;
        key: any;
        toJSON: any;
        value: any;
        valueOf: any;
      }[];
      extend: Function;
      freezeEnums: Function;
      get: Function;
      getKey: Function;
      getValue: Function;
      indirection: number;
      isDefined: Function;
      isFlaggable: boolean;
      none: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      read: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      readWrite: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      set: Function;
      size: number;
      toJSON: Function;
      write: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
    };
    class ParameterContents {
      static decode(ber: any): any;
      constructor(value: any, type: any);
      value: any;
      type: any;
      access: any;
      identifier: string;
      encode(ber: any): void;
    }
    const ParameterType: {
      boolean: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      enum: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      enums: {
        has: any;
        is: any;
        key: any;
        toJSON: any;
        value: any;
        valueOf: any;
      }[];
      extend: Function;
      freezeEnums: Function;
      get: Function;
      getKey: Function;
      getValue: Function;
      indirection: number;
      integer: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      isDefined: Function;
      isFlaggable: boolean;
      octets: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      real: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      set: Function;
      size: number;
      string: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
      toJSON: Function;
      trigger: {
        has: Function;
        is: Function;
        key: string;
        toJSON: Function;
        value: number;
        valueOf: Function;
      };
    };
    function ParametersLocation(): void;
    namespace ParametersLocation {
      class decode {
        constructor(ber: any);
        value: any;
      }
    }
    class QualifiedFunction {
      static decode(ber: any): any;
      constructor(path: any);
      path: any;
      addCallback(callback: any): void;
      addChild(child: any): void;
      cancelCallbacks(): void;
      encode(ber: any): void;
      getChildren(): any;
      getDirectory(callback: any): any;
      getDuplicate(): any;
      getElement(id: any): any;
      getElementByIdentifier(identifier: any): any;
      getElementByNumber(index: any): any;
      getElementByPath(path: any): any;
      getMinimal(): any;
      getNodeByPath(client: any, path: any, callback: any): void;
      getPath(): any;
      getRoot(): any;
      getTreeBranch(child: any, modifier: any): any;
      invoke(params: any, callback: any, ...args: any[]): any;
      isFunction(): any;
      isMatrix(): any;
      isParameter(): any;
      isQualified(): any;
      isStream(): any;
      subscribe(callback: any): any;
      unsubscribe(callback: any): any;
      update(other: any): any;
    }
    class QualifiedMatrix {
      static decode(ber: any): any;
      constructor(path: any);
      path: any;
      contents: MatrixContents;
      sources: any[];
      targets: any[];
      connections: any[];
      addCallback(callback: any): void;
      addChild(child: any): void;
      cancelCallbacks(): void;
      connect(connections: any): any;
      encode(ber: any): void;
      getChildren(): any;
      getDirectory(callback: any): any;
      getDuplicate(): any;
      getElement(id: any): any;
      getElementByIdentifier(identifier: any): any;
      getElementByNumber(index: any): any;
      getElementByPath(path: any): any;
      getMinimal(complete: any): any;
      getNodeByPath(client: any, path: any, callback: any): void;
      getPath(): any;
      getRoot(): any;
      getTreeBranch(child: any, modifier: any): any;
      isFunction(): any;
      isMatrix(): any;
      isParameter(): any;
      isQualified(): any;
      isStream(): any;
      subscribe(callback: any): any;
      unsubscribe(callback: any): any;
      update(other: any): any;
    }
    class QualifiedNode {
      static decode(ber: any): any;
      constructor(path: any);
      path: any;
      contents: NodeContents;
      addCallback(callback: any): void;
      addChild(child: any): void;
      cancelCallbacks(): void;
      encode(ber: any): void;
      getChildren(): any;
      getDirectory(callback: any): any;
      getDuplicate(): any;
      getElement(id: any): any;
      getElementByIdentifier(identifier: any): any;
      getElementByNumber(index: any): any;
      getElementByPath(path: any): any;
      getMinimal(complete: any): any;
      getNodeByPath(client: any, path: any, callback: any): void;
      getPath(): any;
      getRoot(): any;
      getTreeBranch(child: any, modifier: any): any;
      isFunction(): any;
      isMatrix(): any;
      isParameter(): any;
      isQualified(): any;
      isStream(): any;
      subscribe(callback: any): any;
      unsubscribe(callback: any): any;
      update(other: any): any;
    }
    class QualifiedParameter {
      static decode(ber: any): any;
      constructor(path: any);
      path: any;
      contents: ParameterContents;
      addCallback(callback: any): void;
      addChild(child: any): void;
      cancelCallbacks(): void;
      encode(ber: any): void;
      getChildren(): any;
      getDirectory(callback: any): any;
      getDuplicate(): any;
      getElement(id: any): any;
      getElementByIdentifier(identifier: any): any;
      getElementByNumber(index: any): any;
      getElementByPath(path: any): any;
      getMinimal(complete: any): any;
      getNodeByPath(client: any, path: any, callback: any): void;
      getPath(): any;
      getRoot(): any;
      getTreeBranch(child: any, modifier: any): any;
      isFunction(): any;
      isMatrix(): any;
      isParameter(): any;
      isQualified(): any;
      isStream(): any;
      setValue(value: any, callback: any): any;
      subscribe(callback: any): any;
      unsubscribe(callback: any): any;
      update(other: any): any;
    }
    class Root {
      identifier: string;
      contents: NodeContents;
      static decode(ber: any): any;
      addCallback(callback: any): void;
      addChild(child: any): void;
      addElement(ele: any): void;
      cancelCallbacks(): void;
      clear(): void;
      encode(ber: any): void;
      getChildren(): any;
      getDirectory(callback: any): any;
      getDuplicate(): any;
      getElement(id: any): any;
      getElementByIdentifier(identifier: any): any;
      getElementByNumber(index: any): any;
      getElementByPath(path: any): any;
      getMinimal(): any;
      getNodeByPath(client: any, path: any, callback: any): void;
      getPath(): any;
      getRoot(): any;
      getTreeBranch(child: any, modifier: any): any;
      isFunction(): any;
      isMatrix(): any;
      isParameter(): any;
      isQualified(): any;
      isStream(): any;
      subscribe(callback: any): any;
      unsubscribe(callback: any): any;
      update(other: any): any;
    }
    const Subscribe: number;
    const Unsubscribe: number;
  }
  export class S101 {
    addListener(type: any, listener: any): any;
    dataIn(buf: any): void;
    emit(type: any, ...args: any[]): any;
    encodeBER(data: any): any;
    eventNames(): any;
    getMaxListeners(): any;
    handleEmberFrame(frame: any): void;
    handleEmberPacket(packet: any): void;
    handleFrame(frame: any): void;
    keepAliveRequest(): any;
    keepAliveResponse(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    setMaxListeners(n: any): any;
    validateFrame(buf: any): any;
  }
  export class S101Client {
    constructor(socket: any, server: any);
    addListener(type: any, listener: any): any;
    addRequest(cb: any): void;
    connect(timeout: any): void;
    disconnect(): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    isConnected(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    makeRequest(): void;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    queueMessage(node: any): void;
    remoteAddress(): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    sendBER(data: any): void;
    sendBERNode(node: any): void;
    sendKeepaliveRequest(): void;
    sendKeepaliveResponse(): void;
    setMaxListeners(n: any): any;
  }
  export class TreeServer {
    static JSONtoTree(obj: any): any;
    constructor(host: any, port: any, tree: any);
    addListener(type: any, listener: any): any;
    close(): any;
    emit(type: any, ...args: any[]): any;
    eventNames(): any;
    getMaxListeners(): any;
    getQualifiedResponse(element: any): any;
    getResponse(element: any): any;
    handleCommand(client: any, element: any, cmd: any): void;
    handleError(client: any, node: any): void;
    handleGetDirectory(client: any, element: any): void;
    handleMatrixConnections(client: any, matrix: any, connections: any, response: any): void;
    handleNode(client: any, node: any): any;
    handleQualifiedMatrix(client: any, element: any, matrix: any): void;
    handleQualifiedNode(client: any, node: any): any;
    handleQualifiedParameter(client: any, element: any, parameter: any): void;
    handleRoot(client: any, root: any): any;
    handleSubscribe(client: any, element: any): void;
    handleUnSubscribe(client: any, element: any): void;
    listen(): any;
    listenerCount(type: any): any;
    listeners(type: any): any;
    matrixConnect(path: any, target: any, sources: any): void;
    matrixDisconnect(path: any, target: any, sources: any): void;
    matrixSet(path: any, target: any, sources: any): void;
    on(type: any, listener: any): any;
    once(type: any, listener: any): any;
    prependListener(type: any, listener: any): any;
    prependOnceListener(type: any, listener: any): any;
    removeAllListeners(type: any, ...args: any[]): any;
    removeListener(type: any, listener: any): any;
    replaceElement(element: any): void;
    setMaxListeners(n: any): any;
    setValue(element: any, value: any, origin: any, key: any): any;
    subscribe(client: any, element: any): void;
    toJSON(): any;
    unsubscribe(client: any, element: any): void;
    updateSubscribers(path: any, response: any, origin: any): void;
  }
}
