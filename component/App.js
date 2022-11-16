import html from '../core.js';
import Sidebar from "./Sidebar.js"
import Main from './Main.js';
// import Header from "./Header.js";

function App() {
    return html `
        <section class="app">
            ${Sidebar()}
            ${Main()}
        </section>
    `
}

export default App