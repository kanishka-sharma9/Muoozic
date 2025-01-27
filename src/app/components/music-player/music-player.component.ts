import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMusic } from '../../model/interfaces/interface';

@Component({
  selector: 'app-music-player',
  imports: [CommonModule],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css'
})
export class MusicPlayerComponent implements OnInit{
  songs: IMusic[] = [
    {
      id: 1,
      title: 'Song One',
      artist: 'Artist One',
      duration: '3:45',
      audioUrl: 'assets/song1.mp3'
    },
    {
      id: 2,
      title: 'Song Two',
      artist: 'Artist Two',
      duration: '4:20',
      audioUrl: 'assets/song2.mp3'
    },
    // Add more songs as needed
  ];

  currentSong: IMusic | null = null;
  isPlaying: boolean = false;
  progress: number = 0;
  currentTime: string = '0:00';

  ngOnInit() {
    this.togglePlay();
    this.previousSong();
    
  }

  playSong(song: IMusic) {
    this.currentSong = song;
    this.isPlaying = true;
    // Implement actual audio playing logic
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    // Implement play/pause logic
  }

  previousSong() {
    // Implement previous song logic
  }

  nextSong() {
    // Implement next song logic
  }

}
