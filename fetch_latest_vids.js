const userAction = async () => {
  const response = await fetch('https://api.jsonstorage.net/v1/json/9d4be7fe-42ee-4f26-be06-74ff7d99dc42');
  let myJson = await response.json(); 
  var container = document.getElementById('latest');
  var content = '<div><ul>';
  myJson = myJson.slice(0, 5);
  myJson.forEach(item => {
    content = content + '<li><a href="' + item.url + '">[' + item.date + '] ' + item.title + '</a></li>';
  });
  content += '</ul></div>';
  container.outerHTML = content;
}
if (window.location.href.split('/')[3] === '') {
  userAction();
}