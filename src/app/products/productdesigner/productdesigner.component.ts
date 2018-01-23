import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/shell/auth/login/login.service';

@Component({
  selector: 'printmelon-productdesigner',
  templateUrl: './productdesigner.component.html',
  styleUrls: ['./productdesigner.component.scss']
})
export class ProductdesignerComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
        // tslint:disable-next-line:no-shadowed-variable
        const fancyProductDesigner = new FancyProductDesigner($('#fpd'));
  }

}
