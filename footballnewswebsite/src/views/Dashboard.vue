<template>
<center>
    <br>
    <h2>Welcome to Admin Dashboard</h2>
    <p>Below you can check out the registered users by clicking the button below!</p>
    <a href="/users" type="button" class="btn btn-primary text-white">Show Registered Users</a> &nbsp;
    
</center>
</template>

<script>
import API from '../api';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default{
    data(){
        return{
            users: [],
        };
    },
    async created(){
        this.users = await API.getAllUser();
    },
    methods:{
    }
};
</script>

<style>
.table{
    height:60%;
    width:60%;
}
</style>
