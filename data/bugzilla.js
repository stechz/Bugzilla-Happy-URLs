addEventListener("load", function() {
  let selfLink = document.querySelector(".bz_alias_short_desc_container > a");
  if (selfLink && selfLink.href != location.href) {
    history.pushState(null, null, selfLink.href);
  }
}, false)
