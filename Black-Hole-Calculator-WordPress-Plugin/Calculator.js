(function ($) {
    $(function () {
        $("#standard").on("change", function ()
        {
            $("[data-advanced]").attr("data-advanced", false);
        });

        $("#advanced").on("change", function ()
        {
            $("[data-advanced]").attr("data-advanced", true);
        });

        $("calculate-button").on("click", function ()
        {
            var mbh = $("#blackHoleMass").val();
            var mSeed = $("[data-advanced]").attr("data-advanced") ? $("#massOfSeed").val() : null;

            var results = PerformCalculations(mbh, mSeed);

            $("#eddingtonLuminosity").html(results.eddingtonLuminosity);
        });

        function PerformCalculations(bhm, mSeed)
        {
            return {
                eddingtonLuminosity = 3.2e4 * mbh
            };
        }
    });
}) (jQuery)