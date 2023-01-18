function compareAsc(x, y) {
    return x - y;
}

function compareDesc(x, y) {
    return y - x;
}

function tri(numbers, order){
    if (order == "asc"){
        numbers.sort(compareAsc)
    }
    else if (order == "desc"){
        numbers.sort(compareDesc)
    }
    
    console.log(numbers);
}


tab = [2, 7, 3, 1, 4, 9, 11];

tri(tab, "asc");