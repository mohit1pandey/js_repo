async function hack() {
        let p1 = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("getting the data-base");
          }, 2000);
        });
      
        let p2 = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("attack is on 70% completed");
          }, 2000);
        });
      
        let p3 = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("data base hacked");
          }, 2000);
        });
      
        
      
        const func1 = await p1;
        const func2 = await p2;
        const func3 = await p3;
      
        console.log(func1, func2, func3);
      }
      
      hack();
      