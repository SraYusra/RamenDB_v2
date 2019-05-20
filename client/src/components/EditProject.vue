<template>
  <div class="projects">
    <h1>Edit Project</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_project_btn" @click="updateProject">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import ProjectsService from '@/services/ProjectsService'
export default {
  name: 'editproject',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  mounted () {
    this.getProject()
  },
  methods: {
    async getProject () {
      const response = await ProjectsService.getProject({
        id: this.$route.params.id
      })
      this.title = response.data.title
      this.description = response.data.description
      // this.$router.push({ name: 'Projectts' })
    },
    async updateProject () {
      await ProjectsService.updateProject({
        id: this.$route.params.id,
        title: this.title,
        description: this.description
      })
      this.$swal(
        'Great!',
        `Your project has been updated!`,
        'success'
      )
      this.$router.push({ name: 'Projects' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_project_btn {
  background: #47a792;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>

