<template>
    <div class="w-full h-dvh flex items-center justify-center">
        Name from store -> {{ name }}
    </div>
</template>

<script setup>
const { name } = storeToRefs(useAuthStore())
</script>
