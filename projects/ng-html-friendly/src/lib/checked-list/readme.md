
### Usage

```ts
@NgModule({
  imports: [CheckedListDirective]
})
export class MyApp {}
```

```html
<label>
  <input type="checkbox" value="1" [checkedList]="variableArr" />1
</label>
<label>
  <input type="checkbox" value="2" [checkedList]="variableArr" />2
</label>
<label>
  <input type="checkbox" value="3" [checkedList]="variableArr" />3
</label>
<label>
  <input type="checkbox" value="4" [checkedList]="variableArr" />4
</label>
<label>
  <input type="checkbox" value="5" [checkedList]="variableArr" />5
</label>
```


```html
<label>
    <input type="checkbox" [value]="{name:'Bruce'}" [checkedList]="objArr" />1</label>
  <label>
    <input type="checkbox" [value]="{name:'Tony'}" [checkedList]="objArr" />2</label>
  <label>
    <input type="checkbox" [value]="{name:'Allen'}" [checkedList]="objArr" />3</label>
  <label>
    <input type="checkbox" [value]="{name:'Steve'}" [checkedList]="objArr" />4</label>
  <label>
    <input type="checkbox" [value]="{name:'Loki'}" [checkedList]="objArr" />5</label>
```

