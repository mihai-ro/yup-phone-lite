'use strict';var Yup=require("yup"),libphonenumberJs=require("libphonenumber-js");function _interopNamespace(a){if(a&&a.__esModule)return a;var b=Object.create(null);a&&Object.keys(a).forEach(function(c){if("default"!==c){var d=Object.getOwnPropertyDescriptor(a,c);Object.defineProperty(b,c,d.get?d:{enumerable:!0,get:function(){return a[c]}})}});b["default"]=a;return Object.freeze(b)}
var Yup__namespace=_interopNamespace(Yup),YUP_PHONE_METHOD="phone",CLDR_REGION_CODE_SIZE=2,isValidCountryCode=function(a){var b=(null==a?void 0:a.length)===CLDR_REGION_CODE_SIZE;return"string"===typeof a&&b};
Yup__namespace.addMethod(Yup__namespace.string,YUP_PHONE_METHOD,function(a,b){void 0===b&&(b="");isValidCountryCode(a)||(a="US");return this.test(YUP_PHONE_METHOD,"string"===typeof b&&b?b:"${path} must be a valid phone number for region "+a,function(c){try{return void 0===c||""===c?!0:libphonenumberJs.isValidPhoneNumber(c,a)}catch(d){return!1}})})
//# sourceMappingURL=yup-phone-lite.cjs.js.map
