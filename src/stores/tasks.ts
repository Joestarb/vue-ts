import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { Task } from '@/types/Type.ts'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));
  const loading =ref(false);

  const completedTasks = computed(()=> tasks.value.filter((task)=>task.completed));
  const pendingTasks = computed(()=>tasks.value.filter((task)=>task.completed));

  const fetchTasks   = async () =>{
    loading.value = true
    try{
      //simulacion de consumo de apis
      // const urlReq = ('https://apigenialxddd/edu.com.arg.mx');
      // const res = await fetch(urlReq); Realiza la solicitud
      // const data = await res.json();  Transforma la respuesta a JSON
      // console.log(data);
    }
    catch (err){
      console.error('error consumiendo la api', err)
    }finally {
      loading.value=false
    }
  }

  const addTask = (task: Omit<Task, 'id' |'createdAt'>) =>{
    const newTask:Task = {
      ...task,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    }
    tasks.value.push(newTask)
  }

  watch(
    tasks,
    (newTasks)=>{
      localStorage.setItem('tasks', JSON.stringify(newTasks))
    },
    {deep: true}
  )
  return {
    tasks,
    loading,
    completedTasks,
    pendingTasks,
    fetchTasks,
    addTask,
  }
})

export default  useTaskStore
