const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        .then(localMediaSteam => {
            video.src = window.URL.createObjectURL(localMediaSteam);
            video.play();
        })
        .catch(err => {
            console.error("Couldn't Access Webcam", err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;

    //Video and Canvas size needs to be equal
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        //Get the pixels
        let pixels = ctx.getImageData(0, 0, width, height);
        //Add Effect
        pixels = redEffect(pixels);
        //Put pixels back
        ctx.putImageData(pixels, 0, 0);

    }, 16);
}

function takePhoto() {
    // Play Sound
    snap.currentTime = 0;
    snap.play();

    // Get the data
    const data = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");

    link.href = data;
    link.setAttribute("download", "pic");
    link.innerHTML = `<img src="${data}" alt="Webcam Image"/>`
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    //For each pixel
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i] = pixels.data[i] + 100;
        pixels.data[i + 1] = pixels.data[i + 1] - 50;
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
    }
    return pixels;
}

function rgbSplit(pixels) {
    //For each pixel
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i];
        pixels.data[i + 500] = pixels.data[i + 1];
        pixels.data[i + 250] = pixels.data[i + 2];
    }
    return pixels;
}

function greenScreen(pixels) {
    const levels = {};

    document.querySelectorAll(".rgb input").forEach((input) => {
        levels[input.name] = input.value;
    });

    for (i = 0; i < pixels.data.length; i += 4) {
        red = pixels.data[i];
        green = pixels.data[i + 1];
        blue = pixels.data[i + 2];

        if (red >= levels.rmin &&
            green >= level.gmin &&
            blue >= level.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
                //Set to Transparent
                pixels.data[i + 3] = 0;
        }
    }
}

getVideo();

video.addEventListener("canplay", paintToCanvas);