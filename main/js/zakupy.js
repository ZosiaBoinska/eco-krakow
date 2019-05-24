(function() {

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("myBtn").style.display = "block";
    } else {
    document.getElementById("myBtn").style.display = "none";
    }
  }

  const myScrollBtn = document.getElementById("myBtn");

  myScrollBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  function initModal(modalId, btnId, closeId) {

    const modal = document.getElementById(modalId);

    const btn = document.getElementById(btnId);

    const span = document.getElementById(closeId);

    btn.onclick = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    modal.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  };

const food_items = ['Vege', 'Meat', 'Fish', 'Cheese', 'Pasta'];

function initShoppingModal(param) {
  initModal('myModal'+param, 'myBtn'+param, 'close'+param)
};

for (let counter = 0; counter < food_items.length; counter++) {
  initShoppingModal(food_items[counter]);
};

function initShoppingModal2(param) {
  initModal('myModal'+param+'Maps', 'myBtn'+param+"Maps", 'close'+param+"Maps")
};

for (let counter = 0; counter < food_items.length; counter++) {
  initShoppingModal2(food_items[counter]);
};

})();
