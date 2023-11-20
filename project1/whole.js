
// 메인메뉴바에 hover시 하위메뉴바 노출시키기

var currHover = "";
// currHover : hover 존재 여부 체크할 변수

$(".navbar").hover(
    (e) => {
        if (currHover != "") {
            $(`#${currHover}`).hide();
            // hover가 있으면 기존 hover는 숨기기
        }

        var className = $(e.target).attr('class');
        // 이벤트가 발생한 요소의 클래스를 가져와서 변수 className에 저장
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
            () => { /* 하단 메뉴바 안쪽에 커서가 있을때 */ },
            () => { $(`#${currHover}`).hide(); }
            // 아니면 숨기기
        );
    }
);


// hover로 img 전환시키기
$(".changeImg-main").hover(
    (e) => {
        e.target.src = "img/2_right2_img.png";
    },
    (e) => {
        e.target.src = "img/2_right1_img.png";
    }
);


// main -big-img 전환시키기
const imgList = ["main_img1", "main_img2", "main_img3", "main_img4"];
let currImgIndex = 0;   // 오른쪽으로 전환시 개수 count
let prevImgIndex = 0;   // 왼쪽으로 전환시 개수 count

document.querySelector(`.count${currImgIndex}`).style.backgroundColor = "black";
// .img-count-container안의 div4개를 변경될때마다 배경색 black으로 변경시키기

const nextImg = () => {
    prevImgIndex = currImgIndex;
    if (currImgIndex < imgList.length - 1)
        currImgIndex += 1;
    else {
        currImgIndex = 0;
    }
    document.querySelector(".main-img").src = `img/${imgList[currImgIndex]}.png`;
    changed_img_selector();
}

const prevImg = () => {
    prevImgIndex = currImgIndex;
    if (currImgIndex > 0)
        currImgIndex -= 1;
    else {
        currImgIndex = imgList.length - 1;
    }
    document.querySelector(".main-img").src = `img/${imgList[currImgIndex]}.png`;
    changed_img_selector();
}

function changed_img_selector() {
    document.querySelector(`.count${prevImgIndex}`).style.backgroundColor = "rgb(149, 156, 255)";
    document.querySelector(`.count${currImgIndex}`).style.backgroundColor = "black";

}

setInterval(() => {
    nextImg();
}, 5000)


const stopInterval = () => { clearInterval(interval); };

document.getElementById("arrowBtn-left").addEventListener('click',
    () => {
        prevImg();
    }
);
document.getElementById("arrowBtn-right").addEventListener('click',
    () => {
        nextImg();
    }
);


