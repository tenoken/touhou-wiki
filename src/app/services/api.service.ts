import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { User } from '../models/user.model';
import { Card } from '../models/card.model';
import { Gallery } from '../models/gallery.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
 


    // private readonly ARTICLES_URL : string = "https://localhost:44383/api/articles";
    // private readonly ACCOUNT_URL : string = "https://localhost:44383/api/account";//http://localhost:62290/api/articles
    private readonly ARTICLES_URL : string = "http://localhost:62290/api/articles";
    private readonly ACCOUNT_URL : string = "http://localhost:62290/api/account";
    private readonly AUTHORS_URL : string = "http://localhost:62290/api/authors";
    private readonly CARDS_URL : string = "http://localhost:62290/api/cards";
    private readonly GALLERIES_URL : string = "http://localhost:62290/api/galleries";

    private token : string = "";
    /**
     *
     */
    constructor(private http: HttpClient) {
        
    }

    getArticles(){
        this.http.get(this.ARTICLES_URL).subscribe((res) => {
            debugger;
            console.log(res);
        })
    }

    postArticle(article: Article){
        debugger;
        this.http.post(this.ARTICLES_URL, article).subscribe((res) => {
            debugger;
            console.log(res);
        })
    }

    putArticle(article: Article){
        debugger;
        this.http.put(`${this.ARTICLES_URL}/1`, article).subscribe((res) => {
            debugger;
            console.log(res);
        })
    }

    deleteArticle(){
        debugger;
        this.http.delete(`${this.ARTICLES_URL}/1`).subscribe((res) => {
            debugger;
            console.log(res);
        })
    }

    register(user: User){
        debugger;

        this.http.post<any>(`${this.ACCOUNT_URL}/register`, user).subscribe((res) => {
            debugger;
            console.log(res);
            localStorage.setItem('token', res);
            this.login(user);
        })
    }

    public async login(user: User) : Promise<User> {

        let response = user;

        this.http.post<any>(`${this.ACCOUNT_URL}/login`, user).subscribe((res) => {
            debugger;
            console.log(res);
            if (localStorage.getItem('token') != "") {                
                localStorage.setItem('token', res);
            }

            response = res;
        })

        return response;
    }

    public async postAuthor(user: User) : Promise<User> {

        let response = user;

        this.http.post<any>(`${this.AUTHORS_URL}`, user).subscribe((res) => {
            debugger;
            console.log(res);
            // if (localStorage.getItem('token') != "") {                
            //     localStorage.setItem('token', res);
            // }

            response = res;
        })

        return response;
    } 

    postCard(card: Card) {
        this.http.post<any>(`${this.CARDS_URL}`, card).subscribe((res) => {
            debugger;
            console.log(res);
            // if (localStorage.getItem('token') != "") {                
            //     localStorage.setItem('token', res);
            // }
        })
    }

    postGallery(gallery: Gallery) {
        this.http.post<any>(`${this.GALLERIES_URL}`, gallery).subscribe((res) => {
            debugger;
            console.log(res);
            // if (localStorage.getItem('token') != "") {                
            //     localStorage.setItem('token', res);
            // }
        })
    }

}