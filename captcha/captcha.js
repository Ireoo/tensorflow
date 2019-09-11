const svgCaptcha = require("svg-captcha");
const svgToImg = require("svg-to-img");
const fs = require("fs");
const path = require("path");
const moment = require("moment");

const {
    execSync,
    spawnSync
} = require("child_process");

if (!fs.existsSync(path.join(__dirname, "data")))
    fs.mkdirSync(path.join(__dirname, "data"));

if (!fs.existsSync(path.join(__dirname, "data/train_data")))
    fs.mkdirSync(path.join(__dirname, "data/train_data"));
if (!fs.existsSync(path.join(__dirname, "data/test_data")))
    fs.mkdirSync(path.join(__dirname, "data/test_data"));

const getRandomColor = function() {
    let r = Math.round(Math.random() * 255),
        g = Math.round(Math.random() * 255),
        b = Math.round(Math.random() * 255);
    let color = (r << 16) | (g << 8) | b;
    // console.log(color.toString(16));
    return "#" + color.toString(16);
};

function rnd(n, m) {
    let random = Math.floor(Math.random() * (m - n + 1) + n);
    return random;
}

const code = (_path, cb) => {
        try {
            let fontSize = rnd(40, 50);
            let color = getRandomColor();
            let cap = svgCaptcha.create({
                fontSize,
                width: 80,
                height: 35,
                background: color
            });
            // saveSvgAsPng(cap.data, `./code/${cap.text}.png`);

            svgToImg
                .from(cap.data)
                .toPng()
                .then(img => {
                        fs.writeFileSync(
                            path.join(
                                __dirname,
                                `data/${_path}/${cap.text}_${fontSize}${color}.png`
                            ),
                            img
                        );
                        execSync(`convert ${path.join(
                    __dirname,
                    `data/${_path}/${cap.text}_${fontSize}${color}.png`
                )} -density 300 ${path.join(
                    __dirname,
                    `data/${_path}/${cap.text}_${fontSize}${color}.png`
                )}`);
                // fs.writeFileSync(
                //     path.join(
                //         __dirname,
                //         `data/ground-truth/${cap.text}_${fontSize}${color}.gt.txt`
                //     ),
                //     cap.text
                // );
                console.log(`Image -> ${cap.text}_${fontSize}${color}`);
                cb();
            });
    } catch (e) {
        console.log(e);
    }
};

// (async() => {
//     for (let i = 0; i <= 100000000000; i++) {
//         try {

//         } catch (e) {
//             console.log(e.message);
//         }
//     }
// })();

const async = require("async");

const t = process.argv[2] ? parseInt(process.argv[2]) : 1;

const q = async.queue(code, t);

function go() {
    q.push("train_data", () => {});
}

for (let i = 0; i < 5000; i++) {
    q.push("test_data", () => {});
}

for (let i = 0; i < 1000000; i++) {
    q.push("train_data", () => {});
}