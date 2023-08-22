<template>
    <div>
        <HeaderCustom/>
        <router-view/>
        <FooterCustom/>

        
    </div>
</template>

<script>
import HeaderCustom from "@/components/HeaderCustom.vue";
import FooterCustom from "@/components/FooterCustom.vue";



export default{
    name: "appWrapper",
    components:{
        HeaderCustom,
        FooterCustom
     
    },
    computed:{

    }
}


</script>