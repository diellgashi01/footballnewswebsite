<template>
<center>
    <br>
    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody v-for="user in users">
            <tr>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</center>
</template>

<script>
import API from '../api';
import axios from 'axios';

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
