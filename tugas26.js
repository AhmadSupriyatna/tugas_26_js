function tugasDuaEnam(){
    var deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    var deret2 = isFinite(deret)
    deret.forEach(function(item) {
        if(deret2==false){
        console.log("Angka ", item, "NOT Infinity")
    }
    else{
        console.log("Angka ", item, "Infinity")
    }
    });
}
tugasDuaEnam()