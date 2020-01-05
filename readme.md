### SET ENV ANDROID

```bash
export ANDROID_HOME=/home/anis/Android/Sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
```

### Create Project Ionic

```bash
ionic start io-cuaca tabs --type=angular
```

### Add Android to Project

```bash
ionic cordova prepare android
```

### Running App on Android

```bash
ionic cordova run android --livereload
```

### Cek emulator

```bash
emulator -list-avds
```



## IONIC

### IONIC generate

```
ionic generate page contact
```

### Route

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'cuaca',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cuaca/cuaca.module').then(m => m.CuacaPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then(m => m.AboutPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
```


### Header Tab

```html
<ion-toolbar>
  <ion-segment>
    <ion-segment-button value="all" checked>
      All
    </ion-segment-button>
    <ion-segment-button value="favorites">
      Favorites
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>
```

### Header 3 menu icon 

```html
<ion-toolbar color="secondary">
  <ion-buttons slot="secondary">
    <ion-button>
      <ion-icon slot="icon-only" name="contact"></ion-icon>
    </ion-button>
    <ion-button>
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-buttons slot="primary">
    <ion-button color="primary">
      <ion-icon slot="icon-only" name="more"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>Secondary Toolbar</ion-title>
</ion-toolbar>
```

### Header Search

```html
<ion-toolbar color="primary">
  <ion-buttons slot="primary">
    <ion-button (click)="clickedSearch()">
      <ion-icon slot="icon-only" name="search"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-searchbar placeholder="Search Favorites"></ion-searchbar>
</ion-toolbar>
```

### Header right Menu

```html
<ion-toolbar color="primary">
  <ion-buttons slot="primary">
    <ion-button (click)="clickedStar()">
      <ion-icon slot="icon-only" name="star"></ion-icon>
    </ion-button>
  </ion-buttons>
  <ion-title>Right side menu toggle</ion-title>
  <ion-buttons slot="end">
    <ion-menu-button autoHide="false"></ion-menu-button>

  </ion-buttons>
</ion-toolbar>
```

### Menu Kiri

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button autoHide="false"></ion-menu-button>
  
    </ion-buttons>
    <ion-buttons slot="secondary">
      <ion-button>
        <ion-icon slot="icon-only" name="camera"></ion-icon>
      </ion-button>
    </ion-buttons>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>
```