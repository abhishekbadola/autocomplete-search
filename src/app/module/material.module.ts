import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatSelectModule
    ],
})
export class MaterialModule {
}
