<script>
import mainDash from '@/assets/images/dashboard23.svg';

export default {
    data() {
        return {
            Dash: mainDash,
            consol: "Consolidated Billing",
            transaction: "Protected Transactions"
        }
    }
}
</script>

<template>
    <div>
        <div class="Cards my-5 d-md-block d-block gap-5 justify-content-between">
            <div class="card-one">
                <div class="dashboard-two d-flex align-items-center justify-content-center">
                    <img :src="Dash" alt="second-dashboard">
                </div>
                <div class="text-lg-center consol ">
                    <h3>{{ consol }}</h3>
                    <div class="subs ">
                        <p>Manage all your subscriptions effortlessly with our unified dashboard.</p>
                    </div>
                </div>
            </div>
            <div class="card-two my-lg-0 my-5">
                <div class="dashboard-three d-flex align-items-center justify-content-center">
                    <img :src="Dash" alt="">
                </div>
                <div class="text-lg-center transacts ">
                    <h3>{{ transaction }}</h3>
                    <div class="subs">
                        <p>Manage all your subscriptions effortlessly with our unified dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
