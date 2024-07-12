function isWeb3Provider(provider) {
  return "provider" in provider;
}
function isWalletConnectProvider(provider) {
  return provider.isWalletConnect;
}
let WalletType = /*#__PURE__*/function (WalletType) {
  WalletType["WALLET_CONNECT"] = "WalletConnect";
  WalletType["INJECTED"] = "Injected";
  return WalletType;
}({});

/**
 * WalletMeta for WalletConnect or Injected wallets.
 *
 * For WalletConnect wallets, name, description, url, and icons are taken from WalletConnect's peerMeta
 * v1: @see https://docs.walletconnect.com/1.0/specs#session-request
 * v2: @see https://docs.walletconnect.com/2.0/specs/clients/core/pairing/data-structures#metadata
 *
 * For Injected wallets, the name is derived from the `is*` properties on the provider (eg `isCoinbaseWallet`).
 */

function getWalletConnectMeta(provider) {
  const metadata = provider.session?.peer.metadata;
  return {
    type: WalletType.WALLET_CONNECT,
    agent: metadata ? `${metadata.name} (WalletConnect)` : "(WalletConnect)",
    ...metadata
  };
}
function getInjectedMeta(provider) {
  const properties = Object.getOwnPropertyNames(provider);
  const names = properties.filter(name => name.match(/^is.*$/) && provider[name] === true).map(name => name.slice(2)) ?? [];

  // Many wallets spoof MetaMask by setting `isMetaMask` along with their own identifier,
  // so we sort MetaMask last so that these wallets' names come first.
  names.sort((a, b) => a === "MetaMask" ? 1 : b === "MetaMask" ? -1 : 0);

  // Coinbase Wallet can be connected through an extension or a QR code, with `qrUrl` as the only differentiator,
  // so we capture `qrUrl` in the agent string.
  if (properties.includes("qrUrl") && provider["qrUrl"]) {
    names.push("qrUrl");
  }
  return {
    type: WalletType.INJECTED,
    agent: [...names, "(Injected)"].join(" "),
    name: names[0]
    // TODO(WEB-2914): Populate description, url, and icons for known wallets.
  };
}

function getWalletMeta(provider) {
  if (!isWeb3Provider(provider)) return undefined;
  if (isWalletConnectProvider(provider.provider)) {
    return getWalletConnectMeta(provider.provider);
  } else {
    return getInjectedMeta(provider.provider);
  }
}

export { WalletType, getWalletMeta };
