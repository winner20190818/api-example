
import request from "@/core/request";


// 取得支付提供者列表
export function getPaymentProviders() {
    return request<CommonPayment.ProviderEntity[]>({ url: '/payment/providers', method: 'GET' })
}

// 取得渠道列表
export function getChannels() {
    return request<CommonPayment.ChannelEntity[]>({ url: '/payment/channels', method: 'GET' })
}

// 取得可用增值通道
export function getAvailableRechargeChannels() {
    return request<InternalPayment.AvailableRechargeChannel[]>({ url: '/recharge/channels', method: 'GET' })
}

// 取得提現通道
export function getWithdrawChannels() {
    return request<InternalPayment.AvailableWithdrawChannel[]>({ url: '/withdraw/channels', method: 'GET' })
}

// 提現
export function withdraw(data: InternalPayment.WithdrawForm) {
    return request<string>({ url: '/withdraw', method: 'POST', data })
}

// 同步充值订单状态
export function getRechargeOrderStatus(pathVariables: { orderID: string }) {
    return request<CoreRecharge.Status>({ url: '/recharge-order/{orderID}/status', method: 'GET', pathVariables })
}

// 請求增值鏈接
export function requestRechargeLink(data: InternalPayment.CreateRechargeLinkForm) {
    return request<CommonPayment.RechargeLink>({ url: '/recharge/link', method: 'POST', data })
}

// 兌換增值
export function exchangeRecharge(data: InternalPayment.ExchangeRechargeForm) {
    return request<CommonPayment.ExchangeRechargeResult>({ url: '/recharge/exchange', method: 'POST', data })
}

