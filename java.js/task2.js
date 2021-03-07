/*2. Создать HTML-страницу с кнопкой “Открыть” и модальным окном. На модальном окне должен быть текст 
и кнопка “Закрыть“. Изначально модальное окно не отображается. При клике на кнопку “Открыть” появляется
 модальное окно, на кнопку “Закрыть” – исчезает.*/

 let modal = document.getElementById("openModal");
 let btn = document.getElementsByTagName("btn");
 let close = document.getElementsByTagName("close_window");

 btn.onclick = function (){
     modal.style.display = "block";
}

  close.onclick = function (){
      modal.style.display = "none";

}

window.onclick = function(event){
    if(event.turget === modal){
        modal.style.display = "none";
    }
}


 