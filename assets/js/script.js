function calcul() {
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  // on verifie que les valeurs rentrées par l'utilisateur soient bien des nombres
  if(!isNaN(shoeSize) && !isNaN(yearOfBirth)){
    //on autorise la pointure entre 34 ET 52  ---- on autorise les années entre 1900 et 2019 comprises
    if((shoeSize >= 34 && shoeSize <= 52) && (yearOfBirth >= 1900 && yearOfBirth <= 2019)) {   //  connecteur logique : ||=double pipe = ou / &&=et
      var result = (((((shoeSize * 2)+5)*50)-yearOfBirth)+1766);/*ou deuxieme methode pour calcul :
      var result = shoeSize * 2;
      result +=5;
      result *= 50;
      result -= yearOfBirth;
      result += 1766;
      */
      alert(result);
    }else{
      alert('La pointure et/ou la date de naissance ne sont pas des valeurs correctes');
    }
  }else{
    alert('Il faut saisir des chiffres');
  }

}





/*if (isNaN(shoeSize)==false && isNaN(yearOfBirth)==false) {
alert(((((shoeSize*2)+5)*50)-1985)+1766);
}else{
alert('Merci de renseigner les champs!');
}
}
*/
