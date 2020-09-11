<template>
    <div>
        <h5 class="pb-4 pl-2">Clients <button class="btn btn-sm btn-light ml-4"><i class="fas fa-plus"></i> Add New</button></h5>
        <div class="row">
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/beca.jpg" class="card-img-top" alt="..." style="max-width: 200px">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title d-inline-block pr-4">Eradevs</h5>
                        <a href="#" class="card-link"><i class="fas fa-globe"></i> Website</a>
                        <button class="btn btn-outline-danger btn-sm float-right" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                        <button class="btn btn-outline-dark btn-sm float-right mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/industrygold.jpg" class="card-img-top" alt="..." style="max-width: 200px">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title d-inline-block pr-4">Eradevs</h5>
                        <a href="#" class="card-link"><i class="fas fa-globe"></i> Website</a>
                        <button class="btn btn-outline-danger btn-sm float-right" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                        <button class="btn btn-outline-dark btn-sm float-right mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/nirviq.jpg" class="card-img-top" alt="..." style="max-width: 200px">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title d-inline-block pr-4">Eradevs</h5>
                        <a href="#" class="card-link"><i class="fas fa-globe"></i> Website</a>
                        <button class="btn btn-outline-danger btn-sm float-right" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                        <button class="btn btn-outline-dark btn-sm float-right mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/creative_dev.jpg" class="card-img-top" alt="..." style="max-width: 200px">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title d-inline-block pr-4">Eradevs</h5>
                        <a href="#" class="card-link"><i class="fas fa-globe"></i> Website</a>
                        <button class="btn btn-outline-danger btn-sm float-right" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                        <button class="btn btn-outline-dark btn-sm float-right mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                    </div>
                </div>
            </div>
        </div>


        <!--                update model-->
        <!-- Modal -->
        <div class="modal fade" id="skillAreaUpdate" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Update basic Information</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Example select</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">update</button>
                    </div>
                </div>
            </div>
        </div>
        <!--                end update model-->
    </div>
</template>
