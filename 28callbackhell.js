// callback hell
/* reading the file sequentially */
fs.readFile('file1.txt', function (err, data) {
    if (err) {
      console.error(err);
    } else {
      fs.readFile('file2.txt', function (err, data) {
        if (err) {
          console.error(err);
        } else {
          fs.writeFile('file3.txt', data, function (err) {
            if (err) {
              console.error(err);
            } else {
              console.log('File operation completed successfully');
            }
          });
        }
      });
    }
  });
  
 
  /* reding data from database */

  db.connect(function (err, connection) {
    if (err) {
      console.error(err);
    } else {
      connection.query('SELECT * FROM table1', function (err, results) {
        if (err) {
          console.error(err);
        } else {
          connection.query('SELECT * FROM table2', function (err, results) {
            if (err) {
              console.error(err);
            } else {
              connection.query('SELECT * FROM table3', function (err, results) {
                if (err) {
                  console.error(err);
                } else {
                  console.log('Database operations completed successfully');
                }
              });
            }
          });
        }
      });
    }
  });
  

  /*AJAX request */

  ajaxRequest('GET', 'url1', function (err, response) {
    if (err) {
      console.error(err);
    } else {
      ajaxRequest('GET', 'url2', function (err, response) {
        if (err) {
          console.error(err);
        } else {
          ajaxRequest('GET', 'url3', function (err, response) {
            if (err) {
              console.error(err);
            } else {
              console.log('AJAX requests completed successfully');
            }
          });
        }
      });
    }
  });
  
  // loading script
  // call back hell
// script https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js

function loadScript(src, callback){

  let script = document.createElement("script");
  script.src=src;
  document.body.appendChild(script);
  script.onload=()=>{
    callback(null,src);
  }
  script.onerror=()=>{
    let error = new Error("some error has occurd");
    callback(error,src);
  }

}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",(error,src)=>{
if(error){
  console.error(`error occured in script1: ${error}`)  
}else{
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",(error,src)=>{
    if(error){
      console.error(`error occured in script2: ${error}`)  
    }else{
      loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",(error,src)=>{
        if(error){
          console.error(`error occured in script3: ${error}`)  
        }else{
          loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",(error,src)=>{
            if(error){
              console.error(`error occured in script4: ${error}`)  
            }else{
                   console.log("all scripts have beeen loded");
            }
            });
        }
        });
    }
    }); 
}
});