<template>
    <div class="topnavAndBanner">
        <Topnav />
        <div class="banner">
            <h1>咕噜 UI</h1>
            <h2>一个厉害的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>
<script lang="ts">

import Topnav from "../components/Topnav.vue";
export default {
    components: { Topnav },
};
</script>
<style lang="scss" scoped>




.topnavAndBanner{
  background:rgb(228, 239,254);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgb(62, 133, 243);
    >.actions {
        padding: 8px 0;

        a {
            margin: 12px;
            background: rgb(62,133,243);
            color:white;
            display: inline-block;
            border-radius:4px;
            padding:8px 24px;
        }
    }
}
</style>