import BRAVE_ICON from '../assets/wallets/brave-icon.svg.js';
import INJECTED_DARK_ICON from '../assets/wallets/browser-wallet-dark.svg.js';
import INJECTED_LIGHT_ICON from '../assets/wallets/browser-wallet-light.svg.js';
import LEDGER_ICON from '../assets/wallets/ledger-icon.svg.js';
import METAMASK_ICON from '../assets/wallets/metamask-icon.svg.js';
import RABBY_ICON from '../assets/wallets/rabby-icon.svg.js';
import TRUST_WALLET_ICON from '../assets/wallets/trustwallet-icon.svg.js';
import { ConnectionType } from './types.js';

const getIsInjected = () => Boolean(window.ethereum);
const InjectedWalletTable = {
  isBraveWallet: {
    name: "Brave",
    icon: BRAVE_ICON
  },
  isRabby: {
    name: "Rabby",
    icon: RABBY_ICON
  },
  isTrust: {
    name: "Trust Wallet",
    icon: TRUST_WALLET_ICON
  },
  isLedgerConnect: {
    name: "Ledger",
    icon: LEDGER_ICON
  }
};

/**
 * Checks the window object for the presence of a known injectors and returns the most relevant injector name and icon.
 * Returns a default metamask installation object if no wallet is detected.
 *
 * @param isDarkMode - optional parameter to determine which color mode of the
 */
function getInjection(isDarkMode) {
  for (const [key, wallet] of Object.entries(InjectedWalletTable)) {
    if (window.ethereum?.[key]) return wallet;
  }

  // Check for MetaMask last, as other injectors will also set this flag, i.e. Brave browser and Phantom wallet
  if (window.ethereum?.isMetaMask) return {
    name: "MetaMask",
    icon: METAMASK_ICON
  };

  // Prompt metamask installation when there is no injection present or the only injection detected is coinbase (CB has separate entry point in UI)
  if (!window.ethereum || window.ethereum.isCoinbaseWallet) return {
    name: "Install MetaMask",
    icon: METAMASK_ICON
  };

  // Use a generic icon when injection is present but no known non-coinbase wallet is detected
  return {
    name: "Browser Wallet",
    icon: isDarkMode ? INJECTED_DARK_ICON : INJECTED_LIGHT_ICON
  };
}

/**
 * Returns true if `isMetaMask` is set to true and another non-metamask injector cannot be detected.
 *
 * Some non-metamask wallets set `isMetaMask` to true for dapp-compatability reasons. If one of these
 * injectors are detected, this function will return false.
 * https://wallet-docs.brave.com/ethereum/wallet-detection#compatability-with-metamask
 */
const getIsMetaMaskWallet = () => getInjection().name === "MetaMask";
const getIsCoinbaseWallet = () => Boolean(window.ethereum?.isCoinbaseWallet);

// https://eips.ethereum.org/EIPS/eip-1193#provider-errors
let ErrorCode = /*#__PURE__*/function (ErrorCode) {
  ErrorCode[ErrorCode["USER_REJECTED_REQUEST"] = 4001] = "USER_REJECTED_REQUEST";
  ErrorCode[ErrorCode["UNAUTHORIZED"] = 4100] = "UNAUTHORIZED";
  ErrorCode[ErrorCode["UNSUPPORTED_METHOD"] = 4200] = "UNSUPPORTED_METHOD";
  ErrorCode[ErrorCode["DISCONNECTED"] = 4900] = "DISCONNECTED";
  ErrorCode[ErrorCode["CHAIN_DISCONNECTED"] = 4901] = "CHAIN_DISCONNECTED";
  ErrorCode[ErrorCode["CHAIN_NOT_ADDED"] = 4902] = "CHAIN_NOT_ADDED";
  ErrorCode[ErrorCode["MM_ALREADY_PENDING"] = -32002] = "MM_ALREADY_PENDING";
  ErrorCode["WC_V2_MODAL_CLOSED"] = "Error: Connection request reset. Please try again.";
  ErrorCode["WC_MODAL_CLOSED"] = "Error: User closed modal";
  ErrorCode["CB_REJECTED_REQUEST"] = "Error: User denied account authorization";
  return ErrorCode;
}({});

// TODO(WEB-1973): merge this function with existing didUserReject for Swap errors
function didUserReject(connection, error) {
  return error?.code === ErrorCode.USER_REJECTED_REQUEST || connection.type === ConnectionType.WALLET_CONNECT_V2 && error?.toString?.() === ErrorCode.WC_V2_MODAL_CLOSED || connection.type === ConnectionType.COINBASE_WALLET && error?.toString?.() === ErrorCode.CB_REJECTED_REQUEST;
}

export { ErrorCode, didUserReject, getInjection, getIsCoinbaseWallet, getIsInjected, getIsMetaMaskWallet };
