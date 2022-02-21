import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */ `
      <div class="bg-orange-500 flex justify-between items-center">
          <ul class="flex ">
          <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Trang Chủ</a></li>
          <li><a href="/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Tuyển Sinh</a></li>
          <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Chương trình đào tạo</a></li>
          <li class=" pt-5">
          <input type="text" name="search">
          </li>
          <li class="pl-3 px-5 pt-5">
          <button class="bg-zinc-500 px-4 "  type="submit "  >Tìm kiếm</button >
          </li>

          <li class="pl-7 pt-5 ">
          <button class="bg-fuchsia-600 text-white p-2 py-1 rounded-md text-sm font-medium "><a href="/signup">Đăng kí</a></button>
          </li>

          <li class="pl-7 pt-5">
          <button class="bg-rose-600 text-white p-2 py-1 rounded-md text-sm font-medium "><a href="/signin">Đăng Nhập</a></button>
          </li>
          
          </ul>
          <ul class="flex">
          <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
          </ul>
          ${localStorage.getItem("user") ? `<ul class="flex">
            <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            <li><a  id="logout" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white cursor-pointer">Logout</a></li>
          </ul>` : ""}
            
      </div>
      `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        const logout = document.querySelector("#logout");
        document.querySelector("#account-email").innerHTML = user.email;
        // logout
        if (logout) {
            logout.addEventListener("click", () => {
                toastr.success("Bạn Đã Đăng Đăng Xuất Thành Công");
                localStorage.removeItem("user");
                reRender(Header, "#header");
            });
        }
    },
};
export default Header;
