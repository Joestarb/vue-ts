<script setup lang="ts">
import SonComponent from './SonComponent.vue';
import {ref} from 'vue';

const fatherMessage =ref('hola mundo desde componente padre');
</script>

<template>
<SonComponent :fatherMessage="fatherMessage"/>
</template>
