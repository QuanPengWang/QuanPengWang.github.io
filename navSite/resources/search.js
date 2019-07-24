function search(val1, val2)
{
	window.open(val1 + val2);
}

function searchByBing()
{
	search_engine = "http://cn.bing.com/search?q=";
	search_value = document.getElementById("input_text").value;
	setLastSearchEngine("Bing");
	rstr = encodeURIComponent(search_value)
	search(search_engine, rstr);
}

function searchByBaidu()
{
	search_engine = "https://www.baidu.com/s?wd=";
	search_value = document.getElementById("input_text").value;
	setLastSearchEngine("Baidu");
	rstr = encodeURIComponent(search_value)
	search(search_engine, rstr);
}

function searchBySogou()
{
	search_engine = "https://www.sogou.com/web?query=";
	search_value = document.getElementById("input_text").value;
	setLastSearchEngine("Sogou");
	rstr = encodeURIComponent(search_value)
	search(search_engine, rstr);
}

function searchByHaosou()
{
	search_engine = "https://www.so.com/s?q=";
	search_value = document.getElementById("input_text").value;
	setLastSearchEngine("Haosou");
	rstr = encodeURIComponent(search_value)
	search(search_engine, rstr);
}

function searchByGoogle()
{
	search_engine = "https://www.google.com/search?q=";
	search_value = document.getElementById("input_text").value;
	setLastSearchEngine("Google");
	rstr = encodeURIComponent(search_value)
	search(search_engine, rstr);
}

function setLastSearchEngine(searchEngine)
{
	document.cookie = "lastEngine=" + searchEngine;
}

function useLastSearchEngine()
{
	var name = "lastEngine";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) 
	{
		console.log("lastEngine is:",ca);
		var c = ca[i].trim();
		if (c.indexOf(name)==0){
			var last_engine = c.split("=")[1];
			console.log("after replace is:",last_engine);
			if(last_engine == "Bing"){
				console.log("search is ", last_engine);
				searchByBing();
				return;
			}
			else if(last_engine == "Baidu"){
				console.log("search is ", last_engine);
				searchByBaidu();
				return;
			}
			else if(last_engine == "Sogou"){
				console.log("search is ", last_engine);
				searchBySogou();
				return;
			}
			else if(last_engine == "Haosou"){
				console.log("search is ", last_engine);
				searchByHaosou();
				return;
			}
			else if(last_engine == "Google"){
				console.log("search is ", last_engine);
				searchByGoogle();
				return;
			}
		}
	}
  searchByBaidu();
}