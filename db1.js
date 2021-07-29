


var bc,bd;
function onLoad () {
  var url = document.location.href,
      params = url.split('?')[1].split('&'),
      data = {},tmp;
  for (var i = 0, l = params.length; i < l; i++) {
       tmp = params[i].split('=');
       data[tmp[0]] = tmp[1];
  }
  bc=data.usn;
  bd=data.sem;
}


    var i=1,j=1;
    
    
    var cie1=[];
    var cie2=[];
    var cie3=[];
    var sub=[];
    var avg=[];
    for(i=1;i<=6;i++)
    {
      cie1[i]='';
      cie2[i]='';
      cie3[i]='';
    }
    /*const cie=helo["CIE"].value;*/


     /* for(j=1;j<=3;j++)
      {
        i=1;
       
        db.ref("USN/"+a+"/"+sem+"/"+"CIE"+j).once('value',   function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            
            var childKey = childSnapshot.key;
            var childData1 = childSnapshot.val();
            var c=document.getElementById("sub"+i);
            c.innerHTML=childKey;
      var e=document.getElementById("marks"+j+i);
      console.log("marks"+j+i);
      e.innerHTML=childData1;
      i++;
      });

    });
  }
  */
 function func1(){
 db.ref("USN/"+bc+"/"+bd+"/"+"CIE1").once('value',   function(snapshot) {
   var k=1;
   var z=1;
  snapshot.forEach(function(childSnapshot) {
    
    var childKey = childSnapshot.key;
    var childData1 = childSnapshot.val();
    sub[k++]=childKey;
    cie1[z++]=childData1;
});
func2();
});
 }
 function func2()
 {
j=1;i=1;
db.ref("USN/"+bc+"/"+bd+"/"+"CIE2").once('value',   function(snapshot) {
  var z=1;
  snapshot.forEach(function(childSnapshot) {
    
    var childData2 = childSnapshot.val();
    cie2[z++]=childData2;
});
func3();
});

 }
 function func3(){
j=1;i=1;
db.ref("USN/"+bc+"/"+bd+"/"+"CIE3").once('value',   function(snapshot) {

  var z=1;
  snapshot.forEach(function(childSnapshot) {
    
    var childData1 = childSnapshot.val();
    cie3[z++]=childData1;

});
setvalues();
for(i=1;i<=6;i++)
{
  if(cie1[i]!=''){
    if(cie2[i]!=''){
      if(cie3[i]!=''){
   avg[i]=(parseInt(cie1[i], 10)+parseInt(cie2[i], 10)+parseInt(cie3[i], 10))/3;
   avg[i]=Math.round(avg[i]);
      }
      else
      {
        avg[i]=(parseInt(cie1[i], 10)+parseInt(cie2[i], 10))/2;
   avg[i]=Math.round(avg[i]);
      }
    }
    else
    avg[i]=cie1[i];
  }
  else
  {
    avg[i]=0;
  }
}
graph1();
graph2();
});

 }
i=1;j=1;
console.log(sub);
console.log(cie1);
console.log(cie2);
console.log(cie3);
function setvalues()
{
  for(i=1;i<=6;i++)
{
  if(cie1[i]!=''){
    if(cie2[i]!=''){
      if(cie3[i]!=''){
   avg[i]=(parseInt(cie1[i], 10)+parseInt(cie2[i], 10)+parseInt(cie3[i], 10))/3;
   avg[i]=Math.round(avg[i]);
      }
      else
      {
        avg[i]=(parseInt(cie1[i], 10)+parseInt(cie2[i], 10))/2;
   avg[i]=Math.round(avg[i]);
      }
    }
    else
    avg[i]=cie1[i];
  }
  else
  {
    avg[i]=0;
  }
}
  
   for(i=1;i<=6;i++)
   {
     var e=document.getElementById("avg"+i);
     e.textContent=avg[i];
     var d=document.getElementById("sub"+i);
     d.textContent=sub[i];
     for(j=1;j<=3;j++)
     {
       var c=document.getElementById("marks"+i+j);
       if(j==1)
       {
         c.textContent=cie1[i];
         console.log(c);
       }
       else if(j==2)
       c.textContent=cie2[i];
       else
       c.textContent=cie3[i];
     }
   }

}

function graph1(){
  var chart=document.getElementById("myChart").getContext('2d');
 var abc= new Chart(chart, {
  type: 'polarArea',
  data:{
    datasets: [{
        backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'

        ],
        data: avg,
    }],
    labels: sub
  },
  options: {
    title:{
      display:true,
      text:"Performance Graph",
      fontSize:30,
    },
    legend:{
      labels: sub
    },
    tooltips:{
      enabled:true,
      labels: sub
    }
  }

 });
}

function graph2(){
  console.log("hello");
  
  var chart=document.getElementById("myChart1").getContext('2d');
 var abc= new Chart(chart, {
  type: 'polarArea',
  data:{
    datasets: [{
        backgroundColor:[
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)'

        ],
        data: avg,
    }],
    labels: sub
  },
  options: {
    title:{
      display:true,
      text:"Performance Graph",
      fontSize:30,
    },
    legend:{
      labels: sub
    },
    tooltips:{
      enabled:true,
      labels: sub
    }
  }

 });
}





