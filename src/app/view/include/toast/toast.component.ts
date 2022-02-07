import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IToast} from "../../../interfaces/toast/IToast";


@Component({
  selector: 'app-toast [model]',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnChanges, OnInit {
  @Input() model: IToast = {} as IToast;
  @Output() destroyToast = new EventEmitter<boolean>();

  timeoutId?: number;

  constructor() {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.model.dateTime = new Date(Date.now());
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.destroyToast.emit(true);
    }, this.model.timeout);
  }

  ngOnInit(): void {
    this.model.timeout = 3000;
  }


}
