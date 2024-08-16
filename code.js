function displayValue(val){
    document.getElementById("test").value=document.getElementById("test").value+val;
}

function clearValue(){
    document.getElementById("test").value="";
}
function change(){
    var input=document.getElementById("test").value;
    var result=eval(input);
    document.getElementById("test").value=result;
}
