export interface GamesListDTO {
    count: number;
    next: string;
    previous?: null;
    results?: (Game)[] | null;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
    seo_h1: string;
    noindex: boolean;
    nofollow: boolean;
    description: string;
    filters: Filters;
    nofollow_collections?: (string)[] | null;
}
export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings?: (RatingsEntity)[] | null;
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: AddedByStatus;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game?: null;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms?: (PlatformsEntity)[] | null;
    parent_platforms?: (ParentPlatformsEntity)[] | null;
    genres?: (GenresEntity)[] | null;
    stores?: (StoresEntity)[] | null;
    clip?: null;
    tags?: (TagsEntity)[] | null;
    esrb_rating: PlatformOrEsrbRating;
    short_screenshots?: (ShortScreenshotsEntity)[] | null;
}
export interface RatingsEntity {
    id: number;
    title: string;
    count: number;
    percent: number;
}
export interface AddedByStatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
}
export interface PlatformsEntity {
    platform: Platform;
    released_at?: string | null;
    requirements_en?: RequirementsEn | null;
    requirements_ru?: RequirementsEnOrRequirementsRu | null;
}
export interface Platform {
    id: number;
    name: string;
    slug: string;
    image?: null;
    year_end?: null;
    year_start?: number | null;
    games_count: number;
    image_background: string;
}
export interface RequirementsEn {
    minimum: string;
    recommended?: string | null;
}
export interface RequirementsEnOrRequirementsRu {
    minimum: string;
    recommended: string;
}
export interface ParentPlatformsEntity {
    platform: PlatformOrEsrbRating;
}
export interface PlatformOrEsrbRating {
    id: number;
    name: string;
    slug: string;
}
export interface GenresEntity {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}
export interface StoresEntity {
    id: number;
    store: Store;
}
export interface Store {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
}
export interface TagsEntity {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
}
export interface ShortScreenshotsEntity {
    id: number;
    image: string;
}
export interface Filters {
    years?: (YearsEntity)[] | null;
}
export interface YearsEntity {
    from: number;
    to: number;
    filter: string;
    decade: number;
    years?: (YearsEntity1)[] | null;
    nofollow: boolean;
    count: number;
}
export interface YearsEntity1 {
    year: number;
    count: number;
    nofollow: boolean;
}


export interface columns {
    name: string;
    sort: string;
  }
  