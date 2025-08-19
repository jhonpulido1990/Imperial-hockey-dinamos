import { Component } from '@angular/core';
import { BlogTemplate } from "../../shared/templates/blog-template/blog-template";

@Component({
  selector: 'app-blog',
  imports: [BlogTemplate],
  templateUrl: './blog.html',
  styleUrl: './blog.scss'
})
export class Blog {

}
