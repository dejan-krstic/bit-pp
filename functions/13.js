function humanizeNum(a) {
    if (a % 100 <11 || a % 100 >13){
        switch (a%10){
            case 1: a+="st";
            break;
            case 2: a+="nd";
            break;
            case 3: a+="rd";
            break;
            default: a+="th";
        }
    }
   else a+="th";

return a;

}
console.log(humanizeNum(103));