import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { category } from 'src/app/core/interFaces/category';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  constructor(private _ProductService:ProductService){}

  categoriesData:category[]=[]

  ngOnInit(): void {
    this._ProductService.getCategories().subscribe({
      next:(response)=>{
        this.categoriesData = response.data
      }
    })
  }
}
