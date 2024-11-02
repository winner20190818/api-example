
declare namespace InternalActivities {

    interface VipConfigDTO {
        levelScore: number;
        vipBonusAmount: string;
        vipRebateRate: string;
        requiredRecharge: string;
    }

    interface ActivitiesRechargegiftRule {
        minAmount: number;
        bonusMultiplier: number;
        maxBonus: number;
        wagerReqMultiplier?: number;
    }

    interface PlanDTO {
        planName: ActivitiesRechargegiftPlanName;
        rule: ActivitiesRechargegiftRule;
        available: boolean;
        icon: string;
    }

    type ActivitiesRechargegiftPlanName = 'userFirst' | 'dailyFirst' | 'payday';

    const ActivitiesRechargegiftPlanName_DICT_KEY: string;

}
