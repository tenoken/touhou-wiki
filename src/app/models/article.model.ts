export class Article{

    constructor(title: string, intro: string, category : string) {        
        this.Title = new Title(title);
        this.Intro = new Intro(intro) ;
        this.Category = category;
        debugger;
        this.AuthorId = "0";
        this.Sections = [];
        // this._cardId = 0;
        // this._gallerryId = 0;
        this.CreateDate = new Date();
        this.validation = {};
    }
    
    // private _title : string;
    // private _intro : string;
    // private _authorId : string;
    // private _cardId : number;
    // private _gallerryId : number;
    //private _sections : Array<any>;
    // private _category : string;
    // private _createDate : Date;
    // private _validation : any;


    public AuthorId : string;
    public CardId : any;
    public GalleryId : any;
    public Title : Title;
    public Intro : Intro;
    public CreateDate : any;
    public validation : any;
    public Sections : Section[];
    public Category : any;

    // public get Title() : string {
    //     return this._title;
    // }

    // public set Title(value : string) {
    //     this._title = value;
    // }    

    // public get Intro() : string {
    //     return this._intro;
    // }

    // public set Intro(value : string) {
    //     this._intro = value;
    // } 

    // public get Category() : number {
    //     return this._category;
    // }

    // public set Category(value : number) {
    //     this._category = value;
    // } 

    // public get CardId() : number {
    //     return this._cardId;
    // }

    // public set CardId(value : number) {
    //     this._cardId = value;
    // } 
}

export class Title{

    /**
     *
     */
    constructor(text : string) {
        this.Text = text;
    }

    public Text : string;
}

class Text{

    constructor(text : string) {
        this.TextContent = text;
    }

    public TextContent : string;
}

class Intro{

    constructor(text : string) {
        this.Text = text;
    }

    public Text : string;
}

export class Section{
    constructor(title : string, text : string) {
        this.Title = new Title(title);
        this.Text = new Text(text);
    }

    public Title : Title;
    public Text : Text;
}