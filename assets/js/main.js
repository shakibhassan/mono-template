(function ($) {
	"use strict";

    jQuery(document).ready(function($){   
        

     // -------------------------------------------------------------
     //   Welcome slider Carousel
     // -------------------------------------------------------------
        
        $(".job-title-slider-area").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            
        });
        
         //=====================================
        // Portfolio filter menu active js
        //=====================================       
        $('.portfolio-filter-menu button').click(function(){
            $('button').removeClass("active");
            $(this).addClass("active");
        });   
        
         //=====================================
        // Responsive Menu Trigger js
        //=====================================

        $(".responsive-menu-trigger").on("click", function(){
            $(".respnsive-menu, .body-background-color").addClass("active");
            return false;
        }); 
        
        $(".body-background-color, .nav-menu li> a").on("click", function(){
            $(".respnsive-menu, .body-background-color").removeClass("active");
            return false;
        });
        
          //=====================================
        // Main body Page js
        //===================================== 
        $(".contact-triger, .about-triger, .portfolio-triger").on("click", function(){
            $(".main-body-wrapper").addClass("disable");
            return false;
        });
        $(".nav-menu, .contact-triger", ".about-triger, .portfolio-triger, .testimonial-triger").on("click", function(){
            $(".main-body-wrapper").removeClass("active");
        });
        $(".home-triger").on("click", function(){
            $(".main-body-wrapper").removeClass("disable");
        });
        
          //=====================================
        // Home Page js
        //=====================================       
        
        $(".home-triger").on("click", function(){
            $(".main-body-wrapper").addClass("active");
            return false;
        });
        
          //=====================================
        // About Page js
        //=====================================  
        
        $(".about-triger").on("click", function(){
            $(".section-resume").addClass("active");
            return false;
        });
        $(".nav-menu, .contact-triger, .home-triger, .portfolio-triger, .testimonial-triger").on("click", function(){
            $(".section-resume").removeClass("active");
        });
        
          //=====================================
        // Portfolio Page js
        //===================================== 
        
        $(".portfolio-triger").on("click", function(){
            $(".portfolio-wrapper").addClass("active");
            return false;
        });
        $(".nav-menu, .home-triger, .about-triger, .contact-triger, .testimonial-triger").on("click", function(){
            $(".portfolio-wrapper").removeClass("active");
        });
        
          //=====================================
        // Testimonial Page js
        //=====================================   

        $(".testimonial-triger").on("click", function(){
            $(".testimonial-wrapper").addClass("active");
            return false;
        });
         $(".nav-menu, .home-triger, .about-triger, .contact-triger, .portfolio-triger").on("click", function(){
            $(".testimonial-wrapper").removeClass("active");
        });       
          //=====================================
        // Blog Page js
        //===================================== 
        
        $(".blog-triger").on("click", function(){
            $(".blog-section-area").addClass("active");
            return false;
        });
         $(".nav-menu, .home-triger, .about-triger, .contact-triger, .portfolio-triger, .testimonial-triger").on("click", function(){
            $(".blog-section-area").removeClass("active");
        });       
          //=====================================
        // Contact Page js
        //===================================== 
        
        $(".contact-triger").on("click", function(){
            $(".contact-wrapper").addClass("active");
            return false;
        });
        $(".nav-menu, .home-triger, .about-triger, .portfolio-triger, .testimonial-triger").on("click", function(){
            $(".contact-wrapper").removeClass("active");
        });
        
          //=====================================
        // Tooltip js
        //===================================== 
        $('.collapse').collapse();
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //================
        // Skill Circle js
        //================
        
        $('#circle1').circleProgress({
            value: .8,
            size: 90,
            fill: {
              gradient: ["#000"]
            }
      });
        
        $('#circle2').circleProgress({
            value: .8,
            size: 90,
            fill: {
              gradient: ["#000"]
            }
      });
        
        $('#circle3').circleProgress({
            value: .5,
            size: 90,
            fill: {
              gradient: ["#000"]
            }
      });
        
        $('#circle4').circleProgress({
            value: .90,
            size: 90,
            fill: {
              gradient: ["#000"]
            }
      });
        
        //================
        // Search area js
        //================
        $(".search-trigger").on("click", function(){
            $(".header-search, .search-trigger").addClass("active");
            return true;
        });
        $(".search-close-trigger").on("click", function(){
            $(".header-search, .search-trigger").removeClass("active");
            return false;
        }); 
        
        // ==============
        // Counter up js
        // ==============
    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {

        duration: 8000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });  



    });    


    });
    


    jQuery(window).load(function(){
        

        
    // -------------------------------------------------------------
    // Isotope area JS
    // -------------------------------------------------------------

        jQuery('#container').imagesLoaded(function () {
            $('.portfolio-filter-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
        
            var $grid = $('.grid').isotope({
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    masonry: {
                // use outer width of grid-sizer for columnWidth
                        columnWidth: '.grid-item'
                    }
                });
        
        });

        
    });


}(jQuery));	