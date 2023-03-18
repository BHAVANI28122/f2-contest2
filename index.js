let obj = {red:0,blue:0,green:0,yellow:0};
let least = 15 ;
let second_least = 15;
setTimeout(function OpeningCeremony(){
    console.log("Let the games begin");
    setTimeout(function Race100M(obj1){
        obj1 = obj;
       for( let item in obj){
      obj[item] = generateRandomInteger(10,15);
       }
      for( let item in obj){
      if(obj[item] < least){
        least = obj[item];
      }
}
// console.log(least);
 for( let item in obj){
      if(obj[item] < second_least){
        if(obj[item] == least){
            continue;
        }
        second_least = obj[item];
      }
}  
// console.log(second_least); 
for(let item in obj){
    if(obj[item] == least){
        obj[item] = obj[item]+50;
    }
    if(obj[item] == second_least){
        obj[item] = obj[item]+25;
    }
}
console.log(obj);
let max =0;
let max_color="";
for( let item in obj){
    if(obj[item] > max){
      max = obj[item];
      max_color = item;
    }
}  

console.log(`The ${max_color} has won Race100M`);


setTimeout(function LongJump(obj1)  {

    obj1 = obj;
    let keys = Object.keys(obj1);

    let random =keys[ Math.floor(Math.random()*keys.length)];
    // console.log(random);
     for(let item in obj){
        if(item == random){
            obj[item]= obj[item] + 150;
        }
     }

     let max1 =0;
let max_color1="";
for( let item in obj){
    if(obj[item] > max){
      max1 = obj[item];
      max_color1 = item;
    }
}  
console.log(obj);
console.log(`The ${max_color1} has won LongJump`);


    setTimeout(function  HighJump(obj1){
     
         obj1 = obj;
        let colour = prompt(`What colour secured the highest jump`);
        if(colour == "red" || colour =="green"|| colour == "blue" || colour == "yellow"){
            for(let item in obj){
                if(item == colour){
                    obj[item]= obj[item]+100;
                }
            }
            let max2 =0;
            let max_color2="";
         for( let item in obj){
        if(obj[item] > max){
         max2 = obj[item];
         max_color2 = item;
    }
}  
console.log(obj);
console.log(`The ${max_color2} has won HighJump`);

        }
        else{
            console.log("Event was cancelled");
        }
    




      setTimeout( function AwardCeremony(){
          
        let first = 0;
        let second = 0;
        let third = 0;
        let first_color="";
        let second_color="";
        let third_color="";

        for(let item in obj){
            if(obj[item] > first){
                first = obj[item];
                first_color = item;
              }
        }

        for(let item in obj){
    
            if(obj[item] > second){
                if(obj[item] == first){
                    continue;
                }
                second = obj[item];
                second_color=item;
              }
        }
        for(let item in obj){
            if(obj[item] > third){
                if(obj[item] == first || obj[item] == second){
                    continue;
                }
                third = obj[item];
                third_color =item;
              }
        }
        console.log(obj);
        console.log(`${first_color} came first with ${first} points`);
        console.log(`${second_color} came second with ${second} points`);
        console.log(`${third_color} came third with ${third} points`);
        


        },000)

     },000)

},2000)
},3000)
},1000)

function generateRandomInteger(min, max) {
  return Math.floor(min + Math.random()*(max - min + 1))
}