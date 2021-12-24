export class Card
{
   
    constructor(title: string,
        developer: string, 
        publisher: string, 
        released: Date, 
        genre: string, 
        gameplay: string,
        platforms: string, 
        requirements: string) {        

        this.Title = new Title(title);
        this.Developer = new Title(developer);
        this.Publisher = new Title(publisher);
        this.Released = released;
        this.Genre = new Title(genre);
        this.Gameplay = new Title(gameplay);
        this.Platforms = new Title(platforms);
        this.Requirements = new Title(requirements);

        this.validation = {};
    }

    public Title : Title;
    public Developer : Title;
    public Publisher : Title;
    public Released : Date;
    public Genre : Title;
    public Gameplay : Title;
    public Platforms : Title;
    public Requirements : Title;
    public validation: any;
    public Photo: any;
}

export class Title{

    constructor(text : string) {
        this.Text = text;
    }

    public Text : string;
}

export class Photo{

    constructor(text : string, imageURI: string, base64EncodedImage: string) {
        this.Title = new Title(text);
        this.GalleryId = "0";
        this.ImageURI = new URL(imageURI);
        this.Base64EncodedImage = base64EncodedImage;
    }

    public GalleryId : string;
    public Title : Title;
    public ImageURI : URL;
    public Base64EncodedImage : string;
}

export class URL
{
    constructor(path: string) {
        this.Path = path;
    }

    public Path: string;
}
