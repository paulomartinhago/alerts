;(function($){

    var alert               = $('.alert-message'),
        alertSuccess        = alert.filter('.success').clone(),
        alertInfo           = alert.filter('.info').clone(),
        alertError          = alert.filter('.error').clone(),
        alertWarning        = alert.filter('.warning').clone(),
        createClone         = $('.create-clone'),
        targetInsertClones  = $('#target-insert-clones');

    var cloneAlertMessage = function(target, alert){
        target.append( alert );
        alert.hide().fadeIn('fast');
    };

    $(document).on('click', '.alert-message button', function(){
        var target = $(this).closest('.alert-message');

        target.fadeOut(500, function(){
            target.remove();
        });
    });

    createClone.on('click', function(){
        var target = null;

        switch( $(this).data('clone') ){
            case 'success' : target = alertSuccess; break;
            case 'error'   : target = alertError; break;
            case 'warning' : target = alertWarning; break;
            default        : target = alertInfo; break;
        }

        cloneAlertMessage( targetInsertClones, target.clone() );
    });

}(jQuery));