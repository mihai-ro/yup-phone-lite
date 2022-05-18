import * as Yup from 'yup';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { CountryCode } from 'libphonenumber-js/types';

declare module 'yup' {
  export interface StringSchema {
    /**
     * Check for phone number validity.
     *
     * @param {String} [countryCode=US] The country code to check against.
     * @param {String} [errorMessage=DEFAULT_MESSAGE] returns error if failed validation
     */
    phone(countryCode?: CountryCode, errorMessage?: string): StringSchema;
  }
}

const YUP_PHONE_METHOD = 'phone';
const CLDR_REGION_CODE_SIZE = 2;

const isValidCountryCode = (countryCode: string | undefined): boolean => {
  const isString = typeof countryCode === 'string';
  const isValidCodeLength = countryCode?.length === CLDR_REGION_CODE_SIZE;

  return isString && isValidCodeLength;
};

Yup.addMethod(
  Yup.string,
  YUP_PHONE_METHOD,
  function yupPhoneLite(countryCode?: CountryCode, errorMessage = '') {
    if (!isValidCountryCode(countryCode)) {
      // if not valid countryCode, then set default country to United States (US)
      countryCode = 'US';
    }

    const errMsg =
      typeof errorMessage === 'string' && errorMessage
        ? errorMessage
        : `\${path} must be a valid phone number for region ${countryCode}`;

    // @ts-ignore
    return this.test(YUP_PHONE_METHOD, errMsg, (value: string) => {
      try {
        if (value === undefined || value === '') {
          return true;
        }

        /* check if the countryCode provided should be used as
          default country code or strictly followed
        */
        return isValidPhoneNumber(value, countryCode);
      } catch {
        return false;
      }
    });
  }
);
