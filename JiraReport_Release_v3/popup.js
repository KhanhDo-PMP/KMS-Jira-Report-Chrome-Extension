// This callback function is called when the content script has been 
// injected and returned its results
function onPageInfo(o) {
    var bug_not_completed = 0;
    var point_bug_not_completed = 0;
    if (o.bugtodo === undefined || o.bugimplementation === undefined || o.bugstakeholder === undefined ||
        o.bugqa === undefined || o.bugdone === undefined || o.bugtotal === undefined) {
        o.bugtodo = 0;
        o.bugimplementation = 0;
        o.bugstakeholder = 0;
        o.bugqa = 0;
        o.bugdone = 0;
        o.bugtotal = 0;
    } else {
        bug_not_completed = parseInt(o.bugtodo) + parseInt(o.bugimplementation) + parseInt(o.bugstakeholder) + parseInt(o.bugqa);
        // Bug Work
        document.getElementById('bugtodo').innerText = o.bugtodo;
        document.getElementById('bugimplementation').innerText = o.bugimplementation;
        document.getElementById('bugstakeholder').innerText = o.bugstakeholder;
        document.getElementById('bugqa').innerText = o.bugqa;
        document.getElementById('bugdone').innerText = o.bugdone;
        document.getElementById('bugtotal').innerText = o.bugtotal;
        document.getElementById('bug_not_completed').innerText = bug_not_completed;
		
		document.getElementById('qa_title').style.display = 'none'; 
		document.getElementById('qa_mode').style.display = 'none'; 
		
    }

    if (o.pointbugtodo === undefined || o.pointbugtodo === null ||
        o.pointbugimplementation === undefined || o.pointbugimplementation === null ||
        o.pointbugstakeholder === undefined || o.pointbugstakeholder === null ||
        o.pointbugqa === undefined || o.pointbugqa === null ||
        o.pointbugdone === undefined || o.pointbugdone === null ||
        o.pointbugtotal === undefined || o.pointbugtotal === null) {
        o.pointbugtodo = 0;
        o.pointbugimplementation = 0;
        o.pointbugstakeholder = 0;
        o.pointbugqa = 0;
        o.pointbugdone = 0;
        o.pointbugtotal = 0;
    } else {
        point_bug_not_completed = parseInt(o.pointbugtodo) + parseInt(o.pointbugimplementation) + parseInt(o.pointbugstakeholder) + parseInt(o.pointbugqa);
        // Point Work
        document.getElementById('pointbugtodo').innerText = o.pointbugtodo;
        document.getElementById('pointbugimplementation').innerText = o.pointbugimplementation;
        document.getElementById('pointbugstakeholder').innerText = o.pointbugstakeholder;
        document.getElementById('pointbugqa').innerText = o.pointbugqa;
        document.getElementById('pointbugdone').innerText = o.pointbugdone;
        document.getElementById('pointbugtotal').innerText = o.pointbugtotal;
        document.getElementById('point_bug_not_completed').innerText = point_bug_not_completed;
		
		document.getElementById('qa_title').style.display = 'none'; 
		document.getElementById('qa_mode').style.display = 'none'; 
    }

    // Plan mode	
    if (o.pointNotStarted === undefined || o.pointInProgress === undefined || o.pointDone === undefined || o.pointTotal === undefined) {
        o.pointNotStarted = 0;
        o.pointInProgress = 0;
        o.pointDone = 0;
        o.pointTotal = 0;
		document.getElementById('plan_mode_title').style.display = 'none'; 
		document.getElementById('plan_mode').style.display = 'none'; 
    }else{
		
    document.getElementById('pointNotStarted').innerText = o.pointNotStarted;
    document.getElementById('pointInProgress').innerText = o.pointInProgress;
    document.getElementById('pointDone').innerText = o.pointDone;
    document.getElementById('pointTotal').innerText = o.pointTotal;
	
	document.getElementById('qa_title').style.display = 'none'; 
	document.getElementById('qa_mode').style.display = 'none'; 
	document.getElementById('work_mode_title').style.display = 'none'; 
	document.getElementById('work_mode').style.display = 'none'; 
		
	}
	if (o.features === undefined || o.totaltickets === undefined){
	o.features="";
	 o.totaltickets=0;
	}
	
	var arrTicket=o.totaltickets.split(";");
	var arrfeatures=o.features.split(";");
	
	//document.getElementById('features').innerText = o.features;
   // document.getElementById('totaltickets').innerText =arrTicket;
	var table = document.getElementById("myRegressionTable");
	var totalTicket=0;
	 for(i=0;i<arrTicket.length;i++)
		  {
		var getrow=table.rows.length;
		// Create an empty <tr> element and add it to the 1st position of the table:

		var row = table.insertRow(getrow);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		// Add some text to the new cells:
		var setNo=i+1;
		cell1.innerHTML =setNo;
		cell2.innerHTML =arrfeatures[i];
		cell3.innerHTML = arrTicket[i];
		var temp=parseInt(arrTicket[i]); totalTicket=totalTicket+temp;	  
		}
	 if(table.rows.length>0)
		  {
		var getrow=table.rows.length;
		// Create an empty <tr> element and add it to the 1st position of the table:

		var row = table.insertRow(getrow);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		// Add some text to the new cells:
		
		cell1.innerHTML =getrow;
		cell2.innerHTML ="Total";
		cell3.innerHTML = totalTicket;
		
		row.style.backgroundColor="#acc8cc"; 
		row.style.fontWeight = "bold";
		 
		document.getElementById('plan_mode_title').style.display = 'none'; 
		document.getElementById('work_mode_title').style.display = 'none'; 
		document.getElementById('plan_mode').style.display = 'none'; 
		document.getElementById('work_mode').style.display = 'none'; 		
		}
	
}

// POST the data to the server using XMLHttpRequest
function bind_data() {
    // Cancel the form submit
    event.preventDefault();

    // The URL to POST our data to
    var postUrl = 'http://post-test.local.com';

    // Set up an asynchronous AJAX POST request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', postUrl, true);

    // Prepare the data to be POSTed
    var bugtodo = encodeURIComponent(document.getElementById('bugtodo').value);
    var bugimplementation = encodeURIComponent(document.getElementById('bugimplementation').value);
    var bugstakeholder = encodeURIComponent(document.getElementById('bugstakeholder').value);
    var bugqa = encodeURIComponent(document.getElementById('bugqa').value);
    var bugdone = encodeURIComponent(document.getElementById('bugdone').value);
    var bugtotal = encodeURIComponent(document.getElementById('bugtotal').value);

    var pointbugtodo = encodeURIComponent(document.getElementById('pointbugtodo').value);
    var pointbugimplementation = encodeURIComponent(document.getElementById('pointbugimplementation').value);
    var pointbugstakeholder = encodeURIComponent(document.getElementById('pointbugstakeholder').value);
    var pointbugqa = encodeURIComponent(document.getElementById('pointbugqa').value);
    var pointbugdone = encodeURIComponent(document.getElementById('pointbugdone').value);
    var pointbugtotal = encodeURIComponent(document.getElementById('pointbugtotal').value);

    // Plan mode
    var pointNotStarted = encodeURIComponent(document.getElementById('pointNotStarted').value);
    var pointInProgress = encodeURIComponent(document.getElementById('pointInProgress').value);
    var pointDone = encodeURIComponent(document.getElementById('pointDone').value);
    var pointTotal = encodeURIComponent(document.getElementById('pointTotal').value);

	var features = encodeURIComponent(document.getElementById('features').value);
    var totaltickets = encodeURIComponent(document.getElementById('totaltickets').value);
	
    var params = 'bugtodo=' + bugtodo +
        '&bugimplementation=' + bugimplementation +
        '&bugstakeholder=' + bugstakeholder +
        '&bugqa=' + bugqa +
        '&bugdone=' + bugdone +
        '&bugtotal=' + bugtotal +
        '&pointbugtodo=' + pointbugtodo +
        '&pointbugimplementation=' + pointbugimplementation +
        '&pointbugstakeholder=' + pointbugstakeholder +
        '&pointbugqa=' + pointbugqa +
        '&pointbugdone=' + pointbugdone +
        '&pointbugtotal=' + pointbugtotal +
        '&pointNotStarted=' + pointNotStarted +
        '&pointInProgress=' + pointInProgress +
        '&pointDone=' + pointDone +
        '&pointTotal=' + pointTotal+
        '&features=' + features+
        '&totaltickets=' + totaltickets;
    // Replace any instances of the URLEncoded space char with +
    params = params.replace(/%20/g, '+');

    // Set correct header for form data 
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // Handle request state change events
    xhr.onreadystatechange = function() {
        // If the request completed
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                // If it was a success, close the popup after a short delay
                window.setTimeout(window.close, 1000);
            } else { // Show what went wrong
            }
        }
    };

    // Send the request and set status
    xhr.send(params);
}

// When the popup HTML has loaded
window.addEventListener('DOMContentLoaded', function(evt) {
 document.getElementById("plan_mode_title").addEventListener('click',plan_toggle_visibility);
  document.getElementById("work_mode_title").addEventListener('click',work_toggle_visibility);
   document.getElementById("qa_title").addEventListener('click',qa_toggle_visibility);
    document.getElementById('bind_data_form').addEventListener('submit', bind_data);
    chrome.extension.getBackgroundPage().getPageInfo(onPageInfo);

});


// When the popup HTML has loaded
// window.addEventListener('load', function(evt) {
	// document.getElementById("plan_mode_title").addEventListener('click',plan_toggle_visibility);
	// document.getElementById("work_mode_title").addEventListener('click',work_toggle_visibility);
    // document.getElementById('bind_data_form').addEventListener('submit', bind_data);
    // chrome.extension.getBackgroundPage().getPageInfo(onPageInfo);
// });

  function plan_toggle_visibility() {
   var e=document.getElementById('plan_mode');
	 if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
     
   }
     function work_toggle_visibility() {
   var e=document.getElementById('work_mode');
	 if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
     
   }
        function qa_toggle_visibility() {
   var e=document.getElementById('qa_mode');
	 if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
     
   }
   
