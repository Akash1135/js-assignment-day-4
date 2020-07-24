/* You are managing a sales department for your company, 
you want to reward your employees based onthe sales made 
by them during the year.The criteria is as follows:1.Sales 
from 0-5000 : 2%2.Sales from 5001 - 10000 : 5%3.Sales from 
10001 - 20000 : 7%4.Above 20000 - 10%Then log the total 
commission earned by him. */
let salary = prompt("Enter your salary")
var sales = prompt("Enter the Sales made by you during the year")
if (sales<=5000){
    console.log("commission:"+(2/100)*salary)

}
else if(sales>5000 && sales<=10000){
    console.log("commission:"+(5/100)*salary)
}
else if(sales>10000 && sales<=20000){
    console.log("commission:"+(7/100)*salary)   
}
else if(sales>20000){
    console.log("commission:"+(10/100)*salary)
}