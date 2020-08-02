$(document).ready(function () {
    var section_items = $('.section'),
        navigation_items = $('#navigation a');

    updateNavigation();
    $(window).on('scroll', function () {
        updateNavigation();
    });

    navigation_items.on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    $('.scroll_down').on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
        section_items.each(function () {
            $this = $(this);
            var activeSection = $('#navigation a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigation_items.eq(activeSection).addClass('is-selected');
            } else {
                navigation_items.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate(
            { 'scrollTop': target.offset().top }
            , 600);
    }
});
$(document).ready(function () {
    var section_items = $('.section'),
        navigation_items = $('header a');

    updateNavigation();
    $(window).on('scroll', function () {
        updateNavigation();
    });

    navigation_items.on('click', function (event) {
        event.preventDefault();
        closeMobileMenu();
        smoothScroll($(this.hash));
    });

    $('.scroll_down').on('click', function (event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    function updateNavigation() {
        section_items.each(function () {
            $this = $(this);
            var activeSection = $('#navigation a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigation_items.eq(activeSection).addClass('is-selected');
            } else {
                navigation_items.eq(activeSection).removeClass('is-selected');
            }
        });
    }

    function smoothScroll(target) {
        $('body,html').animate(
            { 'scrollTop': target.offset().top }
            , 600);
    }
});

function closeMobileMenu() {
    $('.header__burger,.header-menu').removeClass('active');
    $('body').removeClass('lock');
}
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

