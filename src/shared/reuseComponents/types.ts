export interface CardDetails {
    image: string;
    place: string;
    title: string;
    rate: string;
    price: number;
    duration: number;
    customWidth?: string
}
export interface Cards {
    id?: number;
    title?: string;
    destination: string;
    rating: number;
    review_count: number;
    short_description: string;
    features?: {
        best_price_guarantee: boolean,
        free_cancellation: boolean
    },
    duration: string;
    original_price: number;
    discount_price?: number;
    images?: string[];
    image?: string;
    customWidth?: string
}
export interface Paginate {
    total_pages: number
}