<template>
    <div>
        <h5 class="pb-4 pl-2">Basic Information</h5>
        <div class="row">
            <div class="col-xl-6 col-lg-10 pb-2">
                <div class="card rounded shadow-sm">
                    <div class="card-body text-center">
                        <img class="profile-image shadow rounded-circle mb-4" src="/images/uploads/profile_pic.png" alt="">
                        <h6 class="text-secondary">Sajib Ahmed</h6>
                        <h5>Full Stack Web Developer</h5>
                        <p class="text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto, autem, ea, enim est eveniet id incidunt itaque iusto laborum laudantium maxime optio quaerat ratione sapiente sed tempore totam velit.
                        </p>
                        <button class="btn btn-light btn-sm update-data-btn-absolute" data-toggle="modal" data-target="#staticBackdrop"><i class="fas fa-edit pr-2"></i>Update</button>

                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-10 pb-2">
                <div class="card rounded shadow-sm">
                    <div class="card-body">
                        <h5 class="pb-2 pl-2">Buttons</h5>
                        <div class="pb-2 mb-2 border-bottom">
                            <a href="" class="btn btn-outline-dark btn-sm m-2">Download Cv</a>
                            <label class="switch-toggle float-right mt-3">
                                <input class="switch-checkbox" type="checkbox" checked>
                                <label class="switch-checkbox-label onbtn">On</label>
                                <label class="switch-checkbox-label offbtn">Off</label>
                            </label>
                            <button class="btn btn-outline-dark btn-sm" data-toggle="collapse" data-target="#downloadCv" aria-expanded="false" aria-controls="downloadCv"><i class="fas fa-edit"></i></button>
                            <div class="collapse" id="downloadCv">
                                <div class="m-2">
                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="downloadCv-input">WebLink</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Small" aria-describedby="downloadCv-input">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-secondary" type="button">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pb-2 mb-2 border-bottom">
                            <a href="" class="btn btn-outline-danger btn-sm m-2">Youtube</a>
                            <label class="switch-toggle float-right mt-3">
                                <input class="switch-checkbox" type="checkbox" checked>
                                <label class="switch-checkbox-label onbtn">On</label>
                                <label class="switch-checkbox-label offbtn">Off</label>
                            </label>
                            <button class="btn btn-outline-dark btn-sm" data-toggle="collapse" data-target="#youtube-btn" aria-expanded="false" aria-controls="youtube-btn"><i class="fas fa-edit"></i></button>
                            <div class="collapse" id="youtube-btn">
                                <div class="m-2">
                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-youtube-btn">WebLink</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-youtube-btn">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-secondary" type="button">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pb-2 mb-2 border-bottom">
                            <a href="" class="btn btn-outline-info btn-sm m-2">Blog</a>
                            <label class="switch-toggle float-right mt-3">
                                <input class="switch-checkbox" type="checkbox">
                                <label class="switch-checkbox-label onbtn">On</label>
                                <label class="switch-checkbox-label offbtn">Off</label>
                            </label>
                            <button class="btn btn-outline-dark btn-sm" data-toggle="collapse" data-target="#blog-btn" aria-expanded="false" aria-controls="blog-btn"><i class="fas fa-edit"></i></button>
                            <div class="collapse" id="blog-btn">
                                <div class="m-2">
                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-blog-btn">WebLink</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-blog-btn">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-secondary" type="button">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pb-2 mb-2 border-bottom">
                            <div class="ml-2 text-muted"><small>blog</small></div>
                            <a href="" class="btn btn-outline-primary btn-sm m-2">See All Post</a>
                            <label class="switch-toggle float-right mt-3">
                                <input class="switch-checkbox" type="checkbox">
                                <label class="switch-checkbox-label onbtn">On</label>
                                <label class="switch-checkbox-label offbtn">Off</label>
                            </label>
                            <button class="btn btn-outline-dark btn-sm" data-toggle="collapse" data-target="#show-more-btn" aria-expanded="false" aria-controls="show-more-btn"><i class="fas fa-edit"></i></button>
                            <div class="collapse" id="show-more-btn">
                                <div class="m-2">
                                    <div class="input-group input-group-sm mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroup-show-more-btn">WebLink</span>
                                        </div>
                                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-show-more-btn">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-outline-secondary" type="button">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--                update model-->
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
    </div>
</template>
