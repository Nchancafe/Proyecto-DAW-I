import { Component,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html'
})
export class Login {
  form: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(
    readonly fb: FormBuilder,
    readonly authService: AuthService,
    readonly router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.error = null;
    this.loading = true;
     this.cdr.markForCheck(); 

    this.authService
      .signIn(this.form.value)
      .pipe(finalize(() => (
        this.loading = false,   
        this.cdr.detectChanges())))
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (err) => {
          this.error =
            (err && (err.message || err.error?.message || err.error?.error)) ||
            'No se pudo iniciar sesión';
          this.cdr.markForCheck(); 

            setTimeout(() => {
            this.error = null;
            this.cdr.markForCheck();
            }, 4000); //a los 4 segundos se va el mensaje 
        }

      });
  }
}
