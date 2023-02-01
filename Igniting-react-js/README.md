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

**babel -**
- code translater
- helps in backward compatibility
- source code transformation
- helps in code optimisation
- **code translater -** babel helps in converting the JSX code to React.createElement() which inturn converts it to the object and this object is rendered into DOM as html.

**key consiliation -** keys helps react to identity which element has changed, added or removed. Keys should be different amoung the siblings. keys avoid rerendering of the components, when we have list if we insert new list before exisisting list then react will rerender exisiting list, which will cause performance degradation.

But with the key concept react checks the exisisting dom tree with new changes then it compares the key and new list is added before the exisiting list.

**html v/s jsx -** 
- html doesn't need to wrap in parent tag, but in jsx it should be.
- in html class is used as 'class' but in JSX it should be className, jsx cannot contain the keywords of JS.
- all tags are self closing in jsx
- jsx can implimented directly in js but in html it should be wrapped inside <script> or external file.

**Is jsx mandatory?** no

**Is ES6 mandatory?** no

**How to write comments in JSX -** {/* */}

**React fragment -** It helps to group the multiple children without adding extra element to DOM <></> or <React.Fragment> </React.Fragment>

**Virtual DOM -** Reperesentation of DOM

**Reconciliation in React -** React compares exisiting DOM with new DOM changes, then it makes use of Diff Algorithm to check which element is changed. By doing this process React only re-renders the changed element.

**React Fibre -** It is an algorithm which helps in reconciliation.

**Keys -** Keys helps in keeping the changes, if we have same tags multiple times, if I insert another tag  between the existing tag, then React will not know which tag to re-render, in this scenario key come into picture.

**Index as key -** It is not recommended approach, because ordering can be changed.

**Props -** It is argument which is passed to function call and used as parameter inside function body.

**Config driven ui -** A ui design which supports multiple configuration as in If I have to display what are the offers in swiggy in different locations.

**Why super is used inside constructor in class based component?** - ES6 class constructors MUST call super if they are subclasses.



