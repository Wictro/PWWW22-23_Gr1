var listOfAudios  = document.getElementById("list-audios")
var dropArea  = document.getElementById("div2")

document.getElementById("delete-button").addEventListener("click", () => {
    listOfAudios.innerHTML = `<ul>
    <li id="audio" ondrop="drop(event)" ondragover="allowDrop(event)">
            <div draggable="true" ondragstart="drag(event)" id="drag1">
                <audio controls>
                    <source src="./assets/audios/audio1.mp3" type="audio/mp3" />
                </audio>
            </div>
    </li>
    <li>
        <div id="audio" ondrop="drop(event)" ondragover="allowDrop(event)">
            <audio draggable="true" ondragstart="drag(event)" id="drag2" controls>
                <source src="./assets/audios/audio2.mp3" type="audio/mp3" />
            </audio>
        </div>
    </li>
    <li>
        <div id="audio" ondrop="drop(event)" ondragover="allowDrop(event)">
            <audio draggable="true" ondragstart="drag(event)" id="drag3" controls>
                <source src="./assets/audios/audio3.mp3" type="audio/mp3" />
            </audio>
        </div>
    </li>
    <li>
        <div id="audio" ondrop="drop(event)" ondragover="allowDrop(event)">
            <audio draggable="true" ondragstart="drag(event)" id="drag4" controls>
                <source src="./assets/audios/audio4.mp3" type="audio/mp3" />
            </audio>
        </div>
    </li>
    <li>
        <div id="audio" ondrop="drop(event)" ondragover="allowDrop(event)">
            <audio draggable="true" ondragstart="drag(event)" id="drag5" controls>
                <source src="./assets/audios/audio5.mp3" type="audio/mp3" />
            </audio>
        </div>
    </li>
</ul>`
   dropArea.innerHTML = ""
}, false)