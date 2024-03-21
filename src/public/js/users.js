const { response } = require("express");

console.log("Users frontend javascript file");
$(function () {
    $(".member-status").on("change", function(e) {
        const id = e.target.is;
        console.log('id', id);

        const memberStatus = $(`#${id}.member-status`).val();
        console.log("memberSTatus", memberStatus);

        axios.post('/admin/user/edit', {_id: id, memberStatus: memberStatus}).then(response => {
            console.log("response", response);
            const result = response.data;
            console.log("result", result);

            if(result.data){
                console.log("User updated");
                $(".member-status").blur();
            }else {
                console.log('User update is failed');
            }
        }).catch(err => {
            console.log(err);
            alert('User update failed');
        })


    });
})