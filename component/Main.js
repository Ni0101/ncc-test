import html from "../core.js";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";

function Main() {
    return html `
        <div class="main">
            ${Header()}
            ${Body()}
            ${Footer()}
        </div>
    `
}

export default Main