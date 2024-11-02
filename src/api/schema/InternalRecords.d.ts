
declare namespace InternalRecords {

    interface BetRecord {
        id: string;
        timestamp: number;
        betAmount: string;
        betContent: string;
        betOutcome: string;
        settleAmount: string;
        status: CoreBettingStatus;
        category: CoreBettingGameCategory;
        gameName: string;
        resettleTimes: number;
        updateTimes: number;
    }

    interface BetRecordQuery {
        limit: number;
        startCursor?: string;
        status?: CoreBettingStatus;
        startTime?: number;
        endTime?: number;
    }

    interface BetRecordPage {
        list: BetRecord[];
        query: BetRecordQuery;
        nextCursor?: string;
        betAmount?: string;
        settleAmount?: string;
    }

    interface RechargeRecord {
        timestamp: number;
        id: string;
        amount: string;
        status: CoreRechargeStatus;
        channelName: string;
    }

    interface RechargeQuery {
        limit: number;
        startCursor?: string;
        status?: CoreRechargeStatus;
        startTime?: number;
        endTime?: number;
    }

    interface RechargePage {
        list: RechargeRecord[];
        query: RechargeQuery;
        nextCursor?: string;
    }

    interface BonusRecord {
        timestamp: number;
        activityName: string;
        amount: string;
        id: string;
    }

    interface BonusQuery {
        limit: number;
        startCursor?: string;
        activityName?: string;
        startTime?: number;
        endTime?: number;
    }

    interface BonusRecordPage {
        list: BonusRecord[];
        query: BonusQuery;
        nextCursor?: string;
    }

    interface WithdrawRecord {
        timestamp: number;
        amount: string;
        status: CoreWithdrawStatus;
        channelName: string;
        id: string;
    }

    interface WithdrawQuery {
        limit: number;
        startCursor?: string;
        status?: CoreWithdrawStatus;
        startTime?: number;
        endTime?: number;
    }

    interface WithdrawRecordPage {
        list: WithdrawRecord[];
        query: WithdrawQuery;
        nextCursor?: string;
    }

    interface BalanceRecord {
        id: string;
        timestamp: number;
        action: UserBalanceAction;
        amount: string;
        balance: string;
    }

    interface BalanceQuery {
        limit: number;
        startCursor?: string;
        action?: UserBalanceAction;
        startTime?: number;
        endTime?: number;
    }

    interface BalanceRecordPage {
        list: BalanceRecord[];
        query: BalanceQuery;
        nextCursor?: string;
    }

    type CoreBettingStatus = 'pending' | 'canceled' | 'completed';

    const CoreBettingStatus_DICT_KEY: string;

    type CoreBettingGameCategory = 'slot' | 'live' | 'sport' | 'chess' | 'fish';

    const CoreBettingGameCategory_DICT_KEY: string;

    type CoreRechargeStatus = 'pending' | 'completed' | 'canceled';

    const CoreRechargeStatus_DICT_KEY: string;

    type CoreWithdrawStatus = 'pending' | 'paying' | 'completed' | 'canceled' | 'rejected';

    const CoreWithdrawStatus_DICT_KEY: string;

    type UserBalanceAction = 'recharge' | 'withdraw' | 'cancel_withdraw' | 'bet' | 'change_bet' | 'settle' | 'bonus' | 'commission' | 'adjust';

    const UserBalanceAction_DICT_KEY: string;

}
