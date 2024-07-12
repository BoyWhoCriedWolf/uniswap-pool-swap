import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import { NftStandard } from '../../graphql/data/__generated__/types-and-hooks.js';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

var useWalletCollections = create()(devtools(function (set) {
  return {
    walletAssets: [],
    walletCollections: [],
    displayAssets: [],
    collectionFilters: [],
    listFilter: "All",
    setWalletAssets: function setWalletAssets(assets) {
      return set(function () {
        return {
          walletAssets: assets === null || assets === void 0 ? void 0 : assets.filter(function (asset) {
            var _asset$asset_contract;
            return ((_asset$asset_contract = asset.asset_contract) === null || _asset$asset_contract === void 0 ? void 0 : _asset$asset_contract.tokenType) === NftStandard.Erc721;
          })
        };
      });
    },
    setWalletCollections: function setWalletCollections(collections) {
      return set(function () {
        return {
          walletCollections: collections
        };
      });
    },
    setCollectionFilters: function setCollectionFilters(address) {
      return set(function (_ref) {
        var collectionFilters = _ref.collectionFilters;
        if (collectionFilters.length === 0) return {
          collectionFilters: [address]
        };else if (collectionFilters.some(function (x) {
          return x === address;
        })) return {
          collectionFilters: collectionFilters.filter(function (n) {
            return n !== address;
          })
        };else return {
          collectionFilters: [].concat(_toConsumableArray(collectionFilters), [address])
        };
      });
    },
    clearCollectionFilters: function clearCollectionFilters() {
      return set(function () {
        return {
          collectionFilters: []
        };
      });
    },
    setListFilter: function setListFilter(value) {
      return set(function () {
        return {
          listFilter: value
        };
      });
    },
    setDisplayAssets: function setDisplayAssets(walletAssets, listFilter) {
      return set(function () {
        return {
          displayAssets: filterWalletAssets(walletAssets, listFilter)
        };
      });
    }
  };
}, {
  name: "useWalletCollections"
}));
var filterWalletAssets = function filterWalletAssets(walletAssets, listFilter) {
  var _displayAssets, _displayAssets2;
  var displayAssets = walletAssets;
  if (listFilter === "Listed") displayAssets = (_displayAssets = displayAssets) === null || _displayAssets === void 0 ? void 0 : _displayAssets.filter(function (x) {
    return x.listing_date !== null;
  });
  if (listFilter === "Unlisted") displayAssets = (_displayAssets2 = displayAssets) === null || _displayAssets2 === void 0 ? void 0 : _displayAssets2.filter(function (x) {
    return x.listing_date === null;
  });
  return displayAssets;
};

export { useWalletCollections };
