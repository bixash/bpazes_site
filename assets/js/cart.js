
let basket = JSON.parse(localStorage.getItem("data")) || [];

let cartLabel = document.getElementById("cart-label");
let bucketList = document.getElementById("bucket-list");
let totalCheckout = document.getElementById("total-checkout");


let calculation = () => {

    /// Updates the cart icon total number

    let cartTotal = document.getElementById("cartTotal");

    cartTotal.innerHTML = basket.map((x)=> x.item).reduce((x , y)=> x + y, 0);
    

};

calculation();


let generateCart = ()=>  {

    if(basket.length !== 0) {

        return (bucketList.innerHTML = basket.map((x)=> {
            
            let{id, item} = x;
            let search = shopItemsData.find((y)=> y.id === id ||[]);

            //let totalAmt = search.price * item; //this also 
            // console.log(totalAmt);
           
            return `
            <div class="cart-item"> 
                
                <img  width = "130px" height ="130px" src=${search.img} >

                <div class="item-details">
                    
                    <div class="title-price-x">

                            <div class="title-price">
                                <div class="cart-name">${search.name}</div>
                                <div class="cart-price">Rs.${search.price}</div>
                            </div>

                            <i onclick="removeItem(${id})"class= "bi bi-x-lg"></i>

                    </div>  

                    <div class="quantity-box">
                        <div class="plus" onclick="increment(${id})"><i class="bi bi-plus-lg"></i></div>
                                <div id=${id} class="quantity">${item}</div>
                        <div class="minus" onclick="decrement(${id})"><i class="bi bi-dash-lg"></i></div>
                    </div>

                </div>

            </div>

                `
        }).join(""));

        totalAmount();

    }
    else {
        bucketList.innerHTML= ``;
        cartLabel.innerHTML = 
        ` <div class="label"> There are no items in this cart.</div>

            <a href="../../index.html">

                <button class="continue-shop">Continue shopping</button>
            </a>
            
        `

    }


};

generateCart();
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
    generateCart();
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
    generateCart();
    localStorage.setItem("data", JSON.stringify(basket));

    // console.log(basket);
};


let update = (id) => {
    /// update the quantity number

    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    // console.log(search.item);
    
    calculation();
    totalAmount();

};


let removeItem = (id)=> {
    let selectedItem = id ;
    console.log(selectedItem.id);
    basket = basket.filter((x)=>(x.id !== selectedItem.id));
    localStorage.setItem("data", JSON.stringify(basket));
    generateCart();
    calculation();
    totalAmount();
}

let totalAmount = ()=> {
    if (basket.length !== 0) {
        let amount = basket.map((x)=> {
            
            let{id, item} = x;
            let search = shopItemsData.find((y)=> y.id === id);
            return search.price * item;
            
        }).reduce((x,y)=> x+y, 0);

        cartLabel.innerHTML= `
                <h3><span>Total:</span> Rs.${amount}</h3>
                <div class="total-price"></div>

                <div class="cart-btns">
                    <a href="../../html/buy.html"<button class="buynow" id="buynow">Buy Now</button> </a>
                    <button class="clear-cart" id="clear-cart" onclick="clearCart()">Clear Cart</button>

                </div>
            `
        // console.log(amount);
    }
    else return;
    
}

totalAmount();

let clearCart = () => {
    basket = [];
    localStorage.setItem("data", JSON.stringify(basket));
    generateCart();
    calculation();
}