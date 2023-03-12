const image1 = document.querySelector(".port-box1");
const image2 = document.querySelector(".port-box2");
const overlay = document.querySelector(".overlay");
const openPort1 = document.querySelector(".open-port1");
const openPort2 = document.querySelector(".open-port2");
const openPort3 = document.querySelector(".open-port3");
const closePort = document.querySelectorAll(".close-port");


const openPortAll = document.querySelectorAll('.open-port');

for( let k = 0 ; k < openPortAll.length; k++){
  console.log(openPortAll[k]);
}





for (let i = 0; i < closePort.length; i++) {
  closePort[i].addEventListener("click", function () {
    image1.classList.add("hidden");
    overlay.classList.add("hidden");
    closePort[i].classList.add("hidden");
  });

  closePort[i].addEventListener("click", function () {
    image2.classList.add("hidden");
    overlay.classList.add("hidden");
    closePort[i].classList.add("hidden");
  });

  openPort1.addEventListener("click", function () {
    image1.classList.remove("hidden");
    overlay.classList.remove("hidden");
    closePort[i].classList.remove("hidden");
  });

  overlay.addEventListener("click", function () {
    image1.classList.add("hidden");
    overlay.classList.add("hidden");
    closePort[i].classList.add("hidden");
  });

  openPort2.addEventListener("click", function () {
    image2.classList.remove("hidden");
    overlay.classList.remove("hidden");
    closePort[i].classList.remove("hidden");
  });

  overlay.addEventListener("click", function () {
    image2.classList.add("hidden");
    overlay.classList.add("hidden");
    closePort[i].classList.add("hidden");
  });
}
