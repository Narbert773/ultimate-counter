<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

const posts = ref<Post[]>([]);

function incrementCount() {
  count.value += 1;
}

function decrementCount() {
  count.value -= 1;
}

// function getPostsOld() {
//   fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
//     response
//       .json()
//       .then((postData) => {
//         posts.value = postData.slice(0, 10);
//       })
//       .catch((error) => console.error(error))
//   );
// }

async function getPosts() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const postsData = await data.json();
  console.log(postsData);
  posts.value = postsData.slice(0, 10);
}

onMounted(() => {
  getPosts();
});
</script>

<template>
  <h1>hello</h1>
  <p>{{ count }}</p>
  <p>{{ doubleCount }}</p>
  <button type="button" @click="incrementCount">+</button>
  <button type="button" @click="decrementCount">-</button>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<style>
body {
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf05--3zzTifbGtWjmdECh9TbCVHAwkI_SJA&s);
  background-repeat: no-repeat;
  background-position: top;
}
</style>
