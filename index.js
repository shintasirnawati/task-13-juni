document.getElementById('submit').addEventListener('click', function(e){
  e.preventDefault()
  var username=document.getElementById('username').value 
  console.log(username)
  var password=document.getElementById('password').value 
  console.log(password)
  console.log('shinta')

    if (username == 'admin' && password =='password') {
        document.getElementById('submit').style = 'background-color:red'
      } 
})