import { Book } from "./book";
import { BookCategory } from "./book-category";

export class OrderHistoryItem {
    id!: number;
    title!: string;
    category!: BookCategory;
    price!: number;
    quantity!: number;
    
    constructor(item: Book, quantity: number){
        this.title = item.title;
        this.category = item.category;
        this.price = item.price;
        this.quantity = quantity;
    }
}
