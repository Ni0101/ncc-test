import { connect } from '../store.js'
import html from "../core.js";

function Header() {
    return html `
        <header class="header">
            <div class="hamburger" onclick="dispatch('handleHamburger')">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <img src="./img/logo-header.svg" alt="logo"/>
        </header>
    `
}

export default connect()(Header)