var number = 30/*Enter a number here to see the fibonacci numbers */;
var n1 = 0;
var n2 = 1;
var nextTerm;
for (var i = 1; i <= number; i++) {
 if(n1!=Infinity){
    console.log(i+' => '+n1);}
    else{
    console.log("This value(s) are about to Infinity");
      break;
    }
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}