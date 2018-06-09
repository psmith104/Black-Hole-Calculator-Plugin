/*
Plugin Name:  Black Hole Calculator
Description:  Black Hole Calculator developed by Patrick M Smith and Fabio Pacucci
*/

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

        function PerformCalculations(mbh, mSeed) {
            var G = 6.67259e-11;
            var G_cgs = 6.67259e-8;
            var c = 299792458.0;
            var solar_mass = 1.989e30;
            var solar_mass_cgs = 1.989e33;
            var EH = 2.95336969 * mbh;
            var EH_cgs = 2.95336969e5 * mbh;
            var h_bar = 1.054571800e-34;
            var k_b = 1.38064852e-23;

            if (mbh < 100) var category = "STELLAR MASS BLACK HOLE";
            if (mbh >= 1.0e6) var category = "SUPER-MASSIVE BLACK HOLE (SMBH)";
            if (mbh >= 100 && mbh < 1.0e6) var category = "INTERMEDIATE-MASS BLACK HOLE (IMBH)";

            return {
                category,
                eddingtonLuminosity: 3.2756e4 * mbh,
                eddingtonLuminosity_cgs: 1.25750e38 * mbh,
                eddingtonRate: 2.21868e-8 * mbh,
                eddingtonRate_cgs: 1.39916e18 * mbh,
                eventHorizonRadius: 2.95336969 * mbh,
                eventHorizonRadius_cgs: 2.95336969e5 * mbh,
                iscoRadius: 8.86010907 * mbh,
                iscoRadius_cgs: 8.86010907e5 * mbh,
                timeToForm: 4.50718e-2 * Math.log(mbh / mSeed),
                timeToForm_cgs: 1.42156e+15 * Math.log(mbh / mSeed),
                hawkingTemperature: h_bar * Math.pow(c, 3) / (8 * Math.PI * G * k_b * mbh * solar_mass),
                evaporationTime: 2.66724e-42 * Math.pow((mbh * 1.989e33), 3),
                evaporationTime_cgs: 8.41142e-26 * Math.pow((mbh * 1.989e33), 3),
                surfaceArea: 4.0 * Math.PI * Math.pow(EH, 2),
                surfaceArea_cgs: 4.0 * Math.PI * Math.pow(EH_cgs, 2),
                surfaceGravity: 0.001 * G * mbh * solar_mass / (Math.pow(EH * 1000, 2)),
                surfaceGravity_cgs: G_cgs * mbh * solar_mass_cgs / (Math.pow(EH_cgs, 2))
            };
        }

        function DisplayResults(results)
        {
            $(".results-standard").removeClass("d-none");
            if (advanced) $(".results-advanced").removeClass("d-none");

	        ShowStringResult("#category", results.category);
            ShowResult("#eddingtonLuminosity", results.eddingtonLuminosity);
            ShowResult("#eddingtonLuminosity-cgs", results.eddingtonLuminosity_cgs);
            ShowResult("#eddingtonRate", results.eddingtonRate);
            ShowResult("#eddingtonRate-cgs", results.eddingtonRate_cgs);
            ShowResult("#eventHorizonRadius", results.eventHorizonRadius);
            ShowResult("#eventHorizonRadius-cgs", results.eventHorizonRadius_cgs);
	        ShowResult("#iscoRadius", results.iscoRadius);
            ShowResult("#iscoRadius-cgs", results.iscoRadius_cgs);
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
	        ShowResult("#hawkingTemperature", results.hawkingTemperature);
            ShowResult("#evaporationTime", results.evaporationTime);
            ShowResult("#evaporationTime-cgs", results.evaporationTime_cgs);
	        ShowResult("#surfaceArea", results.surfaceArea);
            ShowResult("#surfaceArea-cgs", results.surfaceArea_cgs);
	        ShowResult("#surfaceGravity", results.surfaceGravity);
            ShowResult("#surfaceGravity-cgs", results.surfaceGravity_cgs);
        }

        function ShowResult(selector, result)
        {
            var formattedResult = result;
            if (isNaN(formattedResult)) {
                formattedResult = 0;
            }
            formattedResult = (formattedResult != 0) ? result.toExponential(numberOfDecimals) : "0";
            formattedResult = formattedResult.replace("e+0", "");
            if (formattedResult.includes("e"))
            {
                formattedResult = formattedResult.replace("e", " x 10<sup>") + "</sup>";
                formattedResult = formattedResult.replace("+", "");
            }
            $(selector).html(formattedResult);
        }

        function ShowStringResult(selector, result)
        {
            $(selector).html(result);
        }
    });
}) (jQuery)
