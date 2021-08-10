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
  $(".ResetBtn").on("click", function () {
    $(".ReForm input").clear();
  })

})