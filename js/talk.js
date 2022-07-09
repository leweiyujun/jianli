var talk = "talk"
new TypeIt("#talk", {
    
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100, 
    afterString: async () => {
        // Will fire after each string in the queue,
        // including those added by the `.type()` instance method.
        document.getElementById("talk").style.display="none";
        document.getElementById("bg1").style.display="none";
      },
}).go()
function mouse(){

  new TypeIt("#showme",{
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    breakLines: true,
    speed: 100, 
  }).go()
}





  