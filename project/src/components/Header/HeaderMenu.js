import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Register from "../Register";



// const [text, setText] = useState("")
const HeaderMenu = () => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        <NavLink to="/register" />
    }


    return (
        React.createElement("div", {
            class: "header_container",
            style: {
                marginTop: "7px"
            }
        }, React.createElement("div", {
            class: "header_logo"
        }, React.createElement("img", {
            src: "./assets/images/nykaa_logo_pink.svg",
            alt: "nykaa logo",
            srcset: ""
        })), React.createElement("div", {
            class: "header_nav"
        }, React.createElement("a", null, "CATEGORIES"), React.createElement("a", null, "BRANDS"), React.createElement("a", null, "NYKAA FASHION"), React.createElement("a", null, "BEAUTY ADVICE"), React.createElement("a", null, "NYKAA NETWORK")), React.createElement("div", {
            class: "search_box media_input"
        }, React.createElement("div", {
            class: "input_box"
        }, React.createElement("i", {
            class: "bx bx-search"
        }), React.createElement("input", {
            placeholder: "Search for Products, Brands etc ",
            name: "text",
            value: text,
            onChange: handleChange
        }))), React.createElement("div", {
            class: "accounts"
        }, React.createElement("a", {
            href: "/register.js",
            target: "_blank"
        }, " ", React.createElement("i", {
            class: "bx bxs-user"
        }), " ", React.createElement("span", {
            onClick: handleClick
        }, "Register"))), React.createElement("div", {
            class: "accounts"
        }, React.createElement("a", {
            href: "",
            target: "_blank"
        }, " ", React.createElement("span", null, React.createElement("img", {
            style: {
                height: "40px"
            },
            src: "https://static.vecteezy.com/system/resources/previews/000/498/118/original/vector-shopping-cart-icon-design.jpg"
        })))))
    )
}
export default HeaderMenu;    
