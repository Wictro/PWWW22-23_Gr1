function validateEmail() {
    let emailValue = document.getElementById('newsletter-email').value
    if (!emailValue.includes('@') || !emailValue.includes('.com')) {
        alert('Please write a valid email!')
        throw new Error('Please write a valid email')
    }
    const emailAlreadyExists = Object.keys(localStorage).includes(`email${emailValue}`)
    if (emailAlreadyExists) {
        alert("A user with that email address is already registered! Please change email address!");
        throw new Error('A user with that email address is already registered! Please change email address!')
    }
    else {
        alert('Email successfully registered!')
        localStorage.setItem(`email${emailValue}`, emailValue);
    }
    document.getElementById('newsletter-email').value = ""
}

var html = `<div class="footer-background-content" style="height: 620px; padding-left: 20px;">
                <div class="footer-links">
                    <div id="contact-info">
                        <h2>CONTACT INFO</h2>
                        <ul>
                            <li><address><a href="./contact.html#mapouter" id="map-link"><span><i class="fa fa-map-marker" aria-hidden="true"></i></span> PO Box 1612 Collin Street, <abbr>NYC</abbr></a></address></li>
                            <li><i class="fa fa-phone"></i> (+801)-2345-6789</li>
                            <li><a href="https://mail.google.com/mail/u/0/?tab=wm#inbox?compose=GTvVlcSKjDVtDnFWFKHmSRrhPBWPNpDctldvwvNxvRhRMVnVlZHfTmjfdXWzCwmGWbXDkFLhNZcJL" target="_blank"><i class="fa fa-envelope"></i> support@hungerhunt.com<a/></li>
                        </ul>
                    </div>
                    <div id="support">
                        <h2>SUPPORT</h2>
                        <ul>
                            <li><a href="./recreation/faq.html" target="_blank" id="faq-link">FAQ</a></li>
                            <li><a href="./recreation/games/game.html" target="_blank" id="delivery-link">Game</a></li>
                            <li><a href="#" id="payment-link">Payment Options</a></li>
                            <li><a href="#" id="payment-link">Returns &amp; Refunds</a></li>
                        </ul>
                    </div>
                    <div id="shop">
                        <h2>SHOP</h2>
                        <ul>
                            <li><a href="./shop.html" id="non-veg-link">Non-Veg</a></li>
                            <li><a href="./shop.html" id="veg-link">Veg</a></li>
                            <li><a href="./shop.html" id="salads-link">Salads</a></li>
                            <li><a href="./shop.html" id="appertizers-link">Appetizers</a></li>
                        </ul>
                    </div>
                    <div id="information">
                        <h2>INFORMATION</h2>
                        <ul>
                            <li><a href="index.html" id="home-link">Home</a></li>
                            <li><a href="visitUs.html" id="about-us-link">About Us</a></li>
                            <li><a href="blog.html" id="blogs-link">Blogs</a></li>
                            <li><a href="contact.html" id="contact-us-link">Contact Us</a></li>
                        </ul>
                    </div>
                    <div id="my-account">
                        <h2>MY ACCOUNT</h2>
                        <ul>
                            <li><a href="forms/login.html" id="your-account-link">Your account</a></li>
                            <li><a href="forms/login.html" id="login-link">Login</a></li>
                            <li><a href="forms/signup.html" id="register-link">Register</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-links-2">
                    <div id="contact">
                        <h2>FIND US ON</h2>
                        <nav>
                            <ul class="social-links">
                                <a href="https://www.facebook.com" id="facebook-link"><i class="fa fa-facebook icon" style="color: rgb(197, 138, 27);"></i></a>
                                <a href="https://www.twitter.com" id="twitter-link"><i class="fa fa-twitter icon" style="color: white;"></i></a>
                                <a href="https://www.pinterest.com" id="pinterest-link"><i class="fa fa-pinterest icon" style="color: white;"></i></a>
                                <a href="https://www.instagram.com" id="instagram-link"><i class="fa fa-instagram icon" style="color: white;"></i></a>
                            </ul>
                        </nav>
                    </div>
                    <div id="newsletter-and-email">
                        <h3 style="text-transform: uppercase; font-family: sans-serif; font-size: 26px;">NEWSLETTER</h3>
                        <input type="email" placeholder="Your email address" id="newsletter-email"/>
                        <button id="email-submit" onclick="validateEmail()"></button>
                    </div>
                </div>
                </div>
                <div class="footer-credentials" style="background-color: black;">
                    <p style="color: gray; font-size: 20px;">@2019 Templates Jungle. &copy; All Rights Reserved</p>
                    <div class="card-class" style="font-size: 20px;">
                        <i class="fa fa-cc-visa" style="color: red;"></i>
                        <i class="fa fa-cc-mastercard" style="color: orange; background-size: 100%  ;"></i>
                        <i class="fa fa-cc-amex" style="color: lightblue;"></i>
                    </div>
                </div>
`;

document.querySelector('footer').innerHTML = html