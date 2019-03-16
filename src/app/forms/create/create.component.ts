import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VideogameService } from '../../videogame/+state/videogame.service';
import { Observable } from 'rxjs';
import { Videogame } from 'src/app/videogame/+state/videogame.model';
import { VideogameQuery } from 'src/app/videogame/+state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form: FormGroup;
  public videogame$: Observable<Videogame>;
  public videogameId: string;
  public ratingList: string[] = ["E (Everyone)", "10+", "12+", "16+", "18+"];
  public genreList: string[] = ["Action", "Adventure", "Battle Royale", "FPS", "Hack'n'Slash", "MMORPG", "MOBA", "Point'n'Click", "Puzzles", "Racing", "RPG", "Sandbox", "Simulation", "STR", "Sport", "Survival horror", "TCG", "TPS"]

  constructor(
    private videogameService: VideogameService,
    private videogameQuery: VideogameQuery,
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit() {
    this.videogame$ = this.videogameQuery.selectActive();

    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      developer: ['', Validators.required],
      publisher: [''],
      genre: ['', Validators.required],
      releaseDate: ['', Validators.required],
      rating: ['', Validators.required],
      cover: [''],
      price: ['', Validators.required],
    });

    this.videogame$.subscribe(value => value ? this.form.patchValue(value) : this.form.reset());
  }

  public addVideogame() {
    this.videogameService.addVideogame(this.form.value);
  }

  public updateVideogame(videogame: Videogame) {
    this.videogameService.updateVideogame(videogame, this.form.value);
  }

}
