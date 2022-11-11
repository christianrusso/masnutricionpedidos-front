import { Component, Input } from '@angular/core';

import { HeaderComponent } from '@coreui/angular';
import {
  cilExitToApp,
  cilSpeedometer,
  cilMenu,
  cilUser,
  cilGroup,
  cilMoney,
  cilCart,
  cilChatBubble,
  cilDescription,
  cilChart,
  cilLibraryBuilding,
  cilList,
  cilPhone
} from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
  @Input() sidebarId: string = 'sidebar';
  constructor(public iconSet: IconSetService) {
    super();
    iconSet.icons = {
      cilExitToApp,
      cilSpeedometer,
      cilUser,
      cilGroup,
      cilMenu,
      cilMoney,
      cilCart,
      cilChatBubble,
      cilDescription,
      cilChart,
      cilLibraryBuilding,
      cilList,
      cilPhone
    };
  }
}
