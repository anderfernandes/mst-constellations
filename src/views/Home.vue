<template>
  <div id="home" class="flex flex-col w/1/3">
    <router-link :to="`${constellation.id}/edit`" class="flex w-full h-full py-2" v-for="constellation in constellations" :key="constellation.id">
      <div class="border-l border-t border-b h-auto w-48 flex-none bg-cover rounded-t rounded-t-none rounded-l text-center overflow-hidden" :style="`background-image: url('${constellation.pictures[0]}')`" title="Woman holding a mug"></div>
      <div class="border-r border-b border-gray-400 w-full border-l-0 border-t border-gray-400 bg-white rounded-b rounded-b-none rounded-r p-4 flex flex-col">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
            {{ constellation.months[0] }} |
            {{ constellation.seasons[0] }}
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">
            {{ constellation.name }}
          </div>
          <!---<p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>--->
        </div>
        <!---<div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">Jonathan Reinink</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>--->
      </div>
    </router-link>
  </div>
</template>

<script>

import firebase from '../../firebase'


export default {
  data: () => ({
    constellations: []
  }),
  name: 'Home',
  created() {
    firebase.collection('constellations')
      .get()
      .then(querySnapshot => querySnapshot.forEach(doc => this.constellations.push({id: doc.id, ...doc.data()})))
  }
}
</script>
