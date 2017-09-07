var file = new FileManager();
var dir = new DirManager();
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // app.receivedEvent('deviceready');
        
        
    },

   signu: function() {
    var email = $("#email").val();
    var pass = $("#password").val();
    var repass = $("#repassword").val();      
    var fullname = $("#fname").val();
    var phno = $("#phone").val();
   var verifyemail= app.validateEmail(email);
    var gen = $("input[name='gender']:checked").val();
    if(email == '' || pass == '' || fullname == '' || phno =='') {
        alert("Fill all fields.");
    }
    else if(pass != repass) {
      alert("password not match")
  }
  else if(verifyemail == false) {
   return false;
  }
  else {
      dir.create('test', Log('created successfully'), Log('something went wrong'));
      var data1 = '[{"Fullname": "'+fullname+'","email": "'+email+'", "password": "'+pass+'", "phone": "'+phno+'", "gender": "'+gen+'"}]';
      file.readFile('test', 'signup.json', function(result) {
        if(result != '') {

         result = result.slice(0,-1);
         var data = ',{"Fullname": "'+fullname+'", "email": "'+email+'", "password": "'+pass+'", "phone": "'+phno+'", "gender": "'+gen+'"}]';
          data = result.concat(data);

          file.writeFile('test', 'signup.json', data, function(result) {
            alert("successfully registered");
          }, Log('something went wrong'), "ExternalAppStorageDir");
        } else {
          file.writeFile('test', 'signup.json', data1, function(result) {
            alert("successfully registered");
          }, Log('something went wrong'), "ExternalAppStorageDir");
        }
      },Log('something went wrong!'), "ExternalAppStorageDir");
    }
  },

    login:function() {
        var email1 = $("#username").val();
        var pass = $("#psw").val();

        if(email1 == '' || pass == '') {
            alert("Fill all fields.");
        }
        else {
      file.readFile('test', 'signup.json', function(result) {
        var obj = JSON.parse(result);
          
         //fetch object
     
        var flag = false;
        for (var key in obj) {
          var email = obj[key]['email'];
          var password = obj[key]['password'];
          if(email == email1 && password == pass ){
            flag = true;
            localStorage.setItem("email",obj[key]['email']);
            localStorage.setItem("FullName",obj[key]['Fullname']);
            localStorage.setItem("Phone",obj[key]['phone']);
            localStorage.setItem("Gender",obj[key]['gender']);

            window.location.href="logout.html";


            // document.write(localStorage.getItem("FullName"));
            // document.write(localStorage.getItem("email"));
            // document.write(localStorage.getItem("Phone-No."));
            // document.write(localStorage.getItem("Gender"));
          

          }
        }
         if(flag == false) {
          alert("invalid username or password.");
         } 
      },Log('something went wrong!'), "ExternalAppStorageDir");
    }
      },

  validateEmail: function(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }
        return true;

},  
// logout: function() {

//   window.localStorage.clear();
//   window.location.href="index.html";
  
// },
   
    };
app.initialize();