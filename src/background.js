chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let the_url = tabs[0].url;
    
    fetch('http://localhost:8002/blocked-sites')
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
    fetch("http://localhost:5000/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        extra_urls,
        the_url
       })
    })
  })
}) //local storage


chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    console.log(tab)
    if (tab && tab.url) {
      console.log('im here rn')
      handleUrl(tab.url);
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active && tab.url) {
    handleUrl(tab.url);
  }
});

async function handleUrl(the_url){
    fetch("http://localhost:8002/blocked-sites")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response
    })
    .then((response) => {
      const data = {
        extra_urls: response,
        the_url
      }
      fetch("http://localhost:5000/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
  
    }).catch((error) => {
      console.log(error)
    })
  })
    /*await fetch("http://localhost:5000/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        extra_urls,
        the_url
       })
    })*/
    
}