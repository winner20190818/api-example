
declare namespace InternalContent {

    interface CommonClientcontentCarouselItem {
        imgUrl: string;
        link: string;
        color: string;
    }

    interface GameItemDTO {
        name: string;
        displayName: string;
        icon: string;
        brand: string;
        category: string;
    }

    interface GameSection {
        title: string;
        games: GameItemDTO[];
        icon: string;
        link: string;
    }

    interface CommonClientcontentCategoryItem {
        name: CoreBettingGameCategory;
        icon: string;
        bannerImgUrl: string;
        recommendedBrandNames: string[];
    }

    interface InitializeData {
        carousels: CommonClientcontentCarouselItem[];
        gameSections: GameSection[];
        defaultLocale: TypesLocaleLocale;
        categoryItems: CommonClientcontentCategoryItem[];
        storage: Record<string,string>;
        staticUrlPrefixRules: Record<string,string>;
    }

    interface GetInitializeDataRequest {
        tag: string;
    }

    interface EnterGameQuery {
        size?: CommonGameDisplaySize;
    }

    interface CursorQuery {
        limit: number;
        startCursor?: string;
        brandName?: string;
        keywords?: string;
        category?: CoreBettingGameCategory;
        providerName?: string;
    }

    interface CursorPageData {
        list: GameItemDTO[];
        query: CursorQuery;
        nextCursor?: string;
    }

    interface BrandDTO {
        name: string;
        displayName: string;
        icon: string;
        hot: number;
    }

    type TypesLocaleLocale = '' | 'zh-CN' | 'zh-TW' | 'zh-HK' | 'en-US' | 'en-GB' | 'en-AU' | 'en-CA' | 'en-IN' | 'fr-FR' | 'fr-CA' | 'de-DE' | 'de-CH' | 'es-ES' | 'es-MX' | 'es-US' | 'ja-JP' | 'ko-KR' | 'ru-RU' | 'pt-BR' | 'pt-PT' | 'ar-SA' | 'ar-EG' | 'hi-IN' | 'it-IT' | 'it-CH' | 'nl-NL' | 'nl-BE' | 'pl-PL' | 'vi-VN' | 'th-TH' | 'el-GR' | 'tr-TR' | 'sv-SE' | 'fil-PH';

    const TypesLocaleLocale_DICT_KEY: string;

    type CoreBettingGameCategory = 'slot' | 'live' | 'sport' | 'chess' | 'fish';

    const CoreBettingGameCategory_DICT_KEY: string;

    type CommonGameDisplaySize = 'pc' | 'mobile';

    const CommonGameDisplaySize_DICT_KEY: string;

}
