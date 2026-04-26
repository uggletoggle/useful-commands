import { Component, input } from '@angular/core';
import { Snippet } from '../../models/snippet.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-snippet-card',
  imports: [RouterLink],
  template: `
    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col h-full group">
      
      <!-- Icon & Status -->
      <div class="mb-4 flex items-center justify-between">
        <div class="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-inner group-hover:scale-105 transition-transform shrink-0">
          <!-- Placeholder SVG Icon -->
          <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      
      <!-- Content -->
      <h3 class="text-lg font-bold text-gray-900 mb-2 truncate" [title]="snippet().title">{{ snippet().title }}</h3>
      <p class="text-gray-500 text-sm flex-grow line-clamp-3 leading-relaxed">
        {{ snippet().description }}
      </p>

      <!-- Footer/Action -->
      <div class="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
        <button class="text-gray-400 hover:text-gray-600 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
        
        <a 
          [routerLink]="['/snippet', snippet().id]"
          class="inline-flex items-center space-x-1.5 px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold rounded-full hover:bg-white transition-colors cursor-pointer text-decoration-none shadow-sm"
          [class.border-green-200]="snippet().isFavorite"
          [class.bg-green-50]="snippet().isFavorite"
        >
          <svg class="h-4 w-4" [class.text-green-500]="snippet().isFavorite" [class.text-gray-400]="!snippet().isFavorite" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          @if (snippet().isFavorite) {
            <span class="text-green-600 uppercase text-xs tracking-wider">Connected</span>
          } @else {
            <span>Connect</span>
          }
        </a>
      </div>
    </div>
  `
})
export class SnippetCardComponent {
  snippet = input.required<Snippet>();
}
