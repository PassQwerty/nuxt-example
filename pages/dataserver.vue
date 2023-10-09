<template>
    <h1>Post page</h1>
    <h1 class="text-red-600">{{ posts }}</h1>

    <h1></h1>
</template>


<script setup lang="ts">

const { data:posts } = await useAsyncData( 'stats', () => $fetch('https://jsonplaceholder.typicode.com/posts'));

</script>
