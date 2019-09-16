import { RecoverKeyComponent } from './recover-key/recover-key.component';
import { ApiToolComponent    } from './api-tool/api-tool.component';
import { ApiListComponent    } from './api-list/api-list.component';
import { AddApiComponent     } from './add-api/add-api.component';
import { HomeComponent       } from './home/home.component';
import { NgModule            } from '@angular/core';
import { Routes,
         RouterModule        } from '@angular/router';
import { KeyComponent        } from './key/key.component';
import {SwaggerComponent} from './swagger/swagger.component';

const routes: Routes = [
  { path: '', component: HomeComponent                },
  { path: 'key', component: KeyComponent              },
  { path: 'add', component: AddApiComponent           },
  { path: 'apis', component: ApiListComponent         },
  { path: 'recover', component: RecoverKeyComponent   },
  // { path: 'apis/:api_id', component: SwaggerComponent }
  { path: 'apis/:api_id', component: ApiToolComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

