import { Component, effect, output, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-search-input',
  imports: [FormField],
  template: `
    <div class="relative w-full">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="search"
        [formField]="searchForm.query"
        class="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded text-sm outline-none focus:border-blue-500 transition-colors shadow-sm text-gray-700 bg-white"
        placeholder="Search..."
      />
    </div>
  `
})
export class SearchInputComponent {
  queryChange = output<string>();

  searchModel = signal({ query: '' });
  searchForm = form(this.searchModel);

  constructor() {
    effect(() => {
      this.queryChange.emit(this.searchForm.query().value() || '');
    });
  }
}
