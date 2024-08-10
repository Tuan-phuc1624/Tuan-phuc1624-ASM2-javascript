import header_footer from "../views/header_footer.html?raw";
import home from "../views/home.html?raw";

class Homes {
  static homePages = () => {
    document.getElementById("template").innerHTML = header_footer;
    document.getElementById("app").innerHTML = home;

    // Dữ liệu sản phẩm
    const products = [
      { id: 1, name: 'Nho Ninh Thuận', cate_id: 1, price: '100000 VND', detail: 'Chất lượng đến từ mảnh đất Ninh Thuận nắng và gió', img: '../img/best-product-5.jpg' },
      { id: 2, name: 'Dâu Đà Lạt', cate_id: 1, price: '200000 VND', detail: 'Dâu Đà Lạt không ngon không lấy tiền', img: '../img/featur-2.jpg' },
      { id: 3, name: 'Quả mâm xôi', cate_id: 1, price: '50000 VND', detail: 'Việt Nam loại cây này phổ biến ở Lâm Đồng, Đà Lạt', img: '../img/best-product-2.jpg' },
      { id: 4, name: 'Quả mơ', cate_id: 1, price: '20000 VND', detail: 'Cung cấp khoáng chất và vitamin dồi dào', img: '../img/best-product-4.jpg' },
      { id: 5, name: 'Chuối Tây Sơn', cate_id: 1, price: '10000 VND', detail: 'Cung cấp khoáng chất và vitamin dồi dào', img: '../img/best-product-3.jpg' },
      { id: 6, name: 'Cam Sành', cate_id: 1, price: '30000 VND', detail: 'Cung cấp vitamin C dồi dào', img: '../img/best-product-1.jpg' },
      { id: 11, name: 'Táo', cate_id: 2, price: '50000 VND', detail: 'Táo nhập khẩu', img: '../img/featur-1.jpg' },
      { id: 7, name: 'Ớt chuông', cate_id: 2, price: '20000 VND', detail: 'Ớt chuông không cay lắm', img: '../img/vegetable-item-4.jpg' },
      { id: 8, name: 'Khoai Tây', cate_id: 2, price: '40000 VND', detail: 'Khoai tây siêu to khổng lồ', img: '../img/vegetable-item-5.jpg' },
      { id: 9, name: 'Mùi tây', cate_id: 2, price: '20000 VND', detail: 'Mùi Tây siêu to khổng lồ', img: '../img/vegetable-item-6.jpg' },
      { id: 10, name: 'Cà Chua', cate_id: 2, price: '70000 VND', detail: 'Cà Chua nhập khẩu', img: '../img/vegetable-item-1.jpg' }
    ];

    const productList = document.getElementById("product-list");

    // Hiển thị danh sách sản phẩm
    products.forEach(product => {
      const productHTML = `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="rounded position-relative fruite-item">
                <a href="./shop_detail?id=${product.id}" class="nav-item nav-link">
                    <div class="fruite-img">
                        <img src="${product.img}" class="img-fluid w-100 rounded-top" alt="${product.name}">
                    </div>
                </a>
                <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style="top: 10px; left: 10px;">${product.cate_id === 1 ? 'Fruits' : 'Vegetables'}</div>
                <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                    <h4>${product.name}</h4>
                    <p>${product.detail}</p>
                    <div class="d-flex justify-content-between flex-lg-wrap">
                        <p class="text-dark fs-5 fw-bold mb-0">${product.price}</p>
                        <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary">
                            <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
      `;
      productList.insertAdjacentHTML("beforeend", productHTML);
    });
  };
}

export default Homes;
