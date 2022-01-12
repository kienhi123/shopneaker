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
          <li class="px-10 pt-5">
          <input type="text" name="search">
          </li>
          <li class="p-1 pt-5">
          <button class="bg-zinc-500 px-4 "  type="submit "  >Tìm kiếm</button >
          </li>
          </ul>
      </div>
      `;
    },
};
export default Header;
