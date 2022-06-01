<template>
  <div class="d-flex flex-column align-items-center mt-5">
    <h1 class="">Lab 1</h1>
    <div class="my-4">
      <button class="btn btn-primary mx-1" @click="renderClickedComponent('add')">Add User</button>
      <button class="btn btn-primary mx-1" @click="renderClickedComponent('admin')">Admins</button>
      <button class="btn btn-primary mx-1" @click="renderClickedComponent('student')">students</button>
    </div>
    <AddComponent v-if="renderAdd" @addBtnPressed="addUser" />
    <AdminComponent v-if="renderAdmin" @deleteBtnPressed="deleteUser" :users="users" />
    <StudentComponent v-if="renderStudent" @deleteBtnPressed="deleteUser" :users="users" />
  </div>
</template>

<script>
import AddComponent from "./components/AddComponent.vue"
import AdminComponent from "./components/AdminComponent.vue"
import StudentComponent from "./components/StudentComponent.vue"

export default {
  name: 'App',
  components: {
    AddComponent,
    AdminComponent,
    StudentComponent,
  },
  methods: {
    renderClickedComponent(action) {
      this.renderAdd = action === 'add' ? true : false;
      this.renderAdmin = action === 'admin' ? true : false;
      this.renderStudent = action === 'student' ? true : false;
    },
    addUser(newUser) {
      this.users.push(newUser);
    },
    deleteUser(deletedUserEmail) {
      let deletedUserIndex = this.users.findIndex(user => user.email === deletedUserEmail);
      this.users.splice(deletedUserIndex, 1);
    }
  },
  data() {
    return {
      renderAdd: false,
      renderAdmin: false,
      renderStudent: false,
      users: [
        { name: "Hossam", age: 26, email: "hossam@gmail.com", role: "admin" },
        { name: "Yousef", age: 16, email: "yousef@gmail.com", role: "admin" },
        { name: "Ahmed", age: 28, email: "ahmed@gmail.com", role: "student" }
      ]
    }
  }

}
</script>

<style scoped>
</style>