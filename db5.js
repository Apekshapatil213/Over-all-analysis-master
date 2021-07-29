
function submitForm(action)
{
    document.getElementById('submitUSN1').action = action;
    document.getElementById('submitUSN1').submit();
}



function testJS() {
    var b = document.getElementById('usn13').value,
        url = 'http://127.0.0.1:5500/s1.html?name=' + encodeURIComponent(b);

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



var det=[];
const helo=document.getElementById("usnfirebase1");
function details1(){
    var dd=bc;
    console.log(dd+"a");
    db.ref("USN/"+dd+"/details").once('value',   function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
          var childData1 = childSnapshot.val();
          det[childKey]=childData1;
      
      });
      myfunc2();
});
}

function myfunc2()
{
    var cc = document.getElementById('usn13');
    cc.value=bc;
    for(var key in det)
    {
        var d = document.getElementById(key);
        d.value=det[key];
    }    
}


/*function submitForm(action)
    {
        document.getElementById('submitUSN').action = action;
        document.getElementById('submitUSN').submit();
    }*/
