
import request from "@/core/request";


// 發送邮件驗證碼登录
export function sendEmailOtpLogin(data: ClientapiInternal.SendEmailOtp) {
    return request<CommonOtp.SendOtpRsp>({ url: '/email-otp/login', method: 'POST', ignoreAuth: true, data })
}

// 發送邮件驗證碼绑定账号
export function sendEmailOtpBind(data: ClientapiInternal.SendEmailOtp) {
    return request<CommonOtp.SendOtpRsp>({ url: '/email-otp/bind', method: 'POST', data })
}

// 發送簡訊驗證碼登录
export function sendSmsOtpLogin(data: PkgTypes.PhoneNumber) {
    return request<CommonOtp.SendOtpRsp>({ url: '/sms-otp/login', method: 'POST', ignoreAuth: true, data })
}

// 發送簡訊驗證碼绑定账号
export function sendSmsOtpBind(data: PkgTypes.PhoneNumber) {
    return request<CommonOtp.SendOtpRsp>({ url: '/sms-otp/bind', method: 'POST', data })
}

// 获取上传链接
export function getUploadLink(data: ClientapiInternal.GetUploadLinkForm) {
    return request<CommonUpload.Request>({ url: '/upload-link', method: 'POST', data })
}

