    let product_sales = document.getElementById("product_sales");
    
    // let featuredProduct = document.getElementById('featured-product');
    // let forYou = document.getElementById('justProduct');
    


    let basket = JSON.parse(localStorage.getItem("data")) || [];

    function generateShop() {

        return (product_sales.innerHTML = shopItemsData.map((x) => {
            let { name, price, img, id, } = x;

            let search = basket.find((x)=> x.item === id);
            return `<div id="product-id-${id}" class="product_list" >
            <img class="product_img" src=${img} alt="" srcset="">

                <div class="name">${name}</div>

                <div class="price">Rs.${price} </div>
                <button class="addtocart" onclick="increment(${id})" id=${id}>Add to cart</button>

                
            </div>`;

        }).join(""));
    };

    function generateFeatured() {

        return (featuredProduct.innerHTML = shopItemsData.map((x) => {
            let { name, price, img, id, } = x;

            return `<div id=product-id-${id} class="product_list">
            <img class="product_img" src=${img} alt="" srcset="">

                <div class="name">${name}</div>

                <div class="price">Rs.${price} </div>
                <button class="addtocart" id ="addtocart">Add to cart</button>

                
            </div>`;

        }).join(""));

    };
    function generateJust() {

        return (forYou.innerHTML = shopItemsData.map((x) => {
            let { name, price, img, id, } = x;

            return `<div id=product-id-${id} class="product_list">
                <img class="product_img" src=${img} alt="" srcset="">

                <div class="name">${name}</div>

                <div class="price">Rs.${price} </div>
                <button class="addtocart">Add to cart</button>
                
            </div>`;

        }).join(""));

    };

    // generateJust();
    generateShop();
    // generateFeatured();



function increment(id)  {

    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id : selectedItem.id,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }

    

    update(selectedItem.id);

    localStorage.setItem("data", JSON.stringify(basket));

};

function decrement(id)  {

    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined) {
        return;
    }
    
    if (search.item === 0) {
        return;
    }
    else {
        search.item -= 1;
    }
   

    update(selectedItem.id);

    basket = basket.filter((x)=>x.item !== 0);

    localStorage.setItem("data", JSON.stringify(basket));
};


let update = (id) => {
    /// update the quantity number
    let search = basket.find((x)=> x.id === id);

    
    calculation();

};


let calculation = () => {

    /// Update cart total number

    let cartTotal = document.getElementById("cartTotal");

    cartTotal.innerHTML = basket.map((x)=> x.item).reduce((x , y)=> x + y, 0);
    

};

calculation();


