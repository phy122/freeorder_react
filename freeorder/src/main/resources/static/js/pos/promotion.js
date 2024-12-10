
let url = "/pos/notices";
// 프로모션 등록
function noticeInsert() {
    let formData = new FormData( $("#promotion-insert")[0])
    $.ajax({
        url             : url,
        method          : "post",
        data            : formData,
        contentType     :   false,
        processData     :   false,
        success : function(data){
            if ($.trim(data) == "SUCCESS") {
                alert("등록 성공")
                location.href = "/pos/promotion"
            }
        }
    }) 
}
// 프로모션 수정
function noticeUpdate() {
    let formData = new FormData($("#pro-update")[0]);
    $.ajax({
        url: url,
        method: "put",
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            if ($.trim(data) == "SUCCESS") {
                alert("수정 성공");
                location.href = "/pos/promotion";
            }
        }
    });
}

// 프로모션 삭제
function noticeDelete(id) {
    let formData = new FormData();
    formData.append("id",id)
    if (confirm("삭제 하시겠습니까?")) {
        $.ajax({
            url: url,
            method: "delete",
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                if ($.trim(data) == "SUCCESS") {
                    alert("삭제 성공");
                    location.href = "/pos/promotion";
                }
            }
        })
    }
}