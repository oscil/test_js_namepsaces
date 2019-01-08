(function(window){
    var BGreader = {};
    var name = "B";
    BGreader.sayB = function (){
    console.log("i say B to " + name);
    }
    window.BGreader = BGreader;
})(window);
