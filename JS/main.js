// new method
const form = document.getElementById('form');
const formGroup = document.querySelectorAll('.form-group');

 
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const firstName = form['firstname']
    const lastName = form['lastname'];
    const email = form['email'];
    const password = form['password'];

    if (firstName.value ==='') {
         showError('firstname', "Firstname can't  be empty");
         firstName.style.borderColor= 'hsl(0, 100%, 74%)';
         // show error icon
         const errorIcon= document.querySelector('#icon-error1');
         errorIcon.style.display='inline';
        
    } else {
        removeError('firstname');
        const errorIcon= document.querySelector('#icon-error1');
        errorIcon.style.display = 'none';
        firstName.style.borderColor = '#ced4da';
    }
    if (lastName.value ==='') {
         showError('lastname', "Lastname can't  be empty")
         const errorIcon2= document.querySelector('#icon-error2');
         errorIcon2.style.display='inline';
         lastName.style.borderColor='hsl(0, 100%, 74%)'
    } else {
        removeError('lastname');
        const errorIcon2= document.querySelector('#icon-error2');
        errorIcon2.style.display = 'none'
        lastName.style.borderColor = '#ced4da'
    }
    if (email.value ==='') {
         showError('email', "Email can't  be empty");
         const errorIcon3= document.querySelector('#icon-error3');
         errorIcon3.style.display='inline';
         email.style.borderColor='hsl(0, 100%, 74%)';
         //placeholder color
         const input3 = document.querySelector('.input-3');
         input3.setAttribute('placeholder','email@example.com')

         // make the placeholder red 
         input3.style.setProperty("--c", "hsl(0, 100%, 74%)");
    
    } else {
        removeError('email');
        const errorIcon3= document.querySelector('#icon-error3');
        errorIcon3.style.display='none';
        email.style.borderColor='#ced4da';
    };
    if (password.value ==='') {
         showError('password', "Password can't  be empty");
         const errorIcon4= document.querySelector('#icon-error4');
         errorIcon4.style.display='inline';
         password.style.borderColor='hsl(0, 100%, 74%)';
    } else {
        removeError('password');
        const errorIcon4= document.querySelector('#icon-error4')
        errorIcon4.style.display='none';
        password.style.borderColor='#ced4da'
    };
          
});
// show error
   function showError(input, message){
          const small = form[input].parentNode.querySelector('small');
          small.innerText = message;
          small.style.opacity= '1';
        
   }
   // remove error
   function removeError(input) {
    const small = form[input].parentNode.querySelector('small');
    small.remove(input);
       
   };
