
declare namespace ActivitiesLuckywheel {

    interface Prize {
        name: string;
        amount: string;
        probability: string;
    }

    interface UserWheel {
        name: string;
        requiredRecharge: string;
        requiredWager: string;
        icon: string;
        prizes: Prize[];
        availableTimes: number;
    }

    interface UserState {
        wheels: UserWheel[];
    }

    interface SpinResult {
        wheels: UserWheel[];
        bonusAmount: string;
    }

    interface SpinCommand {
        userId: string;
        wheelName: string;
    }

}
