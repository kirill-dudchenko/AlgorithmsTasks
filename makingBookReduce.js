let array = [1, 2, 3, -5, -7, -11]

let users = [
    {
        name: 'John',
        ocupation:'doctor',
        city:'Berlin',
        age:32
    },
    {
        name: 'Andrew',
        ocupation:'doctor',
        city:'Kiev',
        age:34
    },
    {
        name: 'Anna',
        ocupation:'manager',
        city:'Kiev',
        age:32
    }
];



function makingBook(key,arr){
    return arr.reduce((book,item)=>{
        if(!(item[key] in book)){
            book[item[key]] = [item]
        }else{
            book[item[key]].push(item)
        }
        return book
    },{})
}

console.log(makingBook('city',users))
