import { LoyaltyUser } from "./enums"

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLInputElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLInputElement
const userNameDisplay = document.querySelector('#user') as HTMLInputElement

export function showReviewTotal (value: number, reviwer: string, isLoyalt: LoyaltyUser) : void {
    const iconDisplay = LoyaltyUser.GOLD_USER ? 'Star' : ' '

    reviewTotalDisplay.innerHTML = value.toString() + 'Review' + makeMultiple(value) + '| last reviwed by ' + reviwer + ' ' + iconDisplay
}

export function populateUser( isReturning: boolean, userName: string){
    if(isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function add(firstValue: number, secondValue: number) : number {
    return firstValue + secondValue
}

export function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

// function add(firstValue: (number | string), secondValue: (number | string)){
//     let result
//     if(typeof firstValue === 'number' && typeof secondValue === 'number'){
//         result = firstValue + secondValue
//     }
//     if(typeof firstValue === 'string' && typeof secondValue === 'string'){
//         result = firstValue + ' ' + secondValue
//     }
//     if(typeof firstValue === 'number' && typeof secondValue === 'string'){
//         console.log('Cannor perform this addtion')
//     }
//     if(typeof firstValue === 'string' && typeof secondValue === 'number'){
//         console.log('Cannot perform this addtion')
//     }
// }

// const combineReviews = add(5,1)
// const firstNameLastName = add('Ania', 'kubow')