function array1(){const ausn=document.getElementById("submit");

    var i=1,j=1;
    const usn=ausn["usn"].value;
    const name=ausn["name"].value;
    const pu=ausn["pu"].value;
    const quota=ausn["qtext"].value;
    const year=ausn["year"].value;
    const cmarks=ausn["cmarks"].value;
    /*const cie=ausn["CIE"].value;*/


    var sub=[];

  sub={"name":name,"pu":pu,"quota":quota,"year":year,"cmarks":cmarks};
  console.log(sub);

    var db1=db.ref("USN/"+usn+"/details");
        
    for(var key in sub)
        db1.child(key).set(sub[key]);

    alert("ADDED");
    document.getElementById("submit").value="";
    
}
