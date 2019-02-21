import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Videogame } from 'src/app/classes/videogame';
import { VideogameService } from 'src/app/services/videogame.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public form: FormGroup;
  public ratingList: string[] = ["E (Everyone)", "10+", "12+", "16+", "18+"];
  public genreList: string[] = ["Action", "Adventure", "FPS", "Hack'n'Slash", "MMORPG", "MOBA", "Point'n'Click", "Puzzles", "Racing", "RPG", "Sandbox", "Simulation", "STR", "Sport", "Survival horror", "TCG", "TPS"]

  constructor(
    private videogameService: VideogameService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.createSignupForm();
  }

  ngOnInit() {
  }

  createSignupForm(): FormGroup {
    return this.formBuilder.group(
      {
        title: [null, Validators.required],
        developer: [null, Validators.required],
        publisher: [null, Validators.required],
        genre: [null, Validators.required],
        releaseDate: [null, Validators.required],
        rating: [null, Validators.required],
        cover: [null],
        price: [null, Validators.required]
      }
    )
  }

  onSubmit() {
    let newGame: Videogame = this.form.value;
    this.videogameService.addVideogame(newGame);
    this.router.navigate(['/home']);
  }

}
