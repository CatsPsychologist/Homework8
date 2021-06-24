let num = +prompt('Введите ваше число для проверки');

function isPrime(num){



    for( ; ; ) {


        if(num % 1 === 0  && num >= 0){

            return true;
        }

        // if(num % num === 0){
        //
        //     return true;
        // }
        else {
            return false;
        }


    }


}

alert(isPrime(num));