export interface FoodResponse {
    type: string;
    menuItems: MenuItem[];
    offset: number;
    number: number;
    totalMenuItems: number;
    processingTimeMs: number;
    expires: number;
}

export interface MenuItem {
    id: number;
    title: string;
    restaurantChain: string;
    servingSize: null;
    readableServingSize: null;
    image: string;
    imageType: string;
}
