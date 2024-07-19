import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface UserProfile {
  id: string;
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: UserProfile = {
    id: '001',
    name: 'Mariama Dib',
    role: 'Gérant',
    image: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png'
  };
  newPassword: string = '';
  isEditing: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  updateProfile(form: NgForm): void {
    console.log('Profile updated', this.user);
    if (this.newPassword) {
      console.log('Password changed');
    }
    this.isEditing = false;
    // form.resetForm();
  }
}
