<template>
    <div>
        <h5 class="pb-4 pl-2">Settings <button class="btn btn-sm btn-light ml-4"><i class="fas fa-plus"></i> Add New</button></h5>
        <div class="">
            <div class="row">
                <div class="col-xl-6 col-md-8 pb-2">
                    <div class="card rounded shadow-sm">
                        <div class="card-body">
                            <h5 class="pb-4">Contact</h5>
                            <div class="pb-2 border-bottom mb-2 position-relative">
                                <span class="mr-2 text-danger pl-2 pl-sm-0"><i class="fas fa-mobile-alt"></i></span>
                                <h6 class="d-block d-sm-inline-block mr-2 ml-2"><span class="fixed-width-contact-title">Phone:</span><small>01771335956</small></h6>
                                <button class="btn btn-sm float-right mr-2 button-position-absolute-contact" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                            </div>
                            <div class="pb-2 border-bottom mb-2 position-relative">
                                <span class="mr-2 text-danger pl-2 pl-sm-0"><i class="far fa-address-book"></i></span>
                                <h6 class="d-block d-sm-inline-block mr-2 ml-2"><span class="fixed-width-contact-title">Address:</span><small>kollyanpur,dhaka</small></h6>
                                <button class="btn btn-sm float-right mr-2 button-position-absolute-contact" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                            </div>
                            <div class="pb-2 border-bottom mb-2 position-relative">
                                <span class="mr-2 text-danger pl-2 pl-sm-0"><i class="far fa-envelope-open"></i></span>
                                <h6 class="d-block d-sm-inline-block mr-2 ml-2"><span class="fixed-width-contact-title">Gmail:</span><small>sajib2717@gmail.com</small></h6>
                                <button class="btn btn-sm float-right mr-2 button-position-absolute-contact" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-md-8 pb-2">
                    <div class="card rounded shadow-sm">
                        <div class="card-body">
                            <h5 class="pb-4">Account</h5>
                            <button class="btn btn-sm float-right mr-2 button-position-absolute-account" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                            <div class="pb-2 border-bottom mb-2">
                                <span class="mr-2 text-danger pl-2 pl-sm-0"><i class="fas fa-long-arrow-alt-right"></i></span>
                                <h6 class="d-block d-sm-inline-block mr-2 ml-2"><span class="fixed-width-contact-title">Name:</span><small>Sajib ahmed</small></h6>
                            </div>
                            <div class="pb-2 border-bottom mb-2 position-relative">
                                <span class="mr-2 text-danger pl-2 pl-sm-0"><i class="fas fa-long-arrow-alt-right"></i></span>
                                <h6 class="d-block d-sm-inline-block mr-2 ml-2"><span class="fixed-width-contact-title">Gmail:</span><small>Sajib2717@gmail.com</small></h6>
                            </div>
                            <div class="pb-2 border-bottom mb-2 position-relative">
                                <span class="mr-2 text-danger pl-2 pl-sm-0"><i class="fas fa-long-arrow-alt-right"></i></span>
                                <h6 class="d-block d-sm-inline-block mr-2 ml-2"><span class="fixed-width-contact-title">Site Gmail:</span><small>sajib2717@gmail.com</small></h6>
                            </div>
                            <button class="btn btn-outline-dark btn-sm float-right mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i>Change Password</button>
                        </div>
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
