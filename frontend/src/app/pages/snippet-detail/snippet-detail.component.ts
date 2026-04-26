import { Component, inject, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SnippetService } from '../../services/snippet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snippet-detail',
  imports: [CommonModule, RouterLink],
  template: `
    @if (snippet()) {
      <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mt-8">
        <div class="p-8 border-b border-gray-100">
          <div class="flex items-center space-x-2 text-sm text-gray-500 mb-6 font-medium">
             <a routerLink="/" class="hover:text-blue-600 transition-colors flex items-center space-x-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Integrations</span>
             </a>
             <span>/</span>
             <span class="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">{{ snippet()?.category }}</span>
          </div>
          
          <div class="flex items-center space-x-4 mb-4">
            <div class="h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-inner shrink-0">
               <svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
            </div>
            <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">{{ snippet()?.title }}</h1>
          </div>
          <p class="text-lg text-gray-600 leading-relaxed max-w-3xl">{{ snippet()?.description }}</p>
        </div>

        <div class="p-8 bg-gray-50">
          <div class="flex items-center justify-between mb-4">
             <h3 class="text-sm font-bold text-gray-700 uppercase tracking-widest">Code Snippet</h3>
             <button class="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer bg-blue-50 px-3 py-1 rounded-full flex items-center space-x-1">
               <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
               </svg>
               <span>Copy to clipboard</span>
             </button>
          </div>

          <div class="bg-gray-900 rounded-xl shadow-lg border border-gray-800 overflow-hidden transform transition-all hover:scale-[1.01]">
            <!-- Mac style terminal header -->
            <div class="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700/50">
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                <div class="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
              </div>
              <div class="ml-4 text-xs text-gray-400 font-mono tracking-wider flex-grow text-center pr-10">bash - {{ snippet()?.title }}</div>
            </div>
            <!-- Code content -->
            <div class="p-5 overflow-x-auto">
              <pre><code class="text-gray-300 font-mono text-sm leading-relaxed block">{{ snippet()?.code }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    } @else {
      <div class="py-32 text-center flex flex-col items-center">
        <div class="bg-gray-100 p-6 rounded-full mb-6 text-gray-400">
           <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Snippet not found</h2>
        <p class="text-gray-500 mb-8">The integration or command you are looking for does not exist.</p>
        <a routerLink="/" class="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">Return to Integrations</a>
      </div>
    }
  `
})
export class SnippetDetailComponent {
  // Uses withComponentInputBinding() from router to receive `id` parameter as input
  id = input<string>();
  
  private snippetService = inject(SnippetService);

  readonly snippet = computed(() => {
    const snippetId = this.id();
    return snippetId ? this.snippetService.getSnippetById(snippetId) : null;
  });
}
