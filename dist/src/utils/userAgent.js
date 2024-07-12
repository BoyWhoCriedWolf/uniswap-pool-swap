import { UAParser } from 'ua-parser-js';

const parser = new UAParser(window.navigator.userAgent);
const {
  type
} = parser.getDevice();
const {
  name
} = parser.getBrowser();
const isMobile = type === "mobile" || type === "tablet";
const platform = parser.getOS().name;
const isIOS = platform === "iOS";
const isNonIOSPhone = !isIOS && type === "mobile";
const isMobileSafari = isMobile && isIOS && name?.toLowerCase().includes("safari");

export { isIOS, isMobile, isMobileSafari, isNonIOSPhone };
