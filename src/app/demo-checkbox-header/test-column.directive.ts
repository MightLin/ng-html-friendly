import { Directive, Input, ViewChild, TemplateRef, ViewChildren, ContentChildren, QueryList } from '@angular/core';

@Directive({
  selector: '[testColumn]'
})
export class TestColumnDirective {
  constructor() { }


  @ContentChildren(TemplateRef) templates: QueryList<TemplateRef<any>>;

  th: TemplateRef<any>;
  td: TemplateRef<any>;

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    // console.log(this.templates);
    this.th = this.templates.first;
    this.td = this.templates.last;
  }

}
