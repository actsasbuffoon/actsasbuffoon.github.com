quotes = [
  "Remember to replace this with something clever before deploying",
  "If it's not broken, you're not trying hard enough",
  "If at first you don't succeed, give up and get a job in marketing",
  "Why are you reading this subtitle? It's not going to say anything meaningful.",
  "Born to be mild",
  "Why am I so bald?",
  "O hai, interwebs!",
  "I'm in ur interwebs, cloggin' ur toobs",
  "I'm pretty sure that's not what the subtitle was a minute ago",
  "I can haz Ruby?",
]

banner_images = ["avatar2", "shatner", "rabbit", "lincoln"]

function rotate_images() {
  jQuery("#avatar").attr("src", "/images/" + banner_images[Math.floor(Math.random() * banner_images.length)] + ".png")
  setTimeout(rotate_images, 30000)
}

jQuery.noConflict()
jQuery(document).ready(function() {
  jQuery("header hgroup h2").text(quotes[Math.floor(Math.random() * quotes.length)])
  setTimeout(function() {rotate_images()}, 30000)
})