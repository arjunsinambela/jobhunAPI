<template>
    <div>
        <div class="row">

        <div class="col-md-12">
            <div class="card shadow mb-4">
                                    <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Jobhun Career Hub</h6>
                </div>
                <!-- Card Body -->
                <div class="container">
                    <br>
                <form>
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <input type="text" class="form-control" id="validationDefauld01" placeholder="keyword">
                        </div>
                        <div class="col-md-5 mb-3">
                            <select class="form-control">
                                <option selected>category</option>
                                <option>Full Time</option>
                                <option>Frelance</option>
                                <option>Internship</option>
                                <option>Part Time</option>
                                <option>Volunter</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select class="form-control">
                                <option selected>Kota</option>
                                <option>Surabaya</option>
                                <option>jakarta </option>
                            </select>
                        </div>
                        <div class="col-md-3">
                          <button type="button" class="btn btn-primary"><i class="fa fa-search"> Search</i></button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>