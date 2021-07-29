
function submitForm(action)
{
    document.getElementById('submitUSN1').action = action;
    document.getElementById('submitUSN1').submit();
}



function testJS() {
    var b = document.getElementById('usn12').value,
        url = 'http://127.0.0.1:5500/details2.html?name=' + encodeURIComponent(b);

    document.location.href = url;
}

var bc;
 function onLoad () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {},tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    bc=data.usn;
}

    function setUSN()
    {
        document.getElementById('usn13').value=bc;
    }

const ausn=document.getElementById("submit");

document.getElementById("submit").addEventListener("submit",(e)=>{
    e.preventDefault();
    
    var i,j;
    const sem=ausn["num"].value;
    const cie=ausn["cie"].value;

    var sub=[];

    for(i=1;i<=6;i++)
    {
        var x=ausn["sub"+i].value;
        var y=ausn["M"+i].value;
        sub[x]=y;
    }

    var db1=db.ref("USN");

    for(var key in sub)
    {
        db1.child(bc).child("SEM"+sem).child(cie).child(key).set(sub[key]);
    }

    alert("ADDED");
       document.getElementById("ausn").value="";
});

