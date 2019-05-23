<template>
  <div class="projects">
    <h1>Add Project</h1>
      <div class="form">
        
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <input type="text" name="ticketNum" placeholder="TICKET NUMBER" v-model="ticketNum">
        </div>
        <div>
          <label>Type: </label>
          <select v-model="type" ref="type">
              <option :selected="type=='Type...'" :value="null">Type...</option>
              <option>PROJECT</option> <!--  -->
              <option>SERVICE</option>
          </select>

          <label>Status: </label>
          <select v-model="status" ref="status">
              <option :selected="status=='Choose a Status...'" :value="null">Choose a Status...</option>
              <option v-for="s in statuses" v-bind:value="s" :key="s">{{s}}</option>
          </select>
        </div>
        <div>
          <label>Faculty/Affiliate: </label>
          <select v-model="faculty" ref="faculty">
              <option :selected="faculty=='Choose a Faculty...'" :value="null">Choose a Faculty...</option>
              <option v-for="f in faculties" v-bind:value="f" :key="f">{{f}}</option>
          </select>
        </div>

        <!-- 
        <div>
          <basic-select :options="faculties" :selected-option="department" placeholder="select item" @select="onSelect()">
          </basic-select>
        </div>   -->  

        <div>
          <input type="text" name="customerName" placeholder="CUSTOMER NAME" v-model="customerName">
        </div>
        <div>
          <input type="text" name="customerID" placeholder="CUSTOMER ID" v-model="customerID">
        </div>
        <div>
          <input type="text" name="courseID" placeholder="COURSE ID" v-model="courseID">
        </div>
        
        <div>
          <input type="text" name="hours" placeholder="HOURS" v-model="hours">
        </div>

        <div>
          <label>Start Date: </label>
          <input type="date" style="width: 410px" name="startDate" placeholder="START DATE" v-model="startDate">
        </div>

        <div>
          <label>End Date: </label>
          <input type="date" style="width: 410px" name="endDate" placeholder="END DATE" v-model="endDate">
        </div>

        <div>
          <button class="app_project_btn" @click="addProject">Add</button>
        </div>

      </div>
  </div>
</template>

<script>
import ProjectsService from '@/services/ProjectsService'
import { BasicSelect } from 'vue-search-select'

export default {
  name: 'addproject',
  data () {
    return {
      ticketNum: '',
      type: '',
      customerName: '',
      customerID: '',
      courseID: '',
      status: '',
      hours: '',
      startDate: '',
      endDate: '',
      title: '',
      description: '',
      faculty: '',

      statuses: [],
      faculties: [],

      options: [],
      department: ''
    }
  },

  mounted () {
    this.statuses = require('./status.json').statuses
    this.faculties = require('./faculties.json').faculties
  },

  methods: {
    async addProject () {
      await ProjectsService.addProject({
        title: this.title,
        description: this.description,
        ticketNum: this.ticketNum,
        type: this.type,
        customerName: this.customerName,
        customerID: this.customerID,
        courseID: this.courseID,
        status: this.status,
        hours: this.hours,
        startDate: this.startDate,
        endDate: this.endDate,
        faculty: this.faculty
      })
      this.$swal(
        'Great!',
        `Your project has been added!`,
        'success'
      )
      this.$router.push({ name: 'Projects' })
    },
    onSelect (department) {
      this.department = department
    }
  },
  components: {
    BasicSelect
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
.form label {
  padding: 5px;
}
.form select {
  width: 200px;
  height: 35px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.form basic-select {
  width: 200px;
  height: 35px;
  padding: 10px;
  outline: none;
  font-size: 12px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.app_project_btn {
  background: #1590b5;
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