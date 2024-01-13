import checkInputCoord from "./check";

class Menu {
  constructor() {
    this.loader = document.querySelector(".loaderWraper");
    this.coctailCard = document.querySelector(".img");
    this.selectCocktail = "";
    this.modal = document.querySelector(".menuBtn");
    this.menuBtnAlco = document.querySelector(".menuListButtonAlco");
    this.menuBtnNonAlco = document.querySelector(".menuListButtonNonAclo"); //
    this.AlcoList = document.querySelector(".Alco");
    this.NonAlcoList = document.querySelector(".notAlco");
    this.MenuClose = document.querySelector(".close--two");
    this.MenuModal = document.querySelector(".menuList");
    this.NotAlcoList = document.querySelector(".notAlco");

    this.images = {
      "Апероль Спритц": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-01.png?raw=true",
        true,
      ],
      Куантрополитан: [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-03.png?raw=true",
        true,
      ],
      "Куантро Физз": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-04.png?raw=true",
        true,
      ],
      "Пина Маргарита": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-05.png?raw=true",
        true,
      ],
      "Лонг Айленд": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-06.png?raw=true",
        true,
      ],
      "Белый Русский": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-07.png?raw=true",
        true,
      ],
      "Голубая Логуна": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-08.png?raw=true",
        true,
      ],
      Обезболивающее: [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-09.png?raw=true",
        true,
      ],
      "Мечта Акапулько": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-10.png?raw=true",
        true,
      ],
      "Кровавая Мери": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-11.png?raw=true",
        true,
      ],
      "Джин Тоник": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-12.png?raw=true",
        true,
      ],
      "Текила Санрайз": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-13.png?raw=true",
        true,
      ],
      Маргарита: [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-14.png?raw=true",
        true,
      ],
      "Малиновая Маргарита": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-15.png?raw=true",
        true,
      ],
      "Острая Тропикана": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-16.png?raw=true",
        true,
      ],
      "Куба Либре": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-17.png?raw=true",
        true,
      ],
      Зомби: [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-18.png?raw=true",
        true,
      ],
      "Зомби #2": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-19.png?raw=true",
        true,
      ],
      Беллини: [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-20.png?raw=true",
        true,
      ],
      Форсаж: [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-21.png?raw=true",
        true,
      ],
      "Педро Пунш": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-22.png?raw=true",
        true,
      ],
      Боярский: [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-23.png?raw=true",
        "alco",
      ],
      "Девственная Мэри": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-24.png?raw=true",
        false,
      ],
      "Pussy Foot": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-25.png?raw=true",
        false,
      ],
      "Морской Бриз": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-26.png?raw=true",
        false,
      ],
      Мохито: [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-27.png?raw=true",
        false,
      ],
      "Обезболивающее Alco-Free": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-28.png?raw=true",
        false,
      ],
      "Яблочное Наслаждение": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-29.png?raw=true",
        false,
      ],
      "Малиновый Слинг": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-30.png?raw=true",
        false,
      ],
      "Рыжая Собака": [
        "https://github.com/AntonGusev111/menucards/blob/master/Cockt-31.png?raw=true",
        true,
      ],
    };
  }

  listener() {
    this.MenuModal.classList.remove("nonexistent");
    this.modal.addEventListener("click", () => {
      if (this.AlcoList.childNodes.length < 1) {
        this.createMenuList();
      }
      this.modal.style.zIndex = "-1";
      this.openAndCloseMenu(this.MenuModal);
    });
    this.menuBtnAlco.addEventListener("click", () => {
      this.openAdnCloseCut(this.AlcoList);
    });
    this.menuBtnNonAlco.addEventListener("click", () => {
      this.openAdnCloseCut(this.NotAlcoList);
    });

    this.MenuClose.addEventListener("click", () => {
      this.modal.style.zIndex = "3";
      this.openAndCloseMenu(this.MenuModal);
    });
    document.addEventListener("click", (e) => {
      if (e.target.classList[0] == "CocktailName") {
        this.selectCocktail = e.target.innerText;
        this.modal.style.zIndex = "3";
        this.selectCocktailCard();
      }
    });
  }

  openAdnCloseCut(cut) {
    if (cut.classList.contains("maxH")) {
      cut.classList.add("minH");
      cut.classList.remove("maxH");
    } else {
      cut.classList.remove("minH");
      cut.classList.add("maxH");
    }
  }

  createMenuList() {
    for (let item in this.images) {
      if (this.images[item][1]) {
        this.createList(this.AlcoList, item);
      } else {
        this.createList(this.NotAlcoList, item);
      }
    }
  }

  createList(position, value) {
    let listString = document.createElement("div");
    listString.classList.add("CocktailName");
    listString.innerHTML = value;
    position.prepend(listString);
  }

  selectCocktailCard() {
    this.coctailCard.classList.remove("appearance");
    this.coctailCard.classList.add("attenuation");
    setTimeout(() => {
      this.loader.classList.remove("nonexistent");
    }, 500);
    this.openAndCloseMenu(this.MenuModal);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const img = new Image();
    img.src = this.images[this.selectCocktail][0];
    this.coctailCard.src = this.images[this.selectCocktail][0];
    img.onload = () => this.changeCard(img.src);
  }

  changeCard(newSrc) {
    this.coctailCard.src = newSrc;
    setTimeout(() => {
      this.coctailCard.classList.remove("attenuation");
      this.coctailCard.classList.add("appearance");
      this.loader.classList.add("nonexistent");
      setTimeout(() => {
        this.loader.classList.add("nonexistent");
      }, 1500);
    }, 10);
  }

  openAndCloseMenu(button) {
    if (button.classList.contains("hidden")) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
  }
}

let menu = new Menu();
menu.listener();
