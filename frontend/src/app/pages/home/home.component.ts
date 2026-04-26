import { Component, inject } from '@angular/core';
import { SnippetService } from '../../services/snippet.service';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CategoryFiltersComponent } from '../../components/category-filters/category-filters.component';
import { SnippetCardComponent } from '../../components/snippet-card/snippet-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SearchInputComponent, CategoryFiltersComponent, SnippetCardComponent],
  template: `
    <div class="mb-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <!-- Header block matches attachment -->
      <div class="flex flex-col md:flex-row md:items-start justify-between mb-8 w-full">
         <div class="text-left w-full md:w-2/3">
            <h2 class="text-3xl font-extrabold text-gray-900 mb-2 font-sans tracking-tight">Integrations</h2>
            <p class="text-gray-500 text-lg">At magna purus convallis mattis mattis. Fusce id in sed netus diam amet pulvinar dui.</p>
         </div>
         <div class="w-full md:w-72 mt-6 md:mt-0 flex justify-end">
            <app-search-input (queryChange)="snippetService.searchQuery.set($event)"></app-search-input>
         </div>
      </div>
      
      <!-- Category Tabs -->
      <div class="mb-10 w-full">
         <app-category-filters
           [categories]="snippetService.categories()"
           [activeCategory]="snippetService.activeCategory()"
           (selectCategory)="snippetService.activeCategory.set($event)"
         ></app-category-filters>
      </div>

      <!-- Snipet Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        @for (snippet of snippetService.filteredSnippets(); track snippet.id) {
          <app-snippet-card [snippet]="snippet"></app-snippet-card>
        } @empty {
          <div class="col-span-full py-16 text-center text-gray-500 bg-gray-50 border border-dashed border-gray-300 rounded-xl">
            <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 class="text-lg font-medium text-gray-900">No snippets found</h3>
            <p class="mt-1">Try adjusting your search or category filter.</p>
          </div>
        }
      </div>
    </div>
  `
})
export class HomeComponent {
  snippetService = inject(SnippetService);
}
