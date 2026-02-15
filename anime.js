const bouton = document.getElementById("monBouton");
const body = document.body;
bouton.addEventListener("click", function() {
   body.classList.toggle("mode-sombre");
    if (body.classList.contains("mode-sombre")) {
        bouton.textContent = "Activer le mode clair";
    } else {
        bouton.textContent = "Activer le Dark Mode";
    }
});

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const targetId = tab.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
    });
});
    
document.addEventListener('play' , function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audio[i].pause();
        }
    }
}, true); 