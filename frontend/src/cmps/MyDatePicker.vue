<template>
  <section class="month"><p class="month-info">{{this.month.m}}{{new Date().getFullYear()}}</p><section class="days">
    <article></article>
    <article></article>
    <article></article>
    <article></article>
    <article v-for="day in days" :key="day.id" @click="handelClick($event ,day)" :class="Classday(day)"><span>{{day.num}}</span></article>

    </section></section>
</template>

<script>
export default {
name:'my-date-picker',
props:{
    month:Object,
    
},
data(){
    return{
        days:[],
       isSelected:{},
       startDay:0,
       endDay:0,
       count:0,
    } 
},
created(){
    
    this.createDays()
  
},
methods:{
    createDays(){
        for (let i = 1; i <= this.month.days; i++) {
            const day = {id:Date.now(),num:i,isSelected:false,isBetween:false ,month:this.month.m}
            this.days.push(day)
        }
    },
    handelClick(ev,day){
        console.log('day',day);
        if(this.count === 3 ){
        this.resetSelectedDays()
        }
        this.count++
            console.log('this.count',this.count);
        
        if(this.count===1){
            day.isSelected = true
      this.startDay=day.num
            const start= {
                day:day.num,
                month:day.month
            }
            this.$emit('start',start)
    }
    if(this.count === 2){
        this.count++
            const end= {
                day:day.num,
                month:day.month
            }
            this.$emit('end',end)
        day.isSelected = true
        if(day.num < this.startDay){
            this.resetSelectedDays()
        }
        this.endDay=day.num
        this.days.forEach(currDay => {
            if(currDay.num > this.startDay && currDay.num < this.endDay){
                currDay.isBetween= true
            } 
        });
    }
    },
    resetSelectedDays(){ 
           this.count=0
         this.days.forEach(currDay => {
           currDay.isBetween = false
           currDay.isSelected = false
        });
    },
    Classday(day){
        return {
            day:true,
            selected: day.isSelected ,
            between: day.isBetween
        }
    }
},computed:{
    
}

}
</script>

