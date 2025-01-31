import { Routes } from '@angular/router';
import { authGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MembersDetailComponent } from './members/members-detail/members-detail.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { preventUnsaveChangesGuard } from './_guards/prevent-unsave-changes.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'members', component: MembersListComponent},
            {path: 'members/:username', component: MembersDetailComponent},
            {path: 'member/edit', component: MemberEditComponent,
                canDeactivate:[preventUnsaveChangesGuard]
            },
            {path: 'lists', component: ListsComponent},
            {path: 'messages', component: MessagesComponent},
        ]
    },
    {path: 'not-found', component: NotFoundComponent},
    {path: 'server-error', component: ServerErrorComponent},
    {path: 'test-error', component: TestErrorComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'},
];
