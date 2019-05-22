### Usage

```ts
@NgModule({
  imports: [BinCheckboxModule]
})
export class MyApp {}
```

Simple Variable

```html

<label>
  <input type="checkbox" bin-true-value="Yes" bin-false-value="No" [(model)]="variable" />Do you like comic book?
</label>

```

Complex Variable

```html

<label>
  <input type="checkbox" [bin-true-value]="{name:'Batman'}" [bin-false-value]="{name:'Wonder women'}" 
  [(model)]="variableComplex" />Are you Batman?
</label>
```

FormControl

```html

<label>
    <input type="checkbox" bin-true-value="Batman" bin-false-value="Wonder women" [(control)]="variableControl" />Are you Batman?
</label>
    
```
