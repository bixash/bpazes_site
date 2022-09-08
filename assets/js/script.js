let product_sales = document.getElementById('product_sales');

let shopItemsData =[{
    id: 'h3u3432iu',
    name: 'Myntra Light Blue Premium Baggy Jeans For Men ',
    price: 2500,
    img: "../assets/img/product.jpg"

},
{
    id: 'h3354u32iu',
    name: 'Black Skinny Knee Cut Jeans Pants For Men',
    price: 2500,
    img: "../assets/img/product.jpg"


},
{
    id: 'h3u32ibbu',
    name: 'Nyptra Dark Blue Oversize High Rise Stretchable Jeans For Women',
    price: 500,
    img: "../assets/img/product.jpg"

},
{
    id: 'h3u3g2iu',
    name: 'Rocky Denim Jeans Pant For Women',
    price: 12500,
    img: "../assets/img/product.jpg"
},
{
    id: 'h3u3g2iu',
    name: 'Rocky Denim Jeans Pant For Women',
    price: 12500,
    img: "../assets/img/product.jpg"
},

{
    id: 'h3uee32iu',
    name: 'Nyptra Blue Oversize High Rise Stretchable Jeans For Women',
    price: 25300,
    img: "../assets/img/product.jpg"
}]



function generateShop () {

    return (product_sales.innerHTML = shopItemsData.map((x)=> {
        let {name, price, img, id,} = x;

       return `<div id=product-id-${id} class="product_list">
            <img class="product_img" src=${img} alt="" srcset="">

                <div class="product_name">${name}</div>

                <div class="price">Rs.${price} </div>

                
            </div>`

    }).join(""));

};

generateShop();