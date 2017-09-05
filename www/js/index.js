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

    if(email == '' || pass == ''){
        alert("Fill all fields.");
    }
    else if(pass != repass) {
      alert("password not match")
  }
  else {
      dir.create('test', Log('created successfully'), Log('something went wrong'));
      var data1 = '[{"email": '+email+', "password": '+pass+'}]';
      file.readFile('test', 'signup.json', function(result) {
        if(result != '') {

         result = result.slice(0,-1);
         var data = ',{"email": '+email+', "password": '+pass+'}]';
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
        var pass2 = $("#psw").val();

        if(email1 == '' || pass2 == '') {
            alert("Fill all fields.");
        }
        else {
      file.readFile('test', 'signup.json', function(result) {
        // if() {
          alert("hello");
        // }
      },Log('something went wrong!'), "ExternalAppStorageDir");
        }
      },
  // //           //  else {
  // //           //     alert(data);
  // //           //    }

  // //              // file.readFile('signup', 'signup.json', function(data) {
  // //               //    console.log(data);
  // //               // }, Log('something went wrong'), "ExternalAppStorageDir");

  // //              // alert("data");  
  // //          }

       };
