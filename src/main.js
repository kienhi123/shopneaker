import Navigo from "navigo";
import AboutPage from "./pages/about";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";
import Detailpage from "./pages/details";

import table from "./components/admin/table";

import edit from "./pages/edit";
import Dashboard from "./pages/adim/Dashboardpage";
import Add from "./pages/adim/add";
import index from "./pages/adim/index";
import adminEdit from "./pages/adim/edit";
import Singin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (component, id) => {
    document.querySelector("#app").innerHTML = await component.render(id);
    if (component.afterRender) component.afterRender(id);
};
router.on("/admin//Dashboard/*/", () => {}, {
    before(done) {
        const userId = JSON.parse(localStorage.getItem("user")).user.id;
        // eslint-disable-next-line no-console
        console.log(userId);
        if (userId === 1) {
            // Dựa trên router
            done();
        } else {
            document.location.href = "/";
        }
    },
});

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/signin": () => {
        print(Singin);
    },
    "/signup": () => {
        print(Signup);
    },
    "/products/:id": ({ data }) => {
        print(Detailpage, data.id);
    },
    "/pages/table/:id/edit": ({ data }) => {
        const { id } = data;
        print(edit.render(id));
    },
    "admin/Dashboard": () => {
        print(Dashboard);
    },
    "/admin/table": () => {
        print(table);
    },
    "/admin/add": () => {
        print(Add);
    },
    "/admin/list": () => {
        print(index);
    },
    "/admin/list/:id/edit": ({ data }) => {
        print(adminEdit, data.id);
    },

});

router.resolve();
// const API = "https://5e79b4b817314d00161333da.mockapi.io/posts";
// fetch(API)
//     .then((Response) => Response.json())
//     .then((data) => console.log(data));

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

// const getProducts = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             resolve("Ket noi thanh cong");
//         } catch (error) {
//             reject("Ket noi that bai");
//         }
//     }, 3000);
// });
// getProducts.then(Result => console.log(Result));
