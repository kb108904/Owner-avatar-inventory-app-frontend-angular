import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.itemForm = this.fb.group({
      itemName: ['', [Validators.required]],
      description: [''],
      quantity: [0, [Validators.required, Validators.min(0)]],
      picture: ['']
    });
  }

  onSubmit(): void {
    if (this.itemForm.valid) {
      // Handle form submission logic here
      console.log('Form submitted:', this.itemForm.value);
    }
  }

  onPictureChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const fileList: FileList | null = inputElement.files;

    if (fileList && fileList.length > 0) {
      const pictureFile: File = fileList[0];
      this.itemForm.patchValue({
        picture: pictureFile
      });
    }
  }
}
