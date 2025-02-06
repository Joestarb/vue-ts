//importacion de los datos json que simulan la api
import jobs from '@/data/jobs/jobs.json'
import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import type { Job } from '@/types/IJob'

const useJobStore = defineStore('job', () => {
  const jobList = ref([]) as Ref<Job[]>

  const jobCount = computed(() => jobList.value.length)

  //funcion para obtener los datos de la carpeta data/jobs/jobs.json
  const getJobs = () => {
    jobList.value = jobs as Job[]
  }


  //funcion para agregar trabajo
  const addJob = (job: Job) => {
    if (!jobList.value.some((existingJob) => existingJob.id === job.id)) {
      jobList.value.push(job)
    }
  }
  //funcion para eliminar trabajo
  const removeJob = (job: Job) => {
    const index = jobList.value.findIndex((existingJob)=> existingJob.id ===job.id)

    if (index === -1) return jobList.value.splice(index, 1)
  }

  return { jobList, jobCount, getJobs, addJob, removeJob }

})

export default useJobStore
