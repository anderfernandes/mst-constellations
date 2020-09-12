<template>
  <div id="create" class="w-full flex justify-center items-center">
    <constellation-form :id="id" />
  </div>
</template>

<script>

import ConstellationForm from "../../components/Forms/ConstellationForm.vue"

export default {
  components: { ConstellationForm },
  props: ['id'],
}
</script>