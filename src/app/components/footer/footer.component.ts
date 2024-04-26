import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  
  titleFooters:any=[
    'Audio Description',
    'Help Center',
    'Gift Cards',
    'Account',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Ways to Watch',
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us',
    'Speed Test',
    'Legal Notices',
    'Only on Netflix',
    
  ]
}
