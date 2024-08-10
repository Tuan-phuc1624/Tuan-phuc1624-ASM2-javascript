import header_footer from "../views/header_footer.html?raw";
import shop_detail from "../views/shop_detail.html?raw";

class ShopDetails {
  static shopDetailPages = () => {
    document.getElementById("template").innerHTML = header_footer;
    document.getElementById("app").innerHTML = shop_detail;

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

    // Lấy tham số id từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // Tìm sản phẩm theo id
    const product = products.find(p => p.id === productId);

    // Cập nhật thông tin sản phẩm trên trang
    if (product) {
      document.getElementById('product-img').src = product.img;
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('product-category').textContent = `Category: ${product.cate_id === 1 ? 'Fruits' : 'Vegetables'}`;
      document.getElementById('product-price').textContent = product.price;
      document.getElementById('product.detail').textContent = product.detail;

    }
  };
}

export default ShopDetails;
