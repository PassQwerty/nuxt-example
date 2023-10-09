<template>
    <div class="wrapperNavBar">
        <div class="navMenu">
            <nuxt-link active-class="activeLink" to="/">
                <my-logo height="2.5rem" />
            </nuxt-link>
            <div class="links">
                <nuxt-link active-class="activeLink" to="/about">О нас</nuxt-link>
                <nuxt-link active-class="activeLink" to="/dataserver">Данные с сервера</nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapperNavBar {
    @apply mb-4 bg-green-500 border-b-4 border-slate-800 border-opacity-70;
}

.navMenu {
    @apply flex items-center justify-between p-4;
}

.links {
    @apply flex items-center gap-4;
}

.navMenu a {
    @apply text-xl decoration-0 text-slate-50 fill-slate-50 transition opacity-80;
}

.navMenu a:hover {
    @apply text-slate-50 opacity-100;
}

.activeLink {
    @apply pointer-events-none text-slate-50 fill-slate-50 font-semibold !opacity-100;
}
</style>