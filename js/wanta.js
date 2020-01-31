$(function(){

// ログインボタン
var btnLogin = $("#btn-login");
// sc_login ログイン
var scLogin = $("#sc_login");

// sc_movie-search 映画検索
var scMovieSearch = $("#sc_movie-search");
// sc_room-search ルーム検索
var scRoomSearch = $("#sc_room-search");

// フッター
var globalNav = $("#global-nav");
// ルーム検索ボタン
var btnRoom = $("#btn-room");
// 映画検索ボタン
var btnMovie = $("#btn-movie");

// 映画検索結果のheader
var scMovieResult = $("#sc_movie-result header");

// マイページのheader
var scMypage = $("#sc_mypage header");

// sc_login ログイン
btnLogin.on("click",function(){

  // z-index下げる
  $("#sc_login header").addClass("on");
  // scMovieSearch 映画検索に移動
  scMovieSearch.addClass("on");
  // フッターナビを表示
  globalNav.css("left","0%");

});

// フッターナビ　クリック
btnRoom.on("click",function(){
  console.log("a");
  scRoomSearch.addClass("on");
  scRoomSearch.addClass("in");
  $("#sc_movie-search header").addClass("in");

  scMovieResult.addClass("on");
  scMypage.addClass("on");

  scMovieSearch.removeClass("in");
  setTimeout(function(){
    scMovieSearch.removeClass("on");
  },400);
})

btnMovie.on("click",function(){
  console.log("b");
  scMovieSearch.addClass("on");
  scMovieSearch.addClass("in");
  $("#sc_room-search header").addClass("in");

  scMovieResult.addClass("on");
  scMypage.addClass("on");


  scRoomSearch.removeClass("in");
  setTimeout(function(){
    scRoomSearch.removeClass("on");
  },400);

});

  // タイムスケジュールの表示
  $(".movie01 a").on("click",function(){

    $(".screen02").addClass("on");
    $(".screen02").addClass("in");

  });

  $("#btnTimeReturn").on("click",function(){

    $(".screen02").removeClass("on");
    setTimeout(function(){
      scRoomSearch.removeClass("in");
    },400);

  });

});
