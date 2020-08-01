// let e const
{
    var a = 2
    let b = 3
}

console.log(a)

//Template String

const produto ='iPad'
console.log(`${produto}, é Caro`)

//Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) 

const [x,  , y] = [1, 2 ,3]
console.log(x, y)

const {idade, nome} = {nome: 'Ana', idade: 43}
console.log(idade, nome)