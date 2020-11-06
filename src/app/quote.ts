export class Quote {
    id: number;
    author: string;
    state: string;
    user: string;
    day: Date;
    likes: number;
    unlikes: number;

    constructor(id: number, author: string, state: string, user: string, day: Date) {
        this.id = id;
        this.author = author;
        this.user = user;
        this.day=day;
        this.state=state;
    }
}

