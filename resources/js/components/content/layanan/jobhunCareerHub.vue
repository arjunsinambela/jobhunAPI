<template>
    <div>
        <div class="row">

            <div class="col-md-12 wow fadeIn" data-wow-delay="0.2s">
                <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Jobhun Career Hub</h6>
                    </div>
                    <!-- Card Body -->
                    <div class="container">
                        <br>
                        <h1>{{heading}}</h1>
                        <form>
                            <div class="form-row">
                                <div class="col-md-12 mb-3">
                                    <input type="text" class="form-control" id="validationDefauld01"
                                        placeholder="keyword">
                                </div>
                                <div class="col-md-5 mb-3">
                                    <select class="form-control" name="make" id="make" v-model="make" >
                                        <option value="null" disabled selected>selected make</option>
                                        <option v-for="opt in makes_options" :key="opt.id" :value="opt.id">{{opt.text}}</option>
                                        <!-- <option selected>category</option>
                                        <option>Full Time</option>
                                        <option>Frelance</option>
                                        <option>Internship</option>
                                        <option>Part Time</option>
                                        <option>Volunter</option> -->
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <select class="form-control" name="city" id="city" v-model="city">
                                        <option v-for="citys in citys_options" :key="citys.id" :value="citys.id">{{citys.text}}</option>
                                        <!-- <option selected>Kota</option>
                                        <option>Surabaya</option>
                                        <option>jakarta </option>
                                        -->
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <button type="button" class="btn btn-primary"><i class="fa fa-search">
                                            Search</i></button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <!-- <div class="card-deck wow fadeIn" data-wow-delay="0.4s">
                <div class="col-md-4 ">
                    <div class="card">
                        <img class="card-img-top" src="asset/img/jobhun_putih.png" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">Magang di Tuupai | PT Ilios Studio Teknologi - Tuupai App</h5>
                            <p><i class="fas fa-map-marker-alt"></i> Bali</p>
                            <p class="card-text">This is a wider card with supporting text below as a
                                natural lead-in to additional content. This content is a little bit
                                longer.</p>
                                <a href="#" class="btn btn-success">Read More</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

            </div> -->
            <table>
                <thead>
                <tr>
                    <th>Perusahaan</th>
                    <th>Lokasi</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="job in jobs.data" :key="job.id">
                    <td>{{job.company_name}}</td>
                    <td>{{job.company_address}}</td>
                </tr>
                </tbody>
            </table>
            <div>
                    <pagination :data="jobs" @pagination-change-page="getData"></pagination>
                </div>
            <div class="col text-center">
                <router-link to="pasang-loker"><button type="button" class="btn btn-success">Posting Loker</button></router-link>
            </div>
    <br>
    <br>

        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                jobs: {},
                perpage: 1,


                //dropdown category
                heading: 'coba Vue',
                make: null,
                makes_options: [],

                //dropdown kota

                city: null,
                citys_options: [],



            }
        },
        mounted() {
            this.getData();
            this.init();

        },
        methods: {
            getData: function(page=1){
                axios.get('http://localhost/jobhun2/public/api/job/filter/'+ this.perpage + '?page=' + page).then(response=>{
                    console.log(response.data);
                    this.jobs = response.data.jobs;
                });
            },

            //dropdown category
            init : function(){

                this.makes_options = [
                    {text: 'fultime', id: 1},
                    {text: 'freelance', id: 2},
                    {text: 'volunter', id: 3},
                    {text: 'intership', id: 4}
                ];

                    this.citys_options = [
                    {text : 'surabaya', id: 1},
                    {text : 'jakarta', id: 2},
                    {text : 'bali', id: 3},
                    {text : 'mojokerto', id: 4},
                    {text : 'gresik', id: 5},
                    {text : 'madura', id: 6},


                ]

            },

            //dropdown city



        }

    }

</script>
