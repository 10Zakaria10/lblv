export interface notificationDto {
    id: string;
    type: string;
    amount: number;
    newBalance: number;
    opened: boolean;
    createdAt: Date;
}