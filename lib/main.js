const pagemod = require("page-mod");
const data = require("self").data;

pagemod.PageMod({
  include: ["*.bugzilla.mozilla.org", "*.landfill.bugzilla.org"],
  contentScriptFile: data.url("bugzilla.js"),
  contentWhen: "ready"
});
