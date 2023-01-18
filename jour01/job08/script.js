function sommenombrepremiers(val1, val2){
    if (val1 == 2){
        if (val2 == 2){
            return val1 + val2;
        }
        else{
            for (j = 2; j < val2; j++){
                if (val2 % j == 0){
                    return false;
                }
                else{
                    return val1 + val2;
                }
            }
        }
        
    }

    else if (val2 == 2){
        for (i = 2; i < val1; i++){
            if (val1 % i == 0){
                return false;
            }
            else{
                return val1 + val2;
            }
        }
    }

    else{
        for (i = 2; i < val1; i++){
            if (val1 % i == 0){
                return false;
            }
            else{
                for (j = 2; j < val2; j++){
                    if (val2 % j == 0){
                        return false;
                    }
                    else{
                        return val1 + val2;
                    }
                }
            }
        }
    }
    
    
}

result = sommenombrepremiers(7, 7);

console.log(result);