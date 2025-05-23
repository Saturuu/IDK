const characters = {
    "0001": {
        title: "Mario",
        frames: [
            "IMGS/Mario/0001.png",
            "IMGS/Mario/0002.png",
            "IMGS/Mario/0003.png",
            "IMGS/Mario/0004.png",
            "IMGS/Mario/0005.png",
            "IMGS/Mario/0006.png",
            "IMGS/Mario/0007.png",
            "IMGS/Mario/0008.png"]},
    "0002": {
        title: "Toad",
        frames: [
            "IMGS/Toad/0001.png",
            "IMGS/Toad/0002.png",
            "IMGS/Toad/0003.png",
            "IMGS/Toad/0004.png",
            "IMGS/Toad/0005.png",
            "IMGS/Toad/0006.png",
            "IMGS/Toad/0007.png",
            "IMGS/Toad/0008.png"]},
    "0003": {
        title: "Princess Peach",
        frames: [
            "IMGS/Peach/0001.png",
            "IMGS/Peach/0002.png",
            "IMGS/Peach/0003.png",
            "IMGS/Peach/0004.png",
            "IMGS/Peach/0005.png",
            "IMGS/Peach/0006.png",
            "IMGS/Peach/0007.png",
            "IMGS/Peach/0008.png"]}
};


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

let frame = 0;


function ChangeImageTo(x) {
    const img = document.querySelector(".ModelImage");
    if (x == "Left") {
        if (frame == 7) {
            frame = 0;
        } else {
            frame++;
        }
    } else {
        if (frame == 0) {
            frame = 7;
        } else {
            frame--;
        }
    }
    img.src = characters[id].frames[frame];
    console.log(frame);
};


function SetOnStart() {
    document.querySelector(".ModelImage").src = characters[id].frames[0];
    document.querySelector(".MainBarText").textContent = characters[id].title;
};

window.onload = SetOnStart;