/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator (number_1,number_2){
    this.number_1 = number_1;
    this.number_2 = number_2;
    this.sum = function () {
       JS8_sum=`Skaičių ${this.number_1} ir ${this.number_2} suma yra lygi: ${this.number_1+this.number_2}`;
       console.log(JS8_sum);
       return JS8_sum;
    };
    this.substraction = function () {
        JS8_substraction=`Skaičių ${this.number_1} ir ${this.number_2} skirtumas yra lygus: ${this.number_1-this.number_2}`;
        console.log(JS8_substraction);
        return JS8_sum;
    };
    this.multiplication = function () {
        JS8_multiplication=`Skaičių ${this.number_1} ir ${this.number_2} sandauga yra lygi: ${this.number_1*this.number_2}`;
        console.log(JS8_multiplication);
        return JS8_sum;
    };
    this.division = function () {
        if(this.number_2 != 0){
            JS8_division=`Skaičių ${this.number_1} ir ${this.number_2} dalyba yra lygi: ${this.number_1/this.number_2}`;
            console.log(JS8_division);
            return JS8_sum;
        }
        else{
            return console.log("Dalyba iš nulio negalima");
        }     
    };
}

const JS8_number = new Calculator(10,2);

JS8_number.sum();
JS8_number.substraction();
JS8_number.multiplication();
JS8_number.division();