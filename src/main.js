import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";
import Detailpage from "./pages/details";

import Singin from "./pages/signin";
import Singnup from "./pages/signup";
import table from "./components/admin/table";

import edit from "./pages/edit";
import Dashboard from "./pages/adim/Dashboardpage";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/Signin": () => {
        print(Singin.render());
    },
    "/Signup": () => {
        print(Singnup.render());
    },
    "/products/:id": ({ data }) => {
        const { id } = data;
        print(Detailpage.render(+id));
    },
    "/pages/table/:id/edit": ({ data }) => {
        const { id } = data;
        print(edit.render(id));
    },
    "admin/Dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/news": () => {
        print(table.render());
    },

});

router.resolve();

// class KhuanBanh {
//     constructor(luongDuong, luongBot) {
//         this.luongDuong = luongDuong;
//         this.luongBot = luongBot;
//     }

//     showInfo() {
//         console.log(`
//             Lượng đường: ${this.luongDuong}
//             Lượng bột: ${this.luongBot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh(10, 20);
// console.log(banhDeo.luongDuong) // 10
// const banhNuong = new KhuanBanh(30, 50);
// banhDeo.luongDuong = 20
// console.log(banhDeo.luongDuong)// 20
// banhDeo.showInfo();

// banhNuong.showInfo();
