<template>
    <router-link :to="'stay/' + stay._id">
        <article class="stay-preview">
           
            <section class="preview-info">
                <p class="location">
                    {{ location }}<span class="rate">rate will be here</span>
                </p>
                <main>
                    <p class="stay-name">{{ stay.name }}</p>
                    <p class="stay-name">{{ stay.summary }}</p>
                    <p class="date">date will be here</p>
                </main>
                <p class="price"><span class="price-label">{{ formattedPrice }}</span> night</p>
               
            </section>
        </article>
    </router-link>
   


</template>

<script>

export default {
    props: {
        stay: Object,
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
            return formatter.format(this.stay.price);
        },
        
    },
    components: {
       
    },
}
</script>