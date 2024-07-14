import { calculateElapsedTimeWithPerformanceMarkMs } from './utils.js';

// These events should happen in this order.
let SwapEventType = /*#__PURE__*/function (SwapEventType) {
  SwapEventType["FIRST_SWAP_ACTION"] = "FIRST_SWAP_ACTION";
  SwapEventType["FIRST_QUOTE_FETCH_STARTED"] = "FIRST_QUOTE_FETCH_STARTED";
  SwapEventType["FIRST_SWAP_SIGNATURE_REQUESTED"] = "FIRST_SWAP_SIGNATURE_REQUESTED";
  SwapEventType["FIRST_SWAP_SIGNATURE_COMPLETED"] = "FIRST_SWAP_SIGNATURE_COMPLETED";
  SwapEventType["FIRST_SWAP_SUCCESS"] = "FIRST_SWAP_SUCCESS";
  return SwapEventType;
}({});
class SwapEventTimestampTracker {
  createdAt = Date.now();
  constructor() {
    // Private constructor to prevent direct construction calls with the `new` operator.
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new SwapEventTimestampTracker();
    }
    return this._instance;
  }
  timestamps = new Map();
  hasTimestamp(eventType) {
    return this.timestamps.has(eventType);
  }
  setElapsedTime(eventType) {
    if (this.timestamps.has(eventType)) return undefined;
    const elapsedTime = calculateElapsedTimeWithPerformanceMarkMs(eventType, this.createdAt);
    if (elapsedTime) {
      this.timestamps.set(eventType, elapsedTime);
    }
    return this.timestamps.get(eventType);
  }

  /**
   * Returns the time elapsed between the given event and the start event,
   * or page load if the start event is not provided.
   */
  getElapsedTime(eventType, startEventType) {
    const endTime = this.timestamps.get(eventType);
    if (!endTime) return undefined;
    let startTime = 0;
    if (startEventType) {
      startTime = this.timestamps.get(startEventType) ?? 0;
    }
    return endTime - startTime;
  }
}
const timestampTracker = SwapEventTimestampTracker.getInstance();

export { SwapEventTimestampTracker, SwapEventType, timestampTracker };
