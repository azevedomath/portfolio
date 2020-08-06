console.log("ready!");

function changeVisible(){
    console.log("changing...");
    let sectionList = document.querySelectorAll(".hidden");
    sectionList.forEach(function(section){
        if(isVisible(section)){
            section.classList.remove("hidden");
        }else{
            section.classList.add("hidden");
        }
    });
};

function isVisible(el){
    let elBox = el.getBoundingClientRect();
    let dist = -100;

    if(elBox.top - window.innerHeight < dist){
        return true;
    }else{
        return false;
    }
}

document.addEventListener("scroll", ttr(changeVisible, 100));
changeVisible();

function ttr(func, time){
    var total = Date.now();
    return function(){
        if((total + time - Date.now()) < 0){
            func();
            total = Date.now();
        }
    }
}