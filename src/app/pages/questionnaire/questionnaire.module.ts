import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionnaireRoutingModule} from './questionnaire-routing.module';
import {QuestionnaireComponent} from './questionnaire.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';


@NgModule({
  declarations: [QuestionnaireComponent],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    NgxChartsModule,
  ]
})
export class QuestionnaireModule {
}
