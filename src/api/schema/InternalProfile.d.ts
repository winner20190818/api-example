
declare namespace InternalProfile {

    interface PkgTypesPhoneNumber {
        countryCode: PkgTypesCountryCode;
        number: string;
    }

    interface PkgTypesRealName {
        firstName: string;
        middleName: string;
        lastName: string;
    }

    interface CommonViewmodelAccount {
        id: string;
        lastUsedAt: number;
        status: CoreAccountStatus;
        account: string;
        channelName: string;
    }

    interface Profile {
        avatarUrl: string;
        nickname: string;
        gender: PkgTypesGender;
        hasPhoneNumber: boolean;
        phoneNumber: PkgTypesPhoneNumber;
        hasEmail: boolean;
        email: string;
        balance: string;
        withdrawable: string;
        realName?: PkgTypesRealName;
        gender?: PkgTypesGender;
        kycLevel?: UserKycLevel;
        username: string;
        usernameUpdateTimes: number;
        hasLoginPassword: boolean;
        referralCode: string;
        accounts: CommonViewmodelAccount[];
        vipLevel: number;
        rechargeAmount: string;
        withdrawAmount: string;
    }

    interface SetProfile {
        avatarUrl?: string;
        nickname?: string;
        gender?: PkgTypesGender;
    }

    interface SetUsername {
        username: string;
    }

    interface BindPhoneNumberForm {
        smsOtpID: string;
        code: string;
    }

    interface EmailUpdateDTO {
        email: string;
    }

    interface SetPwdCommandDTO {
        plainLoginPassword: string;
    }

    interface UpdatePwdCommandDTO {
        originPassword: string;
        newPassword: string;
    }

    interface CommandAccountForm {
        channelName: string;
        account: string;
        realName: PkgTypesRealName;
    }

    interface UserKycMedia {
        name: string;
        type: UserKycMediaType;
        url: string;
    }

    interface UserKycKeyValue {
        key: string;
        value: string;
    }

    interface ApplyFullKycForm {
        idType: UserKycIDType;
        idNumber: string;
        realName: PkgTypesRealName;
        gender: PkgTypesGender;
        birthday: string;
        medias?: UserKycMedia[];
        more?: UserKycKeyValue[];
    }

    interface ApplyBasicKycForm {
        realName: PkgTypesRealName;
        gender: PkgTypesGender;
        birthday: string;
    }

    interface CommonKycreviewIssue {
        message: string;
        fields: Record<string,string>;
    }

    interface ResKyc {
        idType?: UserKycIDType;
        level?: UserKycLevel;
        idNumber?: string;
        realName?: PkgTypesRealName;
        gender?: PkgTypesGender;
        birthday?: string;
        medias?: UserKycMedia[];
        more?: UserKycKeyValue[];
        status?: CommonKycreviewStatus;
        issue?: CommonKycreviewIssue;
    }

    type PkgTypesGender = 'un_know' | 'male' | 'female';

    const PkgTypesGender_DICT_KEY: string;

    type PkgTypesCountryCode = '86' | '63';

    const PkgTypesCountryCode_DICT_KEY: string;

    type UserKycLevel = 0 | 1 | 9;

    const UserKycLevel_DICT_KEY: string;

    type CoreAccountStatus = 'enabled' | 'disabled';

    const CoreAccountStatus_DICT_KEY: string;

    type UserKycIDType = 'idCard' | 'passport' | 'drivingLicense';

    const UserKycIDType_DICT_KEY: string;

    type UserKycMediaType = 'video' | 'image';

    const UserKycMediaType_DICT_KEY: string;

    type CommonKycreviewStatus = 'pending' | 'approved' | 'rejected' | 'final_rejected';

    const CommonKycreviewStatus_DICT_KEY: string;

}
