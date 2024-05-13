import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    // this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });

  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.bluePrintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
    this.bluePrintCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value });
  }
}
