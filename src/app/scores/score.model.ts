export class Score {
    id: string;
    title: string;
    composer: string;
    img: string;

    constructor(id: string, title: string, composer: string) {
        this.id = id;
        this.title = title;
        this.composer = composer;
    }
}
