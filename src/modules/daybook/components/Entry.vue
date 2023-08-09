<template >
    <div  
        class="entry-container mb-3 pinter p-2"
        @click="$router.push({name:'entry',params:{id:10}})"
    >
        <!-- titulo -->
        <div  class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold"> 15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        <div class="entry-description">
           hola mundo de programación, esto es una prueba , hahaha
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" >
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: gray, $amount: 30);
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }


}    
</style>