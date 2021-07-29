

  const signup=document.getElementById("submitUSN");

  signup.addEventListener("submit",(e)=>{
      e.preventDefault();

      const email=signup["usn"].value;
      const password=signup["usn1"].value;

      auth.createUserWithEmailAndPassword(email,password).then(cred=>{
          console.log("added");

          alert("User Added");

          signup.reset();
      });
  });

