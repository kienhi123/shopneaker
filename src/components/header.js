const Header = {
    render() {
        return /* html */ `
      <div class="bg-orange-500">
          <ul class="flex ">
          <li><a href="/" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Trang Chủ</a></li>
          <li><a href="/about" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Tuyển Sinh</a></li>
          <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Chương trình đào tạo</a></li>
          <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Góc sinh viên</a></li>
          <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">Tuyển dụng</a></li>
          <li><a href="admin/Dashboard" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white">ADMIN</a></li>
          <li class="px-10 pt-5">
          <input type="text" name="search">
          </li>
          <li class="p-2 pt-5">
          <button class="bg-zinc-500 px-4 "  type="submit "  >Tìm kiếm</button >
          </li>

          <li class="p-1 pt-5 ">
          <button class="bg-fuchsia-600 text-white p-2 py-1 rounded-md text-sm font-medium "><a href="/Signin">Đăng kí</a></button>
          </li>

          <li class="p-1 pt-5">
          <button class="bg-rose-600 text-white p-2 py-1 rounded-md text-sm font-medium "><a href="/Signup">Đăng Nhập</a></button>
          </li>
          
          </ul>
      </div>
      `;
    },
};
export default Header;
