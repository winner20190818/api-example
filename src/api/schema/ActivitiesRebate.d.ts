
declare namespace ActivitiesRebate {

    interface Config {
        vipRebateRate: string[];
    }

    interface UserState {
        claimable: boolean;
        claimableAmount: string;
    }

}
