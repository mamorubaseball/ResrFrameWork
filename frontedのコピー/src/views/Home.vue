<template>
  <div>
    <v-container>
      <h1>JOBS</h1>
      <div v-for="job in jobs" :key="job.pk">
        <h2>
          <router-link 
            :to="{ name:'job' , params : { id:job.id } }" 
            class="job-link"
          >
        <p>{{ job.company_name }}</p>
          </router-link>
        </h2>
    
        <p>{{ job.job_title }}</p>
      </div>
    </v-container>
  </div>
</template>

<script>
import { apiService } from '../common/api.service.js'

export default {
  name: "home",
  data(){
    return{
      jobs:[]
    }
  },
  methods:{
    getJobs(){
      let endpoint= 'api/jobs/'
      apiService(endpoint).then(data=>{
        this.jobs.push(...data.results)
        })
    }   
  },

created(){
  this.getJobs()
  console.log(this.jobs)
  document.title=`job boar`
  }, 
};
</script>

<style scoped>
.job-link{
  font-weight: bold;
  color: black;
  text-decoration: none;

}
.job-link:hover{
  color: #41B883;
}
</style>
