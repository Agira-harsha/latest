let element = document.getElementById("box");
let btn = document.getElementById('on');

let multiplication=document.getElementById('multiplication')
if(btn.innerText =="ON")
{


    function display(number){
        element.value += number
        
    }
    
    function remove(){
        element.value = ''
         
    
    
    }
    function minus(){
        element.value =element.value.slice(0,-1)
    }
    function validation()   
    {
        try{

            element.value=eval(element.value)
        }
        catch
        {
            element.value="error"
        }
    
    }
    function multi()
    {
        element.value=element.value*element.value
        
    }
    function fact()
    {
        let val=1
        let factorial=element.value
        for(let i=1;i<=factorial;i++)
        {
            val=val*i
              
        }
        element.value=val
    }
    
}












btn.addEventListener('click', function handleClick() {
    if(btn.innerText =="OFF ")
    {

        btn.textContent ="ON";
        element.value=""
        
        




        
    }
    else{
        
        btn.textContent="OFF"
        element.value="harshakohli";   
        element.setAttribute("disabled", false);
        
        
    
        

       


   
    }

});
