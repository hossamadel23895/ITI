<template>
    <div class="d-flex flex-column w-25 m-auto">
        <h2 class="text-center my-3">User Details</h2>
        <div class="card">
            <div class="card-body bg-dark">
                <h5 class="card-title">{{ user.id }} : {{ user.full_name }}</h5>
                <p class="card-text">{{ user.email }}</p>
            </div>
        </div>
        <a @click="$router.go(-1)" class="btn btn-danger btn-sm mt-3 mx-3 d-flex align-self-center">Back To Users</a>
    </div>
</template>

<script>
export default {
    name: 'detailsComponent',
    props: ['users'],
    data() {
        return {
            id: 0,
            user: { id: 0, full_name: '', email: '' }
        }
    },
    watch: {
        $route() {
            this.getUserDetails();
        }
    },
    created() {
        this.user.id = this.$route.params.id;
        this.getUserDetails();
    },
    methods: {
        getUserDetails() {
            this.id = this.$route.params.id;
            this.user = this.users.find(user => user.id == this.id);
        }
    }
}
</script>

<style scoped>
</style>