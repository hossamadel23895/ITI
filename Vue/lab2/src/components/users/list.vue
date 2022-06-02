<template>
    <div class="d-flex flex-column align-items-center w-50 mx-auto">
        <router-link class="btn btn-success my-3 align-self-end" to="/add">Add User</router-link>
        <table class="table table-bordered table-dark">
            <thead>
                <tr>
                    <th colspan="4" class="text-center h4">Users Table</th>
                </tr>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <template v-for="user in users" :key="user.id">
                <tr scope="row">
                    <td>{{ user.id }}</td>
                    <td>{{ user.full_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <router-link :to="`/users/${user.id}`" class="btn btn-primary btn-sm mx-1 my-1">Details
                        </router-link>
                        <button class="btn btn-danger btn-sm mx-1 my-1" @click="deleteBtnHandler(user.email)">
                            Delete
                        </button>
                    </td>
                </tr>
            </template>
        </table>
    </div>
</template>

<script>
export default {
    name: 'listUsers',
    props: ['users'],
    methods: {
        deleteBtnHandler(deletedUserEmail) {
            this.$emit('deleteBtnPressed', deletedUserEmail);
        },
    }

}
</script>

<style scoped>
</style>