(function ($) {
    $(function () {
        var advanced = false;

        $("#standard").on("change", function ()
        {
            advanced = false;
            ShowInputs();
        });

        $("#advanced").on("change", function ()
        {
            advanced = true;
            ShowInputs();
        });

        $("#calculate-button").on("click", function ()
        {
            var mbh = $("#blackHoleMass").val();
            var mSeed = advanced ? $("#massOfSeed").val() : null;

            var results = PerformCalculations(mbh, mSeed);

            $(".results-standard").removeClass("d-none");
            if (advanced) $(".results-advanced").removeClass("d-none");

            $("#eddingtonLuminosity").html(results.eddingtonLuminosity.toExponential(5));
            $("#eddingtonLuminosity-cgs").html(results.eddingtonLuminosity_cgs.toExponential(5));
            $("#eddingtonRate").html(results.eddingtonRate.toExponential(5));
            $("#eddingtonRate-cgs").html(results.eddingtonRate_cgs.toExponential(5));
            $("#eventHorizonRadius").html(results.eventHorizonRadius.toExponential(5));
            $("#eventHorizonRadius-cgs").html(results.eventHorizonRadius_cgs.toExponential(5));
            $("#timeToForm").html(results.timeToForm.toExponential(5));
            $("#timeToForm-cgs").html(results.timeToForm_cgs.toExponential(5));
            $("#evaporationTime").html(results.evaporationTime.toExponential(5));
            $("#evaporationTime-cgs").html(results.evaporationTime_cgs.toExponential(5));
        });

        function ShowInputs() {
            var $advancedInputs = $(".input-advanced");
            if (advanced)
            {
                $advancedInputs.removeClass("d-none");
            }
            else
            {
                $advancedInputs.addClass("d-none");
                $(".results-advanced").addClass("d-none");
            }
        }
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