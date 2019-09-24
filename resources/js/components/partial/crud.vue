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
                        </div>
                    </div>
                    <!-- Card Body -->
                    <div class="card-body">
                        <input type="text" v-model="inputbaru">
                        <input type="submit" @click="tambahUser">

                        <br> <br>

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr v-bind:key="user" v-for="(user, index) in daftaruser">
                                    <td> {{index + 1}} </td>
                                    <td> {{user.nama}} </td>
                                    <td>
                                        <button class="btn btn-sm btn-danger"><span class="fa fa-trash"></span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                judul: "CRUD Vue Js",
                daftaruser: [
                    {nama: "zunedi"},
                    {nama: "oces"},
                    {nama: "Daffa"},
                ],
                inputbaru: ''
            }
        },
		methods: {
			tambahUser: function () {
				this.daftaruser.push({nama:this.inputbaru});
			}
		}
    }

</script>
