
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
        title: "Princess",
        frames: [
            "IMGS/Princess/0001.png",
            "IMGS/Princess/0002.png",
            "IMGS/Princess/0003.png",
            "IMGS/Princess/0004.png",
            "IMGS/Princess/0005.png",
            "IMGS/Princess/0006.png",
            "IMGS/Princess/0007.png",
            "IMGS/Princess/0008.png"]}
};

let frame = 0;


function ChangeImageTo(x) {
    const img = document.querySelector(".ModelImage");
    if (x == "Left") {
        if (frame == 7) {
            frame = 0;
        } else {
            frame++;
        }
        img.src = characters["0002"].frames[frame]
        console.log(frame)
    } else {
        img.src = "IMGS/Toad/0002.png"
    }
}