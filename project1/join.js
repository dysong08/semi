
const userIdRegExp = /^[a-zA-Z0-9]{4, 15}$/;
const userPwdRegExp = /^[A-Za-z\d@$!%*?&]{8, 16}$/;

//input 체크 값 ..
const idVal = document.getElementById("#userid");
const idWarningText = document.querySelector(".userid");
console.log("??????");
idVal.addEventListener('change', () => {
    console.log("/?/")
    if (userIdRegExp.test(idVal.value)) {
        console.log(idVal);
        console.log("아이디 체크 일치함 ~");
        idWarningText.style.display = "none";
    }
    else {
        idWarningText.style.display = "block";
        console.log("일치 안함ㅎ");
    }
});


function login() {


    if (userIdRegExp.test(userId.value) && userPwdRegExp.test(userPwdRegExp).value) {

    } else {
        alert("");
    }


}
