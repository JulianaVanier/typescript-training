const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer') as HTMLAreaElement
const details = document.querySelector('.details') 


//Modules
import { showReviewTotal, populateUser } from "./utils" //multiples exports
import { Permissions, LoyaltyUser } from "./enums"
import { Price, Country } from "./types"
import { Review } from "./interface"
import { Properties } from "./interface"
import MainProperty from "./classes" // export default

let isOpen: boolean

const GOLD_USER = 'gold-user'
const SILVER_USER = 'silver-user'
const BRONZE_USER = 'bronze-user'

//using interface
const reviews: Review[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021',
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021',
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',   
    },
]

//first option (without using any) | when we have 2 differents kind of object
// const reviews: ({
//     name: string,
//     stars: number,
//     loyaltyUser: LoyaltyUser,
//     date: string,
// } | 
// {
//     name: string,
//     stars: number,
//     loyaltyUser: LoyaltyUser,
//     date: string,
//     description: string,
// }
// )[] = [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: LoyaltyUser.GOLD_USER,
//         date: '01-04-2021',
//     },
//     {
//         name: 'Andrzej',
//         stars: 3,
//         loyaltyUser: LoyaltyUser.BRONZE_USER,
//         date: '28-03-2021',
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: LoyaltyUser.SILVER_USER,
//         date: '27-03-2021',   
//         description: 'Great hosts, location was a bit further than said,  
//     },
// ]


//second option (exemplo any)
// const reviews : any[]= [
//     {
//         name: 'Sheia',
//         stars: 5,
//         loyaltyUser: LoyaltyUser.GOLD_USER,
//         date: '01-04-2021'
//     },
//     {
//         name: 'Andrzej',
//         stars: 3,
//         loyaltyUser: LoyaltyUser.BRONZE_USER,
//         date: '28-03-2021'
//     },
//     {
//         name: 'Omar',
//         stars: 4,
//         loyaltyUser: LoyaltyUser.SILVER_USER,
//         date: '27-03-2021',
//         description: 'Great hosts, location was a bit further than said',
//     },
// ]

// const you: {
//     firstName: string,
//     lastName: string,
//     isReturning: boolean,
//     age: number,
//     stayedAt: string[],
// } = {
//     firstName: 'Bobby',
//     lastName: 'Marley',
//     isReturning: true,
//     age: 23,
//     stayedAt:['florida-home', 'oman-flat', 'tokyo-bungalow']
// }

const ADMIN = 'admin'
const READ_ONLY = 'ready-only'


const you = {
    firstName: 'Bobby',
    lastName: 'Marley',
    permission: Permissions.ADMIN,
    isReturning: true,
    age: 23,
    stayedAt:['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const properties: Properties[] = [{
    image: 'images/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location:{
        firstLine:'schack 37',
        city: 'Bogota',
        code: 45683,
        country: 'Colombia',
    },
    contact: [+1123495082908,'email@email.com'],
    isAvailable: true,
},
{
    image: 'images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 34,
    location:{
        firstLine:'no 23',
        city: 'Gdansk',
        code: 68623,
        country: 'Poland',
    },
    contact: [+1123495082908,'garydavi@email.com'],
    isAvailable: false,
},
{
    image: 'images/london-property.jpg',
    title: 'London Flat',
    price: 23,
    location:{
        firstLine:'flat 15',
        city: 'London',
        code: 59786,
        country: 'United Kingdom',
    },
    contact: [+1123495082908,'andyLuger@aol.com'],
    isAvailable: true,
}]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

let authorityStatus : any

function showDetails(authorityStatus: any, element: HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}



//Add properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')   
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('image')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer?.appendChild(card)
}

let currentLocation: [string, string, number] = ['London', '11:35', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'



let yourMainProperty = new MainProperty(
    'image/italian-property.jpg', 
    'Italian House', 
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]
    )

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer?.appendChild(image)