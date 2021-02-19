import {User} from "./user";
import {Snippet} from "./snippet";

export class Vote {
    id: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    voter: User;
    snippet: Snippet;
}
