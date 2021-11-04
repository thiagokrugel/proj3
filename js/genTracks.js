var tracks = [["gameboy.png","Again","again.wav", "C minor", 130],
["aura.png","Aura","aura.wav", "A# major", 85],
["tooMuch.png","Too Much","too_much.wav", "D# minor", 170],
["kyushu.png","Kyushu","kyushu.wav", "F# minor", 120],
["sweetDreams.png","Sweet Dreams","sweet_dreams.wav", "D major", 125],
["lacoste.png","Lacoste","lacoste.wav", "F insen", 105],
["cobain.png","Cobain","cobain.wav", "D major", 118],
["unfaithful.png","Unfaithful","unfaithful.wav", "F# minor", 120],
["gone.png","Gone","gone.wav", "G major", 130],
["memories.png","Memories","memories.wav", "F major", 125]];

$(document).ready(function() {
    generateTracks();
});


function generateTracks(){
    
    for(var i = 0; i < tracks.length; i++){
        var content = "";

        content += "<div class='track1'>";
        content += "<img class='coverT' src='assets/images/" + tracks[i][0] + "' width='70' height='70' style='display: block; border-radius: 4px;' />";
        content += '<div class="tContent">';
        content += '<a href="" id="tTitle">' + tracks[i][1] + '</a>';
        content += '<audio class="player2" src="assets/audio/' + tracks[i][2] + '" type="audio/wav" controls="controls"></audio>';
        content += '</div>';
        content += '<div class="tContentRight">';
        content += '<div class="sBPM">';
        content += '<span id="scale">' + tracks[i][3] + '</span>';
        content += '<span id="bpm">' + tracks[i][4] + '</span>';
        content += '</div>';
        content += '<div class="buyTrack">';
        content += '<a href="" id="trackBuyButton"><i class="far fa-credit-card"> $</i>17,00</a>';
        content += '</div>';
        content += '</div>';
        content += '</div>';

        document.querySelector(".tracksContent").innerHTML += content;
    }
    
}



