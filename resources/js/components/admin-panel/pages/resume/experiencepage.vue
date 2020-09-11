<template>
    <div>
        <h5 class="pb-4 pl-2">Experience <button class="btn btn-sm btn-light ml-4"><i class="fas fa-plus"></i> Add New</button></h5>
        <div class="row">
            <div class="col-md-6 pb-4">
                <div class="card rounded shadow-sm">
                    <div class="card-body">
                        <h6 class="text-danger">19 june 2011 - 11 dec 2019</h6>
                        <h5 class="pb-2">Bsc in Cse</h5>
                        <h6>Creative dev studio</h6>
                        <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate error, fugit illum laboriosam magnam odio, possimus quis sit sunt, tenetur totam! Aliquid eos explicabo in labore rem vero voluptatem.
                        </p>
                    </div>
                    <div class="update-data-btn-absolute">
                        <button class="btn btn-outline-danger btn-sm float-right" data-toggle="modal" data-target=""><i class="far fa-trash-alt"></i></button>
                        <button class="btn btn-outline-dark btn-sm float-right mr-2" data-toggle="modal" data-target="#skillAreaUpdate"><i class="fas fa-edit"></i></button>
                    </div>

                </div>
            </div>
            <div class="col-md-6 pb-4">
                <div class="card rounded shadow-sm">
                    <div class="card-body">
                        <h6 class="text-danger">19 june 2011 - 11 dec 2019</h6>
                        <h5 class="pb-2">Bsc in Cse</h5>
                        <h6>Creative dev studio</h6>
                        <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae cupiditate error, fugit illum laboriosam magnam odio, possimus quis sit sunt, tenetur totam! Aliquid eos explicabo in labore rem vero voluptatem.
                        </p>
                    </div>
                    <div class="update-data-btn-absolute">
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
