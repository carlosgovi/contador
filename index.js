let contador = 0;
let raund = 0;
    function contadorclick() { 
        
        contador ++;
        document.querySelector("#valor").innerHTML = contador;
        if(contador > 0) {
            valor.style.color = '#fff';
          }
          if(contador < 0) {
            valor.style.color = '#ba215a';
          }
     }
     function disminuirclick() { 
        contador --;
        document.querySelector("#valor").innerHTML = contador;
        if(contador > 0) {
            valor.style.color = '#fff';
          }
          if(contador < 0) {
            valor.style.color = '#ba215a';
          }
     }
     function siguienteclick() { 
         raund ++;
         document.querySelector("#raund").innerHTML = "ROUND  "+ raund;
        contador =(contador+2);
        document.querySelector("#valor").innerHTML = contador;
        if(contador > 0) {
            valor.style.color = '#fff';
          }
          if(contador < 0) {
            valor.style.color = '#ba215a';
          }
     }
     function nuevaclick() { 
         raund =1;
        contador =3;
        document.querySelector("#raund").innerHTML = "ROUND  "+ raund;
        document.querySelector("#valor").innerHTML = contador;
        if(contador > 0) {
            valor.style.color = '#fff';
          }
          if(contador < 0) {
            valor.style.color = '#ba215a';
          }
     }
     function sumaslp() {


      var selec1=Number (document.getElementById('selec1').value);
      var selec2=Number (document.getElementById('selec2').value);
      var selec3=Number (document.getElementById('selec3').value);
      var selec4=Number (document.getElementById('selec4').value);
      var selec5=Number (document.getElementById('selec5').value);
      var selec6=Number (document.getElementById('selec6').value);
      var selec7=Number (document.getElementById('selec7').value);
      var selec8=Number (document.getElementById('selec8').value);
      var selec9=Number (document.getElementById('selec9').value);
      var selec10=Number (document.getElementById('selec10').value);
      var selec11=Number (document.getElementById('selec11').value);
      var selec12=Number (document.getElementById('selec12').value);
      var selec13=Number (document.getElementById('selec13').value);
      var selec14=Number (document.getElementById('selec14').value);
      var selec15=Number (document.getElementById('selec15').value);
      var selec16=Number (document.getElementById('selec16').value);
      var selec17=Number (document.getElementById('selec17').value);
      var selec18=Number (document.getElementById('selec18').value);
      var selec19=Number (document.getElementById('selec19').value);
      var selec20=Number (document.getElementById('selec20').value);
      var res=(selec1+selec2+selec3+selec4+selec5+selec6+selec7+selec8+selec9+selec10+selec11+selec12+selec13+selec14+selec15+selec16+selec17+selec18+selec19+selec20);
  
      document.getElementById('resslp').value=res;
  
    
  }
     
     

