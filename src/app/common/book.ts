import { BookCategory } from "./book-category";

export class Book {
    id!: number;
    title!: string;
    category!: BookCategory;
    rating!: string;
    price!: number;
    stock!: string;
    quantity!: number;

    constructor() {}
}
