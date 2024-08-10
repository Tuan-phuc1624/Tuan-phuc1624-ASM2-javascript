import Navigo from "navigo";
import jQuery from "jquery";
import header_footer from "../views/header_footer.html?raw";
const router = new Navigo("/");

export default class Login {
  static loginPage() {
    document.getElementById("template").innerHTML = header_footer;
    const main = document.getElementById("app");
    main.innerHTML = `
      <div class="container">
        <h2>Đăng nhập</h2>
        <form id="login-form">
          <div class="mb-3">
            <label for="email" class="form-label">Địa chỉ email</label>
            <input type="email" class="form-control" id="email" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mật khẩu</label>
            <input type="password" class="form-control" id="password" required>
          </div>
          <button type="submit" class="btn btn-primary">Đăng nhập</button>
        </form>
      </div>
    `;

    document.getElementById("login-form").addEventListener("submit", async function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const response = await fetch("https://assignment2-es6-default-rtdb.asia-southeast1.firebasedatabase.app/user.json");
        const users = await response.json();

        const user = Object.values(users).find(user => user.email === email && user.password === password);

        if (user) {
          alert("Đăng nhập thành công!");
          router.navigate("/admin");
        } else {
          alert("Email hoặc mật khẩu không đúng.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Đã xảy ra lỗi. Vui lòng thử lại.");
      }
    });
  }
}
