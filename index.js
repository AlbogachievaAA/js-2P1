let a = "привет";
//       01234
// console.log(a[2]);

// for(let i = a.length - 1; i >= 0; i--){
//     console.log(a[i]);
    
// }

// function имя(параметры){
//     ... тело 
// }

// function showMessage(){
//     let message = " Hello, I am JavaScript"
//     console.log(message);
//      alert(message)
// }
// showMessage()
// alert(message) тут будет ошибка из-за области видимости 

// let name  = "вася";
// function showMessage3(){
//     name3 = "петя"
//     let message = "привет" + name3;
//     alert(message)
// }
// showMessage3();


let name4  = "вася";
function showMessage4(){
    let message = "привет" ;
    alert(name4)
}
showMessage4();