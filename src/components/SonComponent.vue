    <template>
      <div  class="bg-black h-screen text-white">
        <p>{{ fatherMessage }}</p>
        <p>{{ sharedData }}</p>
      </div>
    </template>

    <script setup lang="ts">
    import { inject } from 'vue';
    defineProps({
      fatherMessage:String,
    })
    const sharedData = inject('sharedData')
    </script>
