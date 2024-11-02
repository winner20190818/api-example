
import request from "@/core/request";


// 取得VIP禮物狀態
export function getVipGiftState() {
    return request<ActivitiesVipgift.UserState>({ url: '/activity/vip-gift', method: 'GET' })
}

// 取得vip配置
export function getVipConfig() {
    return request<InternalActivities.VipConfigDTO[]>({ url: '/activity/vip/config', method: 'GET', ignoreAuth: true })
}

// 領取VIP禮物
export function claimVipGift() {
    return request({ url: '/activity/vip-gift', method: 'POST' })
}

// 取得可用的充值活動
export function getRechargeActivities() {
    return request<InternalActivities.PlanDTO[]>({ url: '/activity/recharge-gifts', method: 'GET' })
}

// 取得生日禮物狀態
export function getBirthdayGiftState() {
    return request<ActivitiesBirthdaygift.UserState>({ url: '/activity/birthday-gift', method: 'GET' })
}

// 領取生日禮物
export function claimBirthdayGift() {
    return request({ url: '/activity/birthday-gift', method: 'POST' })
}

// 取得幸运轮盘狀態
export function getLuckyWheelState() {
    return request<ActivitiesLuckywheel.UserState>({ url: '/activity/lucky-wheel', method: 'GET' })
}

// 幸运轮盘抽奖
export function spinLuckyWheel(data: ActivitiesLuckywheel.SpinCommand) {
    return request<ActivitiesLuckywheel.SpinResult>({ url: '/activity/lucky-wheel', method: 'POST', data })
}

// 取得返水配置
export function getRebateConfig() {
    return request<ActivitiesRebate.Config>({ url: '/activity/rebate/config', method: 'GET' })
}

// 取得返水狀態
export function getRebateState() {
    return request<ActivitiesRebate.UserState>({ url: '/activity/rebate', method: 'GET' })
}

// 領取返水
export function claimRebate() {
    return request({ url: '/activity/rebate', method: 'POST' })
}

// 取得时间段礼金狀態
export function getTimeRangeGiftState() {
    return request<ActivitiesTimerangegift.UserState>({ url: '/activity/time-range-gift', method: 'GET' })
}

// 領取时间段礼金
export function claimTimeRangeGift() {
    return request({ url: '/activity/time-range-gift', method: 'POST' })
}

// 获取代理分润状态
export function getAgentState() {
    return request<ActivitiesAgent.UserState>({ url: '/activity/agent', method: 'GET' })
}

// 領取代理分润
export function claimAgentProfit() {
    return request({ url: '/activity/agent', method: 'POST' })
}

// 获取排行榜奖励状态
export function getRankingState() {
    return request<ActivitiesRanking.UserState>({ url: '/activity/ranking', method: 'GET' })
}

// 领取排行榜奖励
export function claimRankingGift() {
    return request({ url: '/activity/ranking', method: 'POST' })
}

