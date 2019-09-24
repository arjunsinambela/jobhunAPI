<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Telepon</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id" >
                            <td> {{user.id}} </td>
                            <td> {{user.name}} </td>
                            <td> {{user.email}} </td>
                            <td> {{user.phone}} </td>
                        </tr>
                        <button class="btn btn-primary" @click="getData">Dapat Data</button>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            users: []
        }
    },
    mounted() {
        this.getData();
    },
    methods:{
        getData: function(){
            axios.get('http://192.168.100.166/pdsuit/public/api/users').then(response=>{
                console.log(response.data);
                this.users = response.data.users;
            });
        }
    }
}
</script>