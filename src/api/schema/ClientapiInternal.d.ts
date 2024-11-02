
declare namespace ClientapiInternal {

    interface SendEmailOtp {
        email: string;
    }

    interface GetUploadLinkForm {
        reason: CommonUploadReason;
        filename: string;
        fileContentType: CommonUploadContentType;
        contentLength: number;
    }

    type CommonUploadReason = 'avatar' | 'asset' | 'kyc';

    const CommonUploadReason_DICT_KEY: string;

    type CommonUploadContentType = 'image/jpeg' | 'image/png' | 'image/gif' | 'audio/mpeg' | 'audio/wav' | 'video/mp4' | 'video/mpeg' | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    const CommonUploadContentType_DICT_KEY: string;

}
