var wistiaPlaylist = Wistia.playlist("4xledpdgdp", {
  version: "v1",
  theme: "tab",
  videoOptions: {
    volumeControl: true,
    autoPlay: true,
    videoWidth: "640",
    videoHeight: "360"
  },
  media_0_0: {
    autoPlay: false,
    controlsVisibleOnLoad: false
  }
});

wistiaPlaylist.bind('play', function() {
  console.log(wistiaPlaylist.currentVideo());
});
