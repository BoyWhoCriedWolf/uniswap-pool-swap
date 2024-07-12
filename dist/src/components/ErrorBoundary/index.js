import { Trans } from '../../../node_modules/@lingui/react/dist/index.mjs.js';
import * as Sentry from '@sentry/react';
import { useWeb3React } from '@web3-react/core';
import { ButtonLight, SmallButtonPrimary } from '../Button/index.js';
import { ChevronUpIcon } from '../../nft/components/icons.js';
import '../../nft/hooks/useBag.js';
import '../../nft/hooks/useCollectionFilters.js';
import '../../nft/hooks/useFiltersExpanded.js';
import '../../nft/hooks/useIsCollectionLoading.js';
import { useIsMobile } from '../../nft/hooks/useIsMobile.js';
import '../../hooks/useScreenSize.js';
import '../../nft/hooks/useNFTList.js';
import '../../nft/hooks/useProfilePageState.js';
import '../../nft/hooks/useSellAsset.js';
import '../../nft/hooks/useSendTransaction.js';
import '@babel/runtime/helpers/slicedToArray';
import React__default, { useState } from 'react';
import '../../nft/hooks/useTransactionResponse.js';
import '@ethersproject/units';
import '@uniswap/sdk-core';
import '../../hooks/useUSDPrice.js';
import '../../constants/tokens.js';
import 'jsbi';
import '../../lib/hooks/useCurrencyBalance.js';
import '../../nft/hooks/useWalletCollections.js';
import { Copy } from 'react-feather';
import styled from 'styled-components';
import { CopyToClipboard, ExternalLink } from '../../theme/components/index.js';
import { isSentryEnabled } from '../../utils/env.js';
import { Column } from '../Column/index.js';
import { ThemedText } from '../../theme/components/text.js';

const FallbackWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const BodyWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  padding: 1rem;
`;
const SmallButtonLight = styled(ButtonLight)`
  font-size: 16px;
  padding: 10px 16px;
  border-radius: 12px;
`;
const StretchedRow = styled.div`
  display: flex;
  gap: 24px;

  > * {
    display: flex;
    flex: 1;
  }
`;
const Code = styled.code`
  font-weight: 485;
  font-size: 12px;
  line-height: 16px;
  word-wrap: break-word;
  width: 100%;
  color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.neutral1;
}};
  font-family: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return theme.fonts.code;
}};
  overflow: scroll;
  max-height: calc(100vh - 450px);
`;
const Separator = styled.div`
  border-bottom: 1px solid ${_ref3 => {
  let {
    theme
  } = _ref3;
  return theme.surface3;
}};
`;
const CodeBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${_ref4 => {
  let {
    theme
  } = _ref4;
  return theme.surface2;
}};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 16px 24px rgba(0, 0, 0, 0.04), 0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 24px;
  padding: 24px;
  gap: 10px;
  color: ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.neutral1;
}};
`;
const ShowMoreButton = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
`;
const CopyIcon = styled(Copy)`
  stroke: ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.neutral2;
}};
`;
const ShowMoreIcon = styled(ChevronUpIcon)`
  transform: ${_ref7 => {
  let {
    $isExpanded
  } = _ref7;
  return $isExpanded ? "none" : "rotate(180deg)";
}};
`;
const CodeTitle = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  word-break: break-word;
`;
const Fallback = _ref8 => {
  let {
    error,
    eventId
  } = _ref8;
  const [isExpanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();

  // @todo: ThemedText components should be responsive by default
  const [Title, Description] = isMobile ? [ThemedText.HeadlineSmall, ThemedText.BodySmall] : [ThemedText.HeadlineLarge, ThemedText.BodySecondary];
  const showErrorId = isSentryEnabled() && eventId;
  const showMoreButton = /*#__PURE__*/React__default.createElement(ShowMoreButton, {
    onClick: () => setExpanded(s => !s)
  }, /*#__PURE__*/React__default.createElement(ThemedText.Link, {
    color: "neutral2"
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "J/hVSQ",
    message: "{0}",
    values: {
      0: isExpanded ? "Show less" : "Show more"
    }
  })), /*#__PURE__*/React__default.createElement(ShowMoreIcon, {
    $isExpanded: isExpanded,
    secondaryWidth: "20",
    secondaryHeight: "20"
  }));
  const errorDetails = error.stack || error.message;
  return /*#__PURE__*/React__default.createElement(FallbackWrapper, null, /*#__PURE__*/React__default.createElement(BodyWrapper, null, /*#__PURE__*/React__default.createElement(Column, {
    gap: "xl"
  }, showErrorId ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Column, {
    gap: "sm"
  }, /*#__PURE__*/React__default.createElement(Title, {
    textAlign: "center"
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "nwtY4N",
    message: "Something went wrong"
  })), /*#__PURE__*/React__default.createElement(Description, {
    textAlign: "center",
    color: "neutral2"
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "Q1aovZ",
    message: "Sorry, an error occured while processing your request. If you request support, be sure to provide your error ID."
  }))), /*#__PURE__*/React__default.createElement(CodeBlockWrapper, null, /*#__PURE__*/React__default.createElement(CodeTitle, null, /*#__PURE__*/React__default.createElement(ThemedText.SubHeader, null, /*#__PURE__*/React__default.createElement(Trans, {
    id: "y4nM4g",
    message: "Error ID: {eventId}",
    values: {
      eventId: eventId
    }
  })), /*#__PURE__*/React__default.createElement(CopyToClipboard, {
    toCopy: eventId
  }, /*#__PURE__*/React__default.createElement(CopyIcon, null))), /*#__PURE__*/React__default.createElement(Separator, null), isExpanded && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Code, null, errorDetails), /*#__PURE__*/React__default.createElement(Separator, null)), showMoreButton)) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Column, {
    gap: "sm"
  }, /*#__PURE__*/React__default.createElement(Title, {
    textAlign: "center"
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "nwtY4N",
    message: "Something went wrong"
  })), /*#__PURE__*/React__default.createElement(Description, {
    textAlign: "center",
    color: "neutral2"
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "8C/AK6",
    message: "Sorry, an error occured while processing your request. If you request support, be sure to copy the details of this error."
  }))), /*#__PURE__*/React__default.createElement(CodeBlockWrapper, null, /*#__PURE__*/React__default.createElement(CodeTitle, null, /*#__PURE__*/React__default.createElement(ThemedText.SubHeader, null, "Error details"), /*#__PURE__*/React__default.createElement(CopyToClipboard, {
    toCopy: errorDetails
  }, /*#__PURE__*/React__default.createElement(CopyIcon, null))), /*#__PURE__*/React__default.createElement(Separator, null), /*#__PURE__*/React__default.createElement(Code, null, errorDetails.split("\n").slice(0, isExpanded ? undefined : 4)), /*#__PURE__*/React__default.createElement(Separator, null), showMoreButton)), /*#__PURE__*/React__default.createElement(StretchedRow, null, /*#__PURE__*/React__default.createElement(SmallButtonPrimary, {
    onClick: () => window.location.reload()
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "L7XriH",
    message: "Reload the app"
  })), /*#__PURE__*/React__default.createElement(ExternalLink, {
    id: "get-support-on-discord",
    href: "https://discord.gg/FCfyBSbCU5",
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement(SmallButtonLight, null, /*#__PURE__*/React__default.createElement(Trans, {
    id: "EyYG53",
    message: "Get support"
  })))))));
};
async function updateServiceWorker() {
  const ready = await navigator.serviceWorker.ready;
  // the return type of update is incorrectly typed as Promise<void>. See
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update
  return ready.update();
}
const updateServiceWorkerInBackground = async () => {
  try {
    const registration = await updateServiceWorker();

    // We want to refresh only if we detect a new service worker is waiting to be activated.
    // See details about it: https://web.dev/service-worker-lifecycle/
    if (registration?.waiting) {
      await registration.unregister();

      // Makes Workbox call skipWaiting().
      // For more info on skipWaiting see: https://web.dev/service-worker-lifecycle/#skip-the-waiting-phase
      registration.waiting.postMessage({
        type: "SKIP_WAITING"
      });
    }
  } catch (error) {
    console.error("Failed to update service worker", error);
  }
};
function ErrorBoundary(_ref9) {
  let {
    children
  } = _ref9;
  const {
    chainId
  } = useWeb3React();
  return /*#__PURE__*/React__default.createElement(Sentry.ErrorBoundary, {
    fallback: _ref10 => {
      let {
        error,
        eventId
      } = _ref10;
      return /*#__PURE__*/React__default.createElement(Fallback, {
        error: error,
        eventId: eventId
      });
    },
    beforeCapture: scope => {
      scope.setLevel("fatal");
      scope.setTag("chain_id", chainId);
    },
    onError: () => {
      updateServiceWorkerInBackground();
    }
  }, children);
}

export { ErrorBoundary as default };
