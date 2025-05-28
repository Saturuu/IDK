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

let ImageIndex = 0;
let interval = null;

let frame = 0;


function NextImage() {
    ImageIndex ++;
    DisplayImage(ImageIndex);
};

function PrevImage() {
    ImageIndex --;
    DisplayImage(ImageIndex);
};

function DisplayImage(index) {
    const Images = document.querySelectorAll(".ModelImage");

    if (index >= Images.length) {
        ImageIndex = 0;
    }else if(index < 0) {
        ImageIndex = Images.length - 1;
    }

    Images.forEach(image => {
        image.classList.remove("VisibleImage");
    });
    Images[ImageIndex].classList.add("VisibleImage");
};


function SetOnStart() {
    document.querySelector(".MainBarText").textContent = characters[id].title;

    characters[id].frames.forEach((index) => {
        const newElement = document.createElement("img");
        newElement.id = "SpinPhoto";
        newElement.className = "ModelImage VisibleImage";
        newElement.src = index;
        newElement.alt = index;
        document.querySelector(".ImageContainer").appendChild(newElement);
    });
    DisplayImage();
};

window.onload = SetOnStart;