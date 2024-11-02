
declare namespace ActivitiesRanking {

    interface Item {
        username: string;
        nickname: string;
        anonymous: boolean;
        rank: number;
        totalStake: string;
        bonusPercent: string;
    }

    interface UserState {
        ownRank: number;
        rankList: Item[];
        bonusPoolAmount: string;
        claimableAmount: string;
    }

}
