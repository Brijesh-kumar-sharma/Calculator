const display = document.querySelector('#display');
const mainBody = document.body;
mainBody.addEventListener('keypress', (e)=>{
    const validKeys = [1,2,3,4,5,6,7,8,9,0,'-','+','*','/'];
    if(validKeys.some((item)=>e.key==item)){
        display.value += e.key;
    }
    if(e.key == "Enter"){
        const x = display.value;
        display.value = eval(x);
    }
})