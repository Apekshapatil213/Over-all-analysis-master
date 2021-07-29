

  document.getElementById("submitUSN1").addEventListener("submit",(e)=>{
    e.preventDefault();
      
    
    const signup=document.getElementById("submitUSN1");


      const email=signup["usn"].value;
      const password=signup["usn1"].value;
      console.log(email+password);
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(function(authData) {
          
       
        submitForm('usn.html');
      })
      .catch(function(error) {
        alert("Please Enter valid Username/Password!", error);
       
      });
   
         

    });

     function submitForm(action)
    {
        document.getElementById('submitUSN1').action = action;
        document.getElementById('submitUSN1').submit();
    }
  

    

/*function error1(){
    var k=document.getElementById("abtn");
    k.onclick="window.location.href='admin.html";
}*/
