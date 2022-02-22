import Banner from "../components/banner";
import Footer from "../components/footer";
// import Header from "../components/header";
import logo from "../components/logo";
import News from "../components/new";

// eslint-disable-next-line no-lone-blocks
{ /* <div id="header">
                ${Header.render()}
            </div> */ }
const HomePage = {
    async  render() {
        return /* html */`
             <div id="header">
                 ${logo.render()}
            </div>
            
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${await News.render()}
            </div>

            <div class="footer">
                ${Footer.render()}
            </div>

            
        `;
    },
    afterRender() {
        logo.afterRender();
    },
};
export default HomePage;
