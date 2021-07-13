Page({
  data: {
    current: {
      poster: 'http://p1.music.126.net/aXvj5BYRCoCWgdD40_CgXg==/109951165425092026.jpg?param=130y130',
      name: '如果当时2020',
      author: '许嵩 / 朱婷婷',
      src: 'http://m701.music.126.net/20210123174410/2764aa985dc915df4c70c8ff2e560f96/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/4632083275/36da/5cd3/8c4d/b54b269c0d74ce26a5d38e0d53b460e3.mp3',
    },
    audioAction: {
      method: 'pause'
    }
  },
  audioPlayed: function (e) {
    console.log('audio is played')
    console.log(e);
  },
  audioTimeUpdated: function (e) {
    this.duration = e.detail.duration;
  },
  // 进度
  timeSliderChanged: function (e) {
    if (!this.duration)
      return;

    var time = this.duration * e.detail.value / 100;

    this.setData({
      audioAction: {
        method: 'setCurrentTime',
        data: time
      }
    });
  },
  // 播放速率
  playbackRateSliderChanged: function (e) {
    this.setData({
      audioAction: {
        method: 'setPlaybackRate',
        data: e.detail.value
      }
    })
  },
  // 播放
  playAudio: function () {
    this.setData({
      audioAction: {
        method: 'play'
      }
    });
  },
  // 暂停
  pauseAudio: function () {
    this.setData({
      audioAction: {
        method: 'pause'
      }
    });
  }
})