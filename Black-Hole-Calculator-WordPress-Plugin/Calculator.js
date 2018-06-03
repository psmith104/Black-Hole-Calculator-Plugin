(function ($) {
    $(function () {
        $("#standard").on("change", function () {
            $("[data-advanced]").attr("data-advanced", false);
        });

        $("#advanced").on("change", function () {
            $("[data-advanced]").attr("data-advanced", true);
        });
    });
}) (jQuery)