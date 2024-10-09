export default class Champion {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
        this.image = data.image;
        this.tags = data.tags;
        this.blurb = data.blurb;
    }
}