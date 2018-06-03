(function ($) {
    $("#simple").on("click", function () {
        $("[data-advanced]").attr("data-advanced", false);
    });

    $("#advanced").on("click", function () {
        $("[data-advanced]").attr("data-advanced", true);
    });
}) (jQuery)