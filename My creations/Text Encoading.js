var u = "It's a demo text"; //write your sentence here.
function revs(f) {
  if (u.length < 1) {
    console.log("Please write a sentense.")
  }
  else if (u.length > 15) {
    var e = f.split('').reverse().join('et');
    var t = e.split('').reverse().join('a');
    var to = t.split('').reverse().join('ou');
    return to;
  }
  else {
    return f.split('').reverse().join('$');
  }
}
var srt = revs('৳' + u + '৳');
console.log("Your sentense: " + u);
console.log(" ");
console.log("Encoded sentense: " + srt);