import Navigo from "navigo";
import jQuery from "jquery";
import header_footer from "../views/header_footer.html?raw";
const router = new Navigo("/");

export default class Register {
  static registerPage() {
    document.getElementById("template").innerHTML = header_footer;
    const main = document.getElementById("app");
    main.innerHTML = `
      <div class="container">
        <h2>Đăng ký</h2>
        <form id="register-form">
          <div class="mb-3">
            <label for="email" class="form-label">Địa chỉ email</label>
            <input type="email" class="form-control" id="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mật khẩu</label>
            <input type="password" class="form-control" id="password" required>
          </div>
          <button type="submit" class="btn btn-primary">Đăng ký</button>
        </form>
      </div>
    `;

    document.getElementById("register-form").addEventListener("submit", async function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("https://assignment2-es6-default-rtdb.asia-southeast1.firebasedatabase.app/user.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        });

        if (response.ok) {
          alert("Đăng ký thành công! Vui lòng đăng nhập.");
          router.navigate("/login");
        } else {
          alert("Đăng ký thất bại. Vui lòng thử lại.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Đã xảy ra lỗi. Vui lòng thử lại.");
      }
    });
  }
}
