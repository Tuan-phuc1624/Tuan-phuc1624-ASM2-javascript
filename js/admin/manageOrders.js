import admin from "../../views/admin.html?raw";
import manageOrders from "../../views/manageOrders.html?raw";
import swal from "sweetalert";

let orders = [];

class ManageOrders {
  static manageOrderPages = () => {
    document.getElementById("template").innerHTML = admin;
    document.getElementById("app").innerHTML = manageOrders;
  };

  static handleBuilData(order, index) {
    return `
          <tr>
              <th scope="row">${index + 1}</th>
              <td>${order.customer_name}</td>
              <td>${order.customer_email}</td>
              <td>${order.customer_address}</td>
              <td>${order.customer_phone_number}</td>
              <td>
              <button  data-id="${
                order.id
              }" type="button" class="btn btn-success btn-edit" >Duyệt</button>
              <button data-id="${
                order.id
              }" type="button" class="btn btn-info btn-detail-order" data-bs-toggle="modal" data-bs-target="#exampleModal">Chi Tiết</button>
              </td>
            </tr>
          `;
  }

  static handleBrowser() {
    let getBtnDel = document.querySelectorAll(".btn-edit");

    for (let i = 0; i < getBtnDel.length; i++) {
      getBtnDel[i].addEventListener("click", (e) => {
        let id = e.target.dataset.id;
        fetch(
          `https://assignment2-es6-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${id}.json`,
          {
            method: "DELETE",
          }
        )
          .then(() => {
            console.log("check id", id);
            this.getDataOrder();
            swal("Duyệt!", "Đơn Đã Được Chuyển Cho Người Bán", "success");
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }
  static handleOrderDetail() {
    let btnDetail = document.querySelectorAll(".btn-detail-order");

    btnDetail.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            let id = e.target.dataset.id;

            try {
                let response = await fetch(`https://assignment2-es6-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${id}.json`);
                let orderData = await response.json();

                // Populate customer details
                document.getElementById("detail-customer-name").innerText = orderData.customer_name;
                document.getElementById("detail-customer-email").innerText = orderData.customer_email;
                document.getElementById("detail-customer-address").innerText = orderData.customer_address;
                document.getElementById("detail-customer-phone").innerText = orderData.customer_phone_number;

                // Clear previous product details
                let tbodyElement = document.querySelector(".detail-data");
                tbodyElement.innerHTML = "";

                // Fetch and display product details
                if (orderData.idPro && orderData.idPro.length > 0) {
                    for (let idPro of orderData.idPro) {
                        let productResponse = await fetch(`https://assignment2-es6-default-rtdb.asia-southeast1.firebasedatabase.app/products/${idPro.product_id}.json`);
                        let idProData = await productResponse.json();
                        this.handleBuilDataDetail(idProData, idPro.quantity);
                    }
                }
            } catch (error) {
                console.error("Error fetching order details:", error);
            }
        });
    });
}
static handleBuilDataDetail(product, quantity) {
  let tbodyElement = document.querySelector(".detail-data");

  if (!tbodyElement) {
    console.error("Không tìm thấy phần tử tbody.");
    return;
  }

  let newRow = document.createElement("tr");

  newRow.innerHTML = `
    <th scope="row">${product.id}</th>
    <td>${product.name}</td>
    <td>${product.price}</td>
    <td>${quantity}</td> 
  `;

  tbodyElement.appendChild(newRow);
}


  static async getDataOrder() {
    let tableHTML = "";
    try {
      let response = await fetch(
        `https://assignment2-es6-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json`
      );
      let data = await response.json();
      orders = data;
      if (orders) {
        Object.entries(orders).forEach(([id, item], index) => {
          if (item) {
            item.id = id;
            tableHTML += this.handleBuilData(item, index);
          }
        });
        document.querySelector(".table-data-orders").innerHTML = tableHTML;
      }
    } catch (e) {
      console.log("check error", e);
    }
    this.handleBrowser();
    this.handleOrderDetail();
  }
}

export default ManageOrders;
