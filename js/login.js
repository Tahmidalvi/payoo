// console.log('button clicking file added')
// document.getElementById('id').addEventListener('click', fun)
// document.getElementById('button-login').addEventListener('click',function(){})  

// search : form submit reloding the page
// step -1 set event hander 

// document.getElementById('button-login').addEventListener('click',function(){
//     // step-2 : prevent default behavior (prevent reloading browser)
//     event.preventDefault(); //  vejal to beginners

//     // step-3 : get the phone number

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber , pinNumber);

//     //step-4 : validate phone and pin
//     //this is temporrary
//     if(phoneNumber=== '5' && pinNumber=== '1234'){
//         console.log('you are loged in');
//         // step-5 : allow user to use the website
//     }
//     else{
//         alert('weong phone number or pin')
//     }

// })



document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    //get phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber,pinNumber);
    // bad way to validate
    if(phoneNumber=== '1234' && pinNumber === '1234'){
        console.log('you are logges in')
        window.location.href= '/home.html';
    }
    else{
        alert('wrong phone number or pin.')
    }
});