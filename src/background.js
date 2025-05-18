chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let the_url = tabs[0].url;
    
    const extra_urls = [
      "https://www.reddit.com/?feed=home",
      "https://www.youtube.com",
      "https://www.tiktok.com"
    ];
    
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
})


chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab && tab.url) {
      handleUrl(tab.url);
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active && tab.url) {
    handleUrl(tab.url);
  }
});

function handleUrl(the_url){
  const extra_urls = [
    "https://www.reddit.com/?feed=home",
    "https://www.youtube.com",
    "https://www.tiktok.com"
  ];
  
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
}