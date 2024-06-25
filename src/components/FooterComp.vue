<script>
import VelFooterLogo from '@/assets/images/vel-logo.svg';
import EmaiIcon from '@/assets/images/email.svg';
import Ex from '@/assets/images/twitter.svg';
import Waps from '@/assets/images/whatsapk.svg';
import Insta from '@/assets/images/insta.svg';
import '@/assets/index.css';

export default {
    data() {
        return {
            Vel: VelFooterLogo,
            Mail: EmaiIcon,
            Twitter: Ex,
            Instagram: Insta,
            Whatsapp: Waps
        }
    }
}
</script>
<template>
    <div class="footer mt-5">
        <div class="d-lg-flex d-block justify-content-around align-items-centers">
            <div class="VelHeader">
                <div class="vel">
                    <img :src="Vel" alt="" />
                </div>
                <div class="digi my-lg-2">
                    <p class="m-0">“Simplify your digital life with a unified platform for all your
                        subscriptions. Enjoy seamless
                        access, consolidated billing”</p>
                </div>
                <div class="d-flex socials align-items-center gap-2">
                    <div>
                        <img :src="Instagram" alt="instagram-logo">
                    </div>
                    <div>
                        <img :src="Whatsapp" alt="whatsapp-icon">
                    </div>
                    <div>
                        <img :src="Twitter" alt="">
                    </div>
                </div>
            </div>
            <div class="AboutLinks">
                <div class="aboutUs">
                    <h2>About Us</h2>
                </div>
                <div>
                    <ul class="list-unstyled Links">
                        <li>
                            <a href="">Trust</a>
                        </li>
                        <li>
                            <a href="">Services</a>
                        </li>
                        <li>
                            <a href="">Key Features</a>
                        </li>
                        <li>
                            <a href="">Help Center</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="InformatLinks">
                <div class="Informat">
                    <h2>Information</h2>
                </div>
                <div>
                    <ul class="list-unstyled Links">
                        <li>
                            <a href="">Terms & Condition</a>
                        </li>
                        <li>
                            <a href="">Privacy & Policy</a>
                        </li>
                        <li>
                            <a href="">Refund Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="ContactsLinks">
                <div class="Contacts">
                    <h2>Contact Us</h2>
                </div>
                <div>
                    <ul class="list-unstyled Links">
                        <li class="d-flex gap-2">
                            <div>
                                <img :src="Mail" alt="email_icon">
                            </div>
                            <div>
                                <a href="">vel@gmail.com</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="StartBtn">
                    <button class="btn-sm btn-lg btn start btn-warning">Get Started</button>
                </div>
            </div>
        </div>
        <div class="mt-lg-3">
            <div class="d-lg-flex border-top border-1 border-black align-items-center justify-content-between Policy">
                <div>
                    <a href="">Privacy & Policy</a>
                </div>
                <div>
                    <a href="">Terms & condition</a>
                </div>
            </div>
        </div>
    </div>
</template>

