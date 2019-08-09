
function compute()
{
	

	var s=document.getElementsByName('st')[0].value;
	var str="";
	
	for(var j=0;j<s.length;j++)
	{
	for(var i=j;i<s.length;i++)
	{
	var str=str.concat(s[i]);
	

	document.getElementById("id").innerHTML+=str+"</br>";
	
	}
	str=" ";
	}
}

