var currHover = "";

$(".navbar").hover(
    (e) => {
        if (currHover != "") {
            $(`#${currHover}`).hide()
        }

        var className = $(e.target).attr('class');
        if (className) {
            if (className === "navbar men-menu") {
                currHover = "men-menu"
                $(`#${currHover}`).show();
            }
            else if (className === "navbar women-menu") {
                currHover = "women-menu"
                $(`#${currHover}`).show();
            }
        }
    },
    () => {
        $(`#${currHover}`).hover(
            () => { /* 하단 메뉴 바 안쪽에서 놀고 있을때 */ },
            () => { $(`#${currHover}`).hide(); }

        );
    }
);

$(".changeImg-main").hover(
    (e) => {
        e.target.src = "img/2_right2_img.png";
    },
    (e) => {
        e.target.src = "img/2_right1_img.png";
    }
);


const imgList = ["main_img1", "main_img2", "main_img3", "main_img4"];
let currImgIndex = 0;
let prevImgIndex = 0;
document.querySelector(`.count${currImgIndex}`).style.backgroundColor = "black";

const plusImg = () => {
    prevImgIndex = currImgIndex;
    if (currImgIndex < imgList.length - 1)
        currImgIndex += 1;
    else {
        currImgIndex = 0;
    }
    document.querySelector(".main-img").src = `img/${imgList[currImgIndex]}.png`;
    changed_img_selector();
}

const minusImg = () => {
    prevImgIndex = currImgIndex;
    if (currImgIndex > 0)
        currImgIndex -= 1;
    else {
        currImgIndex = imgList.length - 1;
    }
    document.querySelector(".main-img").src = `img/${imgList[currImgIndex]}.png`;
    changed_img_selector();
}


setInterval(() => {
    plusImg();
}, 5000)


const stopInterval = () => { clearInterval(interval); };

document.getElementById("arrowBtn-left").addEventListener('click',
    () => {
        minusImg();
    }
);
document.getElementById("arrowBtn-right").addEventListener('click',
    () => {
        plusImg();
    }
);
$("#arrowBtn-left").hover(() => { $(this).css("cursor", "pointer") });


function changed_img_selector() {
    document.querySelector(`.count${prevImgIndex}`).style.backgroundColor = "rgb(149, 156, 255)";
    document.querySelector(`.count${currImgIndex}`).style.backgroundColor = "black";

}