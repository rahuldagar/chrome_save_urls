document.getElementById('restore').addEventListener('click', function(e) {

  chrome.storage.local.get('URLSTORAGE', function(items) {
  var tabs_url_property2=items.URLSTORAGE;  
	if (tabs_url_property2) {
      
	  var arrayurl=tabs_url_property2.split('\n');
	  var intCount = 0; 
	  while(intCount <= arrayurl.length-2) 
	  { 
	  chrome.tabs.create({'url': arrayurl[intCount]}, function(tab) {   
      });
	  
	  intCount += 1; 
	  } 
    }
	else {
	
	}
  });  

}) ;


function url_list(tabs) {
  var tabs_url_property = '';
  
  for (var i = 0; i < tabs.length; i++) {
    tabs_url_property += tabs[i].url + '\n';
  }
  chrome.storage.local.remove('URLSTORAGE', function(items) {
  });
  chrome.storage.local.set({'URLSTORAGE': tabs_url_property}, function() {
  alert("Backup Created");  
  });
  
}

document.getElementById('copy').addEventListener('click', function(e) {
  chrome.tabs.query({},url_list);  
});
