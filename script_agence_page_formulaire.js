function test() {

varPrenom=document.getElementById("prenom").value
if (varPrenom!="") {
    varPrenom = true;
}
else {
    varPrenom = false;
}
varNom=document.getElementById("nom").value
if (varNom!="") {
    varNom = true;
}
else {
    varNom = false;
}
varEmail=document.getElementById("email").value
if (varEmail!="") {
    varEmail = true;
}
else {
    varEmail = false;
}
varTel=document.getElementById("tel").value
if (varTel!="") {
    varTel = true;
}
else {
    varTel = false;
}
}


function comparaison_dates ()  {

date1=new Date(document.getElementById("dateDepart").value)
date2=new Date(document.getElementById("dateRetour").value)
d1=date1.valueOf()
d2=date2.valueOf()
if (d1<d2){
    valDate=true;
}
else{
    valDate=false;
}

}