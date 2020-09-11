<template>
  <div id="create" class="w-full flex justify-center items-center">
    <constellation-form />
  </div>
</template>

<script>
import ConstellationForm from '../../components/Forms/ConstellationForm.vue'
export default {
  components: { ConstellationForm },
  data: () => ({
    name: '',
    scientificName: '',
    months: '',
    season: '',
    bestViewedOn: '',
  })
}
</script>