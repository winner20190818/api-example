
import request from "@/core/request";


// 取得投注記錄
export function getBetRecordPage(params: InternalRecords.BetRecordQuery) {
    return request<InternalRecords.BetRecordPage>({ url: '/bet-records', method: 'GET', params })
}

// 取得增值記錄
export function getRechargeRecords(params: InternalRecords.RechargeQuery) {
    return request<InternalRecords.RechargePage>({ url: '/recharge-records', method: 'GET', params })
}

// 取得贈送記錄
export function getBonusRecords(params: InternalRecords.BonusQuery) {
    return request<InternalRecords.BonusRecordPage>({ url: '/bonus-records', method: 'GET', params })
}

// 取得提現記錄
export function getWithdrawRecords(params: InternalRecords.WithdrawQuery) {
    return request<InternalRecords.WithdrawRecordPage>({ url: '/withdraw-records', method: 'GET', params })
}

// 取得帳變記錄
export function getBalanceRecords(params: InternalRecords.BalanceQuery) {
    return request<InternalRecords.BalanceRecordPage>({ url: '/balance-records', method: 'GET', params })
}

