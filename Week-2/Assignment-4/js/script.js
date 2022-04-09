let bannerMain = document.querySelector("h1")

let bannerWordChange = () => {bannerMain.innerText = "Have a Good Day in Pokemon World";}
bannerMain.addEventListener("click", bannerWordChange);

let contentbtn = document.querySelector("button")

let showcontentbtn = () => {document.querySelector(".contentboxbtm").style.display  = "flex";}
contentbtn.addEventListener("click", showcontentbtn)
