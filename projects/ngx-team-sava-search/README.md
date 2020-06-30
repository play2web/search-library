# Team sava search

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.

### Installation

`npm install --save ngx-team-sava-search`

### Hoe to use it

```javascript
import { SearchConfigToken, SearchConfig, NgxTeamSavaSearchModule } from 'ngx-team-sava-search';

const searchConf: SearchConfig = {
  apiUrlSearch: 'http://link-to-api/'
};

 imports: [
  NgxTeamSavaSearchModule.forRoot(searchConf)
 ],
 providers: [
    { provide: SearchConfigToken, useValue: searchConf }
 ],
```

### Usage

```html
<ngx-team-sava-search></ngx-team-sava-search>
```



### Todo

Done in a rush because couldn't find anything alike, so:

- Make some tests
- Do better styling
