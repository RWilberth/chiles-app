import { Image } from './image';

export interface Product {
    id: number;
    name: string;
    shortDescription: string;
    largeDescription?: string;
    images: Array<Image>;
    createdAt: Date;
    updatedAt?: Date;
}

