
window.onload = function(){
    generateCart();
}


function showL(){
    var dpcnt = document.getElementById('dpCnt');
    //document.getElementById('btn').onclick = function(){
    dpcnt.classList.toggle('fade');
}

function generateCart(){
    cart = []

    const stCart = localStorage.getItem('cart');

    if(stCart){

        cart = JSON.parse(localStorage.getItem('cart')) || [];

        for(var i = 0; i < cart.length; i++){
            content = "";

            content += '<div class="cartTrack">';
            content += '<img src="assets/images/' + cart[i][1] +'" width="50" height="50" style="border-radius: 4px;"/>';
            content += '<span id="cartTrackName">'+ cart[i][2] +'</span>';
            content += '<span id="cartTrackPrice">$17,00</span>';
            content += '</div>';

            document.querySelector("#dpCnt").innerHTML += content;
        }
    }

    else{
        return false;
    }
}