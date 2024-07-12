'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../locales/en-US.cjs');

var SUPPORTED_LOCALES = [
// order as they appear in the language dropdown
"en-US", "af-ZA", "ar-SA", "ca-ES", "cs-CZ", "da-DK", "de-DE", "el-GR", "es-ES", "fi-FI", "fr-FR", "he-IL", "hu-HU", "id-ID", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sr-SP", "sv-SE", "sw-TZ", "tr-TR", "uk-UA", "vi-VN", "zh-CN", "zh-TW"];
var DEFAULT_LOCALE = "en-US";
var LOCALE_LABEL = {
  "af-ZA": "Afrikaans",
  "ar-SA": "العربية",
  "ca-ES": "Català",
  "cs-CZ": "čeština",
  "da-DK": "dansk",
  "de-DE": "Deutsch",
  "el-GR": "ελληνικά",
  "en-US": "English",
  "es-ES": "Español",
  "fi-FI": "suomi",
  "fr-FR": "français",
  "he-IL": "עִברִית",
  "hu-HU": "Magyar",
  "id-ID": "bahasa Indonesia",
  "it-IT": "Italiano",
  "ja-JP": "日本語",
  "ko-KR": "한국어",
  "nl-NL": "Nederlands",
  "no-NO": "norsk",
  "pl-PL": "Polskie",
  "pt-BR": "português",
  "pt-PT": "português",
  "ro-RO": "Română",
  "ru-RU": "русский",
  "sr-SP": "Српски",
  "sv-SE": "svenska",
  "sw-TZ": "Kiswahili",
  "tr-TR": "Türkçe",
  "uk-UA": "Український",
  "vi-VN": "Tiếng Việt",
  "zh-CN": "简体中文",
  "zh-TW": "繁体中文"
};

exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
exports.DEFAULT_MESSAGES = enUS.messages;
exports.LOCALE_LABEL = LOCALE_LABEL;
exports.SUPPORTED_LOCALES = SUPPORTED_LOCALES;
