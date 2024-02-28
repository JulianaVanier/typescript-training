
import { LoyaltyUser } from "./enums"
import { Country } from "./types";

export  interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface Properties {
    image: string;
    title: string;
    price: number;
    location:{
        firstLine:string;
        city: string;
        code: number;
        country: Country;
    }
    contact: [number, string]; //tuples: allow you to express an array with a fixed number of elements whose types are knwon
    isAvailable: boolean;
}

