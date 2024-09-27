import { Book } from "./book";
import { User } from "./user";

export class Order {
    id!: number; 
    customerId!: User;
    items!: Book[];
    totalQuantity!: number;
    totalPrice!: number;
    dateCreated!: Date;
}
