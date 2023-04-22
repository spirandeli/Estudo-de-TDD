<script>
import VUserSearchFormVue from '@/components/VUserSearchForm.vue'
import VUserProfile from '@/components/VUserProfile.vue'
export default {
  components: { VUserProfile, VUserSearchFormVue },
  name: 'UserView'
}
</script>

<template>
  <div>
    Hello World
    <VUserSearchFormVue />
    <VUserProfile />
  </div>
</template>