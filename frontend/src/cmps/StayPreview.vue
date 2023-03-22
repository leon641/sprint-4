<!--בס"ד-->

<template>
    <!-- <router-link :to="'stay/' + stay._id"/> -->
        <div v-if="stay" class="stay-preview">
            <section >
                <div class="card">
                    <ImgCarousel :imgs="stay.imgUrls"/>
                    <!-- <img src="../assets/img/demo.jpeg" alt=""> -->
                    <p class="stay-name">{{ stay.name }}</p>
                    <span class="stay-name">
                        {{ stay.labels[0] }}
                        </span>
                    <span class="date"
                    >Apr 1 - 6
                    </span>
                    <p class="price">${{ stay.price }} night</p>

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
            imgs : ["../assets/img/demo.jpeg","../assets/img/demo.jpeg","../assets/img/demo.jpeg","../assets/img/demo.jpeg"]
        }
    },
   
    created() {
console.log(this.stay);
    },
    methods: {
       
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