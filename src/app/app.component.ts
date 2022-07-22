import { AfterContentChecked, AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserLogged } from './general-module/components/interfaces/user.interface';
import { SidebarOption } from './general-module/components/interfaces/sidebar-option.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, AfterContentChecked {
  title = ''/* 'Sistema de Gestión de Expediente Tributa' */;
  hasImg = false;
  expanded = false;
  user!: UserLogged;
  options: SidebarOption[] = [
    {id: 'AM00', title: 'Administracion', icon: 'settings', children: [
      {
        id: 'AM01',
        title :  'recepcion',
        icon: "recent_actors",
        route: 'administracion/recepcion'
      },
      {
        id: 'AM02',
        title: 'centralizadorentrada',
        icon: "personal_injury",
        route: 'administracion/centralizadorentrada'
      },
      {
        id: 'AM03',
        title: 'presidente',
        icon: "personal_injury",
        route: 'administracion/presidente'
      },
      {
        id: 'AM04',
        title: 'profesional',
        icon: "personal_injury",
        route: 'administracion/profesional'
      },
      {
        id: 'AM05',
        title: 'coordinador',
        icon: "personal_injury",
        route: 'administracion/coordinador'
      },
      {
        id: 'AM07',
        title: 'secretario',
        icon: "personal_injury",
        route: 'administracion/secretario'
      },
      {
        id: 'AM08',
        title: 'supervisor',
        icon: "personal_injury",
        route: 'administracion/supervisor'
      }
    ]}
  ];

  constructor(
    private router: Router
  ) { }
  ngAfterContentChecked(): void {
    this.user = JSON.parse(sessionStorage.getItem('userLogged') as string);

    if (this.user && this.options.length == 0){
      this.options = this.user.options;
    }
  }

  ngAfterViewInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('userLogged') as string)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const items = document.querySelectorAll(".item");
        for (let index = 0; index < items.length; index++) {
          const item = items[index];
          const value = item.attributes.getNamedItem("ng-reflect-router-link")?.value;
          if(value && event.url.includes(value)) {
            item.classList.add("active-route");
          } else {
            item.classList.remove("active-route");
          }
        }
      }
    });

    const items = document.querySelectorAll("mat-list-item");
    for (let index = 0; index < items.length; index++) {
      const item = items[index];
      item.setAttribute("title", item.querySelector("span")?.innerText ?? "");
    }
  }

  toggleMenu(){
    document.getElementById("sidebar")?.classList.toggle("open");
    document.getElementById("menu-icon")?.classList.toggle("morph");

    this.expanded = !this.expanded;
  }

  activateItem(id: string) {
    const element = document.getElementById(id) as HTMLDivElement;
    const child = element.children[1] as HTMLDataElement;

    this.options?.filter(item => item.id != id).forEach(item => {
      const child = document.getElementById(item.id) as HTMLDivElement;
      child.classList.remove("selected");
      if (item.children) {
        const innerChild = child.children[1] as HTMLDataElement;
        innerChild.style.cssText = `height: 0px !important;`;
      }
    });

    if (child) {
      if (element.classList.contains("selected")) {
        element.classList.remove("selected")
        child.style.cssText = `height: 0px !important;`;
      } else {
        element.classList.add("selected")
        child.style.cssText = `height: ${child.children.length * 53}px !important;`;
      }
    } else {
      element.classList.toggle("selected");
    }
  }

  noImg(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    console.log("No se encontró la imagen");
    this.hasImg = false;
  }

  value(_: number, item: SidebarOption) {
    return item;
  }

}
