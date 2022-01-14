import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import logo from "../components/logo";
import News from "../components/new";

const HomePage = {
    render() {
        return /* html */`
             <div class="logo">
                 ${logo.render()}
            </div>
            ${Header.render()}
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${News.render()}
            </div>

            <div class="footer">
                ${Footer.render()}
            </div>

            
        `;
    },
};
export default HomePage;
