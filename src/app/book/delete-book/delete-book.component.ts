import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../model/book";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

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
    this.showDelete(this.id);
  }

  deleteBook(id:number) {
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe((data) => {
      alert("xóa thành công - " )
      this.router.navigate(["/book"])
    })
  }

  showDelete(id: number) {
    this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.bookForm.get('id')?.setValue(data.id);
      this.bookForm.get('title')?.setValue(data.title);
      this.bookForm.get('author')?.setValue(data.author);
      this.bookForm.get('description')?.setValue(data.description);
    })
  }

}
