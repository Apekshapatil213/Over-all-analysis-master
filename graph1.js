
const ausn=document.getElementById("usnfirebase");
var sub=[],marks=[];
document.getElementById("usnfirebase").addEventListener("submit",(e)=>{
    e.preventDefault();

    var i=1,j=1;
    const a=ausn["USN"].value;
    const sem=ausn["SEM"].value;
    


    db.ref("USN/"+a+"/"+sem+"/CIE1").once('value',   function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        sub[i]=childKey;
        marks[i]=childData;
        i++;
    
      });
    graph();
    });

function graph(){var chart=document.getElementById("myChart").getContext('2d');
console.log(marks[1]+"20");
 var abc= new Chart(chart, {
  type: 'polarArea',
  data:{
    datasets: [{
        backgroundColor:["red","red","green","orange"],
        data: marks,
    }],
    labels: sub
  },
  options: {
    title:{
      display:true,
      text:cie,
      fontSize:25,
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

});


