var input=document.getElementById("display")
function display(pressed){

    input.value+=pressed;

}

 function equal(){

    input.value=eval(input.value)
    // console.log(eval(input.value));
    

}
function clears(){

input.value="";

}