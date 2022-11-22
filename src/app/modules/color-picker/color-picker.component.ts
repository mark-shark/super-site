import {Component, OnInit} from '@angular/core';
import {Color} from "../../models/picker-colors";
import {COLORS} from "../../../assets/database/setting/colors";

@Component({
  selector: 'super-color-picker',
  templateUrl: '../../tpl/color-picker.html',
  styleUrls: ['../../assets/styles/2-components/color-picker.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor() {
  }

  // Color Picker
  isPicked = false;
  togglePicker() {
    // reverse the value of property
    this.isPicked = !this.isPicked;
  }
  togglePickerClickedOutside() {
    this.isPicked = false;
  }

  colors = COLORS;

  selectedColor!: Color;
  onSelect(color: Color): void {
    this.selectedColor = color;
  }

  ngOnInit(): void {
  }
}


