
function graph(){var chart=document.getElementById("myChart1").getContext('2d');
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

