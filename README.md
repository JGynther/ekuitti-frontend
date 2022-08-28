# ekuitti-frontend

This is the frontend-application for a PoC-software to demo eReceipts. The software as a whole focuses to showcase the different possibilities eReceipts offer to the eReceipt-recipient / buyer.

The backend-application for this software is found in another repository located [here](https://github.com/Finsaki/ekuitti-backend) by [@Finsaki](https://github.com/Finsaki).

The software follows the princibles drafted for eReceipts by Finnish State Treasury. These princibles can be found in this [publication](https://vkazprodwordpressstacc01.blob.core.windows.net/wordpress/sites/10/2022/06/eKuitti-Saantokirja-v-1.0-230522.pdf) called eKuitin Sääntökirja - Minimiedellytykset eKuittidatan välittämiseen.

> Read [documentation.md](documentation.md) for more information about the frontend structure, component usage and other useful information (in finnish)

## Start local development
1. git clone / git pull
2. yarn install
3. yarn dev

## Create and run a production build
1. yarn build
2. yarn start

## Other
Create a file called .env.local at project root and update it with the backend URL + "/api"

### .env.local file required contents example
```
NEXT_PUBLIC_BACKEND_URL="http://localhost:8080/api"
```