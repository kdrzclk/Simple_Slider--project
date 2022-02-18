var models = [
  {
    name: "Bmw 418d",
    image: "./img/bmw.jpg",
    link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418i-1-5-gran-coupe",
  },

  {
    name: "Mazda CX-3",
    image: "./img/mazda.jpg",
    link: "http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion",
  },

  {
    name: "Volvo S60",
    image: "./img/volvo.jpg",
    link: "http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance",
  },

  {
    name: "Skoda Superb",
    image: "./img/skoda.jpg",
    link: "http://www.arabalar.com.tr/skoda/superb/2019/1-5-tsi-active",
  },

  {
    name: "Honda Civiv",
    image: "./img/honda.jpg",
    link: "http://www.arabalar.com.tr/honda/civic/2019/1-6-elegance",
  },
];

let index = 0;
let slaytCount = models.length;
let interval;

let settings = {
  duration: "2000",
  random: true,
};

// showSlide(index);
init(settings);

// var title = document.querySelector(".card-title");
// var img = document.querySelector(".card-img-top");
// var linkPage = document.querySelector(".card-link");
let leftArrow = document.querySelector(".fa-arrow-circle-left");
let rightArrow = document.querySelector(".fa-arrow-circle-right");
let arrows = document.querySelectorAll(".fas");

// add Event Listeners

leftArrow.addEventListener("click", () => {
  index--;
  showSlide(index);
  console.log(index);
});

rightArrow.addEventListener("click", () => {
  index++;
  showSlide(index);
});

arrows.forEach(function (item) {
  item.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });
});

arrows.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    init(settings);
  });
});

// functions

function init(settings) {
  let previous;
  interval = setInterval(function () {
    if (settings.random) {
      // aynı sayıyı 2 kere üst üste random olarak üretip slaytı 4 saniye bekletmemek için do-while kullanarak random gelen sayı öncekine eşitse tekrar sayı üret komutu vermiş olduk.
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == previous);
      prev = index;
    } else {
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide();
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slaytCount - 1;
  }

  if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
