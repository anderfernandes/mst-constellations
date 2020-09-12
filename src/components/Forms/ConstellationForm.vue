<template>
  <div id="constelation-form" class="w-full flex justify-center items-center" v-if="!loading">
    <form class="w-full max-w-lg p-4">
      <!--- Name --->
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Name
          </label>
          <input v-model="name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name">
          <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <!--- Scientific Name --->
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Scientific Name
          </label>
          <input v-model="scientificName" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Scientific Name">
          <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <!--- Month --->
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Month
          </label>
          <div class="relative">
            <select v-model="months" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option hidden></option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <!--- Season --->
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Season
          </label>
          <div class="relative">
            <select v-model="seasons" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option hidden></option>
              <option>Fall</option>
              <option>Winter</option>
              <option>Spring</option>
              <option>Summer</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <!--- Best Viewed On --->
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Best Viewed On
          </label>
          <input v-model="bestViewedOn" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="Name">
          <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <!--- Buttons --->
      <div class="flex -mx-3 mb-6">
        <div class="inline-flex rounded-md shadow w-full" @click.prevent="updateConstellation">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out w-full">
            Save
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow w-full">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out w-full">
            Start Over
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import firebase from '../../../firebase'

const constellation = firebase.collection('constellations')

export default {
  props: ['id'],
  data: () => ({
    name: '',
    scientificName: '',
    months: '',
    seasons: '',
    bestViewedOn: '',
    loading: true,
  }),
  created() {
    this.loading = true
    if (this.id)
      this.getConstellation()
    this.loading = false
  },
  methods: {
    getConstellation() { 
      constellation.doc(this.id).get().then(doc => {
        this.name = doc.data().name
        this.scientificName = doc.data().scientificName
        this.months = doc.data().months[0]
        this.seasons = doc.data().seasons[0]
        this.bestViewedOn = doc.data().bestViewedOn.split('T')[0]
      }).catch(error => alert(error))
    },
    updateConstellation() {
      this.loading = true
      constellation.doc(this.id).set({
        name: this.name,
        scientificName: this.scientificName,
        months: [ this.months ],
        seasons: [ this.seasons ],
        bestViewedOn: new Date(this.bestViewedOn).toISOString()
      }).then(() => alert(`${this.name} saved successfully!`))
      this.loading = false
    }
  }
}
</script>