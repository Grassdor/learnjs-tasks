let inputNum = 20

label: for (let num = 2; num <= inputNum; num++) {
            for(let compareNum = 2; compareNum < num; compareNum++){
                if (num % compareNum == 0) {
                    continue label;
                } 
            }
            (alert(num));
        }