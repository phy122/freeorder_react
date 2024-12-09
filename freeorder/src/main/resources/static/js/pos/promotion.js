// 프로모션 입력
function proInsert() {
    let formData = new FormData($("#pro-insert")[0]); // 폼 데이터 생성
    let url = "/pos/notices"; // 요청할 URL

    console.log("폼 데이터 준비 완료:", formData); // 폼 데이터 확인
    console.log("요청 URL:", url); // URL 확인

    $.ajax({
        url: url,
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function(data) {
            console.log("서버 응답 데이터:", data); // 서버로부터 받은 응답 데이터 출력

            if ($.trim(data) === "success") {
                console.log("등록 성공"); // 성공 메시지 확인
                alert("등록 성공");
                location.href = "/pos/promotion"; // 리다이렉션
            } else {
                console.warn("등록 실패:", data); // 실패 시 로그 출력
                alert("등록 실패: " + data);
            }
        },
        error: function(xhr, status, error) {
            console.error("AJAX 요청 실패:", {
                status: status,
                error: error,
                responseText: xhr.responseText
            }); // AJAX 에러 상세 정보 출력
            alert("등록 중 오류가 발생했습니다.");
        }
    });
}


// 프로모션 수정
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".promotion-update-btn").addEventListener("click", function () {
        let formData = new FormData($("#pro-insert")[0]);
        let url = "/pos/notices";
        $.ajax({
            url: url,
            method: "post",
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                if ($.trim(data) == "success") {
                    alert("등록 성공");
                    location.href = "/pos/promotion";
                }
            }
        });
    });
});