var workView=document.querySelectorAll("#work-toggle.aui-button.active" ).length;
var planView=document.querySelectorAll("#plan-toggle.aui-button.active" ).length;
 
  if(planView==1){
	  try {
	    var total=0;
		 var qateam=document.querySelectorAll('.ghx-issues.js-issue-list.ghx-has-issues .aui-badge.ghx-statistic-badge') 
		 var pointNotStarted=document.querySelectorAll('.aui-badge.ghx-not-started')[0].innerText;
		 var pointInProgress=document.querySelectorAll('.aui-badge.ghx-in-progress')[0].innerText;
		 var pointDone=document.querySelectorAll('.aui-badge.ghx-done')[0].innerText;
	  
	  
		  if(qateam.length>0){
		 
		 	if(isNaN(pointDone)==true||pointDone.length==0){
			  pointDone=0;
			  }
			if(isNaN(pointInProgress)==true||pointInProgress.length==0){
			  pointInProgress=0;
			  }
			 if(isNaN(pointNotStarted)==true||pointNotStarted.length==0){
			  pointNotStarted=0;
			  }
			  total=parseInt(pointDone)+parseInt(pointInProgress)+parseInt(pointNotStarted);
		 
		  var pageInfo = {
			'pointNotStarted': pointNotStarted,
			'pointInProgress': pointInProgress,
			'pointDone': pointDone,
			'pointTotal':total
		};
		chrome.extension.sendMessage(pageInfo);	
		  }
	    }
		catch(err) {
		   console.log("Error: " + err);
		}
	  }
	  
 if(workView==1){

		try {
		var myList = document.getElementsByClassName('ghx-columns'); // get all Features
		var list_column=myList[0].getElementsByClassName("ghx-column ui-sortable"); // get 5 first columns	

		var todo_column_attr= list_column[0].getAttribute('data-column-id');
		var inprogress_column_attr= list_column[1].getAttribute('data-column-id');
		var svtesting_column_attr= list_column[2].getAttribute('data-column-id');
		var qatesting_column_attr= list_column[3].getAttribute('data-column-id');
		var done_column_attr= list_column[4].getAttribute('data-column-id');

		var ToDoBug=document.querySelectorAll("[data-column-id=\'" + todo_column_attr +"\'] .ghx-issue-fields").length;
		var ImplementationBug=document.querySelectorAll("[data-column-id=\'" + inprogress_column_attr +"\'] .ghx-issue-fields").length;
		var StakeholderBug=document.querySelectorAll("[data-column-id=\'" + svtesting_column_attr +"\'] .ghx-issue-fields").length;
		var QABug=document.querySelectorAll("[data-column-id=\'" + qatesting_column_attr +"\'] .ghx-issue-fields").length;
		var DoneBug=document.querySelectorAll("[data-column-id=\'" + done_column_attr +"\'] .ghx-issue-fields").length;
		var totalbug=ToDoBug + ImplementationBug + StakeholderBug + QABug + DoneBug;
		
		var total_todo_point_list=document.querySelectorAll("[data-column-id=\'" + todo_column_attr +"\'] .aui-badge[title=\'Story Points\']");
		var total_inprogress_point_list=document.querySelectorAll("[data-column-id=\'" + inprogress_column_attr +"\'] .aui-badge[title=\'Story Points\']");
		var total_svtesting_point_list=document.querySelectorAll("[data-column-id=\'" + svtesting_column_attr +"\'] .aui-badge[title=\'Story Points\']");
		var total_qatesting_point_list=document.querySelectorAll("[data-column-id=\'" + qatesting_column_attr +"\'] .aui-badge[title=\'Story Points\']");
		var total_done_point_list=document.querySelectorAll("[data-column-id=\'" + done_column_attr +"\'] .aui-badge[title=\'Story Points\']");
		 
			var total_todo_point=0;
			var total_inprogress_point=0;
			var total_svtesting_point=0;
			var total_qatesting_point=0;
		    var total_done_point=0;
			
		  if(total_todo_point_list.length>0){
		  for(i=0;i<total_todo_point_list.length;i++)
		  { 
			  var point=total_todo_point_list[i].innerText; 
			  if(isNaN(point)==true||point.length==0){
			  point=0;
			  }
			  var temp=parseInt(point); 
			  total_todo_point=total_todo_point+temp; 
		  }
		  }
		  	   
		  if(total_inprogress_point_list.length>0){
		  for(i=0;i<total_inprogress_point_list.length;i++)
		  { 
			  var point=total_inprogress_point_list[i].innerText; 
			  if(isNaN(point)==true||point.length==0){
			  point=0;
			  }
			  var temp=parseInt(point); 
			  total_inprogress_point=total_inprogress_point+temp; 
		  }
		  }
		  
		  if(total_svtesting_point_list.length>0){
		  for(i=0;i<total_svtesting_point_list.length;i++)
		  { 
			  var point=total_svtesting_point_list[i].innerText; 
			  if(isNaN(point)==true||point.length==0){
			  point=0;
			  }
			  var temp=parseInt(point); 
			  total_svtesting_point=total_svtesting_point+temp; 
		  }
		  }
		  
		  if(total_qatesting_point_list.length>0){
		  for(i=0;i<total_qatesting_point_list.length;i++)
		  { 
			  var point=total_qatesting_point_list[i].innerText; 
			  if(isNaN(point)==true||point.length==0){
			  point=0;
			  }
			  var temp=parseInt(point); 
			  total_qatesting_point=total_qatesting_point+temp; 
		  }
		  }
		  
		  if(total_done_point_list.length>0){
		  for(i=0;i<total_done_point_list.length;i++)
		  { 
			  var point=total_done_point_list[i].innerText; 
			  if(isNaN(point)==true||point.length==0){
			  point=0;
			  }
			  var temp=parseInt(point); 
			  total_done_point=total_done_point+temp; 
		  }
		  }
		 var total_point=total_todo_point + total_inprogress_point + total_svtesting_point + total_qatesting_point + total_done_point;

				var pageInfo = {
				"bugtodo": ToDoBug,	
				"bugimplementation": ImplementationBug,
				"bugstakeholder":StakeholderBug ,
				"bugqa":QABug, 
				"bugdone":DoneBug,
				"bugtotal":totalbug,
				"pointbugtodo": total_todo_point,	
				"pointbugimplementation": total_inprogress_point,
				"pointbugstakeholder":total_svtesting_point ,
				"pointbugqa":total_qatesting_point, 
				"pointbugdone":total_done_point,
				"pointbugtotal":total_point
			};

			// Send the information back to the extension
			chrome.extension.sendMessage(pageInfo);
		   }
		catch(err) {
		  console.log("Error: " + err);
		}
	 }
	 

if(workView==0 &&  planView==0){
 var totaltable = document.querySelectorAll("table");

var get_tableid = "";
var myVar = "";
for (i = 0; i < totaltable.length; i++) {
    myVar = document.querySelectorAll("table [data-column='0']")[i].innerText;

    var n = myVar.indexOf('Regression Test');
    if (n == 0) {
        get_tableid = i;
        break;

    }
}

var totalrow = totaltable[get_tableid].querySelectorAll("tbody tr td");
 var ticket =0;
 var arrTicket="";
 i=4;
while (i < totalrow.length) {
	try{
        var record = totalrow[i].getElementsByClassName("jira-issue-key");
		ticket=record.length;

		arrTicket=arrTicket +";"+ticket;
		 i=i +  5;
		}catch(e){
		console.log(e);
		}
}

 j=0;var features="";
while (j < totalrow.length) {
	try{
        var text = totalrow[j].innerText;
		features=features +";"+text;
		j=j +  5;
		}catch(e){
		console.log(e);
		}
}


arrTicket=arrTicket.substr(1,arrTicket.length);
features=features.substr(1,features.length);

var totalticket = totaltable[get_tableid].querySelectorAll("tbody tr .jira-issue-key").length;
var pageInfo = {
				"totaltickets": arrTicket,	
				"features": features
			};

			// Send the information back to the extension
			chrome.extension.sendMessage(pageInfo);
  }

  
