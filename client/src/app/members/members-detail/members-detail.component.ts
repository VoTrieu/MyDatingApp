import { Component, inject, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../_model/member';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';
import { MembersService } from '../../_services/members.service';

@Component({
  selector: 'app-members-detail',
  imports: [TabsModule, GalleryModule],
  templateUrl: './members-detail.component.html',
  styleUrl: './members-detail.component.css'
})
export class MembersDetailComponent implements OnInit {
  private memberService = inject(MembersService);
  private route = inject(ActivatedRoute);
  member?: Member
  images: GalleryItem[] = []
  
  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(){
    const memberName = this.route.snapshot.paramMap.get("username");
    if (!memberName) return;
    this.memberService.getMember(memberName).subscribe({
      next: member => {
        this.member = member;
        member.photos.map(p => {
          this.images.push(new ImageItem({src: p.url, thumb: p.url}))
        })
      }
    })
  }

}
