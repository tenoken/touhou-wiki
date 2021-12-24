import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Article, Section } from '../models/article.model';
import { Card, Photo } from '../models/card.model';
import { Gallery } from '../models/gallery.model';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent {
    @ViewChild('fileInput')
    fileInput!: ElementRef<any>;

    @ViewChild('galleryFileInput1')
    galleryFileInput1!: ElementRef<any>;
    @ViewChild('galleryFileInput2')
    galleryFileInput2!: ElementRef<any>;
    @ViewChild('galleryFileInput3')
    galleryFileInput3!: ElementRef<any>;
    @ViewChild('galleryFileInput4')
    galleryFileInput4!: ElementRef<any>;

    title = 'Home';
    test: any;
    sections:  string[] = [];
    sectionIdConuter: number = 0;

    //--
    imageError: string = "";
    isImageSaved: boolean = false;
    cardImageBase64: string = "";
    //--

    isGalleryImageSaved1: boolean = false;
    galleryImageBase641: string = "";

    isGalleryImageSaved2: boolean = false;
    galleryImageBase642: string = "";

    isGalleryImageSaved3: boolean = false;
    galleryImageBase643: string = "";

    isGalleryImageSaved4: boolean = false;
    galleryImageBase644: string = "";
    //--

    public formGroup: FormGroup;
    selectedFile: any;

    constructor(private form: FormBuilder, private apiservice: ApiService, public dialog: MatDialog) {
        this.formGroup = form.group({ 
            title: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(50)])],
            intro: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(50)])],
            sections: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],
            cardTitle: ['',Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],
            cardDeveloper: ['',Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],
            cardPublisher: ['',Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],
            cardReleased: ['',Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],
            cardGenre: ['',Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],            
            cardGameplay: ['',Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],
            cardPlatforms: ['',Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],
            cardRequirements: ['',Validators.compose([Validators.minLength(2), Validators.maxLength(10000)])],
        });
    }

    post(){
        debugger;
        const title = this.formGroup.controls['title'].value;
        const intro = this.formGroup.controls['intro'].value;
        console.log(title);
        console.log(intro);

        //Get card contents

        const cardTitle = this.formGroup.controls['cardTitle'].value;
        const cardDeveloper = this.formGroup.controls['cardDeveloper'].value;
        const cardPublisher = this.formGroup.controls['cardPublisher'].value;
        const cardReleased = this.formGroup.controls['cardReleased'].value;
        const cardGenre = this.formGroup.controls['cardGenre'].value;
        const cardGameplay = this.formGroup.controls['cardGameplay'].value;
        const cardPlatforms = this.formGroup.controls['cardPlatforms'].value;
        const cardRequirements = this.formGroup.controls['cardRequirements'].value;

        // It Takes the image file in base64 encode
        var base64encodedImage = this.cardImageBase64;
        var photo = new Photo("default","default", base64encodedImage);

        var card = new Card(cardTitle, cardDeveloper, cardPublisher, new Date(), cardGenre, cardGameplay, cardPlatforms, cardRequirements);
        card.Photo = photo;

        //Gallery
        var gallery = new Gallery();

        if (this.isGalleryImageSaved1) {
            let photo = new Photo("default","default", this.galleryImageBase641);
            gallery.AddPhoto(photo);
        }

        if (this.isGalleryImageSaved2) {
            let photo = new Photo("default","default", this.galleryImageBase642);
            gallery.AddPhoto(photo);
        }

        if (this.isGalleryImageSaved3) {
            let photo = new Photo("default","default", this.galleryImageBase643);
            gallery.AddPhoto(photo);
        }

        if (this.isGalleryImageSaved4) {
            let photo = new Photo("default","default", this.galleryImageBase644);
            gallery.AddPhoto(photo);
        }
        debugger;
        this.apiservice.postGallery(gallery);

        return;

        this.apiservice.postCard(card);

        var article = new Article(title,intro,"Games");//TODO: CRIAR UM ENUM
        console.log('Teste');
        console.log(article.Title);

        for (let index = 1; index <= this.sectionIdConuter; index++) {
            const text = this.formGroup.controls["text" + index].value;
            const title = this.formGroup.controls["title" + index].value;

            let section = new Section(title, text);
            article.Sections.push(section);
        }

        //this.apiservice.postArticle(article);
    }

    get(){
        debugger;
        var articles = this.apiservice.getArticles();
        console.log(articles);
    }

    put(){
        const title = this.formGroup.controls['title'].value;
        const text = this.formGroup.controls['text'].value;
        var article = new Article(title,text,"News");
        this.apiservice.putArticle(article);
    }

    delete(){
        const title = this.formGroup.controls['title'].value;
        const text = this.formGroup.controls['text'].value;
        var article = new Article(title,text,"News");
        this.apiservice.deleteArticle();
    }

    register(){
        debugger;
        var user = new User("Nelsin","da Silva","nelsinZica","Beterrab@123","nelsinpegador@yahoo.com");
        this.apiservice.register(user);
    }

    login(){
        debugger;
        var user = new User("Nelsin","da Silva","nelsinZica","Beterrab@123","nelsinpegador@yahoo.com");
        this.apiservice.login(user).then((res) => { 
            if (res != null) {
                //this.dialog.open(DialogElementsExampleDialog);
            }
        });
    }

    createAuthor(){
        debugger;
        var user = new User("Nelsin","da Silva","nelsinZica","Beterrab@123","nelsinpegador@yahoo.com");
        this.apiservice.postAuthor(user);
    }

    clear(){
        this.formGroup.reset();
    }

    addSection(){

        let section = "Just a title";
        this.sections.push(section);
        this.sectionIdConuter++;

        
        this.formGroup.setControl("title" + this.sectionIdConuter.toString(), new FormControl());
        this.formGroup.setControl("text" + this.sectionIdConuter.toString(), new FormControl());
        this.formGroup.controls["title" + this.sectionIdConuter.toString()].setValidators([Validators.minLength(2), Validators.maxLength(50)]);
        this.formGroup.controls["text" + this.sectionIdConuter.toString()].setValidators([Validators.minLength(2), Validators.maxLength(10000)]);

        debugger;
        // this.formGroup.reset();
    }

    fileChangeEvent(fileInput: any) {
        this.imageError = "";
        this.selectedFile = fileInput.target.files[0]
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';

                return false;
            }

            // if (!this.includes(allowed_types, fileInput.target.files[0].type)) {
            //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
            //     return false;
            // }
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = (rs: any) => {
                    const img_height = 500;
                    const img_width = 500;

                    console.log(img_height, img_width);


                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                            max_height +
                            '*' +
                            max_width +
                            'px';
                        return false;
                    } else {
                        const imgBase64Path = e.target.result;
                        this.cardImageBase64 = imgBase64Path;
                        this.isImageSaved = true;
                        // this.previewImagePath = imgBase64Path;
                    }

                    return;
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }

        return;
    }

    onRemoveFile(event: any) {
        // Get your files
        debugger;
        const files: FileList = event.target.files;
      
        // Clear the input
        event.target.value = null;
        this.removeImage();
      }

    removeImage() {
        debugger;

        console.log(this.fileInput.nativeElement.files);
        this.fileInput.nativeElement.value = "";
        console.log(this.fileInput.nativeElement.files);

        this.cardImageBase64 = "";
        this.isImageSaved = false;
    }

    galleryFileChangeEvent(fileInput: any) {
debugger;
        this.imageError = "";
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 20971520;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 15200;
            const max_width = 25600;

            if (fileInput.target.files[0].size > max_size) {
                this.imageError =
                    'Maximum size allowed is ' + max_size / 1000 + 'Mb';

                return false;
            }

            // if (!this.includes(allowed_types, fileInput.target.files[0].type)) {
            //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
            //     return false;
            // }
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const image = new Image();
                image.src = e.target.result;
                image.onload = (rs: any) => {
                    const img_height = 500;
                    const img_width = 500;

                    console.log(img_height, img_width);


                    if (img_height > max_height && img_width > max_width) {
                        this.imageError =
                            'Maximum dimentions allowed ' +
                            max_height +
                            '*' +
                            max_width +
                            'px';
                        return false;
                    } else {


                        // const imgBase64Path = e.target.result;
                        // this.galleryImageBase641 = imgBase64Path;
                        // this.isGalleryImageSaved1 = true;
                        // this.previewImagePath = imgBase64Path;
                        debugger;
                        var id = fileInput.target.id;

                        switch(id){
                            case "photo1":
                                const imgBase64Path1 = e.target.result;
                                this.galleryImageBase641 = imgBase64Path1;
                                this.isGalleryImageSaved1 = true;
                                break;
                            case "photo2":
                                const imgBase64Path2 = e.target.result;
                                this.galleryImageBase642 = imgBase64Path2;
                                this.isGalleryImageSaved2 = true;
                                break;
                            case "photo3":
                                const imgBase64Path3 = e.target.result;
                                this.galleryImageBase643 = imgBase64Path3;
                                this.isGalleryImageSaved3 = true;
                                break;
                            case "photo4":
                                const imgBase64Path4 = e.target.result;
                                this.galleryImageBase644 = imgBase64Path4;
                                this.isGalleryImageSaved4 = true;
                                break;
                            default:
                                return;
                        }
                    }

                    return;
                };
            };

            reader.readAsDataURL(fileInput.target.files[0]);
        }

        return;
    }

    removeGalleryImage(event: any)
    {
        debugger;
        var id = event.currentTarget.id;

        switch(id){
            case "photo1":
                this.galleryFileInput1.nativeElement.value = "";
                this.galleryImageBase641 = "";
                this.isGalleryImageSaved1 = false;
                break;
            case "photo2":
                this.galleryFileInput2.nativeElement.value = "";
                this.galleryImageBase642 = "";
                this.isGalleryImageSaved2 = false;
                break;
            case "photo3":
                this.galleryFileInput3.nativeElement.value = "";
                this.galleryImageBase643 = "";
                this.isGalleryImageSaved3 = false;
                break;
            case "photo4":
                this.galleryFileInput4.nativeElement.value = "";
                this.galleryImageBase644 = "";
                this.isGalleryImageSaved4 = false;
                break;
            default:
                return;
        }
        
    }

    submit(){
        
    }
    
}

// @Component({
//     selector: 'dialog-elements-example-dialog',
//     templateUrl: 'dialog-elements-example-dialog.html',
//   })
//   export class DialogElementsExampleDialog {}

//   <h1 mat-dialog-title>Dialog with elements</h1>
// <div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
// <div mat-dialog-actions>
//   <button mat-button mat-dialog-close>Close</button>
// </div>