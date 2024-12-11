/**
 *  공지사항 다시보지않기 클릭시 닫기 이벤트
 */


/**
 * 상품목록
 */
// 상품 수량 변경
let count = 1;
$(".quantity-plus").click(function () {
  count++
  let $quantity = $(this).siblings(".quantity")
  let max = $quantity.attr("max")
  $quantity.val(count)
  if (count >= max) {
    $quantity.val(max)
    count = max
  }
})
$(".quantity-minus").click(function () {
  count--
  let $quantity = $(this).siblings(".quantity")
  let min = $quantity.attr("min")
  $quantity.val(count)
  if (count <= min) {
    $quantity.val(min)
    count = min
  }
})


// 장바구니에 상품 추가
function cartInsert() {

  let id = $("#id").val()
  let quantity = $("#quantity").val()
  let otpionId = $("#optionId").val()
  let itemList = new Array();
  $("input[name=itemList").each(function(){
    itemList.push({"id":$(this).val()})
  })
  let data = {
    id : id,
    quantity : quantity,
    option : {
      id : otpionId,
      itemList : itemList
    }
  }
  let sendData = JSON.stringify(data)
  console.log("장바구니 추가중..");
  
  $.ajax({
    url : "/qr/carts",
    data : sendData,
    contentType : "application/json",
    type : "post",
    success : function (response) {
      console.log("장바구니 추가완료.");
      console.log(response)
      if ($.trim(response) == "SUCCESS") {
        alert("추가 완료")
        location.href = "/qr/list"
      }
    },
    error: function (data, status, err) {
      console.log("에러");
      console.log(data);
      console.log(status);
      console.log(err);
    }
  })
}
// 장바구니에서 상품 제거
function cartDelete(id) {
  let url = '/qr/carts'
  let data = {
    id : id
  }
  if (confirm('삭제하시겠습니까?')) {
    $.ajax({
      url : url,
      data : data,
      type : 'delete', 
      success : function(response) {
        if ($.trim(response) == 'SUCCESS') {
          location.reload()
        }
        
      }
    })
  }
}

// 주문하기

/**
 *  MODAL
 */

// 모달 열기

// 모달 닫기