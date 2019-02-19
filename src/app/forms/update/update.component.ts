import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videogame } from 'src/app/classes/videogame';
import { VideogameService } from 'src/app/services/videogame.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public videogame: Videogame;
  public form: FormGroup;
  public ratingList: string[] = ["E (Everyone)", "10+", "12+", "16+", "18+"];

  constructor(
    private videogameService: VideogameService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.updateForm();
   }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.videogame = this.videogameService.getVideogame(id);

    this.form.setValue({
      title: this.videogame.title,
      developer: this.videogame.developer,
      publisher: this.videogame.publisher,
      genre: this.videogame.genre,
      releaseDate: this.videogame.releaseDate,
      rating: this.videogame.rating,
      cover: this.videogame.cover,
      price: this.videogame.price
    });
  }

  updateForm(): FormGroup {
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

  onSubmit(): void {
    this.form.value.id = this.videogame.id;
    this.videogameService.updateVideogame(this.form.value);
    this.router.navigate(['/home']);
  }

}
