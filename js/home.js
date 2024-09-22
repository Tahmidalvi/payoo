// add money to tha account

// step-1 : add an event handler to tha add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();
    console.log('money add butn clicked');
});