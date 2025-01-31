import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_model/member';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-members-list',
  imports: [MemberCardComponent],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.css'
})
export class MembersListComponent implements OnInit {
  memberService = inject(MembersService);
  
  ngOnInit(): void {
    if(this.memberService.members().length == 0) this.getMembers();
  }

  getMembers(){
    this.memberService.getMembers();
  }

}
