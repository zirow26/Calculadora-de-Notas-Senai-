function calMedia(){
  let av1 = document.getElementById("nota11").value;
  let av2 = document.getElementById("nota21").value;
  let av3 = document.getElementById("nota31").value;
  let edag = document.getElementById("edag1").value;
  if(av1==""){
    av1=0;
  }
  if(av2==""){
    av2=0;
  }
  if(av3==""){
    av3=0;
  }
  if(edag==""){
    edag=0;
  }

  let media = (av1*2.5)+(av2*2.5)+(av3*3)+(edag*2);
  console.log(media);
  if (media>=70){
    document.getElementById("resultado").innerHTML = "Parabéns, você foi aprovado com a média: " + (media.toFixed(2))/10;
  }else{
    document.getElementById("resultado").innerHTML = "Você precisa de " + ((70-media).toFixed(2))/10 + " pontos para ser aprovado.";
  }
}

function calAv3(){
  let av1 = document.getElementById("nota12").value;
  let av2 = document.getElementById("nota22").value;
  let edag = document.getElementById("edag2").value;
  document.querySelectorAll("input[type='number']").forEach(input => {
    if(input.value==""){
      input.value=0;
    }
  });
  media = (av1*2.5)+(av2*2.5)+(edag*2);
  let av3 = (70-media)/3;
  if (av3<=0){
    document.getElementById("resultado").innerHTML = "Parabéns, você já foi aprovado com a media: "+ (media/10).toFixed(2);
  }else{
    document.getElementById("resultado").innerHTML = "Você precisa de " + av3.toFixed(2) + " pontos para ser aprovado.";
  }
}  

function calFinal(){
  let av1 = document.getElementById("nota13").value;
  let av2 = document.getElementById("nota23").value;
  let av3 = document.getElementById("nota33").value;
  let edag = document.getElementById("edag3").value;
  /*document.querySelectorAll("input[type='number']").forEach(input => {
    if(input.value==""){
      input.value=0;
    }
  });*/
  media = (av1*2.5)+(av2*2.5)+(av3*3)+(edag*2);
  console.log(av1+"+"+av2+"+"+av3+"+"+edag);
  console.log(media);
  media = media/10;
  res = (50-(6*media))/4;
  console.log(res);
  document.getElementById("resultado").innerHTML = "Você precisa de " + res.toFixed(2) + " pontos para ser aprovado na final.";
}