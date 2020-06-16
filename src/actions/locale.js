import {LOCALE_SET, LOCALE_CHANGE} from '../types';

export const localeSet = (lang) => ({
  type: LOCALE_SET,
  payload: lang,
});

export const changeLocale = (lang) => ({
  type: LOCALE_CHANGE,
  payload: lang,
});
