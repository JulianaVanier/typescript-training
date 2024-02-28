//Classes
// class Car {
//     make: string
//     year: number
//     color: string
//     constructor(make: string, year: number, color: string) {
//         this.make = make
//         this.year = year
//         this.color = color
//     }
// }

import { Review } from "./interface"

export default class MainProperty {
    src: string
    title: string
    reviews: Review[]
    constructor(src: string, title: string, reviews: Review[]){
        this.src = src
        this.reviews = reviews
        this.title = title
    }
}