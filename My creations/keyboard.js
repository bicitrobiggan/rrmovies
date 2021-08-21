var board3 = document.getElementsByClassName("board")[0];

board3.innerHTML = board3.textContent.replace(/\S/g, "<span class='key'>$&</span>");

var key = document.getElementsByClassName("key");
var key2 = board3.getElementsByClassName("key");

var written = document.getElementById("txt");
var shift = document.querySelectorAll(".enter")[0];

document.querySelectorAll(".enter")[1].addEventListener("click", function() {
  written.innerHTML += " ";
});

document.querySelectorAll(".enter")[2].addEventListener("click", function() {
  written.innerHTML += "<br />";
});

function en(){
  var remove = written.innerHTML.substring(0, written.innerHTML.length - 1);
  written.innerHTML = remove;
}

var board = document.querySelectorAll(".board")[1];

  shift.addEventListener("click", function() {
    if (board.getAttribute("class") == 'board') {

      board.classList.toggle("active", true);
      shift.classList.toggle("active", true);

      board3.innerHTML = "@#$%&৳*-+()[]~<>=≠≈{}π÷×∞°•©™®"
      board3.innerHTML = board3.textContent.replace(/\S/g, "<span class='key'>$&</span>");
      for (var b = 0; b < key2.length; b++) {
        key2[b].addEventListener("click", function() {
          var txt = this.textContent;
          written.innerHTML += txt;
        });
      }
    }
    else {

      board.classList.toggle("active", false);
      shift.classList.toggle("active", false);

      board3.innerHTML = "0123456789'\"\\/:;_";
      board3.innerHTML = board3.textContent.replace(/\S/g, "<span class='key'>$&</span>");
      for (var n = 0; n < key2.length; n++) {
        key2[n].addEventListener("click", function() {
          var txt = this.textContent;
          //console.log(txt);
          written.innerHTML += txt;
        });
      }
    }
  });

  for (var i = 0; i < key.length; i++) {
    key[i].addEventListener("click", function() {
      var txt = this.textContent;
      // console.log(txt);
      if (shift.getAttribute("class") == "enter") {
        written.innerHTML += txt;
      }
      else {
        written.innerHTML += txt.toUpperCase();
      }
    });
  }