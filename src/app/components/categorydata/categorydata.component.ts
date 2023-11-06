import { category } from 'src/app/core/interFaces/category';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorydata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorydata.component.html',
  styleUrls: ['./categorydata.component.scss']
})
export class CategorydataComponent implements OnInit{

  constructor(private _ProductService:ProductService, private _ActivatedRoute:ActivatedRoute){}

  categoryId:string|null=''
  categoryData:category={} as category


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        param.get('id')
        this.categoryId = param.get('id')
        console.log(this.categoryId)
      }
    })

    this._ProductService.getCategoryDetails(this.categoryId).subscribe({
      next:(response)=>{
        this.categoryData = response.data
      }
    })
  }
}
