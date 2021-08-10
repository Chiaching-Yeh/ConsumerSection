jQuery(document).ready(function ($) {

    // 信用卡有效期限
    $("#inputExpDate").monthpicker({
        changeYear: true,
      });
  
  // sideBar

  $('.cart>li>a').click(function (event) {

    event.preventDefault();

    $(this).toggleClass('active');

    //我自己的ul 做收合效果
    $(this).siblings('ul').slideToggle();

    $(this).parent().siblings().find('a').removeClass('active');

    //this以外的都隱藏起來
    $(this).parent().siblings().find('ul').slideUp();
  });


  // 好友列表 

  $(".btnShowFriend").click(function () {
    $(".asideMenu").toggleClass("active");
  });


  // 新增常用配送地址

  $(".addDelAdressBtn").click(function () {
    var addDelAdressHTML =
      `<li class="infoItem">
                <label for="DeliveryAddresses">常用配送地址：</label>
                <input type="text" class="form-control" id="DeliveryAddresses" name="DeliveryAddresses" placeholder="留白請刪除...">
                <button type="button" class="Addressclose">刪除</button>
                </li>
                `;
    $(".dynamicAddress").append(addDelAdressHTML);
  })

  // 刪除常用配送地址
  // 動態新增的元素必須要用此寫法才行
  $(".dynamicAddress").on("click", ".Addressclose", function () {
    $(this).parent().remove();
  })

  // 是否啟用
  var switchStatusForAccount = false;
  $(".infoItemIsEnalbe input").change(function (e) {
      if ($(this).is(':checked')) {
        switchStatusForAccount = $(this).is(':checked');
          console.log(switchStatusForAccount);
      }
      else {
        switchStatusForAccount = $(this).is(':checked');
          console.log(switchStatusForAccount);
      }
  });

  //是否顯示餐點
  var switchStatusForMeal = false;
  $(".infoItemIsExposeMealInformation input").change(function (e) {
      if ($(this).is(':checked')) {
        switchStatusForMeal = $(this).is(':checked');
          console.log(switchStatusForMeal);
      }
      else {
        switchStatusForMeal = $(this).is(':checked');
          console.log(switchStatusForMeal);
      }
  });


});