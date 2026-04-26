import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-filters',
  imports: [CommonModule],
  template: `
    <div class="flex items-center space-x-6 border-b border-gray-200 overflow-x-auto hide-scrollbar">
      @for (category of categories(); track category) {
        <button
          (click)="selectCategory.emit(category)"
          [class.border-blue-500]="activeCategory() === category"
          [class.text-blue-600]="activeCategory() === category"
          [class.border-transparent]="activeCategory() !== category"
          [class.text-gray-500]="activeCategory() !== category"
          class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors hover:text-gray-700 hover:border-gray-300 outline-none focus:outline-none"
        >
          {{ category }}
        </button>
      }
    </div>
  `,
  styles: [`
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class CategoryFiltersComponent {
  categories = input.required<string[]>();
  activeCategory = input.required<string>();
  selectCategory = output<string>();
}
