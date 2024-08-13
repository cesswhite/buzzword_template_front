<template>
    <div id="auth-layout" class="w-full flex h-dvh relative">
        <div class="w-full md:w-1/2">
            <NuxtImg class="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                :placeholder="[50, 25, 75, 5]" preload loading="lazy" />
        </div>
        <div class="w-full md:w-1/2 flex items-center justify-center">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>