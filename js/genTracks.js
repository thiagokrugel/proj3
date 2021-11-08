var tracks = [[0, "gameboy.png","Again","again.wav", "C minor", 130, false],
[1, "aura.png","Aura","aura.wav", "A# major", 85, false],
[2, "tooMuch.png","Too Much","too_much.wav", "D# minor", 170, false],
[3, "kyushu.png","Kyushu","kyushu.wav", "F# minor", 120, false],
[4, "sweetDreams.png","Sweet Dreams","sweet_dreams.wav", "D major", 125, false],
[5, "lacoste.png","Lacoste","lacoste.wav", "F insen", 105, false],
[6, "cobain.png","Cobain","cobain.wav", "D major", 118, false],
[7, "unfaithful.png","Unfaithful","unfaithful.wav", "F# minor", 120, false],
[8, "gone.png","Gone","gone.wav", "G major", 130, false],
[9, "memories.png","Memories","memories.wav", "F major", 125, false]];

var cart = [];

$(document).ready(function() {
    generateTracks();
});


function generateTracks(){

    document.querySelector(".tracksContent").innerHTML = ""
    
    for(var i = 0; i < tracks.length; i++){
        var content = "";
        if (tracks[i][6] == false){
            content += "<div class='track1'>";
            content += "<img class='coverT' src='assets/images/" + tracks[i][1] + "' width='70' height='70' style='display: block; border-radius: 4px;' />";
            content += '<div class="tContent">';
            content += '<a href="" id="tTitle">' + tracks[i][2] + '</a>';
            content += '<audio class="player2" src="assets/audio/' + tracks[i][3] + '" type="audio/wav" controls="controls"></audio>';
            content += '</div>';
            content += '<div class="tContentRight">';
            content += '<div class="sBPM">';
            content += '<span id="scale">' + tracks[i][4] + '</span>';
            content += '<span id="bpm">' + tracks[i][5] + '</span>';
            content += '</div>';       
            content += '<div class="buyTrack">';
            content += '<a id="trackBuyButton" onclick="comprar(' + tracks[i][0] + ')"><i class="far fa-credit-card"> $</i>17,00</a>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
        }
        else {
            content += "<div class='track1'>";
            content += "<img class='coverT' src='assets/images/" + tracks[i][1] + "' width='70' height='70' style='display: block; border-radius: 4px;' />";
            content += '<div class="tContent">';
            content += '<a href="" id="tTitle">' + tracks[i][2] + '</a>';
            content += '<audio class="player2" src="assets/audio/' + tracks[i][3] + '" type="audio/wav" controls="controls"></audio>';
            content += '</div>';
            content += '<div class="tContentRight">';
            content += '<div class="sBPM">';
            content += '<span id="scale">' + tracks[i][4] + '</span>';
            content += '<span id="bpm">' + tracks[i][5] + '</span>';
            content += '</div>';       
            content += '<div class="buyTrack">';
            content += '<a id="trackBuyButton">Comprado</a>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
        }
        
        document.querySelector(".tracksContent").innerHTML += content;
    }
    
}

function comprar(id){

    tracks[id][6] = true;

    cart.push(tracks[id])

    window.localStorage.setItem("cart", JSON.stringify(cart))


    generateTracks();

    $('.player2').mediaelementplayer({
        alwaysShowControls: true,
        features: ['playpause','volume','progress'],
        audioVolume: 'horizontal',
        audioWidth: 400,
        audioHeight: 120
    });
}

