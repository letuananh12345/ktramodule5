import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../model/book";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookForm!: FormGroup
  id!: number;

  constructor( private activeRoute: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
    })
    this.activeRoute.params.subscribe((data) => this.id = data.id);
    this.showEditBook(this.id);
  }

  saveBook(id:number) {
    this.http.put<Book>(`http://localhost:3000/books/${id}`, this.bookForm.value).subscribe((data) => {
      alert("sửa thành công - " )
      this.router.navigate(["/book"])
    })
  }

  showEditBook(id: number) {
    this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      console.log(data)
      this.bookForm.get('id')?.setValue(data.id);
      this.bookForm.get('title')?.setValue(data.title);
      this.bookForm.get('author')?.setValue(data.author);
      this.bookForm.get('description')?.setValue(data.description);
    })
  }

}
