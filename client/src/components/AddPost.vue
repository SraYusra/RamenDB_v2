<template>
  <div class="posts">
    <h1>Add Post</h1>
      <div class="form">
        
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <input type="text" name="type" placeholder="TYPE" v-model="type">
        </div>
        <div>
          <input type="text" name="ticketNum" placeholder="TICKET NUMBER" v-model="title">
        </div>
        <div>
          <input type="text" name="type" placeholder="CUSTOMER NAME" v-model="customerName">
        </div>
        <div>
          <input type="text" name="type" placeholder="CUSTOMER ID" v-model="customerID">
        </div>
        <div>
          <input type="text" name="type" placeholder="COURSE ID" v-model="courseID">
        </div>
        <div>
          <input type="text" name="type" placeholder="STATUS" v-model="status">
        </div>
        <div>
          <input type="text" name="type" placeholder="HOURS" v-model="hours">
        </div>
        <div>
          <input type="text" name="type" placeholder="START DATE" v-model="startDate">
        </div>
        <div>
          <input type="text" name="endDate" placeholder="END DATE" v-model="endDate">
        </div>

        <div>
          <button class="app_post_btn" @click="addPost">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'addpost',
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
      description: ''
    }
  },
  methods: {
    async addPost () {
      await PostsService.addPost({
        title: this.title,
        description: this.description
      })
      this.$swal(
        'Great!',
        `Your post has been added!`,
        'success'
      )
      this.$router.push({ name: 'Posts' })
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
.app_post_btn {
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

