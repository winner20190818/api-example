
import request from "@/core/request";


// 取得玩家信息
export function getProfile() {
    return request<InternalProfile.Profile>({ url: '/profile', method: 'GET' })
}

// 设置基礎資料
export function setProfile(data: InternalProfile.SetProfile) {
    return request({ url: '/profile', method: 'PATCH', data })
}

// 设置用户名
export function setUsername(data: InternalProfile.SetUsername) {
    return request({ url: '/username', method: 'PUT', data })
}

// 设置手机号
export function setPhoneNumber(data: InternalProfile.BindPhoneNumberForm) {
    return request({ url: '/phone-number', method: 'POST', data })
}

// 设置邮箱
export function setEmail(data: InternalProfile.EmailUpdateDTO) {
    return request({ url: '/email', method: 'POST', data })
}

// 設置登入密碼
export function setLoginPassword(data: InternalProfile.SetPwdCommandDTO) {
    return request({ url: '/login-password', method: 'POST', data })
}

// 修改登入密碼
export function updateLoginPassword(data: InternalProfile.UpdatePwdCommandDTO) {
    return request({ url: '/login-password', method: 'PUT', data })
}

// 取得提現帳戶
export function getWithdrawAccounts() {
    return request<CommonViewmodel.Account[]>({ url: '/account', method: 'GET' })
}

// 新增提現帳戶
export function createWithdrawAccount(data: InternalProfile.CommandAccountForm) {
    return request<string>({ url: '/account', method: 'POST', data })
}

// 刪除提現帳戶
export function deleteWithdrawAccount(pathVariables: { id: string }) {
    return request({ url: '/account/{id}', method: 'DELETE', pathVariables })
}

// 申請高級KYC
export function applyFullKyc(data: InternalProfile.ApplyFullKycForm) {
    return request({ url: '/full-kyc', method: 'POST', data })
}

// 申請普通KYC
export function applyBasicKyc(data: InternalProfile.ApplyBasicKycForm) {
    return request({ url: '/basic-kyc', method: 'POST', data })
}

// 取得KYC
export function getKyc() {
    return request<InternalProfile.ResKyc>({ url: '/kyc', method: 'GET' })
}

// 使用Google回調綁定
export function oauthBindGoogle(data: CommonMfa.GoogleLoginForm) {
    return request({ url: '/oauth/google', method: 'POST', data })
}

// 解除綁定Google登錄
export function oauthUnbindGoogle() {
    return request({ url: '/oauth/google', method: 'DELETE' })
}

