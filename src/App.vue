<template>
<div class="wrapp-container">
    <div class="container">
        <Header />
        <div class="all-contend">
            <div class="list-btn-page">
                <button class="btn" @click="$router.push('/timer')">Timer</button>
                <button class="btn" @click="$router.push('/calendar')">Calendar</button>
                <button class="btn" @click="$router.push('/todolist')">ToDoList</button>
                <button class="btn" @click="$router.push('/pomadorotime')">PomadoroTime</button>
                <button class="btn" @click="$router.push('/calculator')">Calculator</button>
                <button class="btn" @click="$router.push('/books')">Books</button>
                <button class="btn" @click="$router.push('/analitic')">Analitic</button>
                <button class="btn" @click="$router.push('/chat')">Chat</button>
                <button class="btn" @click="$router.push('/weightcontrol')">WeightControl</button>
                <button class="btn" @click="$router.push('/animationGSAP')">AnimationGSAP</button>
            </div>
            <div class="router-contend">
                <router-view></router-view>
            </div>
        </div>

    </div>
<!--  <footer class="footer"></footer>-->

</div>
</template>

<script>
import Header from './components/Header.vue'
// import AnimationGSAP from "@/pages/AnimationGSAP.vue";

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
}

body {
    background-color: rgb(30, 32, 31);
}

.wrapp-container {
    max-width: 100%;
}

.all-contend {
    width: 80%;
    margin: auto;
    display: flex;
    margin-top: 35px;
    .list-btn-page{
      display: flex;
      flex-direction: column;
      .btn{
        width: 140px;
        height: 30px;
        background-color: rgb(58, 57, 57);
        color: black;
        margin-top: 5px;
        font-size: 18px;
        border: none;
        font-family: Bradley Hand, cursive;

          &:hover {
              color: white;
              background-color: black;
          }
      }
    }
}

.router-contend {
    margin-left: 20px;
    width: 100%;
}
//.footer{
//  background-color: #2c3e50;
//  height: 700px;
//}
</style>
