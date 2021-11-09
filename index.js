/*var rect = {
    perimenter : (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)

};*/


const rectangle = require('./rectangle')


function solveReact(l,b) 
{
 rectangle(l,b,(err,rectangle)=>
 {
     if (err)
     {
         console.log('error:' + err.message);
     }
     else
     {
         console.log('area:' + rectangle.area(l,b))
     }
 }) ;
}

solveReact(2,4);







/*function solveRect(l,b)
{
    console.log("solve rect");
    if(l<=0 || b<=0)
    {
        console.log("error");
    }
    else{
        console.log(rec.area(l,b));
    }
}


solveRect(2,4);
*/
//when used as objects i.e. inside a variable we use : else when defined normally we use = in arrow func
