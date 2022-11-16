import html from "../core.js";

function Sidebar() {
    return html `
        <div class="sidebar" id="sidebar">
            <ul class="sidebar-lists">
                <li class="sidebar-list"><a href="/">Home</a></li>
                <li class="sidebar-list"><a href="/">Services</a></li>
                <li class="sidebar-list"><a href="/">News</a></li>
                <li class="sidebar-list"><a href="/">Blog</a></li>
                <li class="sidebar-list"><a href="/">Contact</a></li>
            </ul>
        </div>
    `
}

export default Sidebar