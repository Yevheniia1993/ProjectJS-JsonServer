// КОРЗИНА
// проверка на наличие корзины в локал сторад;
// localStorage.setItem("mybin", null);
// localStorage.clear();
if (document.getElementsByClassName("binSumma").length !== 0) {
  var summa = document.getElementsByClassName("binSumma")[0].innerHTML;
  console.log(localStorage.getItem("mybinS"));
  if (summa == 0) {
    document.getElementsByClassName("binForTovars")[0].style.display = "none";
  } else {
    document.getElementsByClassName("binForTovars")[0].style.display = "block";
  }
}
console.log(document.getElementsByClassName("binForTovars ")[0]);

if (
  localStorage.getItem("mybin") !== "null"
  // localStorage.getItem("mybin").length > 4
) {
  console.log("111");
  if (document.getElementsByClassName("binForTovars ")[0] !== undefined) {
    console.log("2222");
    document.getElementsByClassName("binForTovars ")[0].style.display = "block";
    document.getElementsByClassName("binOrders")[0].innerHTML = JSON.parse(
      localStorage.getItem("mybin")
    );
    document.getElementsByClassName("binSumma")[0].innerHTML = JSON.parse(
      localStorage.getItem("mybinS")
    );
    document.getElementsByClassName("ourBook")[0].innerHTML = Number(
      localStorage.getItem("accaunt")
    );
  }
} else {
  document.getElementsByClassName("binForTovars ")[0].style.display = "none";
}

if (document.getElementsByClassName("LoginMy").length !== 0) {
  document.getElementsByClassName("LoginMy")[0].innerHTML = JSON.parse(
    localStorage.getItem("myX")
  );
}
function forBuy() {
  console.log(localStorage.getItem("accaunt"));
  if (localStorage.getItem("accaunt") == null) {
    localStorage.setItem("accaunt", 1);
  } else {
    var accaunter = Number(localStorage.getItem("accaunt"));
    accaunter = accaunter + 1;
    localStorage.setItem("accaunt", accaunter);
    console.log(accaunter);
  }
  var accaunter = Number(localStorage.getItem("accaunt"));
  document.getElementsByClassName("ourBook")[0].innerHTML = accaunter;
}
function Tovar(mythis) {
  mythis.disabled = true;
  var name = mythis.title;
  var price = mythis.getAttribute("alt");
  var foto = mythis.getAttribute("data-img");
  var myfoto = "<img src=" + foto + ">";
  console.log(foto);
  document.getElementsByClassName("binForTovars")[0].style.display = "block";
  var order = document.getElementsByClassName("binOrders")[0].innerHTML;
  document.getElementsByClassName("binOrders")[0].innerHTML =
    "<div class='forOrder'>" +
    order +
    "<div class='orderBin'>" +
    "<div class='forMyFoto'>" +
    myfoto +
    "</div>" +
    "<div class='nameBin'>" +
    name +
    "</div>" +
    "-" +
    "<div class='priceBin'>" +
    price +
    "</div>" +
    "<div class='priceBin'>" +
    "грн" +
    "</div>" +
    "<button class='Plus' onclick=Plus(this," +
    price +
    ")> + </button>" +
    "<span class='one'> 1 </span>" +
    "<button class='Minus' onclick=Minus(this," +
    price +
    ")> - </button>" +
    "<button class='deleteTovar' onclick=MyDelete(this," +
    price +
    ")>x</button>" +
    "</div>" +
    "</div>";
  var z = document.getElementsByClassName("binSumma")[0].innerHTML;
  document.getElementsByClassName("binSumma")[0].innerHTML =
    Number(z) + Number(price);
  var bin = document.getElementsByClassName("binOrders")[0].innerHTML;
  localStorage.setItem("mybin", JSON.stringify(bin));
  var summa = document.getElementsByClassName("binSumma")[0].innerHTML;
  localStorage.setItem("mybinS", JSON.stringify(summa));
}
function MyDelete(mythis, price) {
  var x =
    mythis.previousSibling.previousSibling.previousSibling.previousSibling
      .previousSibling.previousSibling.previousSibling.innerHTML;

  // mythis.parentNode - обращаемся от нашей кнопки к родителю
  mythis.parentNode.remove();
  var bin = document.getElementsByClassName("binOrders")[0].innerHTML;
  localStorage.setItem("mybin", JSON.stringify(bin));
  console.log(localStorage.getItem("mybin"));
  // удаляем родительский див
  console.log(mythis.previousSibling.previousSibling);
  var y = document.getElementsByClassName("binSumma")[0].innerHTML;
  document.getElementsByClassName("binSumma")[0].innerHTML =
    Number(y) -
    Number(price) * Number(mythis.previousSibling.previousSibling.innerHTML);
  var summa = document.getElementsByClassName("binSumma")[0].innerHTML;

  if (localStorage.getItem("page") == "1") {
    document.getElementsByClassName("gallery-buttonDet")[0].disabled = false;
  } else {
    for (var tovar of document.getElementsByClassName("gallery-button")) {
      if (tovar.title == x) {
        tovar.disabled = false;
      }
    }
  }
  localStorage.setItem("mybinS", JSON.stringify(summa));
  if (summa == 0) {
    document.getElementsByClassName("binForTovars")[0].style.display = "none";
  } else {
    document.getElementsByClassName("binForTovars")[0].style.display = "block";
  }
  // Для счетчика корзины
  if (localStorage.getItem("accaunt") == null) {
    localStorage.setItem("accaunt", 1);
  } else {
    var accaunter = Number(localStorage.getItem("accaunt"));
    accaunter =
      accaunter - Number(mythis.previousSibling.previousSibling.innerHTML);
    localStorage.setItem("accaunt", accaunter);
    console.log(accaunter);
  }
  var accaunter = Number(localStorage.getItem("accaunt"));
  document.getElementsByClassName("ourBook")[0].innerHTML = accaunter;
  // localStorage.setItem("mybin", "");
  localStorage.setItem("mybin", null);
}
function Plus(mythis, price) {
  var x = mythis.nextSibling.innerHTML;
  var z = document.getElementsByClassName("binSumma")[0].innerHTML;
  if (mythis.nextSibling.innerHTML == 10) {
    mythis.nextSibling.innerHTML = Number(mythis.nextSibling.innerHTML);
    document.getElementsByClassName("binSumma")[0].innerHTML = Number(
      document.getElementsByClassName("binSumma")[0].innerHTML
    );
  } else {
    mythis.nextSibling.innerHTML = Number(mythis.nextSibling.innerHTML) + 1;
    document.getElementsByClassName("binSumma")[0].innerHTML =
      Number(document.getElementsByClassName("binSumma")[0].innerHTML) +
      Number(price);
  }
  var bin = document.getElementsByClassName("binOrders")[0].innerHTML;
  JSON.stringify(bin);
  localStorage.setItem("mybin", JSON.stringify(bin));
  var summa = document.getElementsByClassName("binSumma")[0].innerHTML;
  JSON.stringify(summa);
  localStorage.setItem("mybinS", JSON.stringify(summa));
  // Для счетчика корзины
  if (localStorage.getItem("accaunt") == null) {
    localStorage.setItem("accaunt", 1);
  } else {
    var accaunter = Number(localStorage.getItem("accaunt"));
    accaunter = accaunter + 1;
    localStorage.setItem("accaunt", accaunter);
    console.log(accaunter);
  }
  var accaunter = Number(localStorage.getItem("accaunt"));
  document.getElementsByClassName("ourBook")[0].innerHTML = accaunter;
}
function Minus(mythis, price) {
  var x = mythis.previousSibling.innerHTML;
  // previousSibling - это сосед предыдущий
  var z = document.getElementsByClassName("binSumma")[0].innerHTML;
  if (mythis.previousSibling.innerHTML == 1) {
    mythis.previousSibling.innerHTML = Number(x);
    document.getElementsByClassName("binSumma")[0].innerHTML = Number(
      document.getElementsByClassName("binSumma")[0].innerHTML
    );
  } else {
    mythis.previousSibling.innerHTML = Number(x) - 1;
    document.getElementsByClassName("binSumma")[0].innerHTML =
      Number(document.getElementsByClassName("binSumma")[0].innerHTML) -
      Number(price);
  }
  var bin = document.getElementsByClassName("binOrders")[0].innerHTML;
  JSON.stringify(bin);
  localStorage.setItem("mybin", JSON.stringify(bin));
  var summa = document.getElementsByClassName("binSumma")[0].innerHTML;
  JSON.stringify(summa);
  localStorage.setItem("mybinS", JSON.stringify(summa));
  // Для счетчика корзины
  if (localStorage.getItem("accaunt") == null) {
    localStorage.setItem("accaunt", 1);
  } else {
    var accaunter = Number(localStorage.getItem("accaunt"));
    accaunter = accaunter - 1;
    localStorage.setItem("accaunt", accaunter);
    console.log(accaunter);
  }
  var accaunter = Number(localStorage.getItem("accaunt"));
  document.getElementsByClassName("ourBook")[0].innerHTML = accaunter;
}
function Order() {
  location.href =
    "file:///Users/yevheniichuhuitsev/Yevheniia/ProjectJS+JsonServer/index.html";
}
//   КОНЕЦ КОРЗИНЫ
//   ПОИСК ТОВАРОВ
function forSearch() {
  x = document.getElementsByClassName("inputSearch")[0].value;
  fetch("http://localhost:3000/children")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var searchConteiner = [];
      var engSearchConteiner = [];
      for (poptov of data) {
        if (poptov.UKtitle.indexOf(x) != -1) {
          var search = poptov;
          searchConteiner.push(search);
        }
      }
      localStorage.setItem("mysearch", JSON.stringify(searchConteiner));
      console.log(JSON.parse(localStorage.getItem("mysearch")));
      if (JSON.parse(localStorage.getItem("mysearch")) == 0) {
        alert("Пошук не дав результатів");
      } else {
        location.href = "search.html";
      }
    });
}
// Конец поиска товаров
if (document.getElementsByClassName("left-topic-title").length !== 0) {
  fetch("http://localhost:3000/Catalog")
    .then((response) => {
      // респонс-переменная в которой находятся данные ответа сервера
      return response.json();
      // получили данныес сервера и превратили в читаемый вид
    })
    .then((data) => {
      // переменная дата в ней лежат все данные в читаемом виде
      console.log(data);
      for (var tovar of data) {
        document.getElementsByClassName("left-topic-title")[0].innerHTML =
          document.getElementsByClassName("left-topic-title")[0].innerHTML +
          '<a class="leftForHref" href="katalog.html?page=' +
          tovar.title +
          '">' +
          '<div class="left-topic-title">' +
          tovar.UKtitle +
          "</div>" +
          "</a>";
      }
    });
}
if (document.getElementsByClassName("gallery-product").length !== 0) {
  fetch("http://localhost:3000/children")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (tovar of data) {
        document.getElementsByClassName("gallery-product")[0].innerHTML =
          document.getElementsByClassName("gallery-product")[0].innerHTML +
          "<div class='gallery-product-book'>" +
          tovar.foto +
          "<div class='gallery-nameC'>" +
          tovar.UKtitle +
          "</div>" +
          "<div class='gallery-price'>" +
          tovar.price +
          "грн" +
          "</div>" +
          "<button data-img='" +
          tovar.fotoimg +
          "'title='" +
          tovar.UKtitle +
          "'' alt='" +
          tovar.price +
          "'class='gallery-button' onclick=forBuy();Tovar(this)>Купити</button>" +
          "</div>";
      }
    });
}
if (document.getElementsByClassName("body-right-box1").length) {
  fetch("http://localhost:3000/child")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (tovar of data) {
        document.getElementsByClassName("body-right-box1")[0].innerHTML =
          document.getElementsByClassName("body-right-box1")[0].innerHTML +
          '<div class="product-title">' +
          '<a class="rightForHref" href="PopularTovars.html?page=' +
          tovar.title +
          '">' +
          tovar.UKTitle +
          "</div>";
      }
    });
}
// Для личного кабинета
function myCabinet() {
  if (localStorage.getItem("myX") != null) {
    location.href = "vi-v-kabinete.html";
  } else {
    location.href = "my-kabinet.html";
  }
}
