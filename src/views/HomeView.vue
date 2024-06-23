<template>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
    <img class="h-auto max-w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt="image description">

<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
</div>

<About />
<Services />
</template>
<script>
import Services from '@/components/Services/Services.vue'
import About from '@/views/AboutView.vue'
export default {
  data(){
   return { burners:[
    {
        "id": 1,
        "valink": "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
    },
]

  }
},
components:{
  Services,About
}

}
</script>



