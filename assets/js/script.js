function getNumber() {
var pointure = document.getElementById('pointure').value;
var annee = document.getElementById('annee').value;
if (isNaN(pointure)==false && isNaN(annee)==false) {
              alert(((((pointure*2)+5)*50)-1985)+1766);
            }else{
              alert('Merci de renseigner les champs!');
}
}
