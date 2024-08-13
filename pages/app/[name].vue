<template>
    <div class="flex flex-col items-center justify-center w-full h-dvh">
        <h1>DYNAMIC PAGE</h1>
        <h2>{{ route.params.name }}</h2>
    </div>
</template>

<script setup>
const route = useRoute()
</script>
