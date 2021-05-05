import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbPopover, NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: `
    <div class="fc-content" [ngbPopover]="template" container="body" triggers="manual">
      <ng-content></ng-content>
    </div>
  `,
})
export class TooltipComponent {


  @ViewChild(NgbPopover, { static: true }) popover: NgbPopover;
}