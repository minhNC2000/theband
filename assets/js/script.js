const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')
        const modalClose = document.querySelector('.js-modal-close')

        // Hàm hiển thị modal mua vé(thêm class open vào modal)
        function showBuyTickets() {
            modal.classList.add('open')
        }

        // Hàm ẩn modal mua vé(gỡ bỏ class open của modal)
        function hideBuyTickets() {
            modal.classList.remove('open')
        }

        //Lặp qua từng thẻ btn và nghe hành vi click
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        //Nghe hành vi click vào btn Close
        modalClose.addEventListener('click', hideBuyTickets)

        modal.addEventListener('click', hideBuyTickets)

        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })

//Đóng mở Mobile-menu
var header = document.getElementById('header');
var MobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

MobileMenu.onclick = function(){
    var isClose = header.clientHeight === headerHeight;
    if(isClose){
        header.style.height ='auto';
    }
    else{
        header.style.height = null;
    }
}

//Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu){
            header.style.height = null;
        }
        else{
            event.preventDefault();
        }      
    }
}
