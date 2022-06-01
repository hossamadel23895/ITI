<template>
    <div>
        <h3 class="text-center my-3">Add User</h3>
        <div class="d-flex justify-content-between" style="color: rgb(225, 225, 225)">
            <label>User Name</label>
            <input type="text" class="bg-dark text-white mx-3 my-1" placeholder="Enter User Name"
                v-model="newUser['name']" />
        </div>
        <div class="d-flex justify-content-between" style="color: rgb(225, 225, 225)">
            <label>User Age</label>
            <input type="number" class="bg-dark text-white mx-3 my-1" placeholder="Enter User Age"
                v-model="newUser['age']" />
        </div>
        <div class="d-flex justify-content-between" style="color: rgb(225, 225, 225)">
            <label>User Email</label>
            <input type="email" class="bg-dark text-white mx-3 my-1" placeholder="Enter User Email"
                v-model="newUser['email']" />
        </div>
        <div class="d-flex justify-content-between" style="color: rgb(225, 225, 225)">
            <label>User Role</label>
            <select class="bg-dark text-white mx-3 my-1" v-model="newUser['role']">
                <option value="admin">Admin</option>
                <option value="student">Student</option>
            </select>
        </div>
        <div class="d-flex justify-content-end">
            <button class="btn btn-success mt-3 mx-3" @click="addBtnHandler()">
                Add
            </button>
        </div>
        <div v-if="renderSuccess" class="alert alert-success mx-3 my-2" role="alert">
            User Successfully added!
        </div>
    </div>
</template>

<script>
export default {
    name: "AddComponent",
    methods: {
        addBtnHandler() {
            this.sendAddedUserToParent();
            this.clearInputFields();
            this.showSuccessDiv();
        },
        clearInputFields() {
            this.newUser = {};
        },
        showSuccessDiv() {
            this.renderSuccess = true;
        },
        sendAddedUserToParent() {
            this.$emit('addBtnPressed', this.newUser);
        }
    },
    data() {
        return {
            newUser: {
                name: "",
                age: 0,
                email: "",
                role: "",
            },
            renderSuccess: false,
        }
    }
}
</script>

<style scoped>
</style>