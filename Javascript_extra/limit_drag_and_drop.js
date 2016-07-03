//Limit drag and drop files to object with class k-dropzone
function limitDragAndDrop(className) {

    //Prevent drag Over in all window
    window.addEventListener("dragover", function (e) {
        e = e || event;
        e.preventDefault();
        //Show cursor none when can't drop file in this place
        e.dataTransfer.dropEffect = ($(e.target).hasClass(className) || $(e.target).parents().hasClass(className)) ? 'copy' : 'none';
    }, false);

    //Prevent drop in all window
    window.addEventListener("drop", function (e) {
        e = e || event;
        e.preventDefault();
    }, false);
}

