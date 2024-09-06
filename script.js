let listProductHTML = document.querySelector('.container-product')
let nameid = document.getElementById('nameid').value;
let phoneid = document.getElementById('phoneid').value;
let errornameid= document.getElementById('')
// lúc  chưa có sản phẩm thì tạo một biến có mảng là rộng 
let ListProduct = [];

// hàm này thực hiện để xuất sản phẩm ra màn hình
const loadProducts = () =>{
    // tạo một biến cho nó nó hiện ra màn hình bằng rộng
     listProductHTML.innerHTML ='';
    if(ListProduct.length > 0){
        ListProduct.forEach(product => {
        let imgList = document.querySelectorAll('.item-products')
            // biến này để tạo một thẻ để đưa ra màn hình
            let newProduct = document.createElement('div');
            // câu lệnh dưới thêm một class trong thể điv
            newProduct.classList.add('item-products');
            newProduct.setAttribute('type', innerText=`${product.type}`);
            // dòng dưới để set id cho từng products    
            newProduct.dataset.id = product.id;
            newProduct.innerHTML =`
                <div class="image-product">
                    <img src="${product.image}" alt="lỗi hình xe error">
                </div>
                <h3>${product.name}</h3>
                <div><b>xăng</b></div>
                <div class="price-product">Giá Từ: ${product.price}</div>
                <span><a href="/">Hiện thị thêm</a></span>    
            `;
            listProductHTML.appendChild(newProduct);
            Pagination(imgList);
        })
    }
}

// hàm để lấy dự liệu từ file products.json  bằng phương thức fetch
const initApp = () =>{
    fetch('products.json')
    .then(Response => Response.json())
    // tạo một biến tên data để lấy data và gán listproduct = data để lấy dữ liệu ra 
    .then(data => {
        ListProduct = data;
        loadProducts();
        // gọi hàm xuatsanpham ra màn  hình

    })
}
initApp();


// thực hiện phân trang với các sản phẩm
function Pagination(imgList){ 
    
    let arr = [] 
    imgList.forEach(item =>{
        arr.push({
            type: item.getAttribute('type')
        })
    })
}
function render(list){
    list.forEach
}

function lienhe(){
    if(nameid==""||nameid==null){
        
    }
}


