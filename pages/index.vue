<template>
    <div class="w-full h-dvh relative flex flex-col items-center justify-center gap-4">
        <q-btn @click="goTo('/auth')" color="primary" label="Ir a Auth" />
        <QBtn @click="goTo('/app')" color="secondary" label="Ir a App" />
        <q-input filled v-model="name" label="Your name *" hint="Name" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />
        <LazyQBtn @click="goTo(`/app/${name}`)" color="amber" glossy label="Ir a Dynamic Page" />
    </div>
</template>

<script setup lang="ts">
function goTo(route: string) {
    navigateTo(route)
}

const { name } = storeToRefs(useAuthStore())

useSeoMeta({
    title: 'Buzzword Template by Front End',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum in voluptates odit optio ullam quasi nulla nam at recusandae dolor facilis a quae similique impedit, ipsa, iste accusantium officia ut!'
})
</script>