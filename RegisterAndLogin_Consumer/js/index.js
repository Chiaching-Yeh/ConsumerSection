$(window).on("load", function () {

  // 信用卡有效期限
  $("#Monthpicker").monthpicker();

  // 按下登入按鈕跳置登入頁面
  $(".login").on("click", function () {
    let a = $(".a")
    let b = $(".b")

    if (!a.hasClass("-none")) {
      a.fadeOut(500), function () {
        a.addClass("-none");
      }
      b.removeClass("-none").fadeIn(500);
    }

    // 返回頁面頂端
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      100
    );


  })

  // 按下註冊按鈕跳置登入頁面
  $(".register").on("click", function () {
    let a = $(".a")
    let b = $(".b")

    if (!b.hasClass("-none")) {
      b.fadeOut(500), function () {
        b.addClass("-none");
      }
      a.removeClass("-none").fadeIn(500);
    }

    // 返回頁面頂端
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      100
    );

  })

  // 按下重置鍵清除所有資料

  var count = 0;
  var Re = $(".ReFormOutline")
  var Lo = $(".LoginBtnOutline")

  $(".ResetBtn").on("click", function () {
    count = 0;
    $(".ReForm input").empty();
    $(".dynamicAddress > li").remove();
    Re.height(893);
    Lo.height(893);
  })


  // 新增常用配送地址與動態新增高度

  $(".AddressBtn").click(function (e) {
    count++;
    console.log(count)
    if (count > 3) {
      $(".AddressBtn").attr('disabled', true)
      count = 3
      alert("常用配送地址至多三個");
    } else {
      $(".AddressBtn").attr('disabled', false)
      var addDelAdressHTML =
        `<li class="oftendel">
          <label>常用配送地址：</label>
          <input type="text" class="form-control" name="DeliveryAddresses" placeholder="留白請刪除...">
          <button type="button" class="Addressclose">刪除</button>
        </li>`;
      $(".dynamicAddress").append(addDelAdressHTML);
      Re.height(Re.height() + 65 + "px");
      Lo.height(Lo.height() + 65 + "px");
    }
  })

  // 刪除常用配送地址
  // 動態新增的元素必須要用此寫法才行
  $(".dynamicAddress").on("click", ".Addressclose", function () {
    count--
    $(this).parent().remove();
    console.log(count)
    Re.height(Re.height() - 65 + "px");
    Lo.height(Lo.height() - 65 + "px");
  })



})