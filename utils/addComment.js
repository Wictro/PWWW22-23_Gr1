var comment;
var commentSection;
function insertComment(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode == '13') {
        event.preventDefault();
        comment = event.target.value;
        let newComment = '<div style="display:flex; flex-wrap: wrap; ">' +
        '<div style="font-size: 25px; margin: 0px 5px 0px 6px; color: white; width: 10%; height: 40px; background-color: #626258 ; border-radius: 20px"><i class="fa fa-user" style="padding-top: 15%; padding-left: 25%;"></i></div>' +
        '<div style = "margin: 0px 10px 13px 0px; border-radius: 15px; width: 82%; background-color: rgba(197, 138, 27, 0.1);   border: 0.8px solid rgb(197, 138, 27); font-family: sans serif;">' +
        '<span style="font-size: 13px; font-weight: 600; color: black; padding-left: 12px; padding-top: 3px;">' + 'You' + '</span>' +
        '<p style="font-size: 11px; color: #23231F; padding-left: 20px; padding-bottoms: 5px;">' + comment + '</p>' +
        '</div>' +
        '</div>';
        commentSection = event.target.parentNode.parentNode.parentNode.nextSibling.nextSibling;
        commentSection.innerHTML += newComment;
        event.target.value = '';
    }
}