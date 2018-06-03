(function ($) {
    $(function () {
        $("#simple").on("click", function () {
            $("[data-advanced]").data("advanced", false);
        });

        $("#advanced").on("click", function () {
            $("[data-advanced]").data("advanced", true);
        });
    });
}) (jQuery)