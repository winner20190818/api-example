
declare namespace CommonOtp {

    interface SendOtpRsp {
        id: string;
        codeLength: number;
        resendAt: number;
    }

}
