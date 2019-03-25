// alert('Welcome to DCI');

// function showhide(){
//     if (document.getElementById('img').style.display =='block'){
//         document.getElementById('img').style.display ='none';
//         document.getElementById('showhide').innerHTML='Show';
//     }
//     else {
//         document.getElementById('img').style.display ='block';
//         document.getElementById('showhide').innerHTML='Hide';
//     }
// }
function changestyle(){
           
    newborder='50px';
    document.body.style.background='lightgray';
    document.getElementById('first').style.background='lightblue';
    document.getElementById('first').style.borderRadius=newborder;
    document.getElementById('first').style.color='red';            
    document.getElementById('j').style.background='red';            
    var welcome='Welcome to DCI';           
    document.getElementById('first').innerHTML=welcome;      
    

}
function changelanguage(){
var para=document.getElementsByClassName('para');
para[0].style.color='orange'; 
para[1].style.color='darkred'; para[1].style.background='white';
}
function welcome(fname,lname){
var wilkommen='Wilkommen bei DCI'; 
document.getElementById('first').innerHTML=wilkommen +' '+fname+' '+lname;


}
function changestyle2(){
document.getElementById('myDiv').style.transition='all 3s';   
}
function changestyle3(){    
document.getElementById('myDiv').style.transform='rotate(990deg)';
console.log(document.getElementById('myDiv').style.transform);
}
function changestyle4(){
var newname= prompt('please enter your name','Mansour Tumeh');
//document.getElementById('Fullname').innerHTML='<h1>'+newname+'</h1>';

if(newname != "") {
 document.getElementById('h1').innerHTML=newname;


}



}