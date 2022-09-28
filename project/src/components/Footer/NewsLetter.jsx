const NewsLetter = () => (
    <div class="footer_newsletter flex">
            <div class="main_box flex flex_col">
                <div class="mail_logo flex">
                    <i class='bx bx-mail-send'></i>
                    <span>GET SPECIAL DISCOUNT IN YOUR INBOX</span>
                </div>
                <div class="input_container flex">
                    <div class="input_box flex flex_col">
                        <input type="email" placeholder="Enter Your Email Id" />
                        {/* <!-- <p> Enter Mail</p> --> */}
                    </div>
                    <button type="submit">
                        SEND
                    </button>
                </div>
            </div>
            <div class="app_container">
                <div class="mobile_logo flex">
                    <i class='bx bx-mobile'></i>
                    <span>EXPERIENCE THE NYKAA MOBILE APP</span>
                </div>
                <div class="app_logo_container">
                    <a href="">
                        <img src="./assets/images/play_store.svg" alt="" srcset="" />
                    </a>
                    <a href="">
                        <img src="./assets/images/app_store.svg" alt="" srcset="" />
                    </a>
                </div>
            </div>
            <div class="newsletter_contact flex">
                <div class="telephone_logo">
                    <i class='bx bxs-phone'></i>
                </div>
                <div class="contact_details flex flex_col">
                    <p>
                        FOR ANY HELP YOU MAY CALL US AT
                        <br />
                        1800-267-4444 OR +91 922-220-1010
                    </p>
                    <div>
                        (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
                    </div>
                </div>
            </div>
        </div>
)

export default NewsLetter;