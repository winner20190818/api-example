
declare namespace CommonMfa {

    interface GoogleUrlForm {
        redirectUrl?: string;
    }

    interface GoogleLoginForm {
        oauthState: string;
        code: string;
        scope: string;
        authUser: string;
        prompt: string;
    }

}
