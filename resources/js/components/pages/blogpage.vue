<template>
    <div>
        <h5 class="pb-4 pl-2">Blogs <button class="btn btn-sm btn-light ml-4"><i class="fas fa-plus"></i> Add New</button></h5>
        <div class="row">
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <a href="">
                            <img src="/images/uploads/2.png" class="card-img-top" alt="...">
                        </a>
                    </div>
                    <div class="card-body position-relative">
                        <div class="">
                            <h6 class="d-inline-block">Category: Laravel</h6>
                            <button class="btn btn-outline-danger float-right btn-sm" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                            <button class="btn btn-outline-dark float-right btn-sm mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                        </div>
                        <a class="text-decoration-none" href="">
                            <small class="text-secondary">19 jun 2019</small>
                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/1.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body position-relative">
                        <div class="">
                            <h6 class="d-inline-block">Category: Laravel</h6>
                            <button class="btn btn-outline-danger float-right btn-sm" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                            <button class="btn btn-outline-dark float-right btn-sm mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                        </div>
                        <small class="text-secondary">19 jun 2019</small>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>

                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/3.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body position-relative">
                        <div class="">
                            <h6 class="d-inline-block">Category: Laravel</h6>
                            <button class="btn btn-outline-danger float-right btn-sm" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                            <button class="btn btn-outline-dark float-right btn-sm mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                        </div>
                        <small class="text-secondary">19 jun 2019</small>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>

                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/4.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body position-relative">
                        <div class="">
                            <h6 class="d-inline-block">Category: Laravel</h6>
                            <button class="btn btn-outline-danger float-right btn-sm" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                            <button class="btn btn-outline-dark float-right btn-sm mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                        </div>
                        <small class="text-secondary">19 jun 2019</small>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>

                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/6.jpg" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body position-relative">
                        <div class="">
                            <h6 class="d-inline-block">Category: Laravel</h6>
                            <button class="btn btn-outline-danger float-right btn-sm" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                            <button class="btn btn-outline-dark float-right btn-sm mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                        </div>
                        <small class="text-secondary">19 jun 2019</small>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>

                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6 pb-4">
                <div class="card">
                    <div class="p-4 m-auto">
                        <img src="/images/uploads/5.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body position-relative">
                        <div class="">
                            <h6 class="d-inline-block">Category: Laravel</h6>
                            <button class="btn btn-outline-danger float-right btn-sm" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                            <button class="btn btn-outline-dark float-right btn-sm mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                        </div>
                        <small class="text-secondary">19 jun 2019</small>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>

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
