import { Title } from "./article.model";

export class User{

    /**
     *
     */
    constructor(fname : string, lname : string, userName : string, password : string ,email : string) {
        this.Name = new Name(fname, lname);
        this.UserName = new Title(userName);
        this.Email = new Email(email);
        this.Password = password;
        
        this.validation = {};
        this.CreateDate = new Date();
    }

    public Name : Name;
    public UserName : Title;
    public Password : string;
    public Email : any;
    public CreateDate : Date;
    public Active : any;
    public validation : any;
}

class Name{

    /**
     *
     */
    constructor(firstName : string, lastName : string) {
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    public FirstName : string;
    public LastName : string;
}

class Email{

    /**
     *
     */
    constructor(address : string) {        
        this.Address = address;
    }

    public Address : string;
}