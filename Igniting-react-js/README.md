**Props -** Arguments passed into react components.

**Bundlers -** It is development tool which combines all the files and makes single file which is production ready.
*Ex -* webpack(*used by React*), vite, parcel, rollup

**package-lock.json -** specifies the exact version of the dependencies.

- **integrity -**  maintains the hash of exact version loacl and prod

**package.json -** holds metadata of the project and list of depedencies.

**npx -** excutes using npm.

**npm -** package manager.

**Treeshaking -** removing of the dead code, checks whether imported and exported files are used.

**dist -** holds the minified files and serves it on server, and also creates the dev build.

**parcel -** 
- users Hot module replacement to keep track of file changes which use *file watcher algorithm.*
- helps in cleaning up the files.    
- helps in bundling, building, minifying the files.
- helps in optimising the js and media files.
- caching during development.
- manages port number.
- it requires less configuration or zero configuration.
- compatible with older version of browser using "browserlist" in package.json 

