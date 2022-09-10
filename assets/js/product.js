let quantity = document.getElementById("quantity");
let productInfo = document.getElementById('product-info');



generateProduct();
function generateProduct() {

    return productInfo.innerHTML = ` 
    <div  class="product-container" >
        <img class="product-info-img" src="../assets/img/jeans.jpg" alt="" srcset="">


        <div class="product-text">
            <div class="product-name">Lorem ipsum dolor</div>

            <div class="product-price">Rs.1500 </div>

            <p class="descrip">
                Lorem ipsum dolor, tur adipisicing elit. Deleniti ad 
                aperiam praesentium aspernatur dicta incidunt deserunt, provident
                enim voluptatum nisi, a qui eaque expedita veritati
            </p>

            <div class="quantity-box">
                <div class="plus" onclick="increment()"><i class="bi bi-plus-lg"></i></div>
                <div id="quantity">0</div>
                <div class="minus" onclick="decrement()"><i class="bi bi-dash-lg"></i></div>
            </div>
            

            <div class="product-btns">
                <button class="buynow">Buy Now</button>
                <button class="addtocart">Add to cart</button>
            </div>
            
        </div>
       
    </div>`
}


