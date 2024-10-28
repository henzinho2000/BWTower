settings();
links();
slides();

function slides(){
    let count = 1;
    document.getElementById("radio1").checked= true;
    let radio1 = document.getElementById("radio1");
    let radio2 = document.getElementById("radio2");
    let radio3 = document.getElementById("radio3");
    let radio4 = document.getElementById("radio4");
    let radio5 = document.getElementById("radio5");

    radio1.addEventListener("click",()=>{count = 1})
    radio2.addEventListener("click",()=>{count = 2})
    radio3.addEventListener("click",()=>{count = 3})
    radio4.addEventListener("click",()=>{count = 4})
    radio5.addEventListener("click",()=>{count = 5})

    setInterval(()=>{
        nextImage();
    },10000)

    const nextImage = ()=>{
        count++
        if(count > 5){
            count = 1;
        }
        document.getElementById("radio" + count).checked = true;
    }
}

function settings (){
    let btnSettings = document.getElementById("settings");
    let tabSettings = document.getElementById("tabSettings");
    let hidden = true;
    let animating = false;

    btnSettings.addEventListener("click", 
        function viewTheTabSettings (){
            if (animating) return;

            if (hidden) {
                tabSettings.style.display = "flex";
                tabSettings.style.animation = "view 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards";
            } else {
                tabSettings.style.animation = "noview 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards";
            }

            animating = true;
        }
    );

    tabSettings.addEventListener("animationend",
        function verifyIfTheAnimationEnd (){
            animating = false;

            if (!hidden) {
                tabSettings.style.display = "none";
            }

            hidden = !hidden;
        }
    );
}

function links(){
    let btnFitness = document.getElementById("fitness");
    let btnTecnology = document.getElementById("tecnology");
    let btnTools = document.getElementById("tools");
    let btnDecorations = document.getElementById("decorations");
    let btnEntertrainment = document.getElementById("entertainment");

    let info = document.getElementById("info");
    let placeInInfo = false; 
    let infoHidden = true;

    const verifyMouseBtnEnter = ()=>{
        if(infoHidden){
            info.style.display = "flex";
            infoHidden = false;
        }else{
            info.style.display = "none";
            infoHidden = true;
        }
    }

    const verifyIfPlaceInInfo = ()=>{
        if(!placeInInfo){
            info.style.display = "none";
            infoHidden = true;
        }else{
            info.style.display = "flex";
            infoHidden = false;
        }
    }

    verifyThePlaceButtons();
    
    function verifyThePlaceButtons(){
        btnFitness.addEventListener("mouseenter",verifyMouseBtnEnter)
        btnFitness.addEventListener("mouseleave",verifyIfPlaceInInfo)
        btnTecnology.addEventListener("mouseenter",verifyMouseBtnEnter)
        btnTecnology.addEventListener("mouseleave",verifyIfPlaceInInfo)
        btnTools.addEventListener("mouseenter",verifyMouseBtnEnter)
        btnTools.addEventListener("mouseleave",verifyIfPlaceInInfo)
        btnDecorations.addEventListener("mouseenter",verifyMouseBtnEnter)
        btnDecorations.addEventListener("mouseleave",verifyIfPlaceInInfo)
        btnEntertrainment.addEventListener("mouseenter",verifyMouseBtnEnter)
        btnEntertrainment.addEventListener("mouseleave",verifyIfPlaceInInfo)
    }

    info.addEventListener("mouseenter",()=>{
        placeInInfo = true;
        verifyIfPlaceInInfo()
    })
    info.addEventListener("mouseleave", ()=>{
        placeInInfo = false;
        verifyIfPlaceInInfo()
    })
}

