import { Routes } from "@angular/router";
import { HomeLayout } from "./layouts/home-layout/home-layout";
import { LoginLayout } from "./layouts/login-layout/login-layout";
import { AdminLayout } from "./layouts/admin-layout/admin-layout";
import { Home } from "./home/home";
import { Catalog } from "./catalog/catalog";
import { Detail } from "./detail/detail";
import { Blog } from "./blog/blog";
import { Blogger } from "./blogger/blogger";
import { Products } from "./products/products";
import { Categories } from "./categories/categories";
import { Contact } from "./contact/contact";
import { Form } from "./form/form";
import { Login } from "./login/login";
import { Recover } from "./recover/recover";

export const pagesRoutes: Routes = [
  {
    path: '',
    component: HomeLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'catalogo',
        component: Catalog
      },
      {
        path: 'producto',
        component: Detail
      },
      {
        path: 'blog',
        component: Blog
      },
      {
        path: 'contacto',
        component: Contact
      },
      {
        path: 'formulario',
        component: Form
      }
    ]
  },
  {
    path: 'login',
    component: LoginLayout,
    children: [
      {
        path: '',
        component: Login
      },
      {
        path: 'recuperacion',
        component: Recover
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: Categories
      },
      {
        path: 'productos',
        component: Products
      },
      {
        path: 'blog',
        component: Blogger
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export default pagesRoutes;
