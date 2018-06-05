(function ($) {
    $(function () {
        var numberOfDecimals = 5;

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

            DisplayResults(results);            
        });

        function ShowInputs()
        {
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

        function PerformCalculations(mbh, mSeed)
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
                evaporationTime: 2.74606799e-43 * Math.pow((mbh * 1.989e33), 3),
                evaporationTime_cgs: 8.66e-27 * Math.pow((mbh * 1.989e33), 3)
            };
        }

        function DisplayResults(results)
        {
            $(".results-standard").removeClass("d-none");
            if (advanced) $(".results-advanced").removeClass("d-none");

            ShowResult("#eddingtonLuminosity", results.eddingtonLuminosity);
            ShowResult("#eddingtonLuminosity-cgs", results.eddingtonLuminosity_cgs);
            ShowResult("#eddingtonRate", results.eddingtonRate);
            ShowResult("#eddingtonRate-cgs", results.eddingtonRate_cgs);
            ShowResult("#eventHorizonRadius", results.eventHorizonRadius);
            ShowResult("#eventHorizonRadius-cgs", results.eventHorizonRadius_cgs);
            if (results.timeToForm < 0)
            {
                $("#timeToForm-result").addClass("d-none");
                $("#timeToForm-error .error").html("Mass of the seed needs to be smaller than the final mass.");
                $("#timeToForm-error").removeClass("d-none");
            }
            else
            {
                $("#timeToForm-result").removeClass("d-none");
                $("#timeToForm-error").addClass("d-none");
            }
            ShowResult("#timeToForm", results.timeToForm);
            ShowResult("#timeToForm-cgs", results.timeToForm_cgs);
            ShowResult("#evaporationTime", results.evaporationTime);
            ShowResult("#evaporationTime-cgs", results.evaporationTime_cgs);
        }

        function ShowResult(selector, result)
        {
            var formattedResult = result;
            if (IsNaN(formattedResult)) {
                formattedResult = 0;
            }
            formattedResult = result.toExponential(numberOfDecimals);
            formattedResult = formattedResult.replace("e+0", "");
            if (formattedResult.includes("e"))
            {
                formattedResult = formattedResult.replace("e", " x 10<sup>") + "</sup>";
                formattedResult = formattedResult.replace("+", "");
            }
            $(selector).html(formattedResult);
        }
    });
}) (jQuery)