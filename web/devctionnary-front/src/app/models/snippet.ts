import { User } from "./user";

export class Snippet {
    id: string;
    title: string;
    content: string;
    creationDate: Date;
    updateDate: Date;
    description: string;
    user: User;
    
}
