
declare namespace PkgTypes {

    interface PhoneNumber {
        countryCode: CountryCode;
        number: string;
    }

    type CountryCode = '86' | '63';

    const CountryCode_DICT_KEY: string;

}
