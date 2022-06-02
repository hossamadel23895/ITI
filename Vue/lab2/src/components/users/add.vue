<template>
    <div>
        <h3 class="text-center my-3">Add User</h3>
        <div class="d-flex justify-content-between" style="color: rgb(225, 225, 225)">
            <label>User Name</label>
            <input type="text" class="bg-dark text-white mx-3 my-1" placeholder="Enter User Name"
                v-model="newUser['full_name']" />
        </div>
        <div class="d-flex justify-content-between" style="color: rgb(225, 225, 225)">
            <label>User Email</label>
            <input type="email" class="bg-dark text-white mx-3 my-1" placeholder="Enter User Email"
                v-model="newUser['email']" />
        </div>
        <div class="d-flex justify-content-between">
            <a @click="$router.go(-1)" class="btn btn-danger btn-sm mt-3 mx-3">Back To Users</a>
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
                id: 0,
                full_name: "",
                email: "",
            },
            renderSuccess: false,
        }
    }
}
</script>

<style scoped>
</style>