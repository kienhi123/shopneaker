import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import logo from "./components/logo";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/products";
import Detailpage from "./pages/details";
import adminproduct from "./pages/adim/adminproduct";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#logo").innerHTML = logo.render();

    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
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
    "/products/:id": ({ data }) => {
        const { id } = data;
        print(Detailpage.render(+id));
    },
    "admin/productlist": () => {
        print(adminproduct.render());
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
