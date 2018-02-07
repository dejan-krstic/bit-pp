function firstN(a,b){
    var ana="";
    for (i=0; i<b; i++)
        {
            ana += a[i]; 
        }
        ana += "..."
        return ana;

}
console.log(firstN("Ana Brnabic", 6));