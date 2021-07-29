document.getElementById("submitUSN1").addEventListener("submit",(e)=>{
    e.preventDefault();
      
    
    const signup=document.getElementById("submitUSN1");


      const email=signup["usn"].value;
      const password=signup["usn1"].value;
      if(email=="apeksha@dsce.com"&&password=="apeksha@03"){
      
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(function(authData) {
          
       
        submitForm('ateacher.html');
      })
      .catch(function(error) {
        alert("Login Failed!", error);
       
      });
    }
    else
    {
        alert('Unauthorized!!')
    }
   
         

    });

     function submitForm(action)
    {
        document.getElementById('submitUSN1').action = action;
        document.getElementById('submitUSN1').submit();
    }