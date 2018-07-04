import { NgModule } from '@angular/core';

import { Prototype1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Prototype1SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Prototype1SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Prototype1SharedCommonModule {}
