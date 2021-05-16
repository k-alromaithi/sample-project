<template>
  <div class="posts">
      <div v-if="User">
        <p>Hi {{User}}</p>
      </div>
   </div>
</template>

<script>
import { mapGetters} from "vuex";
export default{
    name: 'Posts Page',
    components: {
        
    },
    computed:{
        ...mapGetters({User: "StateUser"})
    }
};

</script>