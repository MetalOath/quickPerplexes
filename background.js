chrome.contextMenus.create({
  id: "askPerplexity",
  title: "Ask Perplexity",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "askPerplexity" && info.selectionText) {
    const query = encodeURIComponent(info.selectionText);
    const url = `https://www.perplexity.ai/?q=${query}`;
    chrome.tabs.create({ url });
  }
});
