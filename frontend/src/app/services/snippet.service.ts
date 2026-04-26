import { computed, Injectable, signal } from '@angular/core';
import { Snippet } from '../models/snippet.model';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  // Mock data
  private initialSnippets: Snippet[] = [
    {
      id: '1',
      title: 'Set kubernetes in vps',
      description: 'Useful commands to bootstrap a K3s cluster on a cheap VPS instance.',
      code: 'curl -sfL https://get.k3s.io | sh -\nsudo systemctl status k3s',
      category: 'Kubernetes',
      icon: 'kubernetes',
      isFavorite: false
    },
    {
      id: '2',
      title: 'Check open ports',
      description: 'Find out which process is listening on a specific port.',
      code: 'sudo lsof -i -P -n | grep LISTEN\nsudo netstat -tulpn | grep LISTEN',
      category: 'Linux',
      icon: 'linux',
      isFavorite: true
    },
    {
      id: '3',
      title: 'Angular generate component',
      description: 'Generate a standalone component without a test file.',
      code: 'ng generate component my-component --standalone --skip-tests',
      category: 'Angular',
      icon: 'angular',
      isFavorite: false
    },
    {
      id: '4',
      title: 'Docker stop all containers',
      description: 'Stop all currently running Docker containers.',
      code: 'docker stop $(docker ps -a -q)',
      category: 'Docker',
      icon: 'docker',
      isFavorite: true
    },
    {
      id: '5',
      title: '.NET Create WebAPI',
      description: 'Create a new .NET core WebAPI project with no top level statements.',
      code: 'dotnet new webapi -n MyProject --use-program-main',
      category: '.NET',
      icon: '.net',
      isFavorite: false
    },
    {
      id: '6',
      title: 'Kubernetes get all resources',
      description: 'Get all kinds of resources in a given namespace.',
      code: 'kubectl get all -n my-namespace',
      category: 'Kubernetes',
      icon: 'kubernetes',
      isFavorite: false
    }
  ];

  // State
  public allSnippets = signal<Snippet[]>(this.initialSnippets);
  public searchQuery = signal<string>('');
  public activeCategory = signal<string>('All integrations');

  // Computed state
  public filteredSnippets = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const category = this.activeCategory();
    
    return this.allSnippets().filter(snippet => {
      const matchesSearch = !query || 
                            snippet.title.toLowerCase().includes(query) || 
                            snippet.description.toLowerCase().includes(query);
      const matchesCategory = category === 'All integrations' || snippet.category === category;
      return matchesSearch && matchesCategory;
    });
  });

  public categories = computed(() => {
    const cats = new Set(this.allSnippets().map(s => s.category));
    return ['All integrations', ...Array.from(cats)];
  });

  getSnippetById(id: string): Snippet | undefined {
    return this.allSnippets().find(s => s.id === id);
  }
}
