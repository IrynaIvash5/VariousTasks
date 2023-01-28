<template>
  <div class="container">
    <h1 class="title">ToDoList</h1>
    <div class="to-do-list-input">
      <input class="task-input" type="text" placeholder="Enter yuor task..." v-model="task" @keyup.enter="createTask">
    </div>
    <h2 class="goal-week-text">Goal for the week</h2>
    <div class="tasks">
      <div class="tasks-center">
        <div class="todo"
             @dragover.prevent
             @drop="onDropToDo($event)"
             @dragenter.prevent>
          <p class="text">ToDo</p>

          <p v-for="taskItem in todoColumn"
             :key="taskItem.id"
             :id="taskItem.id"
             @dragstart="startDrag($event, taskItem)"
             class="taskIsSet color-red"
             draggable="true"
             @dblclick="deleteTaskToDo($event)"
          >{{ taskItem.name }}
          </p>

        </div>
        <div class="todo"
             @dragover.prevent
             @drop="onDropProgress($event)"
             @dragenter.prevent>
          <p class="text">In Progress</p>
          <p v-for="taskItem in inProgress"
             :key="taskItem.id"
             :id="taskItem.id"
             @dragstart="startDrag($event, taskItem)"
             class="taskIsSet color-blue"
             draggable="true"
             @dblclick="deleteTaskProgress($event)"
          >{{ taskItem.name }}</p>

        </div>
        <div class="todo"
             @dragover.prevent
             @drop="onDropDone($event)"
             @dragenter.prevent>
          <p class="text">Done</p>
          <p v-for="taskItem in done"
             :key="taskItem.id"
             :id="taskItem.id"
             @dragstart="startDrag($event, taskItem)"
             class="taskIsSet color-green"
             draggable="true"
             @dblclick="deleteTaskDone($event)"
          >{{ taskItem.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ToDoList',
  data() {
    return {
      task: '',
      todoColumn: [{
        id: 1,
        name: ''
      }],
      inProgress: [],
      done: []
    }
  },
  mounted() {
    const dataToDo = localStorage.getItem('todoColumn')
    const dataProgress = localStorage.getItem('tasksProgress')
    const dataDone = localStorage.getItem('tasksDone')
    if (dataToDo) {
      this.todoColumn = JSON.parse(dataToDo)
    }
    if (dataProgress) {
      this.inProgress = JSON.parse(dataProgress)
    }
    if (dataDone) {
      this.done = JSON.parse(dataDone)
    }
  },
  methods: {
    createTask() {
      this.todoColumn.push({
        id: Date.now(),
        name: this.task
      })
      localStorage.setItem('todoColumn', JSON.stringify(this.todoColumn))
      this.task = ''
    },

    startDrag(event, taskItem) {
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('taskItem', JSON.stringify(taskItem))
    },
    deleteTaskToDo(event) {
      localStorage.removeItem("todoColumn")
      const index = this.todoColumn.findIndex(taskItem => taskItem.id.toString() === event.target.id.toString())
      this.todoColumn.splice(index, 1)
      localStorage.setItem('todoColumn', JSON.stringify(this.todoColumn))
    },
    deleteTaskProgress(event) {
      localStorage.removeItem("tasksProgress")
      const index = this.inProgress.findIndex(taskItem => taskItem.id.toString() === event.target.id.toString())
      this.inProgress.splice(index, 1)
      localStorage.setItem('tasksProgress', JSON.stringify(this.inProgress))
    },
    deleteTaskDone(event) {
      localStorage.removeItem("tasksDone")
      console.log(event.target)
      console.log(event)
      const index = this.done.findIndex(taskItem => taskItem.id.toString() === event.target.id.toString())
      this.done.splice(index, 1)
      localStorage.setItem('tasksDone', JSON.stringify(this.done))
    },
    // with block done 2
    onDropDone(event) {
      let taskItem = event.dataTransfer.getData(("taskItem"))
      taskItem = JSON.parse(taskItem)
      if (this.done.find(task => task.id === taskItem.id)) {
        return;
      }
      this.todoColumn = this.todoColumn.filter(task => task.id !== taskItem.id)
      this.inProgress = this.inProgress.filter(task => task.id !== taskItem.id)
      this.done.push(taskItem)
      localStorage.setItem('tasksDone', JSON.stringify(this.done))
      localStorage.setItem('tasksProgress', JSON.stringify(this.inProgress))
      localStorage.setItem('todoColumn', JSON.stringify(this.todoColumn))
    },
    // with block inProgress 1
    onDropProgress(event) {
      let taskItem = event.dataTransfer.getData("taskItem")
      taskItem = JSON.parse(taskItem)
      if (this.inProgress.find(task => task.id === taskItem.id)) {
        return;
      }
      this.todoColumn = this.todoColumn.filter(task => task.id !== taskItem.id)
      this.done = this.done.filter(task => task.id !== taskItem.id)
      this.inProgress.push(taskItem)
      localStorage.setItem('tasksProgress', JSON.stringify(this.inProgress))
      localStorage.setItem('todoColumn', JSON.stringify(this.todoColumn))
      localStorage.setItem('tasksDone', JSON.stringify(this.done))
    },
    // with block to todoColumn 3
    onDropToDo(event) {
      let taskItem = event.dataTransfer.getData(("taskItem"))
      taskItem = JSON.parse(taskItem)
      if (this.todoColumn.find(task => task.id === taskItem.id)) {
        return;
      }
      this.done = this.done.filter(task => task.id !== taskItem.id)
      this.inProgress = this.inProgress.filter(task => task.id !== taskItem.id)
      this.todoColumn.push(taskItem)
      localStorage.setItem('tasksDone', JSON.stringify(this.done))
      localStorage.setItem('tasksProgress', JSON.stringify(this.inProgress))
      localStorage.setItem('todoColumn', JSON.stringify(this.todoColumn))
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  //background-color: forestgreen;
  width: 100%;
  height: 100%;
  background-color: rgb(42, 42, 43);

  .goal-week-text{
    text-shadow: 1px 1px 2px rgb(207, 84, 189), 0 0 1em rgb(116, 139, 217), 0 0 0.2em rgb(88, 149, 183);
    color: #80e6b3;
    text-align: center;
    padding: 10px;
    font-family: cursive;
  }

  .title {
    text-align: center;
    color: white;
    text-shadow: 1px 1px 2px rgb(207, 84, 189), 0 0 1em rgb(116, 139, 217), 0 0 0.2em rgb(88, 149, 183);
    padding: 20px;
  }

  .to-do-list-input {
    margin-top: 15px;
    display: flex;
    justify-content: center;

    .task-input {
      width: 500px;
      height: 40px;
      transition: 1s;

      &[type='text'] {
        padding: 0 10px;
      }

      &:focus {
        box-shadow: 0 0 9pt 5pt #949393;
        border: 1px solid rgb(42, 42, 43);
        outline: none;
      }

      &:hover {
        box-shadow: 0 0 9pt 5pt #949393;
        border: 1px solid rgb(42, 42, 43);
        outline: none;
      }
    }
  }

  .tasks {
    width: 100%;
    color: white;
    margin-top: 20px;

    .tasks-center {
      width: 100%;
      display: flex;
      justify-content: space-around;

      .todo {
        display: flex;
        flex-direction: column;
        background-color: rgb(88, 88, 93);
        width: 300px;
        height: 600px;
        text-align: center;
        border-radius: 5px;
        margin-bottom: 50px;
        padding: 10px;

        .active-dropzone {
          color: #fff;
          border-color: #fff;
          background-color: green;
        }

        .taskIsSet {
          //background-color: #949393;
          word-wrap: break-word;
          padding: 10px;
          width: 200px;
          //text-transform: capitalize;
          margin-left: 40px;
          margin-top: 10px;
          border-radius: 5px;
          font-size: 16px;
          font-style: oblique;
          cursor: pointer;
          //cursor: move;
          box-shadow: 0 28px 30px rgba(0, 0, 0, 0.4), 0 28px 30px rgba(0, 0, 0, 0.3);
        }

        .color-green {
          background-color: #47c47e;
          &:hover{
            width: 220px;
            margin-left: 30px;
            padding: 15px;
            background-color: green;
            transition: 1s;
          }
        }

        .color-red {
          background-color: #f16d7c;
          &:hover{
            width: 220px;
            margin-left: 30px;
            padding: 15px;
            transition: 1s;
            background-color: red;
          }
        }

        .color-blue {
          background-color: #8da5ee;
          &:hover{
            width: 220px;
            margin-left: 30px;
            padding: 15px;
            background-color: blue;
            transition: 1s;
          }
        }
      }


      .progress {
        background-color: rgb(88, 88, 93);
        width: 300px;
        height: 600px;
        text-align: center;
        border-radius: 5px;
        padding: 10px;

      }

      .done {
        background-color: rgb(88, 88, 93);
        width: 300px;
        height: 600px;
        text-align: center;
        border-radius: 5px;
        padding: 10px;

      }

      .text {
        font-size: 24px;
        text-shadow: 1px 1px 2px rgb(207, 84, 189), 0 0 1em rgb(116, 139, 217), 0 0 0.2em rgb(88, 149, 183);
      }
    }

  }

}
</style>
