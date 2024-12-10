/**
 *  공지사항 다시보지않기 클릭시 닫기 이벤트
 */


/**
 * 상품목록
 */
// 상품 수량 변경
let count = 1;
$(".quantity-plus").click(function () {
  console.log("+++");
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
  console.log("---");
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
  let otpionId = $("#optionId").val()
  let itemList = new Array();
  $("input[name=itemList").each(function(){
    itemList.push({"id":$(this).val()})
  })
  let data = {
    id : id,
    option : {
      id : otpionId,
      itemList : itemList
    }
  }
  let sendData = JSON.stringify(data)
  console.log(sendData);
  
  $.ajax({
    url : "/qr/carts",
    data : sendData,
    contentType : "application/json",
    dataType : "json",
    type : "post",
    success : function (response) {
      console.log(response);
    }
  })
}

// 주문하기

/**
 *  MODAL
 */

// 모달 열기

// 모달 닫기