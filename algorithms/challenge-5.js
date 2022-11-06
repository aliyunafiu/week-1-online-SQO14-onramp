function filterList (arr); {
 const filterFigues =(arr) =>{
    return arr.filter((item)=> {
        return typeof item === "number";
    }
    console.log(filterFigues);

 


  module.exports =filterList

  //filterList([1,2,'a','b']) to return [1,2]
 // filterList([1,'a','b',0,15]) to return [1,0,15]
 // filterList([1,2,'aasf','1','123',123]) to return [1,2,123]