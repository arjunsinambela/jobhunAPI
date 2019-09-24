<template>
    <div>
        <div class="row">

            <!-- Area Chart -->
            <div class="col-md-12">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">{{judul}}</h6>
                        <div class="dropdown no-arrow">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div class="dropdown-header">Dropdown Header:</div>
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <button class="btn btn-primary" @click="cobadoang" v-if="admin">tambah</button>
                        <button class="btn btn-danger" v-else>anda bukan admin</button>

                        <br />
                        <button @click="gantiRole">ganti role user</button>
                        <br />
                        <p>daftar programmer jobhun :</p>
                        <ul>
                            <li v-bind:key="user" v-for="user in daftaruser">{{user}}</li>
                        </ul>
                        <hr>
                        <input type="text" v-model="inputbaru">
                        <input type="submit" @click="tambahUser">
                        <hr>


                        <input type="text" v-model="nama">
                        <input type="text" v-model="umur">
                        <input type="submit" @click="tambahUser2">

                        <div v-if="daftarusers.length > 0">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Umur</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-bind:key="user" v-for="(user,index) in daftarusers">
                                        <td>{{index + 1}}</td>
                                        <td>{{user.nama}}</td>
                                        <td>{{user.umur}}</td>
                                        <td>
                                            <button class="btn btn-danger" @click="deleteUser(index)"><span
                                                    class="fa fa-trash"></span></button>
                                            <button class="btn btn-warning"><span class="fa fa-pencil"
                                                    @click="showEditModal(index)"></span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div v-else>
                            <p>Maaf belum ada data</p>
                        </div>
                        <hr>
                        <div>
                            <router-link to="/ucapan"><button class="btn btn-info"><span
                                        class="fa fa-back"></span>home</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <modal name="edit-modal">
            <form @submit.prevent="saveEditModal">
                <input type="text" class="form-control" v-model="userpilihan.nama">
                <input type="number" class="form-control" v-model="userpilihan.umur">
                <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span></button>
                <button class="btn btn-danger"><span class="fa fa-times"></span></button>
            </form>
        </modal>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                judul: "Daftar User",
                admin: false,
                daftaruser: ['oces', 'boy', 'dafa'],
                daftarusers: [{
                        nama: 'oces',
                        umur: 18
                    },
                    {
                        nama: 'arjun',
                        umur: 30
                    },
                    {
                        nama: 'boy',
                        umur: 5
                    },
                ],
                inputbaru: '',
                userpilihan: {},
                indexpilihan: 0,
                
                tambahUser2:'',
                nama: '',
                umur:''
            }
        },
        methods: {
            cobadoang: function () {
                alert("hayo coba coba");
            },
            gantiRole: function () {
                this.admin = !this.admin;
            },
            tambahUser: function () {
                this.daftaruser.push(this.inputbaru);
            },
            tambahUser2: function (user) {
                this.daftarusers.push({nama: this.nama, umur: this.umur});
            },
            deleteUser: function (idx) {
                //var user = this.daftarusers[idx];
                this.daftarusers.splice(idx, 1);
            },
            showEditModal: function (idx) {
                this.indexpilihan = idx;
                this.userpilihan = JSON.parse(JSON.stringify(this.daftarusers[idx]));
                this.$modal.show('edit-modal');
            },
            hideEditModal: function () {
                this.userpilihan = {};
                this.$modal.hide('edit-modal');
            },
            saveEditModal: function () {
                this.daftarusers[this.indexpilihan] = JSON.parse(JSON.stringify(this.userpilihan));
                this.$modal.hide('edit-modal');
            }
        }
    }

</script>
