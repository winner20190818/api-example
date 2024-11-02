
declare namespace InternalPayment {

    interface AvailableRechargeChannel {
        name: string;
        displayName: string;
        icon: string;
        currency: PkgTypesCurrency;
        method: CommonPaymentRechargeMethod;
        limitMin: number;
        limitMax: number;
    }

    interface AvailableWithdrawChannel {
        name: string;
        displayName: string;
        currency: PkgTypesCurrency;
        icon: string;
        limitMin: number;
        limitMax: number;
    }

    interface WithdrawForm {
        amount: string;
        accountID: string;
    }

    interface CreateRechargeLinkForm {
        channelName: string;
        amount: number;
        bonusPlan?: ActivitiesRechargegiftPlanName;
    }

    interface ExchangeRechargeForm {
        channelName: string;
        code: string;
        bonusPlan?: ActivitiesRechargegiftPlanName;
    }

    type PkgTypesCurrency = 'USD' | 'EUR' | 'JPY' | 'GBP' | 'CNY' | 'INR' | 'BRL' | 'RUB' | 'CAD' | 'AUD' | 'ZAR' | 'MXN' | 'SGD' | 'NZD' | 'CHF' | 'HKD' | 'PHP';

    const PkgTypesCurrency_DICT_KEY: string;

    type CommonPaymentRechargeMethod = 'redirect' | 'exchange';

    const CommonPaymentRechargeMethod_DICT_KEY: string;

    type ActivitiesRechargegiftPlanName = 'userFirst' | 'dailyFirst' | 'payday';

    const ActivitiesRechargegiftPlanName_DICT_KEY: string;

}
