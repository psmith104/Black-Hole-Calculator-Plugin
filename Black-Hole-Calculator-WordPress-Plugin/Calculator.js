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

            $("#results").removeClass("d-none");
            $("#eddingtonLuminosity").html(results.eddingtonLuminosity);
            $("#eddingtonLuminosity-cgs").html(results.eddingtonLuminosity_cgs);
            $("#eddingtonRate").html(results.eddingtonRate);
            $("#eddingtonRate-cgs").html(results.eddingtonRate_cgs);
            $("#eventHorizonRadius").html(results.eventHorizonRadius);
            $("#eventHorizonRadius-cgs").html(results.eventHorizonRadius_cgs);
            $("#timeToForm").html(results.timeToForm);
            $("#timeToForm-cgs").html(results.timeToForm_cgs);
            $("#evaporationTime").html(results.evaporationTime);
            $("#evaporationTime-cgs").html(results.evaporationTime_cgs);
        });

        function PerformCalculations(mbh, mSeed = 1)
        {
            return {
                eddingtonLuminosity: 3.2e4 * mbh,
                eddingtonLuminosity_cgs: 1.22464e38 * mbh,
                eddingtonRate: 2.2e-8 * mbh,
                eddingtonRate_cgs: 1.4e18 * mbh,
                eventHorizonRadius: 2.95336969 * mbh,
                eventHorizonRadius_cgs: 2.95336969e5 * mbh,
                timeToForm: 4.5e-2 * Math.log(mbh/mSeed),
                timeToForm_cgs: 1.41912e+15 * Math.log(mbh / mSeed),
                evaporationTime: Math.pow(2.74606799e-43 * (mbh * 1.989e33), 3),
                evaporationTime_cgs: Math.pow(8.66e-27 * (mbh * 1.989e33), 3)
            };
        }
    });
}) (jQuery)