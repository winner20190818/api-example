
declare namespace CommonPayment {

    interface ChannelConfig {
        enabled: boolean;
        limitMin: number;
        limitMax: number;
        priority: number;
    }

    interface ProviderEntity {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        name: string;
        healthy: boolean;
        availableBalance: number;
        balance: number;
        enabled: boolean;
        rechargeConfigs: Record<string,ChannelConfig>;
        withdrawConfigs: Record<string,ChannelConfig>;
    }

    interface RechargeChannelConfig {
        enabled: boolean;
        limitMin: number;
        limitMax: number;
        priority: number;
        method: RechargeMethod;
    }

    interface ChannelEntity {
        id: string;
        createdAt: number;
        updatedAt: number;
        version: number;
        name: string;
        currency: PkgTypesCurrency;
        icon: string;
        displayName: string;
        rechargeConfig: RechargeChannelConfig;
        withdrawConfig: ChannelConfig;
    }

    interface RechargeLink {
        url: string;
        orderID: string;
    }

    interface ExchangeRechargeResult {
        amount: number;
    }

    type PkgTypesCurrency = 'USD' | 'EUR' | 'JPY' | 'GBP' | 'CNY' | 'INR' | 'BRL' | 'RUB' | 'CAD' | 'AUD' | 'ZAR' | 'MXN' | 'SGD' | 'NZD' | 'CHF' | 'HKD' | 'PHP';

    const PkgTypesCurrency_DICT_KEY: string;

    type RechargeMethod = 'redirect' | 'exchange';

    const RechargeMethod_DICT_KEY: string;

}
