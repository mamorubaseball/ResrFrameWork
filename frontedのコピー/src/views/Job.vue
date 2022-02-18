<template>
<div> 
  <v-container>
    {{ this.$route.params.id }}
    <h2 class="mb-5">{{ job.company_name }}</h2>
    <p>職種 {{ job.job_title}}</p>
    <p>内容 {{ job.job_description }}</p>
    <p>給料 {{ job.salary }}</p>
    <p>市町村  {{ job.city }}</p>
  </v-container>
</div>
</template>

<script>
import { apiService } from '../common/api.service.js'

export default {
  name:'job',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      job:{}
    }
  },
  methods: {
    setPageTitle(title){
      document.title = title;
    },
    // 詳細画面に遷移したらデータをjob変数に格納して、画面のタイトルを会社名に変更している。
    getjobData(){
      let endpoint=`/api/jobs/${this.id}/`;
      apiService(endpoint).then(data => {
        this.job = data;
        this.setPageTitle(data.company_name);
      })
    }
  },
  created(){
    this.getjobData()
  }
}
</script>
