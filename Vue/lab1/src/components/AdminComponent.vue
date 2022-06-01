<template>
    <div class="d-flex justify-content-center w-50 mx-auto">
        <table class="table table-bordered table-dark">
            <thead>
                <tr>
                    <th colspan="4" class="text-center h4">Admins Table</th>
                </tr>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <template v-for="(user, index) in users" :key="index">
                <tr scope="row" v-if="user.role === 'admin'">
                    <td>{{ user.name }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.email }}</td>
                    <td>
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
    name: "AdminComponent",
    props: ['users'],
    methods: {
        deleteBtnHandler(deletedUserEmail) {
            this.$emit('deleteBtnPressed', deletedUserEmail);
        },
    },
    data() {
        return {
        }
    }

}
</script>

<style scoped>
</style>