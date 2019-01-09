// Empty JS for your own code to be here



function cancelBooking(id)
{
	var datas = {};
	datas["id"] = id;
	

	if (confirm("是否確定取消訂票？")) {
    	$.ajax({
        url: './php/cancelBooking.php',
        type: 'POST',
        data: datas,
        success:function(response)
        {
            //
        }
        
    });
  } else {
  
  }


}

function getBookingHistory(id)
{


	var datas = {};
	datas["id"] = id;

	$.ajax({
        url: './php/checkHistory.php',
        type: 'POST',
        data: datas,
        success:function(response)
        {

            response = eval(response);
            var tableString = "<table class=\"table table-hover table-striped\">" +
                   "<thead><tr><th>車票編號</th><th>車次</th><th>車種</th><th>終點站名</th><th>上車站</th><th>發車時間</th><th>下車站</th><th>抵達時間</th><th>#</th></tr></thead><tbody>" ;

  
            for (var i = 0; i < response.length; i++)
            {
                tableString += "<tr><td>" +  response[i][7]  + "</td>";
                tableString += "<td>" +  response[i][0]  + "</td>";
                tableString += "<td>" +  response[i][1]  + "</td>";
                tableString += "<td>" +  response[i][2]  + "</td>";
                tableString += "<td>" +  response[i][3]  + "</td>";
                tableString += "<td>" +  response[i][4]  + "</td>";
                tableString += "<td>" +  response[i][5]  + "</td>";
                tableString += "<td>" +  response[i][6]  + "</td>";
                tableString += "<td>" + "<button class=\"btn btn-default\" onclick=\"cancelBooking(' "+  response[i][7] + "')\">取消</button>" + "</td></tr>";
            }


            tableString += "</tbody></table>";
            document.getElementById("searchresult").innerHTML = tableString;
            
        }
        
    });
}

function login(account,password)
{
	var datas = {};
	datas["account"] = account;
	datas["password"] = password;

	
	$.ajax({
        url: './php/login.php',
        type: 'POST',
        data: datas,
        success:function(response)
        {
        	 response = eval(response);

        	
        	if (response[0].length > 1)
        	{
        		 window.location = "showRecords.html"+"?id=" + response[0];
        	}

           

           
            
         }
            
        
    });

}

 function qs(search_for) {
		var query = window.location.search.substring(1);
		var parms = query.split('&');
		for (var i=0; i<parms.length; i++) {
			var pos = parms[i].indexOf('=');
			if (pos > 0  && search_for == parms[i].substring(0,pos)) {
				return parms[i].substring(pos+1);;
			}
		}
		return "";
	}