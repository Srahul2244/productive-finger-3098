
import HeaderMenu from "./Header/HeaderMenu"
import HeaderNotification from "./Header/HeaderNotification"

const Header = () => (
    <div class="header_wrapper">
        <HeaderNotification />
        <HeaderMenu />
        <div class="search_box media_query">
        <div class="input_box">
            <i class="bx bx-search"></i>
            <input autocomplete="off" placeholder="Search for Products, Brands etc " value="" />
        </div>
    </div>

    </div>
    

)

export default Header;



















