
$(function() { 
 //共通モーダルメニューの開閉//   
  $('.header-menu').click(function() {
    $('.menu').fadeIn();
  });
   $('.member-btn').click(function() {
    $('.menu').fadeIn();
  });   
  $('.close-menu').click(function() {
    $('.menu').fadeOut();
  });  
//image//
      $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active'); 
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );
  //メンバー--------------------------// 
    /*メンバー写真変化*/     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/omoteyugi.jpg"]').attr('src','../img/member/members_photo/yugi.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/yugi.jpg"]').attr('src','../img/member/members_photo/omoteyugi.jpg');
    }
  ); 

  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/omotemariku.jpg"]').attr('src','../img/member/members_photo/mariku.png'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/mariku.png"]').attr('src','../img/member/members_photo/omotemariku.jpg');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/kaiba.jpg"]').attr('src','../img/member/members_photo/shinkaiba.PNG'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/shinkaiba.PNG"]').attr('src','../img/member/members_photo/kaiba.jpg');
    }
  );       
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/jono.jpeg"]').attr('src','../img/member/members_photo/outjono.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/outjono.jpg"]').attr('src','../img/member/members_photo/jono.jpeg');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/2ichigo.PNG"]').attr('src','../img/member/members_photo/mugetsu.png'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/mugetsu.png"]').attr('src','../img/member/members_photo/2ichigo.PNG');
    }
  );     
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/ul.jpg"]').attr('src','../img/member/members_photo/2ul.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/2ul.jpg"]').attr('src','../img/member/members_photo/ul.jpg');
    }
  );    
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/2wichigo.PNG"]').attr('src','../img/member/members_photo/shirozangetsu.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/shirozangetsu.jpg"]').attr('src','../img/member/members_photo/2wichigo.PNG');
    }
  );    
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/jobs1.jpg"]').attr('src','../img/member/members_photo/jobs2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/jobs2.jpg"]').attr('src','../img/member/members_photo/jobs1.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/kubota.jpg"]').attr('src','../img/member/members_photo/kubota1.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/kubota1.jpg"]').attr('src','../img/member/members_photo/kubota.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/rally1.jpg"]').attr('src','../img/member/members_photo/rally2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/rally2.jpg"]').attr('src','../img/member/members_photo/rally1.jpg');
    }
  );   
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/jeff1.jpg"]').attr('src','../img/member/members_photo/jeff2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/jeff2.jpg"]').attr('src','../img/member/members_photo/jeff1.jpg');
    }
  );
  $('.member-hover').hover(
    function() {
      $(this).find('img[src="../img/member/members_photo/Bill1.jpg"]').attr('src','../img/member/members_photo/bill2.jpg'); 
    },
    function() {
      $(this).find('img[src="../img/member/members_photo/bill2.jpg"]').attr('src','../img/member/members_photo/Bill1.jpg');
    }
  );

    
  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find("span").text("+");
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
     $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find("span").text("-");
      
    }
  });
    
    
    
    
    
    
    
    
    
    
    
});
