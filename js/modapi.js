$(document).ready(function () {
    function logResults(data) {
    }

    var smReq = function()
    {
        var tval = $("#ticker").val();
        $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%3D%22" + tval +"%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?", function(json){
            if(json.query.results.quote.Ask != null && json.query.results.quote.PreviousClose != null) {
                var price = json.query.results.quote.Ask;
                document.title = tval + ": $" + price;
                $("#write").html("<br>" + tval + ": $" + price + "");
            }
            else if(json.query.results.quote.PreviousClose != null)
            {
                var price = json.query.results.quote.PreviousClose;
                document.title = tval + ": $" + price;
                $("#write").html("<br>" + tval + ": $" + price + "");
            }
            else
            {
                $("#write").html("<br>Not found")
            }
        });
    }

    $("#ticker").on('input propertychange paste', smReq);


});