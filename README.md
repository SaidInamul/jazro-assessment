# jazro-assessment

## Setup
Install all dependencies:

### Vue Js
```bash
# npm
npm install vue@3.5.13
```

### Pinia
```bash
# npm
npm install pinia
```

Import the pinia into the main.js

```javascript
# main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
```

### Vue-router
```bash
# npm
npm install vue-router@latest
```

Import the the vue-router into the main.js

```javascript
# main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
```

### Bootstrap
```bash
# npm
npm install bootstrap@latest
```

Import the bootstrap into the main.js

```javascript
# main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
```

### Bootstrap Icon
```bash
# npm
npm install bootstrap-icons@latest
```

Import the bootstrap icon into the main.js

```javascript
# main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
```

### Vuetoastification
```bash
# npm
npm install --save vue-toastification@next
```

Import the vuetoastification icon into the main.js

```javascript
# main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 3000,
})
```

### Axios and Date-Fns
```bash
# npm
npm install axios@latest date-fns@latest
```

## Run the project
```bash
# npm
npm run dev
```

