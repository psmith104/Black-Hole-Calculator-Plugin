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

        $("#calculate-button").on("click", function ()
        {
            var mbh = $("#blackHoleMass").val();
            var mSeed = $("[data-advanced]").attr("data-advanced") ? $("#massOfSeed").val() : null;

            var results = PerformCalculations(mbh, mSeed);

            $("#eddingtonLuminosity").html(results.eddingtonLuminosity);
            $("#eddingtonRate").html(results.eddingtonRate);
        });

        function PerformCalculations(mbh, mSeed)
        {
            return {
                eddingtonLuminosity: 3.2e4 * mbh,
                eddingtonRate: 2.2e-8 * mbh
            };
        }
    });
}) (jQuery)