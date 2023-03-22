<!--בס"ד-->

<template>
    <!-- <router-link :to="'stay/' + stay._id"/> -->
        <div v-if="stay" class="stay-preview">
            <section >
                <div class="card" @click="cardClicked">
                    <ImgCarousel :imgs="stay.imgUrls"/>
                    <div class="stay-desc">
                        <div class="bottom">
                         <p class="stay-name grid-item-1">{{ stay.name }}</p>
                          <p class="grid-item-2">
                               {{ stay.labels[0] }}
                            </p>
                             <p class="grid-item-5">5&nbsp;beds</p>
                               <p class="grid-item-4">
                                <span class="price">${{ stay.price }}</span> 
                                 night
                                 </p>
                        </div>
                    </div>
                   

                </div>
                <!-- <p class="price"><span class="price-label">{{ formattedPrice }}</span> night</p> -->
               
            </section>
        </div>
    
   


</template>

<script>
import ImgCarousel from './ImgCarousel.vue';


export default {
    props: {
        stay: Object,
    },
    data() { 
        return {
            imgs : [
            "../assets/img/demo.jpeg",
            "../assets/img/demo.jpeg",
            "../assets/img/demo.jpeg",
            "../assets/img/demo.jpeg",
            "../assets/img/demo.jpeg",
            "../assets/img/demo.jpeg"]
        }
    },
   
    created() {
    },
    methods: {
       cardClicked() {
         this.$router.push('/details')
       }
    },
    computed: {
      
        formattedPrice() {
            const formatter = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
            })
            let num = Number(formatter.format(this.stay.price));
            console.log(num);
            return formatter.format(this.stay.price);
        },
        
    },


    components: {
        ImgCarousel
       
    },
}
</script>