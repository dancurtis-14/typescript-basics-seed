function sumAll(message: string, ...arr: any) {
    console.log(message)
    arr.reduce((prev: any, next: any) => prev + next)
}

const sum = sumAll('Hello',1,2,3,4,5,6,7,8,9)

console.log(sum)