import { User } from "./user";

export class Snippet {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    description: string;
    //author: User;
    author: string;
}
