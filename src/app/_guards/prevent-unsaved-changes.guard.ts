import { Injectable, inject } from '@angular/core';
import { CanDeactivate, CanDeactivateFn } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { ConfirmService } from '../_services/confirm.service';
import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PreventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {
//   constructor(private confirmService: ConfirmService){}

//   canDeactivate(
//     component: MemberEditComponent) : Observable<boolean> {
//       if (component.editForm?.dirty) {
//         this.confirmService.confirm();
//         //return confirm('Are you sure that you want to continue? Any unsaved changes will be lost!');
//       }
//       return of(true); 
//   }
  
// }

export const PreventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  const confirmService = inject(ConfirmService);
  
  if (component.editForm?.dirty) {
    return confirmService.confirm();
  }
  
  return true;
};
