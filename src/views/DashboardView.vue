<script lang="ts" setup>
import { ref } from 'vue'
//var intialize
const message = ref('HelloWord')
const counter = ref(0)
const first = ref(0)
const second = ref(0)
const isRed = ref(true)
//func to add 1+ to counter
const increment = () => {
  counter.value++
}
</script>

<template>
  <div>
    <p>{{ message }}</p>
    <p>contador:{{ counter }}</p>
    <button @click="increment">summ</button>
    <h3>COMPUTED</h3>
    <br />

    <input :value="first" type="text" />
    <p>{{ first }}</p>
    <input :value="second" type="text" />
    <p>{{ second }}</p>

    <p :class="[isRed ? 'text-2xl' : 'text-red-400']">Hola mundo</p>
  </div>
</template>
