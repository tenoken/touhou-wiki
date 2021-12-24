import { Photo } from "./card.model";

export class Gallery{
      
    constructor() {       
        this.validation = {};
        this.Photos = [];
    }

    public validation : any;
    public Photos: Photo[];

    AddPhoto(photo: Photo) {
       this.Photos.push(photo);
    }
}