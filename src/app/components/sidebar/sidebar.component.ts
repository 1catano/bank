import { Component, OnInit, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private showSidebarValue: boolean;
  public selectedOption: string;
  public menuOptions = [
    {
      id: '1',
      label: 'sidebar.options.your_products',
      isNew: false
    },
    {
      id: '2',
      label: 'sidebar.options.your_scheduler',
      isNew: true
    },
    {
      id: '3',
      label: 'sidebar.options.payments',
      isNew: false
    },
    {
      id: '4',
      label: 'sidebar.options.transfers',
      isNew: false
    },
    {
      id: '5',
      label: 'sidebar.options.certificates',
      isNew: false
    },
    {
      id: '6',
      label: 'sidebar.options.security',
      isNew: false
    }
  ];

  @Output() showSidebarChange = new EventEmitter();
  @Input() isDesktopDevice: boolean;
  @Input()
  get showSidebar(): boolean {
    return this.showSidebarValue;
  }

  set showSidebar(val) {
    this.showSidebarValue = val;
    this.showSidebarChange.emit(this.showSidebarValue);
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    this.selectedOption = '1';
  }

  @HostListener('document:click', ['$event'])
  clickout(event): void {
    if ((!this.eRef.nativeElement.contains(event.target) && this.showSidebar) && !this.isDesktopDevice) {
      this.showSidebar = !this.showSidebar;
    }
  }

  handleClick(optionId: string): void {
    this.selectedOption = optionId;
  }

}
