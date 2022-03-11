import { OrderRow } from "./OrderRow";

export class Order{
    id: number;
    companyId: number;
    created: Date;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    orderRows: OrderRow[];

    constructor(id: number,
                companyId: number,
                created: Date,
                createdBy: string,
                paymentMethod: string,
                totalPrice: number,
                orderRows: OrderRow[]
                ) {
                    this.id = id;
                    this.companyId = companyId;
                    this.created = created;
                    this.createdBy = createdBy;
                    this.paymentMethod = paymentMethod;
                    this.totalPrice = totalPrice;
                    this.orderRows = orderRows;
                }
}