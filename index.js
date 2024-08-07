(function () {
  //TODO include slide numbers
  var url = window.location.href;

  //FIXME better sizing
  var config = Reveal.getConfig();
  var size = Math.min(config.height, config.width) - 200;

  var containers = document.querySelectorAll('div.reveal-js-qrcode');
  containers.forEach(function (e) {
    // get the text in the div
    if (e.textContent != '') {
      url = e.textContent;
      // delete the text in the div
      e.textContent = '';
    }
    e.style.display = 'flex';
    e.style.flexDirection = 'column';
    e.style.alignItems = 'center';
    var width = e.width != null ? e.width : size;
    var height = e.height != null ? e.height : size;
    new QRCode(e, { text: url, width: width, height: height });
    if (e.classList.contains('reveal-js-qrcode-display-link')) {
      var p = document.createElement('p');
      var a = document.createElement('a');
      a.href = url;
      a.textContent = url;
      p.appendChild(a);
      e.appendChild(p);
    }
  });
})();

function setCustomQRCodeUrl(url) {
  var containers = document.querySelectorAll('div.reveal-js-qrcode');
  //FIXME better sizing
  var config = Reveal.getConfig();
  var size = Math.min(config.height, config.width) - 200;
  containers.forEach(function (e) {
    e.innerHTML = '';
    var width = e.width != null ? e.width : size;
    var height = e.height != null ? e.height : size;
    new QRCode(e, { text: url, width: width, height: height });
    if (e.classList.contains('reveal-js-qrcode-display-link')) {
      var p = document.createElement('p');
      var a = document.createElement('a');
      a.href = url;
      a.textContent = url;
      p.appendChild(a);
      e.appendChild(p);
    }
  });
}
