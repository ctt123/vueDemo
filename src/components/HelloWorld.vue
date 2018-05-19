<template>
  <div class="hello">
    <ul>
      <li>
        <router-link to="/layout">Layout</router-link>
      </li>
      <li>
        <router-link to="/middle">Middle</router-link>
      </li>
      <li>
        <router-link to="/middle2">Middle2</router-link>
      </li>
      <li>
        <router-link to="/test1">Test1</router-link>
      </li>
      <li>
        <router-link to="/test2">Test2</router-link>
      </li>
    </ul>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
