function cal(){
  let av1 = document.getElementById("nota1").value;
  let av2 = document.getElementById("nota2").value;
  let av3 = document.getElementById("nota3").value;
  let edag = document.getElementById("edag").value;
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