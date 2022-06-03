<template>
  <div class="d-flex flex-column align-items-center mt-5">
    <h1 class="">Lab 1</h1>
    <div class="my-4">
      <button class="btn btn-primary mx-1" @click="activeTab = 'AddComponent'">Add User</button>
      <button class="btn btn-primary mx-1" @click="activeTab = 'AdminComponent'">Admins</button>
      <button class="btn btn-primary mx-1" @click="activeTab = 'StudentComponent'">students</button>
    </div>
    <AddComponent v-if="activeTab === 'AddComponent'" @addBtnPressed="addUser" />
    <AdminComponent v-if="activeTab === 'AdminComponent'" @deleteBtnPressed="deleteUser" :users="users" />
    <StudentComponent v-if="activeTab === 'StudentComponent'" @deleteBtnPressed="deleteUser" :users="users" />
  </div>
</template>

<script>
import { ref } from 'vue';
import AddComponent from "./components/AddComponent.vue"
import AdminComponent from "./components/AdminComponent.vue"
import StudentComponent from "./components/StudentComponent.vue"

export default {
  name: 'App',
  components: {
    AddComponent, AdminComponent, StudentComponent
  },
  setup() {
    const activeTab = ref("AdminComponent");
    const users = ref([
      { name: "Hossam", age: 26, email: "hossam@gmail.com", role: "admin" },
      { name: "Yousef", age: 16, email: "yousef@gmail.com", role: "admin" },
      { name: "Ahmed", age: 28, email: "ahmed@gmail.com", role: "student" }
    ]);

    function addUser(newUser) {
      users.value.push(newUser);
    }

    function deleteUser(deletedUserEmail) {
      let deletedUserIndex = users.value.findIndex(user => user.email === deletedUserEmail);
      users.value.splice(deletedUserIndex, 1);
    }

    return {
      activeTab, users, addUser, deleteUser
    }
  }
}
</script>

<style scoped>
</style>