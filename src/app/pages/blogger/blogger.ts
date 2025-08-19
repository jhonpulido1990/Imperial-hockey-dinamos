import { Component } from '@angular/core';
import { BloggerTemplate } from "../../shared/templates/blogger-template/blogger-template";

@Component({
  selector: 'app-blogger',
  imports: [BloggerTemplate],
  templateUrl: './blogger.html',
  styleUrl: './blogger.scss'
})
export class Blogger {

}
