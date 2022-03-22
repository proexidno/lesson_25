
let AnswGrid = [], bank = ["/images/1.jpg", "/images/1.jpg", "/images/2.jpg", "/images/2.jpg", "/images/3.jpg", "/images/3.jpg", "/images/4.jpg", "/images/4.jpg", "/images/5.jpg", "/images/5.jpg", "/images/6.jpg", "/images/6.jpg", "/images/7.jpg", "/images/7.jpg", "/images/8.jpg", "/images/8.jpg", "/images/9.jpg", "/images/9.jpg", "/images/10.jpg", "/images/10.jpg"], k = false, hex = 'url("http://127.0.0.1:5500/images/hex.jpg")';
for (let i = 0; i < 20; i++) {
    let a = Math.floor(Math.random() * bank.length)
    AnswGrid.push(bank[a])
    bank.splice(a, 1)
}
for (let i = 0; i < 5; i++) {
    $("#grid").append($("<li>"))
}

$("li").each( function (index) {
    for (let i = 0; i < 4; i++){
        $(this).append($("<div>").attr("row", index).attr("col", i).css("background-image", "url(/images/hex.jpg)"))
    }
});
let B = undefined
console.log(AnswGrid);
$("ul div").click( function () {
    if ($(this).css("background-image") == hex){
        let ID = Number($(this).attr("row")) * 4 + Number($(this).attr("col")), thisObj = $(this);
        $(this).css("background-image", "url(" + AnswGrid[ID] + ")")
        if (k) {
            ID2 = Number(B.attr("row")) * 4 + Number(B.attr("col"));
            if (AnswGrid[ID] != AnswGrid[ID2] && ID != ID2) {
                let timeout = setTimeout(function () {
                    thisObj.css("background-image", hex)
                    B.css("background-image", hex)
                }, 1000)
            }
            k = false
        }else {
            B = $(this)
            k = true
        }
    }
});