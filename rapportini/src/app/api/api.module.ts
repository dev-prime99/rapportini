/* tslint:disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AgreementService } from './services/agreement.service';
import { ArticleService } from './services/article.service';
import { ArticleTagService } from './services/article-tag.service';
import { ATaskService } from './services/a-task.service';
import { ATaskTypeService } from './services/a-task-type.service';
import { BizDocumentService } from './services/biz-document.service';
import { BizDocumentTypeService } from './services/biz-document-type.service';
import { BizTransactionTypeService } from './services/biz-transaction-type.service';
import { ContractService } from './services/contract.service';
import { ContractTypeService } from './services/contract-type.service';
import { DocumentService } from './services/document.service';
import { DocumentTypeService } from './services/document-type.service';
import { FileService } from './services/file.service';
import { InstallationService } from './services/installation.service';
import { InstallationTypeService } from './services/installation-type.service';
import { MeasureUnitService } from './services/measure-unit.service';
import { PaymentTypeService } from './services/payment-type.service';
import { StakeholderService } from './services/stakeholder.service';
import { StakeholderSkillService } from './services/stakeholder-skill.service';
import { StakeholderTagService } from './services/stakeholder-tag.service';
import { StakeholderTypeService } from './services/stakeholder-type.service';
import { StakeholderUserService } from './services/stakeholder-user.service';
import { StakeholderZoneService } from './services/stakeholder-zone.service';
import { TaxTypeService } from './services/tax-type.service';
import { UserService } from './services/user.service';
import { VerifyService } from './services/verify.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AgreementService,
    ArticleService,
    ArticleTagService,
    ATaskService,
    ATaskTypeService,
    BizDocumentService,
    BizDocumentTypeService,
    BizTransactionTypeService,
    ContractService,
    ContractTypeService,
    DocumentService,
    DocumentTypeService,
    FileService,
    InstallationService,
    InstallationTypeService,
    MeasureUnitService,
    PaymentTypeService,
    StakeholderService,
    StakeholderSkillService,
    StakeholderTagService,
    StakeholderTypeService,
    StakeholderUserService,
    StakeholderZoneService,
    TaxTypeService,
    UserService,
    VerifyService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
