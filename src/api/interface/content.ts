
import request from "@/core/request";


// 取得網站配置
export function getInitializeData(params: InternalContent.GetInitializeDataRequest) {
    return request<InternalContent.InitializeData>({ url: '/initialize-data', method: 'GET', ignoreAuth: true, params })
}

// 進入遊戲
export function enterGame(pathVariables: { name: string }, params: InternalContent.EnterGameQuery) {
    return request<string>({ url: '/game/{name}/link', method: 'GET', params, pathVariables })
}

// 取得遊戲列表
export function getGames(params: InternalContent.CursorQuery) {
    return request<InternalContent.CursorPageData>({ url: '/games', method: 'GET', ignoreAuth: true, params })
}

// 取得遊戲品牌列表
export function getGameBrands() {
    return request<InternalContent.BrandDTO[]>({ url: '/game-brands', method: 'GET', ignoreAuth: true })
}

// 取得收藏遊戲列表
export function getFavoriteGames() {
    return request<InternalContent.GameItemDTO[]>({ url: '/games/favorite', method: 'GET' })
}

// 收藏遊戲
export function favoriteGame(pathVariables: { name: string }) {
    return request({ url: '/game/{name}/favorite', method: 'POST', pathVariables })
}

// 取消收藏遊戲
export function unFavoriteGame(pathVariables: { name: string }) {
    return request({ url: '/game/{name}/favorite', method: 'DELETE', pathVariables })
}

