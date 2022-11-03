function do_assignment(callback){
    console.log("Iam doing assignment and it is done now...");
    callback();
}

function copy_assignment() {
    console.log("hey bro...Thanku you. let me copy...");
}
do_assignment(copy_assignment);