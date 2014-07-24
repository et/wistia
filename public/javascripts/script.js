window.wistiaEmbeds.onFind(function(video) {
  video.bind("play", function() {
    console.log("I played " + video.name());
    return this.unbind;
  });
});
