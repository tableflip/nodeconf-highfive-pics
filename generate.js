var fs = require("fs")

fs.readdir("img", function (er, imgs) {
  if (er) throw er
  imgs = imgs.filter(function (img) {
    return img[0] != "."
  })
  fs.writeFileSync("pictures.json", JSON.stringify(imgs))
})