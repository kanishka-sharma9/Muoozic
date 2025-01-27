import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../model/services/master.service';

@Component({
  selector: 'app-artists',
  imports: [],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent implements OnInit {
  artist_list: any[]=[];
  service = inject(MasterService);
  ngOnInit(): void {
    this.load_artists();
  }

  load_artists() {
    this.service.get_all_artists().subscribe((response: any) => {
      this.artist_list = response.results;
    })
  }
}
