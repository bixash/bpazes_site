    let product_sales = document.getElementById("product_sales");
    
    // let featuredProduct = document.getElementById('featured-product');
    // let forYou = document.getElementById('justProduct');
    


    let basket = [];





    let shopItemsData = [{
        id: 'qw32iu',
        name: 'Myntra Light Blue Premium Baggy Jeans For Men ',
        price: 2500,
        img: "../assets/img/product.jpg"
    },
    {
        id: 'hqq354u32iu',
        name: 'Black Skinny Knee Cut Jeans Pants For Men',
        price: 2500,
        img: "../assets/img/product.jpg"
    },
    {
        id: 'hibbu',
        name: 'Nyptra Dark Blue Oversize High Rise Stretchable Jeans For Women',
        price: 500,
        img: "../assets/img/product.jpg"
    },
    {
        id: 'g2iu',
        name: 'Rocky Denim Jeans Pant For Women',
        price: 12500,
        img: "../assets/img/product.jpg"
    },
    {
        id: 'u3g2iu',
        name: 'Rocky Denim Jeans Pant For Women',
        price: 12500,
        img: "../assets/img/product.jpg"
    },

    {
        id: 'ee32iu',
        name: 'Nyptra Blue Oversize High Rise Stretchable Jeans For Women',
        price: 25300,
        img: "../assets/img/product.jpg"
    }];


    function generateShop() {

        return (product_sales.innerHTML = shopItemsData.map((x) => {
            let { name, price, img, id, } = x;

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

};

function decrement(id)  {

    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if (search.item === 0) {
        return;
    }
    else {
        search.item -= 1;
    }
   
    update(selectedItem.id);

};


let update = (id) => {
    /// update the amount number
    let search = basket.find((x)=> x.id === id);

    
    calculation();

};


let calculation = () => {

    /// Update cart total number

    let cartTotal = document.getElementById("cartTotal");

    cartTotal.innerHTML = basket.map((x)=> x.item).reduce((x , y)=> x + y, 0);
    



};




