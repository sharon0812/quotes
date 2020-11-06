export class Quote {

    // likes: number;
    // unlikes: number;
    public showDescription:boolean;
    constructor(
        public quote: string,
        public author: string,
        public submittedBy: string,
        public since: Date) {
        this.showDescription = false;
    }
}

