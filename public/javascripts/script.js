window.wistiaEmbeds.onFind(function(videoOrPlaylist) {
  videoOrPlaylist.bind("play", function() {
    console.log(videoOrPlaylist.currentVideo());
    return this.unbind;
  });
});
