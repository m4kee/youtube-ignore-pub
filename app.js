var pub = window.document.querySelector('.videoAdUiPreSkipButton');
if(pub != null) {
    var i;
    i = setInterval(function() {
        var interval = i
        var button = window.document.querySelector('.videoAdUiAction');
        if(button == null) {
            clearInterval(interval);
        }else{
            button.click();
        }
    }, 1000);
}
