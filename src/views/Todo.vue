<template>
  <div class="home p-6">

    <v-text-field 
    v-model="newTaskTitle"
   
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-2"        
            label="Añadir Tarea"
            append-icon="mdi-plus"
            hide-details
            clearable
          ></v-text-field>

    <v-list
      subheader
      class="pt-0"
      flat
    >

     
      <div  
       v-for="task in tasks"
         :key="task.id">
        <v-list-item
        @click="doneTask(task.id)"
        :class="{'orange darken-1' : task.done}"
      >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="white"
                
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content :class="{'text-decoration-line-through' : task.done}">
              <v-list-item-title>{{task.title}}</v-list-item-title>
           
            </v-list-item-content>
            <v-list-item-action>

              <v-btn @click.stop="deleteTask(task.id)" icon>
                <v-icon color="black">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
          

        </v-list-item>
        <v-divider></v-divider>
      </div>

    </v-list>
</div>
</template>

<script>


export default {
  name: 'HomeView',
  data(){
    return{
      newTaskTitle: '',
   tasks: [
        {
          id:1,
          title:'Levantarse 5 am',
          done: false,
        },
        {
          id:2,
          title:'Meditar',
          done: true,
        },
        {
          id:3,
          title:'Ducha Fria',
          done: false,
        }
   ]
    }
  },
  methods:{
    addTask(){
      let newTask ={
        id: Date.now(),
        title: this.newTaskTitle,
        done: false
      }
      this.tasks.push(newTask),
      this.newTaskTitle = ''
    }, 
    doneTask(id){
   let task = this.tasks.filter(task =>task.id===id)[0]
   task.done = !task.done

    },
    deleteTask(id){
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }

}
</script>
