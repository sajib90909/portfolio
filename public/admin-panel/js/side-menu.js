let btnToggle = $('#side-menu-toggle');
let sideMenu = $('#side-menu');
let contentDiv = $('#content-div');
let btnToggleClose = $('#side-menu-toggle-close');
let sideMenuCheck = false;
let windowWidth = $(window).width();
let bodyOverly = $('.body-overlay');
let sideMenuDropDown = $('.side-menu-dropdown');

$('#side-menu-toggle, #side-menu-toggle-close, .body-overlay').click(function () {
    if(sideMenuCheck){
        sideMenuCheck = false;
        sideMenuInactive()
    }else{
        sideMenuCheck = true;
        sideMenuActive()
    }
})
function sideMenuActive() {
    sideMenu.addClass('transition')
    sideMenu.css('margin-left',0)
    bodyOverly.show();
    btnToggleClose.fadeIn()

}
// $('.side-bar-item').click(function () {
//     $(sideMenuDropDown).each(function() {
//         dropDownInactive(this)
//     });
//     if($(this).parent().find('.side-menu-dropdown').length > 0){
//         dropDownActive($(this).parent().find('.side-menu-dropdown'))
//     }
//
// })
function sideMenuInactive() {
    sideMenu.addClass('transition')
    sideMenu.css('margin-left','-270px')
    btnToggleClose.hide()
    bodyOverly.hide();
}


sideMenuDropDown.click(function (e) {
    e.preventDefault()
    dropDownFunction(this)
})

$(sideMenuDropDown).each(function() {
    let targetDropdown = $(this).attr('data-target');
    if($(targetDropdown).has( ".router-link-active" ).length > 0){
        dropDownActive(this)
    }
});

function dropDownFunction(target){
    let expendCheck = $(target).attr('aria-expanded');
    if(expendCheck === 'false'){
        dropDownActive(target)
    }else{
        dropDownInactive(target)
    }
}
function dropDownActive(target) {
    $(target).addClass('dropdown-active')
    $(target).attr('aria-expanded','true')
    let targetDropdown = $(target).attr('data-target');
    $(targetDropdown).slideDown()
    $(target).find('.side-bar-item-logo-right').html('<i class="fas fa-angle-up"></i>')
}
function dropDownInactive(target) {
    $(target).removeClass('dropdown-active')
    $(target).attr('aria-expanded','false')
    let targetDropdown = $(target).attr('data-target');
    $(targetDropdown).slideUp()
    $(target).find('.side-bar-item-logo-right').html('<i class="fas fa-angle-down"></i>')
}
//===================================================account-dropdown=========
let accountDiv = $('.account-div-toggle')
let accountMenu = $('#account-menu')
let accountMenuCheck = true
accountDiv.click(function (e) {
    e.stopPropagation();
    if(accountMenuCheck){
        accountMenuCheck = false;
        accountMenu.show()
    }else{
        accountMenuCheck = true;
        accountMenu.hide()
    }
})
accountMenu.click(function (e) {
    e.stopPropagation();
})
$('body').click(function () {
    accountMenuCheck = true;
    accountMenu.hide()
})
