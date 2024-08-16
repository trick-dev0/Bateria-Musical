document.body.addEventListener("keyup", (event)=>{
    playSound(event.code.toLocaleLowerCase())
    // O .code mostra identifica quala tecla foi pressionada
    // O toLocaleLowerCase() foi adicionado para ficar igual os arquivos de sons
});

// Evento para digitar a letra e tocar a música 
document.querySelector(".composer button").addEventListener("click", ()=>{
    let tecla = document.querySelector('#input').value;

    if(tecla !== ""){
        // Tranformo o valor obtido no inpu de texto em array
        let letra = tecla.split("");
        playComposition(letra);
    }
})

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    // Caso o elemento for encontrado tocará a música
    if(audioElement){
        // A função play() é da tag <audio> onde nos permite tocar a música;
        audioElement.play();

        // Reinicia a reprodução de um arquivo de áudio, levando-o de volta ao seu ponto de partida.
        audioElement.currentTime = 0;
    };

    // Função para mostrar as teclas que estão sendo utilizadas 
    if(keyElement){
        // Adiciona a uma classe para mostrar o que está sendo digitado
        keyElement.classList.add('active');
        // Função para remover a classe dpois de um tempo
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
};

// Função para tocar os sons que serão digitados no input de texto
function playComposition(letra){
    // Criei um time para ir adicionando o tempo para cada musica tocar 
    let time = 0
    for(let songItem of letra){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, time)
        // adiciona 1/4 de segundo para que ctenha um itervalo de tempo para cada item do array 
        time += 250;
    };
};