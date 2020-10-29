let ans= "";
 	let userAns;
 	var para = document.createElement("P");
	document.getElementById('keysM').onclick=(e)=>{
	// console.log(e.path[0].getAttribute("data-key"))
	
	
	ans=ans+e.path[0].getAttribute("data-key")
	
	para.innerHTML=ans

document.getElementById('main').appendChild(para)
// console.log(ans)
}




let qNum=Math.floor(Math.random()*2);
console.log(qNum)


function displayQues(){
	

	var q=document.createElement("P");
	var render_q=ques[qNum].q
	 q.innerHTML=render_q;
	 console.log(q)
	 var att = document.createAttribute("id");
	 att.value="user-ans";
	 q.setAttributeNode(att);
	 document.getElementById('main').appendChild(q);

}	

let ques=[
		{
			q:"Where is India?",
			cans:"ASIA"

		},
		{
			q:"Where is America?",
			cans:"NORTH AMERICA"
		}
];

let t=12;
var myVar = setInterval(myTimer, 1000);

function myTimer() {
 	
  document.getElementById("demo").innerHTML = "Time:"+t;
  t--;
}


function myStopFunction() {
  clearInterval(myVar);
}




//Checking the answer


function Check(){
	
	


	
	console.log(ans);
	console.log((ques[qNum].cans))
	
	let res=(ans===(ques[qNum].cans)?"Saved":"Hanged");
	let disAns=document.createElement("H1");
	disAns.innerHTML=res;
	document.getElementById('main').appendChild(disAns)
	ans="";
}
setTimeout(function(){ Check(); myStopFunction()}, 13000);
