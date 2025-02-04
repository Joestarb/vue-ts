<script setup lang="ts">
import FatherComponent from './FatherComponent.vue';
import { provide, ref  } from 'vue';


const sharedData = ref("Hola mundo desde componente abuelo");

provide('sharedData',sharedData)


</script>

<template>
<FatherComponent/>
</template>
