<script>
import NavbarComp from '@/components/NavbarComp.vue';
import Cards from '@/components/CardSects.vue';
import DashImage from '@/assets/images/dashboard23.svg';
import ArrowOne from '@/assets/images/arrow-one.svg';
import TimeManage from '@/assets/icons/Vector.svg';
import Organized from '@/assets/icons/tasked-filled.svg';
import Checker from '@/assets/icons/check.svg';
import ArrowTwo from '@/assets/images/arrow-two.svg';
import StringOne from '@/assets/images/StringOne.svg';
import StringTwo from '@/assets/images/stringTwo.svg';
import '@/assets/style.css';
export default {
    data() {
        return {
            Dash: DashImage,
            ArrowOne: ArrowOne,
            ArrowTwo: ArrowTwo,
            Clock: TimeManage,
            Todo: Organized,
            Checked: Checker,
            FirstString: StringOne,
            SecondString: StringTwo
        }
    },
    components: {
            NavbarComp,
            Cards
    },
    methods: {
       
    }
    }
</script>
<template>
    <div>
        <div class="main">
            <NavbarComp />
            <div class="">
                <div class='title text-center  mx-auto'>
                    <h1 class=' m-0 '>Manage All Your Subscriptions In <span id='innertitle'> One Place</span>
                    </h1>
                    <div class="paragraph">
                        <p class="text-center">Simplify your digital life with a unified platform for all your
                            subscriptions. Enjoy seamless access,
                            consolidated billing, and personalized recommendations tailored to your interests.</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center my-5 m-lg-0 m-3">
                    <input type="email" name="" class="form-control  input" placeholder="Enter your email" id="">
                    <button class="btn btn-warning btns text-black" ref=''>Get Started</button>
                </div>
            </div>
            <div class="d-flex d-md-none d-lg-flex my-lg-5  align-items-center justify-content-between">
                <div>
                    <img :src="FirstString" alt="">
                </div>
                <div>
                    <img :src="SecondString" alt="">
                </div>
            </div>
        </div>
        <div class=" container ">
            <div class='text-center my-4 features'>
                <h1>KEY FEATURES</h1>
            </div>
            <div class="content  p-lg-5 p-2">
                <div class="text-center  unif">
                    <h1 class="">Unified Dashboard</h1>
                </div>
                <div class="">
                    <div class="row  text-lg-start ">
                        <div class="dashOne col-lg-7 col-7 pt-lg-4">
                            <img :src='Dash' alt="first-dashboard">
                        </div>
                        <div class=" col-lg-5 ">
                            <div class="Manage text-lg-start ">
                                <p class="text-light my-lg-5 w-75">Manage all your subscriptions effortlessly with our
                                    unified
                                    dashboard. View, modify, and
                                    track
                                    all your services and payments in one organized place.</p>
                            </div>
                            <div class="started ">
                                <button type="button" class="text-dark btn btn-warning" href="">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Cards/>
        </div>
        <div>
            <div class=" position-absolute end-0 arrow-one">
                <img :src="ArrowOne" alt="arrow-illustration">
            </div>
            <div class="d-flex  align-items-center justify-content-center">
                <div class=" text-center">
                    <div class="benefits my-5  text-center">
                        <div class="text-center">
                            <h6 class="fw-medium ">Benefits</h6>
                        </div>
                        <div class="mt-3">
                            <h3 class="fw-medium ">Why You Should Use Our Platform</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="d-lg-flex d-block gap-4">
                    <div class="clock-section">
                        <div class="text-center">
                            <div class="clock mx-auto d-flex align-items-center justify-content-center">
                                <img :src="Clock" alt="clock-icon">
                            </div>
                            <div class="easyM">
                                <h3 class="fw-medium ">Easy Management</h3>
                            </div>
                            <div class="Modify my-4">
                                <p>Effortlessly add, modify, or cancel subscriptions. Our intuitive interface simplifies
                                    management</p>
                            </div>
                        </div>
                    </div>
                    <div class="todo-section my-lg-0 my-4">
                        <div class="text-center">
                            <div class="todo mx-auto d-flex align-items-center justify-content-center">
                                <img :src="Todo" alt="">
                            </div>
                            <div class="stayO">
                                <h3 class="fw-medium ">Stay Organized</h3>
                            </div>
                            <div class="Modify my-4">
                                <p>Effortlessly add, modify, or cancel subscriptions. Our intuitive interface simplifies
                                    management</p>
                            </div>
                        </div>
                    </div>
                    <div class="checker-section">
                        <div class="text-center">
                            <div class="checker mx-auto d-flex align-items-center justify-content-center">
                                <img :src="Checked" alt="">
                            </div>
                            <div class="secP">
                                <h3 class="fw-medium ">Secured Payments</h3>
                            </div>
                            <div class="Modify my-4">
                                <p>Effortlessly add, modify, or cancel subscriptions. Our intuitive interface simplifies
                                    management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" position-relative start-0 arrow-two">
                <img :src="ArrowTwo" alt="arrowTwo-illustration">
            </div>
        </div>
        <div>
            <div>
                <div class="freq text-center mb-5">
                    <h3 class="fw-semibold">Frequently Asked Questions</h3>
                </div>
                <div class="accordion w-75 mx-auto accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button Accordion collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#HowToSub" aria-expanded="true" aria-controls="flush-collapseOne">
                                How can I add my subscriptions to the platform?
                            </button>
                        </h2>
                        <div id="HowToSub" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is the first item's accordion body.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion my-3 w-75 mx-auto accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button Accordion collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="true"
                                aria-controls="flush-collapseOne">
                                Is it secure to manage my subscriptions and payments here?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is the first item's accordion body.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion my-3 w-75 mx-auto accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button Accordion collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="" aria-expanded="true" aria-controls="flush-collapseOne">
                                Can I cancel my subscriptions through this platform?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is the first item's accordion body.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion my-3 w-75 mx-auto accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button Accordion collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="" aria-expanded="true" aria-controls="flush-collapseOne">
                                Will I get notifications for upcoming subscription renewals?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                This is the first item's accordion body.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center streamline my-5">
            <h5>Ready to streamline your subscriptions and save time? Join us today and <br /> manage all your services
                in one place!
            </h5>
        </div>
        <div>
            <div class="d-flex justify-content-center my-5 m-lg-0 m-3">
                <input type="email" name="" class="form-control shadow  input" placeholder="Enter your email" id="">
                <button class="btn btn-warning shadow btns " ref=''>Get Started</button>
            </div>
        </div>
    </div>

</template>
