function cal(){
  let av1 = document.getElementById("av1").value;
  let av2 = document.getElementById("av2").value;
  let av3 = document.getElementById("av3").value;
  let edag = document.getElementById("edag").value;
  let prova = document.getElementById("esc").value;
  let res;
  if(prova == 1){
    res = (70-(av2*2.5)-(av3*3)-(edag*2))/2.5
    res =res.toFixed(2);
     if(res > 0){
    document.getElementById("res").innerHTML = "Precisa tirar "+res+" pontos na "+prova+"º prova para passar";
    }else{
      document.getElementById("res").innerHTML = "Já Passou";
    }
  }
  if(prova == 2){
    res = (70-(av1*2.5)-(av3*3)-(edag*2))/2.5
    res =res.toFixed(2);
    if(res > 0){
    document.getElementById("res").innerHTML = "Precisa tirar "+res+" pontos na "+prova+"º prova para passar";
    }else{
      document.getElementById("res").innerHTML = "Já Passou";
    }
  }
  if(prova == 3){
    res = (70-(av2*2.5)-(av1*2.5)-(edag*2))/3
    res =res.toFixed(2);
    if(res > 0){
    document.getElementById("res").innerHTML = "Precisa tirar "+res+" pontos na "+prova+"º prova para passar";
    }else{
      document.getElementById("res").innerHTML = "Já Passou";
    }
  }
  if(prova == 4){
    res = (70-(av2*2.5)-(av3*3)-(av1*2.5))/2
    res =res.toFixed(2);
    if(res > 0){
    document.getElementById("res").innerHTML = "Precisa tirar "+res+" pontos na "+prova+"º prova para passar";
    }else{
      document.getElementById("res").innerHTML = "Já Passou";
    }
  }
}