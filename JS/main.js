//  UI var
const firstName = document.getElementById('firstname'),
      lastName = document.getElementById('lastname'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      submit = document.getElementById('btn-2');


//validating each input

 function validateFirstName() {
     if (firstName.value ==='') {
         firstName.style.borderColor= 'red'


         // create a paragraph
         const errorMessage1 = document.createElement('p')

         // add a class
         errorMessage1.className ='text-danger text-right error';
         errorMessage1.id = 'message1'

         // create textnode and append to the p
         errorMessage1.appendChild(document.createTextNode('First Name cannot be empty')) 

         // get elements
         const input1 = document.querySelector('.input-1');
         const formGroup1 = document.querySelector('.form-group')
         // insert error after input
         formGroup1.insertBefore(errorMessage1,input1.nextSibling);
         input1.setAttribute('placeholder','')

         
         //display error icon
          const errorIcon1= document.querySelector('#icon-error1');
          errorIcon1.style.display='inline';
     }
 }
 
 
 function validateLastName() {
     if (lastName.value ==='') {
         lastName.style.borderColor= 'red'


         // create a paragraph
         const errorMessage2 = document.createElement('p')

         // add a class
         errorMessage2.className ='text-danger text-right error';
         errorMessage2.id = 'message2'

         // create textnode and append to the p
         errorMessage2.appendChild(document.createTextNode('Last Name cannot be empty')) 

         // get elements
         const input2 = document.querySelector('.input-2');
         const formGroup2 = document.querySelector('.fg-2')
         // insert error after input
         formGroup2.insertBefore(errorMessage2,input2.nextSibling);
         input2.setAttribute('placeholder','')


         
         //display error icon
         const errorIcon2= document.querySelector('#icon-error2');
         errorIcon2.style.display='inline';

     }
 }


 
 function validateEmail() {
     if (email.value ==='') {
         email.style.borderColor= 'red'


         // create a paragraph
         const errorMessage3 = document.createElement('p')

         // add a class
         errorMessage3.className ='text-danger text-right error';
         errorMessage3.id = 'message3'
         
         // create textnode and append to the p
         errorMessage3.appendChild(document.createTextNode('    Email cannot be empty')) 

         // get elements
         const input3 = document.querySelector('.input-3');
         const formGroup3 = document.querySelector('.fg-3')
         // insert error after input
         formGroup3.insertBefore(errorMessage3,input3.nextSibling);
         input3.setAttribute('placeholder','email@example.com')

         // make the placeholder red 
         input3.style.setProperty("--c", "red");
         
         //display error icon
         const errorIcon3= document.querySelector('#icon-error3');
         errorIcon3.style.display='inline';

     }
 }
 
 
 function validatePassword() {
    if (password.value ==='') {
        password.style.borderColor= 'red'


        // create a paragraph
        const errorMessage4 = document.createElement('p')

        // add a class
        errorMessage4.className ='text-danger text-right error';
        errorMessage4.id = 'message4'
        // create textnode and append to the p
        errorMessage4.appendChild(document.createTextNode('Password cannot be empty')) 

        // get elements
        const input4 = document.querySelector('.input-4');
        const formGroup4 = document.querySelector('#last')
        // insert error after input
        formGroup4.insertBefore(errorMessage4,input4.nextSibling);
        input4.setAttribute('placeholder','')

        
         //display error icon
         const errorIcon4= document.querySelector('#icon-error4');
         errorIcon4.style.display='inline';
    }
}

/*
// event listeners
firstName.addEventListener('blur' ,validateFirstName);
lastName.addEventListener('blur' ,validateLastName);
email.addEventListener('blur' ,validateEmail);
password.addEventListener('blur' ,validatePassword);

*/

 //show error when the  submit button is clicked
submit.addEventListener('click', (e)=>{
    validateFirstName(),
    validateLastName(),
    validateEmail(),
    validatePassword();


    e.preventDefault()
})

// remove error
firstName.addEventListener('input',(e)=>{
    if (firstName.value !== "") {
        firstName.style.border='1px solid #ced4da';
        // the error message
        document.querySelector('#message1').remove();
        //remove icon
        const  errorIcon1= document.querySelector('#icon-error1')
        errorIcon1.style.display='none';
        

    }
})
lastName.addEventListener('input',(e)=>{
    if (lastName.value !== "") {
        lastName.style.border='1px solid #ced4da';
        // the error message
        document.querySelector('#message2').remove();
        //remove icon
        const  errorIcon2= document.querySelector('#icon-error2')
        errorIcon2.style.display='none';
        

    }
})
email.addEventListener('input',(e)=>{
    if (email.value !== "") {
        email.style.border='1px solid #ced4da';
        // the error message
        document.querySelector('#message3').remove();
        //remove icon
        const  errorIcon3= document.querySelector('#icon-error3')
        errorIcon3.style.display='none';
        

    }
})
password.addEventListener('input',(e)=>{
    if (password.value !== "") {
        password.style.border='1px solid #ced4da';
        // the error message
        document.querySelector('#message4').remove();
        //remove icon
        const  errorIcon4= document.querySelector('#icon-error4')
        errorIcon4.style.display='none';
        

    }
})
