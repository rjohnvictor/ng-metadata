import * as angular from 'angular';
import { provide } from 'ng-metadata/core';
import { DoCheckComponent, DoCheckParentComponent } from './do-check.component';
import { OnChangesComponent, OnChangesParentComponent } from './on-changes.component';
import { AfterViewParentComponent,AfterViewComponent,ChildViewComponent } from './after-view.component';

import { LoggerService } from './logger.service';

export const LifecycleHooksModule = angular.module('lifecyceHooks', [])
  .directive(...provide(DoCheckParentComponent))
  .directive(...provide(DoCheckComponent))
  .directive(...provide(OnChangesParentComponent))
  .directive(...provide(OnChangesComponent))
  .directive(...provide(AfterViewParentComponent))
  .directive(...provide(AfterViewComponent))
  .directive(...provide(ChildViewComponent))
  .service( ...provide( LoggerService ) )
  .name;
