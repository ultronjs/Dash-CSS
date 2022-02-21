function include(file) {
  var script = document.createElement("script");
  script.src = file;
  script.type = "text/javascript";
  script.defer = true;

  document.getElementsByTagName("head").item(0).appendChild(script);
}

/* Include Many js files */
include("./badge/badge.js");
include("./card/card.js");
include("./modal/modal.js");
include("./toast/toast.js");