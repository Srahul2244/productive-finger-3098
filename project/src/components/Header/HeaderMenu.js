import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



// const [text, setText] = useState("")
const HeaderMenu = () => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleClick = () => {
        window.location.href = "./register.js"
    }


    return (
        <div class="header_container" style={{ marginTop: "7px" }}>
            <div class="header_logo">
                <img src="./assets/images/nykaa_logo_pink.svg" alt="nykaa logo" srcset="" />
            </div>
            <div class="header_nav">
                <a>CATEGORIES</a>
                <a>BRANDS</a>
                <a>NYKAA FASHION</a>
                <a>BEAUTY ADVICE</a>
                <a>NYKAA NETWORK</a>
            </div>
            <div class="search_box media_input">
                <div class="input_box">
                    <i class="bx bx-search"></i>
                    <input placeholder="Search for Products, Brands etc " name="text" value={text} onChange={handleChange} />
                </div>
            </div>
            <div class="accounts">
                <a href=""> <i class='bx bxs-user'></i> <span onClick={handleClick}>Account</span></a>


            </div>
        </div>
    )
}
export default HeaderMenu;    