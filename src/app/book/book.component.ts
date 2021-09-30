import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm!: FormGroup
  books: Book[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getProducts();
    this.bookForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),

    })
  }

  getProducts() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data) => {
      this.books = data;
    })
  }

}
