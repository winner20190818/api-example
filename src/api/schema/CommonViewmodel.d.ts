
declare namespace CommonViewmodel {

    interface Account {
        id: string;
        lastUsedAt: number;
        status: CoreAccountStatus;
        account: string;
        channelName: string;
    }

    type CoreAccountStatus = 'enabled' | 'disabled';

    const CoreAccountStatus_DICT_KEY: string;

}
