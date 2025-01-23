import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    FormsModule,
    PanelMenu,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Documents',
            icon: 'pi pi-file',
            items: [
              {
                label: 'Invoices',
                icon: 'pi pi-file-pdf',
                items: [
                  {
                    label: 'Pending',
                    icon: 'pi pi-stop',
                  },
                  {
                    label: 'Paid',
                    icon: 'pi pi-check-circle',
                  },
                ],
              },
              {
                label: 'Clients',
                icon: 'pi pi-users',
              },
            ],
          },
          {
            label: 'Images',
            icon: 'pi pi-image',
            items: [
              {
                label: 'Logos',
                icon: 'pi pi-image',
              },
            ],
          },
        ],
      },
      {
        label: 'Cloud',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Upload',
            icon: 'pi pi-cloud-upload',
          },
          {
            label: 'Download',
            icon: 'pi pi-cloud-download',
          },
          {
            label: 'Sync',
            icon: 'pi pi-refresh',
          },
        ],
      },
      {
        label: 'Devices',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Phone',
            icon: 'pi pi-mobile',
          },
          {
            label: 'Desktop',
            icon: 'pi pi-desktop',
          },
          {
            label: 'Tablet',
            icon: 'pi pi-tablet',
          },
        ],
      },
    ];
  }
}
