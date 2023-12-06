/* sophisticated_code.js */

// This code demonstrates a complex and elaborate implementation of a music player application in JavaScript.

// MusicPlayer class acts as the main application
class MusicPlayer {
  constructor() {
    this.currentPlaylist = [];
    this.currentSongIndex = 0;
    this.isPlaying = false;
  }

  // Add a song to the current playlist
  addSongToPlaylist(song) {
    this.currentPlaylist.push(song);
  }

  // Remove a song from the playlist based on its index
  removeSongFromPlaylist(songIndex) {
    if (songIndex >= 0 && songIndex < this.currentPlaylist.length) {
      this.currentPlaylist.splice(songIndex, 1);
      if (songIndex <= this.currentSongIndex) {
        this.currentSongIndex--;
      }
    }
  }

  // Play the current song
  play() {
    if (this.currentPlaylist.length > 0) {
      const currentSong = this.currentPlaylist[this.currentSongIndex];
      this.isPlaying = true;
      console.log(`Now playing: ${currentSong}`);
    }
  }

  // Pause the current song
  pause() {
    this.isPlaying = false;
    console.log(`Paused.`);
  }

  // Resume playing the current song
  resume() {
    if (!this.isPlaying && this.currentPlaylist.length > 0) {
      const currentSong = this.currentPlaylist[this.currentSongIndex];
      this.isPlaying = true;
      console.log(`Resumed playing: ${currentSong}`);
    }
  }

  // Skip to the next song in the playlist
  next() {
    if (this.currentPlaylist.length > 0) {
      this.currentSongIndex++;
      if (this.currentSongIndex >= this.currentPlaylist.length) {
        this.currentSongIndex = 0;
      }
      this.play();
    }
  }

  // Skip to the previous song in the playlist
  prev() {
    if (this.currentPlaylist.length > 0) {
      this.currentSongIndex--;
      if (this.currentSongIndex < 0) {
        this.currentSongIndex = this.currentPlaylist.length - 1;
      }
      this.play();
    }
  }

  // Stop playing and clear the current playlist
  stop() {
    this.isPlaying = false;
    this.currentPlaylist = [];
    this.currentSongIndex = 0;
    console.log("Stopped playback.");
  }
}

// Create an instance of MusicPlayer
const player = new MusicPlayer();

// Add some songs to the playlist
player.addSongToPlaylist("Song 1");
player.addSongToPlaylist("Song 2");
player.addSongToPlaylist("Song 3");

// Play, pause, and resume the song
player.play();
player.pause();
player.resume();

// Skip to the next and previous song
player.next();
player.prev();

// Stop playing and clear the playlist
player.stop();