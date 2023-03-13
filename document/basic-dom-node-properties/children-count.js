let itemsList = document.getElementsByTagName('li');
    
for (item of itemsList) {
    let startLi = item.firstChild;
    let itemCount = item.getElementsByTagName('li');
    alert(`${startLi.textContent.trim()}: ${itemCount.length}`);
};