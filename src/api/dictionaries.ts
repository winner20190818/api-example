
namespace ClientapiInternal {

    export const CommonUploadReason_DICT_KEY = 'f1e65b3a7c74812e8f969dd52700f7765c4757238da7c6a1d03f71d71dea6949';

    export const CommonUploadContentType_DICT_KEY = '7243b7cd802e28b815c5567a5a9a0f859ce0512be9dca82db05d76280bf9198e';

}

globalThis.ClientapiInternal = ClientapiInternal;

namespace PkgTypes {

    export const CountryCode_DICT_KEY = '78e00ccc840c53b08edad4112773e38b8c70e8c94807b8cde471edf510e49a16';

}

globalThis.PkgTypes = PkgTypes;

namespace InternalProfile {

    export const PkgTypesGender_DICT_KEY = 'f36ba5a6be5c97fd86ddec8510701bca77e26a86db014970be4221887849cd61';

    export const PkgTypesCountryCode_DICT_KEY = '78e00ccc840c53b08edad4112773e38b8c70e8c94807b8cde471edf510e49a16';

    export const UserKycLevel_DICT_KEY = 'e3e85664ba4b1855787da7d3c9d70650e3fe459936c1894f4cd540c14866be7b';

    export const CoreAccountStatus_DICT_KEY = '2f45ba6431b715d2e67378a44be7f3860968010b922c2a5ec82f958cbfccd704';

    export const UserKycIDType_DICT_KEY = '3350fcd33173bb54c95cf5929a1c8da2835a9390642289140099dcd500c72d05';

    export const UserKycMediaType_DICT_KEY = '74c070e1a60f26d084af4033fa6d17b3d4b957bedd0bf75393407a6dc22ab76b';

    export const CommonKycreviewStatus_DICT_KEY = '0c4a0de2c574c84b3797ae4e017b6438afb25f620b0ec17a547e4c6bc4477b86';

}

globalThis.InternalProfile = InternalProfile;

namespace CommonViewmodel {

    export const CoreAccountStatus_DICT_KEY = '2f45ba6431b715d2e67378a44be7f3860968010b922c2a5ec82f958cbfccd704';

}

globalThis.CommonViewmodel = CommonViewmodel;

namespace InternalContent {

    export const TypesLocaleLocale_DICT_KEY = '671202e54538c8ddc9b23630cdb8c1d0776a3d857830c615f2d5ecd5b6087a73';

    export const CoreBettingGameCategory_DICT_KEY = 'e66a1d5abe5477ebcfa56efb44599ff9a4efe5d3351617856d4e385479d4b775';

    export const CommonGameDisplaySize_DICT_KEY = 'e7851a90e20a9c64c4beefc4d42cb1bc1523f93e68927b3f13a22d0530edcc15';

}

globalThis.InternalContent = InternalContent;

namespace CommonPayment {

    export const PkgTypesCurrency_DICT_KEY = '44b38aac13268d8d8619d6836ca2067fcc28970967222a3fec46f073c4a3ec25';

    export const RechargeMethod_DICT_KEY = '69f72da3e91f0beee3a565550e7436b855c7c8db498cfd8273391affa088829c';

}

globalThis.CommonPayment = CommonPayment;

namespace InternalPayment {

    export const PkgTypesCurrency_DICT_KEY = '44b38aac13268d8d8619d6836ca2067fcc28970967222a3fec46f073c4a3ec25';

    export const CommonPaymentRechargeMethod_DICT_KEY = '69f72da3e91f0beee3a565550e7436b855c7c8db498cfd8273391affa088829c';

    export const ActivitiesRechargegiftPlanName_DICT_KEY = '134c686d29ea782b8583eb37149d32a86f8183d996672e2767f6d1907882835e';

}

globalThis.InternalPayment = InternalPayment;

namespace CoreRecharge {

    export const Status_DICT_KEY = 'dce1c390db602c0ed179a83cdd8dc81fc6456b96b6c2a90a5e42ac0fb3f3c31f';

}

globalThis.CoreRecharge = CoreRecharge;

namespace InternalActivities {

    export const ActivitiesRechargegiftPlanName_DICT_KEY = '134c686d29ea782b8583eb37149d32a86f8183d996672e2767f6d1907882835e';

}

globalThis.InternalActivities = InternalActivities;

namespace InternalRecords {

    export const CoreBettingStatus_DICT_KEY = '2c1ac482450970f7c48e39be465fd38dd4bb7490bfa31c8f939e9346c085f8dd';

    export const CoreBettingGameCategory_DICT_KEY = 'e66a1d5abe5477ebcfa56efb44599ff9a4efe5d3351617856d4e385479d4b775';

    export const CoreRechargeStatus_DICT_KEY = 'dce1c390db602c0ed179a83cdd8dc81fc6456b96b6c2a90a5e42ac0fb3f3c31f';

    export const CoreWithdrawStatus_DICT_KEY = '3a97da9e2072e8e2d7a69229d25b60d7820b1c3d7471d5c9909969b1eb11f6ed';

    export const UserBalanceAction_DICT_KEY = '3068523af3aa84723126553c95b9a99503844ab3878dfcd9428eba4491793521';

}

globalThis.InternalRecords = InternalRecords;



export {}

interface DictItem {
  value: string | number
  dict: Partial<Record<Locale, { label: string; tip?: string }>> | null
}

export const dictionaries: Record<string, DictItem[]> = 
{"0c4a0de2c574c84b3797ae4e017b6438afb25f620b0ec17a547e4c6bc4477b86":[{"value":"pending","dict":null},{"value":"approved","dict":null},{"value":"rejected","dict":null},{"value":"final_rejected","dict":null}],"134c686d29ea782b8583eb37149d32a86f8183d996672e2767f6d1907882835e":[{"value":"userFirst","dict":null},{"value":"dailyFirst","dict":null},{"value":"payday","dict":null}],"2c1ac482450970f7c48e39be465fd38dd4bb7490bfa31c8f939e9346c085f8dd":[{"value":"pending","dict":null},{"value":"canceled","dict":null},{"value":"completed","dict":null}],"2f45ba6431b715d2e67378a44be7f3860968010b922c2a5ec82f958cbfccd704":[{"value":"enabled","dict":null},{"value":"disabled","dict":null}],"3068523af3aa84723126553c95b9a99503844ab3878dfcd9428eba4491793521":[{"value":"recharge","dict":null},{"value":"withdraw","dict":null},{"value":"cancel_withdraw","dict":null},{"value":"bet","dict":null},{"value":"change_bet","dict":null},{"value":"settle","dict":null},{"value":"bonus","dict":null},{"value":"commission","dict":null},{"value":"adjust","dict":null}],"3350fcd33173bb54c95cf5929a1c8da2835a9390642289140099dcd500c72d05":[{"value":"idCard","dict":null},{"value":"passport","dict":null},{"value":"drivingLicense","dict":null}],"3a97da9e2072e8e2d7a69229d25b60d7820b1c3d7471d5c9909969b1eb11f6ed":[{"value":"pending","dict":null},{"value":"paying","dict":null},{"value":"completed","dict":null},{"value":"canceled","dict":null},{"value":"rejected","dict":null}],"44b38aac13268d8d8619d6836ca2067fcc28970967222a3fec46f073c4a3ec25":[{"value":"USD","dict":null},{"value":"EUR","dict":null},{"value":"JPY","dict":null},{"value":"GBP","dict":null},{"value":"CNY","dict":null},{"value":"INR","dict":null},{"value":"BRL","dict":null},{"value":"RUB","dict":null},{"value":"CAD","dict":null},{"value":"AUD","dict":null},{"value":"ZAR","dict":null},{"value":"MXN","dict":null},{"value":"SGD","dict":null},{"value":"NZD","dict":null},{"value":"CHF","dict":null},{"value":"HKD","dict":null},{"value":"PHP","dict":null}],"671202e54538c8ddc9b23630cdb8c1d0776a3d857830c615f2d5ecd5b6087a73":[{"value":"","dict":null},{"value":"zh-CN","dict":null},{"value":"zh-TW","dict":null},{"value":"zh-HK","dict":null},{"value":"en-US","dict":null},{"value":"en-GB","dict":null},{"value":"en-AU","dict":null},{"value":"en-CA","dict":null},{"value":"en-IN","dict":null},{"value":"fr-FR","dict":null},{"value":"fr-CA","dict":null},{"value":"de-DE","dict":null},{"value":"de-CH","dict":null},{"value":"es-ES","dict":null},{"value":"es-MX","dict":null},{"value":"es-US","dict":null},{"value":"ja-JP","dict":null},{"value":"ko-KR","dict":null},{"value":"ru-RU","dict":null},{"value":"pt-BR","dict":null},{"value":"pt-PT","dict":null},{"value":"ar-SA","dict":null},{"value":"ar-EG","dict":null},{"value":"hi-IN","dict":null},{"value":"it-IT","dict":null},{"value":"it-CH","dict":null},{"value":"nl-NL","dict":null},{"value":"nl-BE","dict":null},{"value":"pl-PL","dict":null},{"value":"vi-VN","dict":null},{"value":"th-TH","dict":null},{"value":"el-GR","dict":null},{"value":"tr-TR","dict":null},{"value":"sv-SE","dict":null},{"value":"fil-PH","dict":null}],"69f72da3e91f0beee3a565550e7436b855c7c8db498cfd8273391affa088829c":[{"value":"redirect","dict":null},{"value":"exchange","dict":null}],"7243b7cd802e28b815c5567a5a9a0f859ce0512be9dca82db05d76280bf9198e":[{"value":"image/jpeg","dict":null},{"value":"image/png","dict":null},{"value":"image/gif","dict":null},{"value":"audio/mpeg","dict":null},{"value":"audio/wav","dict":null},{"value":"video/mp4","dict":null},{"value":"video/mpeg","dict":null},{"value":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","dict":null}],"74c070e1a60f26d084af4033fa6d17b3d4b957bedd0bf75393407a6dc22ab76b":[{"value":"video","dict":null},{"value":"image","dict":null}],"78e00ccc840c53b08edad4112773e38b8c70e8c94807b8cde471edf510e49a16":[{"value":"86","dict":null},{"value":"63","dict":null}],"dce1c390db602c0ed179a83cdd8dc81fc6456b96b6c2a90a5e42ac0fb3f3c31f":[{"value":"pending","dict":null},{"value":"completed","dict":null},{"value":"canceled","dict":null}],"e3e85664ba4b1855787da7d3c9d70650e3fe459936c1894f4cd540c14866be7b":[{"value":0,"dict":null},{"value":1,"dict":null},{"value":9,"dict":null}],"e66a1d5abe5477ebcfa56efb44599ff9a4efe5d3351617856d4e385479d4b775":[{"value":"slot","dict":null},{"value":"live","dict":null},{"value":"sport","dict":null},{"value":"chess","dict":null},{"value":"fish","dict":null}],"e7851a90e20a9c64c4beefc4d42cb1bc1523f93e68927b3f13a22d0530edcc15":[{"value":"pc","dict":null},{"value":"mobile","dict":null}],"f1e65b3a7c74812e8f969dd52700f7765c4757238da7c6a1d03f71d71dea6949":[{"value":"avatar","dict":null},{"value":"asset","dict":null},{"value":"kyc","dict":null}],"f36ba5a6be5c97fd86ddec8510701bca77e26a86db014970be4221887849cd61":[{"value":"un_know","dict":null},{"value":"male","dict":null},{"value":"female","dict":null}]}