
function selectDistrict(){
    myForm.bzrnr = myForm.beznum;
    myForm.otnr = myForm.otnum;
    if (myForm.bzrnr != ""){
        myForm.bzrname = myForm['beznum/@label'];
    }else{
        myForm.bzrname = "";
    }
    if (myForm.otnr != ""){
        myForm.otname = myForm['otnum/@label'];
    }else{
        myForm.otname = "";
    }
}
