F = 1;
var falhas = F;

function criarBlocos(){
  const jogo = document.querySelector("#jogo");
  
    const qtd = 4;

    var corretos = Array.from({length: 1}, () => Math.floor(Math.random() * (qtd*5-1)));
  console.log(corretos);
  
    let gtc = "";
    let codCell = 0;
    for (let c=0; c<5; c++){
        
        for (let k = 0; k<qtd; k++){
            const bloco = document.createElement("div");
            bloco.classList.add('box');
            bloco.innerHTML = "<span class='infoBloco'>"+codCell+"</span>";
            bloco.value = codCell;
            bloco.addEventListener("click", function() {
              if (corretos.includes(this.value)){
                  this.style.backgroundColor = "green";
                alert("Você ganhou!!! Erros: "+ falhas);
                
              }else{
                  this.style.backgroundColor = "red";
                  falhas = F++;
              }
                                
                //alert(this.value);
                spanClicado = document.querySelector("#spanClicado");
                spanClicado.innerHTML = falhas//this.value;
              });

            bloco.addEventListener("mouseover", function() {
                this.style.border = "2px solid orange";
              });  
            
            bloco.addEventListener("mouseout", function() {
                this.style.border = "1px solid black";
              });  
            
            jogo.appendChild(bloco);

            codCell++;
        }    
        gtc = gtc + " auto";
    }
  
    jogo.style.gridTemplateColumns = gtc;
}