var znakovi=["Ovan", "Bik", "Blizanci", "Rak", "Lav", "Devicav", "Vaga", "Skorpija", "Strelac", "Jarac", "Vodolija", "Ribe"]
var polovi=["Musko","Zensko"]
var znak=prompt("Koji ste horoskopski znak?\nOvan, Bik, Blizanci, Rak, Lav, Devica, Vaga, Škorpija, Strelac, Jarac, Vodolija, Ribe");
var pol=prompt("Koji ste pol?\nMusko ili Zensko");
var num = 0;

  if(znakovi[num] === znak && polovi[0] === pol){
    alert("Vi ste " +pol+" "+znak);
  }else if(znakovi[0] === znak && polovi[1] === pol){
    alert("Vi ste "+pol+" "+znak);
  }else{
    num++;
    alert("Vi ste "+pol+" "+znak);
  }
