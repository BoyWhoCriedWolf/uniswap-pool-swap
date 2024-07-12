import React__default, { useState, useMemo } from 'react';
import { Trans } from '../../../node_modules/@lingui/react/dist/index.mjs.js';
import { InterfacePageName, BrowserEvent, InterfaceEventName, InterfaceElementName } from '@uniswap/analytics-events';
import { useWeb3React } from '@web3-react/core';
import { Trace, TraceEvent } from '../../analytics/index.js';
import { useToggleAccountDrawer } from '../../components/AccountDrawer/index.js';
import { ButtonPrimary, ButtonText } from '../../components/Button/index.js';
import { AutoColumn } from '../../components/Column/index.js';
import PositionList from '../../components/PositionList/index.js';
import { RowBetween, RowFixed } from '../../components/Row/index.js';
import { SwitchLocaleLink } from '../../components/SwitchLocaleLink/index.js';
import { isSupportedChain } from '../../constants/chains.js';
import { useFilterPossiblyMaliciousPositions } from '../../hooks/useFilterPossiblyMaliciousPositions.js';
import { useV3Positions } from '../../hooks/useV3Positions.js';
import AddLiquidityWrapper from '../AddLiquidity/index.js';
import { Inbox } from 'react-feather';
import { useUserHideClosedPositions } from '../../state/user/hooks.js';
import styled, { css, useTheme } from 'styled-components';
import { HideSmall } from '../../theme/components/index.js';
import CTACards from './CTACards.js';
import PositionsLoadingPlaceholder from './PositionLoadingPlaceHolder.js';
import WrongNetworkCard from './WrongNetworkCard.js';
import { ThemedText } from '../../theme/components/text.js';

const PageWrapper = styled(AutoColumn)`
  padding: 8px;
  width: 100%;
`;
const TitleRow = styled(RowBetween)`
  color: ${_ref => {
  let {
    theme
  } = _ref;
  return theme.neutral2;
}};
  @media (max-width: ${_ref2 => {
  let {
    theme
  } = _ref2;
  return `${theme.breakpoint.sm}px`;
}}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`;
const ButtonRow = styled(RowFixed)`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${_ref3 => {
  let {
    theme
  } = _ref3;
  return `${theme.breakpoint.sm}px`;
}}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const ErrorContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`;
const IconStyle = css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`;
const InboxIcon = styled(Inbox)`
  ${IconStyle}
`;
const ResponsiveButtonPrimary = styled(ButtonPrimary)`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${_ref4 => {
  let {
    theme
  } = _ref4;
  return `${theme.breakpoint.sm}px`;
}}) {
    flex: 1 1 auto;
    width: 50%;
  }
`;
const MainContentWrapper = styled.main`
  background-color: ${_ref5 => {
  let {
    theme
  } = _ref5;
  return theme.surface1;
}};
  border: 1px solid ${_ref6 => {
  let {
    theme
  } = _ref6;
  return theme.surface3;
}};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
function Pool() {
  const {
    account,
    chainId
  } = useWeb3React();
  const toggleWalletDrawer = useToggleAccountDrawer();
  const theme = useTheme();
  const [userHideClosedPositions, setUserHideClosedPositions] = useUserHideClosedPositions();
  const {
    positions,
    loading: positionsLoading
  } = useV3Positions(account);
  const [openPositions, closedPositions] = positions?.reduce((acc, p) => {
    acc[p.liquidity?.isZero() ? 1 : 0].push(p);
    return acc;
  }, [[], []]) ?? [[], []];
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [currencyIdA, setCurrencyIdA] = useState("ETH");
  const [currencyIdB, setCurrencyIdB] = useState(undefined);
  const [feeAmount, setFeeAmount] = useState(undefined);
  const userSelectedPositionSet = useMemo(() => [...openPositions, ...(userHideClosedPositions ? [] : closedPositions)], [closedPositions, openPositions, userHideClosedPositions]);
  const filteredPositions = useFilterPossiblyMaliciousPositions(userSelectedPositionSet);
  if (!isSupportedChain(chainId)) {
    return /*#__PURE__*/React__default.createElement(WrongNetworkCard, null);
  }
  const handleOpenAdd = () => {
    setIsOpenAdd(true);
  };
  const showConnectAWallet = Boolean(!account);
  return /*#__PURE__*/React__default.createElement(Trace, {
    page: InterfacePageName.POOL_PAGE,
    shouldLogImpression: true
  }, /*#__PURE__*/React__default.createElement(PageWrapper, null, isOpenAdd ? /*#__PURE__*/React__default.createElement(AddLiquidityWrapper, {
    currencyIdA: currencyIdA,
    onChangeCurrencyIdA: v => setCurrencyIdA(v ?? undefined),
    currencyIdB: currencyIdB,
    onChangeCurrencyIdB: v => setCurrencyIdB(v ?? undefined),
    feeAmount: feeAmount,
    onChangeFeeAmount: v => setFeeAmount(v ?? undefined),
    openPools: () => setIsOpenAdd(false)
  }) : /*#__PURE__*/React__default.createElement(AutoColumn, {
    gap: "lg",
    justify: "center"
  }, /*#__PURE__*/React__default.createElement(AutoColumn, {
    gap: "lg",
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React__default.createElement(TitleRow, {
    padding: "0"
  }, /*#__PURE__*/React__default.createElement(ThemedText.LargeHeader, null, /*#__PURE__*/React__default.createElement(Trans, {
    id: "lQfOr9",
    message: "Pools"
  })), /*#__PURE__*/React__default.createElement(ButtonRow, null, /*#__PURE__*/React__default.createElement(ResponsiveButtonPrimary, {
    "data-cy": "join-pool-button",
    id: "join-pool-button"
    // as={Link}
    // to="/add/ETH"
    ,
    onClick: handleOpenAdd
  }, "+ ", /*#__PURE__*/React__default.createElement(Trans, {
    id: "1k0YWs",
    message: "New position"
  })))), /*#__PURE__*/React__default.createElement(MainContentWrapper, null, positionsLoading ? /*#__PURE__*/React__default.createElement(PositionsLoadingPlaceholder, null) : filteredPositions && closedPositions && filteredPositions.length > 0 ? /*#__PURE__*/React__default.createElement(PositionList, {
    positions: filteredPositions,
    setUserHideClosedPositions: setUserHideClosedPositions,
    userHideClosedPositions: userHideClosedPositions
  }) : /*#__PURE__*/React__default.createElement(ErrorContainer, null, /*#__PURE__*/React__default.createElement(ThemedText.BodyPrimary, {
    color: theme.neutral3,
    textAlign: "center"
  }, /*#__PURE__*/React__default.createElement(InboxIcon, {
    strokeWidth: 1,
    style: {
      marginTop: "2em"
    }
  }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Trans, {
    id: "YgSnQ0",
    message: "Your active V3 liquidity positions will appear here."
  }))), !showConnectAWallet && closedPositions.length > 0 && /*#__PURE__*/React__default.createElement(ButtonText, {
    style: {
      marginTop: ".5rem"
    },
    onClick: () => setUserHideClosedPositions(!userHideClosedPositions)
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "GOctE4",
    message: "Show closed positions"
  })), showConnectAWallet && /*#__PURE__*/React__default.createElement(TraceEvent, {
    events: [BrowserEvent.onClick],
    name: InterfaceEventName.CONNECT_WALLET_BUTTON_CLICKED,
    properties: {
      received_swap_quote: false
    },
    element: InterfaceElementName.CONNECT_WALLET_BUTTON
  }, /*#__PURE__*/React__default.createElement(ButtonPrimary, {
    style: {
      marginTop: "2em",
      marginBottom: "2em",
      padding: "8px 16px"
    },
    onClick: toggleWalletDrawer
  }, /*#__PURE__*/React__default.createElement(Trans, {
    id: "GdzYJ9",
    message: "Connect a wallet"
  }))))), /*#__PURE__*/React__default.createElement(HideSmall, null, /*#__PURE__*/React__default.createElement(CTACards, null))))), /*#__PURE__*/React__default.createElement(SwitchLocaleLink, null));
}

export { Pool as default };
