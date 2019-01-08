// browser-sync start --server --directory --files "**/*"

// function MyConstructor(value){
//     this.myvar = value;
// };
//
// MyConstructor.prototype.getValue = function(){
//     console.log("in prototype function value = " + this.myvar);
// }
//
// obj = new MyConstructor(5);

(function(window){
    var AGreader = {};
    var name = "A";

    AGreader.sayA = function () {
        console.log("i say A to " + name);
    };

    window.AGreader = AGreader;
})(window);


