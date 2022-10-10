import { Component } from '@angular/core';

@Component({
  selector: 'ht-dashboard-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent {
  items: LinkItem[] = [
    {
      title: 'NX - Monorepos for Angular',
      content: 'The tool that wraps Angular CLI',
      link: 'https://nx.dev',
      linkText: 'Learn about NX',
    },
    {
      title: 'Daisy UI',
      content: 'The UI Library',
      link: 'https://daisyui.com',
      linkText: 'The Open Source DaisyUI Site',
    },
  ];
}

type LinkItem = {
  title: string;
  content: string;
  link: string;
  linkText: string;
};
