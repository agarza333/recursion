// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
   var getClasses = function(myChildNodes){

   	for(var i=0; i<myChildNodes.length; i++){

  		if(myChildNodes[i].classList){
  			if(myChildNodes[i].classList.contains(className)){
  				result.push(myChildNodes[i]);
  			}
  			else if(myChildNodes[i].hasChildNodes()){
  				var myNewChildNodes = myChildNodes[i].childNodes;
  				getClasses(myNewChildNodes);   // recursion
  			}
   		}
  	 }
   };
  
  var result = [];
  
  var myChildNodes = document.body.childNodes;  
  result.push(document.body);
  getClasses(myChildNodes);
  
  return result;
 
};