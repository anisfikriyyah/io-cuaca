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