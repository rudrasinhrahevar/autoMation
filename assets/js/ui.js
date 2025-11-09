
document.addEventListener('DOMContentLoaded', ()=>{
  if(window.lucide) lucide.createIcons();
  // init charts if mainChart exists
  const ctx = document.getElementById('mainChart');
  if(ctx && window.Chart){
    new Chart(ctx,{
      type:'line',
      data:{
        labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets:[{label:'Throughput', data:[12,18,13,19,22,25,21], borderColor:'#00fff7', backgroundColor:'rgba(0,255,247,.12)', fill:true, tension:.35}]
      },
      options:{plugins:{legend:{labels:{color:'#cfeff0'}}}, scales:{x:{ticks:{color:'#cfeff0'}, grid:{color:'rgba(0,255,247,.06)'}}, y:{ticks:{color:'#cfeff0'}, grid:{color:'rgba(0,255,247,.06)'}}}
    });
  }
});

