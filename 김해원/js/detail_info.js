/*섬네일 이미지 시작*/
$(".thumb li a").click(function () {
  var address = $(this).children("img");
  $("#zoom_img img").attr("src", address.attr("src")).attr("alt", address.attr("alt"));
  $(this).parent().addClass("on").siblings().removeClass("on");
  return false;
});
/*섬네일 이미지 끝*/

/*주소 복사 시작*/
function copy_to_clipboard() {
  var copyText = document.getElementById('myInput');
  // 지정된 내용을 강조한다.
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  // 텍스트를 카피 하는 변수를 생성
  document.execCommand("Copy");
  alert('주소가 스크립트에 복사되었습니다.');
}
/*주소 복사 끝*/

/*캠핑장 소개 더보기/접기 시작*/
$(document).ready(function () {

  $('.box').each(function () {
    var content = $(this).children('.content');
    var content_txt = content.text();
    var content_txt_short = content_txt.substring(0, 300) + "...";
    var btn_more = $('<a href="javascript:void(0)" class="more">더보기</a>');


    $(this).append(btn_more);

    if (content_txt.length >= 300) {
      content.html(content_txt_short)

    } else {
      btn_more.hide()
    }

    btn_more.click(toggle_content);
    // 아래 bind가 안 되는 이유는??
    // btn_more.bind('click',toggle_content);

    function toggle_content() {
      if ($(this).hasClass('short')) {
        // 접기 상태
        $(this).html('더보기');
        content.html(content_txt_short);
        $(this).removeClass('short');

      } else {
        // 더보기 상태
        $(this).html('접기');
        content.html(content_txt);
        $(this).addClass('short');
      }
    }
  });
});
/*캠핑장 소개 더보기/접기 끝*/



/*약도 지도 api*/
var container = document.getElementById('map');
var options = {
  center: new kakao.maps.LatLng(37.3047857, 128.1647863),
  level: 3
};

var map = new kakao.maps.Map(container, options);

/*예약하기 클릭시 모달창*/
const open = () => {
  document.querySelector(".modal").classList.remove("hidden");
}

const close = () => {
  document.querySelector(".modal").classList.add("hidden");
}

document.querySelector(".openBtn").addEventListener("click", open);
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);



/*카카오톡 공유*/
Kakao.init('38e9e837edc41683d3baac69998bd7ee'); //js코드(kakao에서 받은것)
            
function sendLink() { // 카카오톡 공유하기
  Kakao.Link.sendDefault({
    objectType: 'text',
    text: '야캠핑어때와 함께 캠핑가자!',
    link: {
      mobileWebUrl: 'https://developers.kakao.com/',
      webUrl: 'https://developers.kakao.com/',
    },
  })
}