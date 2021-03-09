// Дэлгэцтэй ажиллах Контроллер
var uiController = (function () {})();

// Санхүүтэй ажиллах Контроллер
var financeController = (function () {})();

//Програмын холбогч конторллер
var appController = (function (iuController, financeController) {
  var ctrlAddItem = function(){
    console.log("delgetsees ugugdluu awah heseg");
  }
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
    // 1. Оруулах өгөгдлий дэлгэцээс олж авна.
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    // 3. Олж авсан өгөгдлүүдээ вэб дээрэ тохирох хэсэгт нь гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн үлдэгдэл, тооцоог дэлгэц гаргана.
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which ===13){
      ctrlAddItem();
    }
  });
})(appController, financeController);
