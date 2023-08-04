class MediaPlayer {
  constructor({element, plugins = []}) {
    this.player = element;
    this.plugins = plugins;
    this.#initPlugins()
  }

  #initPlugins() {
    this.plugins.forEach((item) => item.run(this))
  }

  play() {
    this.player.play();
  }

  mute() {
    this.player.muted = true;
  }

  unmute() {
  this.player.muted = false;
  }

  decreaseVolumen() {
    if(this.player.volume <= 0.1) return;
    this.player.volume -= 0.1;
  }

  increaseVolumen() {
    if(this.player.volume === 1) return;
    this.player.volume += 0.1;
  }

  pause() {
    this.player.pause();
  }

  toggleMute() {
    this.player.muted ? this.unmute() : this.mute();
  }

  togglePlay() {
    this.player.paused ? this.play() : this.pause();
  }
}

export default MediaPlayer