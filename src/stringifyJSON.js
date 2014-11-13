// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// Bahaha
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var emptySet = false;
  var each = function(array, func){
    for(var i=0; i<array.length; i++){
      func(array[i], i, array); 
    }
    };
  
  if(obj === null){
    var nArr = ["n", "u", "l", "l"];
    return nArr.join("");
  }
  else if(typeof obj === "undefined" || typeof obj === "function"){
            return undefined;
  }
  else if(typeof obj === "string"){
    var newStrArr = obj.split("");
    newStrArr.unshift('"');
    newStrArr.push('"');
    
    return newStrArr.join("");
    
  }
  else if(Array.isArray(obj)){
    

      var outputArr = [];
      each(obj, function(ele){
        if(typeof ele === "number"){
          outputArr.push(ele);
          outputArr.push(',');
        }
        else if(typeof ele === "string"){
          outputArr.push(stringifyJSON(ele));
          outputArr.push(',');
        }
        else if(Array.isArray(ele)){
          outputArr.push(stringifyJSON(ele));
          outputArr.push(',');
        }
        else if(typeof ele === "object"){
          outputArr.push(stringifyJSON(ele));
          outputArr.push(',');
        }
        else if(typeof ele === "boolean"){
          outputArr.push(stringifyJSON(ele));
          outputArr.push(',');
        }

      });
    
      outputArr.pop();
      outputArr.push(']');
      outputArr.unshift('[');
      return outputArr.join("");
  }
  else if(typeof obj === "object"){
    var outArr = [];
    var objArr = Object.keys(obj);
   
     each(objArr, function(ele){
        if(typeof ele === "number"){
          outArr.push(ele);
          outArr.push(':');
          outArr.push(stringifyJSON(obj[ele]));
          outArr.push(',');
        }
        else if(typeof ele === "string"){
          outArr.push(stringifyJSON(ele));
          outArr.push(':');
          if(typeof obj[ele] === "undefined" || typeof obj[ele] === "function"){
            emptySet = true;
          }
          outArr.push(stringifyJSON(obj[ele]));
          outArr.push(',');
        }
        else if(Array.isArray(ele)){
          outArr.push(stringifyJSON(ele));
          outArr.push(':');
          outArr.push(stringifyJSON(obj[ele]));
          outArr.push(',');
        }
        else if(typeof ele === "object"){
          outArr.push(stringifyJSON(ele));
          outArr.push(':');
          outArr.push(stringifyJSON(obj[ele]));
          outArr.push(',');
        }
       else if(typeof ele === "boolean"){
          outArr.push(stringifyJSON(ele));
          outArr.push(',');
        }

      });
    if(emptySet){
      var objArray = ["{", "}"];
      return objArray.join("");
    }
     outArr.pop();
     outArr.push("}");
     outArr.unshift("{");
     return outArr.join("");
    
  }
  
  return obj.toString();
};
