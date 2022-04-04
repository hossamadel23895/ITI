let cartArr = [];

// The Start of the project.
$(() => {
  // Render menu items (Using items.js items)
  for (let element of items) {
    const item = $(".item.hidden").clone();
    item.addClass("menuItem").removeClass("hidden").appendTo(".menu");
    item.children(".itemName").html(`${element.name}`);
    item.children(".itemPrice").html(`${element.price}`);
    item.children(".itemImage").attr("src", element.imgSrc);
  }

  // Make the Menu items draggable.
  $(".menuItem").draggable({
    stop: function (e) {
      if (e.clientX > 600 && 1000 - e.clientY > 400) {
        moveToCart($(this).children(".addToCart"));
        billRender();
      }
    },
    helper: "clone",
  });

  // Make the cart sortable and removable by drag.
  $(".cart").sortable({
    stop: function (e, ui) {
      if (e.clientX < 1000 && 1000 - e.clientY > 400) {
        removeItem($(ui.item));
        billRender();
      }
    },
  });

  $(".cart").droppable();

  // Adding functionality to all buttons
  $("body").on("click", ".addToCart", function () {
    moveToCart($(this));
  });
  $("body").on("click", "#quantatiyplus", function () {
    increaseQuantity($(this));
  });
  $("body").on("click", "#quantatiyminus", function () {
    decreaseQuantity($(this));
  });
  $("body").on("click", ".removebutton", function () {
    removeItem($(this).parent(".cartItemExtraDiv").parent(".item"));
  });
});



// Functions

const addCartItem = (e) => {
  // Cloning the hidden standard item and making it unhidden.
  let cartItemExtraDiv = $(".cartItemExtraDiv.hiddentool").clone();
  cartItemExtraDiv.removeClass("hiddentool");
  
  // Cloning the dragged menu item and make it a cart item.
  let draggedMenuItem = e.parents(".item").clone();

  // Altering the item specific class to be a cart items.
  draggedMenuItem.removeClass("menuItem").addClass("cartItem");

  // Removing unneeded attributes.
  draggedMenuItem.children(".addToCart").remove();
  
  // Adding cart menu item attributes
  $(cartItemExtraDiv).appendTo(draggedMenuItem);
  draggedMenuItem.appendTo(".cart");

  let itemName = draggedMenuItem.children(".itemName").html();
  let itemPrice = draggedMenuItem.children(".itemPrice").html();
  let itemQuantity = 1;
  let item = {
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity,
  };
  cartArr.push(item);

  billRender();
};

const moveToCart = (e) => {
  $(() => {
    let addingDone = false;
    let draggedMenuitemName = e.siblings(".itemName").html();
    // Checking if cart is empty.
    if ($("body > .container > .cart > .cartItem").html() == undefined) {
      addCartItem(e);
      addingDone = true;
    } else {
      // Checking if the purchased item is already existing in the cart.
      $("body > .container > .cart > .cartItem").each(function (i, v) {
        if ($(this).children(".itemName").html() == draggedMenuitemName) {
          increaseQuantity(
            $(this).children(".cartItemExtraDiv").children("#quantatiyplus")
          );
          addingDone = true;
        }
      });
    }
    // Adding the item if it passes the previous 2 conditions without being added.
    if (addingDone == false) {
      addCartItem(e);
    }
  });
};

const updateCartArr = () => {
  cartArr = [];
  $("body > .container > .cart > .cartItem").each(function (i, v) {
    let itemName = $(this).children(".itemName").html();
    let itemPrice = Number($(this).children(".itemPrice").html());
    let itemQuantity = Number(
      $(this).children(".cartItemExtraDiv").children(".itemQuantity").html()
    );
    let item = {
      name: itemName,
      price: itemPrice,
      quantity: itemQuantity,
    };
    cartArr.push(item);
  });
};

const billRender = () => {
  $(() => {
    let subtotal = 0;
    cartArr.forEach((element) => {
      subtotal += element.price * 1;
    });
    // Calculating Subtotal.
    $(".bill > .billRow > #subtotal").html(subtotal + " LE");
    // Calculating VAT.
    $(".bill > .billRow > #VAT").html(Math.ceil(subtotal * 0.14) + " LE");
    // Calculating delivery.
    if ($("body > .container > .cart > .cartItem").html() == undefined) {
      $(".bill > .billRow > #delivery").html("0 LE");
    } else {
      $(".bill > .billRow > #delivery").html("30 LE");
    }
    // Calculating discount.
    if (
      parseInt($(".bill > .billRow > #subtotal").html()) +
        parseInt($(".bill > .billRow > #VAT").html()) +
        parseInt($(".bill > .billRow > #delivery").html()) >=
      300
    ) {
      $(".bill > .billRow > #discount").html("-30 LE");
      $(".bill > .discount_exists").html(
        "Congratulations, you got a discount!"
      );
    } else {
      $(".bill > .billRow > #discount").html("0 LE");
      $(".bill > .discount_exists").html(
        "Get 30 LE discount on orders over 300 LE"
      );
    }
    // Calculating Total.
    $(".bill > .billRow > #orderTotal").html(
      parseInt($(".bill > .billRow > #subtotal").html()) +
        parseInt($(".bill > .billRow > #VAT").html()) +
        parseInt($(".bill > .billRow > #delivery").html()) +
        parseInt($(".bill > .billRow > #discount").html()) +
        " LE"
    );
  });
};

const increaseQuantity = (e) => {
  $(() => {
    // Updating the quantity.
    let oldQuantity = Number(e.siblings(".itemQuantity").html());
    let newQuantity = oldQuantity + 1;
    e.siblings(".itemQuantity").html(newQuantity);
    // Updating the price.
    let oldPrice = Number(
      e.parent(".cartItemExtraDiv").siblings(".itemPrice").html()
    );
    let unitPrice = oldPrice / oldQuantity;
    let newPrice = unitPrice * newQuantity;
    e.parent(".cartItemExtraDiv").siblings(".itemPrice").html(newPrice);

    updateCartArr();
    billRender();
  });
};

const decreaseQuantity = (e) => {
  $(() => {
    // Updating the quantity.
    let oldQuantity = Number(e.siblings(".itemQuantity").html());
    let newQuantity = oldQuantity > 1 ? oldQuantity - 1 : 1;
    e.siblings(".itemQuantity").html(newQuantity);

    // Updating the price.
    let oldPrice = Number(
      e.parent(".cartItemExtraDiv").siblings(".itemPrice").html()
    );
    let unitPrice = oldPrice / oldQuantity;
    let newPrice = unitPrice * newQuantity;
    e.parent(".cartItemExtraDiv").siblings(".itemPrice").html(newPrice);
    updateCartArr();
    billRender();
  });
};

const removeItem = (itemObj) => {
  $(() => {
    itemObj.remove();
    updateCartArr();
    billRender();
  });
};
