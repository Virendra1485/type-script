let firstName: string = "fruit"
let count: number = 25
let isLoading: boolean = true

let numbers: any = []

let notes: undefined = undefined

let age: null = null

let workers: null | string = "sdfdsssf"



const user: { name: string, age: number, id?: number } = {
    name: "virendra",
    age: 28,
    id: 1
} // ? optional

const fruits: string[] | number[] = ["banana", "apple", "orange"]

const num: number[] = [1, 2, 3]

// list of objectg
const customers: { id: number, name: string }[] = [{ id: 1, name: "" }, { id: 2, name: "" }]


// functions

const sum = (a: number, b: number) => {
    return a + b
}

sum(5, 2)


// function calling fucction

const handelApiResponse = (payload: { userId: number }, callback: (a: number, b: number) => void) => {

}

handelApiResponse({ userId: 1 }, sum)


// interface

interface User {
    name: string,
    id: number,
    getUser: () => void
}


let data: User[] = [{
    name: "fruit",
    id: 2,
    getUser: () => {

    }
}]


interface Person {
    dep: string,
    user: User
}



type employee = {
    id: number,
    name: string
}

type manager = {
    department: string
} & employee

let employeewithmanager: manager = {
    department: "A",
    id: 8,
    name: "dfkljh"
}

// {
//     //manager properties

//     data: [
//         //employee properties

//     ]
// }

export default null;