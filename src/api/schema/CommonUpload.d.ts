
declare namespace CommonUpload {

    interface Header {
        contentType: string;
        contentLength: number;
    }

    interface Request {
        header: Header;
        uploadUrl: string;
        visitUrl: string;
    }

}
