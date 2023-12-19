/*
*/
let citymenus = document.querySelectorAll(".selectstyle__box__select");
for (let i=0;i<citymenus.length;i++){
  citymenus[i].addEventListener("change",showCities);

}
function showCities(){
  let c1 = citymenus[0].options[citymenus[0].selectedIndex].text;
  document.getElementById("favs").innerHTML = `You chose ${c1}.`;
  let cn = 'Felipe Celular: 2154687968 Email: pipe@jcl.com';
  document.getElementById("favs1").innerHTML = `${cn}.`;
}



let citymenus1 = document.querySelectorAll(".selectstyle__box__select");
for (let i=0;i<citymenus1.length;i++){
  citymenus1[i].addEventListener("change",showCities1);
}
function showCities1(){
  let c2 = citymenus1[1].options[citymenus1[1].selectedIndex].text;
  document.getElementById("favs2").innerHTML = `You chose ${c2}.`;
  /*let cl = 'Contratos: Shangai Senha: Oper4321 Anydesk ADM';
  document.getElementById("favs3").innerHTML = `${cl}.`;*/
  
}