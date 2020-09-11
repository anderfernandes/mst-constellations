<template>
  <div id="create" class="w-full flex justify-center items-center">
    <constellation-form :constellation="constellation" />
  </div>
</template>

<script>
import firebase from '../../../firebase'
import ConstellationForm from "../../components/Forms/ConstellationForm.vue"

export default {
  components: { ConstellationForm },
  props: ['id'],
  data: () => ({
    constellation: {}
  }),
  created() {
    firebase.collection('constellations')
      .doc(this.id)
      .get()
      .then(doc => this.constellation = {id: doc.id, ...doc.data() })
  },
}
</script>