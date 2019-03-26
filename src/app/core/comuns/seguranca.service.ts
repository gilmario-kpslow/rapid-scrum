import { Injectable } from "@angular/core";

const TOKEN = 'token';

@Injectable({providedIn: 'root'})
export class SegurancaService {

    constructor() {
    }

    private token: string;

    remove() {
        sessionStorage.clear();
    }

    public setToken(token: string): void{
        this.token = token;
    }

    public getToken(): string {
        return this.token;
    }

    public isLogado(): boolean {
        return this.tokenIsValido();
    }

    public tokenIsValido(): boolean {
        return sessionStorage.length > 0;
    }
}