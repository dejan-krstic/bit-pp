function f(a){
    var k=0;
        
    return function() {
            var b="";
            for (i=0; i<a.length; i++)
                {
                    if (a[i]=='a') {b+='*'; k++;}
                    else b+=a[i];
                    
            };
            return(b);

        }; return(k);

};
// f("javascript")();

 console.log(f('javascript'),f('javascript')());