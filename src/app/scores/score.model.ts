export class Score {
    id: string;
    title: string;
    url: string;
    img?: string;

    constructor(id: string, title: string, url: string) {
        this.id = id;
        this.title = title;
        this.url = url;
    }
}
