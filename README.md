# React Code Generator

<div align="center">
<a href="https://www.npmjs.com/package/@samnoh/react-gen"><img src="https://img.shields.io/npm/v/%40samnoh%2Freact-gen"></a> <a href="https://github.com/samnoh/react-code-generator/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/%40samnoh%2Freact-gen"></a>
</div>

## Install

```bash
npm install -g @samnoh/react-gen
```

## Usage

-   Create a class-based 'Button' jsx component in the '/src' directory

```bash
reactgen -o /src -n Button -c
```

-   Create a functional 'AuthTemplate' tsx component in the default directory

```bash
reactgen -n AuthTemplate -t
```

-   Create a functional 'NavBar' jsx component in the default directory using your own template, `Template.js`

```bash
reactgen -T Template.js -n NavBar
```

## Config

-   You can set default values in `package.json`
    -   `template` configuration is used to set your own template variables

```json
"config": {
    "reactgen": {
        "defaultName": "Component",
        "modules": {
            "styled": "styled-components",
            "{ Link }": "react-router-dom"
        },
        "typescript": false,
        "classBased": false,
        "template": {
            "LAZY": "React.lazy(() => import(''));",
            "USEEFFECT": "useEffect(() => {}, []);"
        }
    }
}
```

## Your own template

-   `TEMPLATE_NAME` and `MODULES` are preset template variables

```js
import React, { useEffect } from 'react';
MODULES
const  = LAZY
const  = LAZY

const TEMPLATE_NAME = () => {
    CONSOLE

    return <div>Hello</div>;
};

export default TEMPLATE_NAME;
```

```bash
reactgen -n SideBar -T /templates/test.js -o /Components
```

-   Result

```js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const  = React.lazy(() => import(''));
const  = React.lazy(() => import(''));

const SideBar = () => {
    useEffect(() => {}, []);

    return <div>Hello</div>;
};

export default SideBar;
```
