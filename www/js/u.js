if (result.length > 0) {
                var Obj = JSON.parse(result);
                  Obj.push(data);
                 
                  file.writeFile('signup', 'signup.json', Obj, function(result) {
                     alert(result);
                  }, Log('something went wrong'), "ExternalAppStorageDir");
            }
            else {

            	file.writeFile('signup', 'signup.json', data, function(result) {}, Log('something went wrong'), "ExternalAppStorageDir");