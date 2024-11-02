
import request from "@/core/request";


// 手机otp登錄
export function loginBySmsOtp(data: InternalAuth.LoginBySmsOtpForm) {
    return request<InternalToken.Token>({ url: '/token/sms-otp', method: 'POST', ignoreAuth: true, data })
}

// 邮箱otp登錄
export function loginByEmailOtp(data: InternalAuth.LoginByEmailOtpForm) {
    return request<InternalToken.Token>({ url: '/token/email-otp', method: 'POST', ignoreAuth: true, data })
}

// 手機號與登入密碼登錄
export function loginByPassword(data: InternalAuth.LoginByPassword) {
    return request<InternalToken.Token>({ url: '/token/password', method: 'POST', ignoreAuth: true, data })
}

// 重置登入密碼
export function retrieveLoginPassword(data: InternalAuth.RetrieveLoginPasswordForm) {
    return request({ url: '/login-password/reset', method: 'POST', ignoreAuth: true, data })
}

// 獲取Google登入連結
export function getGoogleLoginLink(params: CommonMfa.GoogleUrlForm) {
    return request<string>({ url: '/oauth/google/url', method: 'GET', ignoreAuth: true, params })
}

// 使用Google回調登錄或註冊
export function loginByGoogleAuth(data: InternalAuth.GoogleLoginForm) {
    return request<InternalToken.Token>({ url: '/token/google', method: 'POST', ignoreAuth: true, data })
}

// 刷新token
export function refreshToken(data: InternalAuth.RefreshTokenForm) {
    return request<InternalToken.Token>({ url: '/token', method: 'PUT', ignoreAuth: true, data })
}

// 快速登入
export function quickLogin(pathVariables: { authCode: string }) {
    return request<InternalToken.Token>({ url: '/oauth/quick-login/{authCode}', method: 'POST', ignoreAuth: true, pathVariables })
}

// 登出
export function logout() {
    return request({ url: '/token', method: 'DELETE' })
}

