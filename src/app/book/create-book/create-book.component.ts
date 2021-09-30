import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../model/book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  bookForm!: FormGroup

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.bookForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
    })
  }

    createProduct()
    {
      this.http.post<Book>('http://localhost:3000/books', this.bookForm.value).subscribe((data) => {
        alert("thêm thành công")
        this.router.navigate(["/book"])
      })

    }

  }

