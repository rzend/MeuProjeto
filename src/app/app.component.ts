import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./navegacao/menu/menu.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { FooterComponent } from "./navegacao/footer/footer.component";
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, MenuComponent, HomeComponent, FooterComponent, DataBindingComponent]
})
export class AppComponent {
  title = 'MeuProjeto';
}
