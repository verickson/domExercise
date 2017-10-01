// var paragraphs = document.getElementsByTagName('p');
// paragraphs[0].innerText = 'Changed text in paragraph';
//
// document.getElementById('h1').addEventListener("click", function(event){
//   alert('You have clicked.');
// })
//
// //document.getElementById('h1').innerText = 'New Title Text';
//
//
// //why don't these work
// document.getElementsByTagName('h1').innerText = 'New Title Text';
//
// var square = document.getElementsByClassName('square');
// square.innerText = 'this is a square';




//javascript Dom manupulation

function submitform(){
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;
  //if password is 12345678
    // username must contain at least one number
      // send alert
  if((password === '12345678') && (username.search(/\d/))){
    document.getElementById('h1').innerText = 'your info is acceptable';
    //alert('both are ok');
    //return false;
  }
  else if ((password != '12345678') && (username.search(/\d/) == -1)){
    document.getElementById('h1').innerText = ' ';
    alert('Your password and username are incorrect');
  }
  else if ((password != '12345678') && (username.search(/\d/))){
    document.getElementById('h1').innerText = ' ';
    alert('Your password is incorrect');
  }
  else if ((password === '12345678') && (username.search(/\d/) == -1)){
    document.getElementById('h1').innerText = ' ';
    alert('Your username is incorrect');
  }

};

//changes with keypress
// document.addEventListener('keypress', function(e){
//   document.getElementById('h1').innerHTML = document.getElementById('password').value;
//   // var keyCode = e.keyCode || e.which;
//   // console.log(keyCode);
// })
document.addEventListener("keyup", function() {
  document.getElementById("h1").innerHTML = document.getElementById('password').value;
});







//on click's right and wrong
document.getElementById('correct').addEventListener("click", function(event){
  document.getElementById('changetext').innerText = "I'm right";
})

document.getElementById('wrong').addEventListener("click", function(event){
  document.getElementById('changetext').innerText = "No, I'm right!";
})


//hover state
document.getElementById('nohov').addEventListener("mouseover", function(event){
  alert('Hey, I told you not to hover over me!');
})
