const styles = `a {
  text-decoration: none;
}

h1 {
  // font-family: Staatliches;
  font-size: 64px !important;
}

h2 {
  // font-family: Staatliches;
  font-size: 32px !important;
}

#category {
  // font-family: Staatliches;
  font-weight: 500;
}

#title {
  letter-spacing: 0.4px;
  font-size: 22px !important;
  font-size: 1.375rem !important;
  line-height: 1.13636;
}

#banner {
  margin: 20px;
  height: 800px;
}

#editor {
  font-size: 16px !important;
  font-size: 1rem !important;
  line-height: 1.75;
}

.uk-navbar-container {
  background: #fff !important;
  // font-family: Staatliches;
}

img:hover {
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}


/* GUIDES PAGE */

.side-menu-wrapper {
  background-color: white;
  min-width: 360px;
  height: 100vh;
  padding: 64px 16px;
}

.sidemenu-section-header {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.sidemenu-divider {
  padding-left: 32px;
  display: block;
  color: #555;
  line-height: 200%;
}

.guides-page-wrapper {
  display: flex;
  flex-direction: row;
}

.documentation-page-wrapper {
  background-color: #fafafa;
  padding: 64px 64px;
}

code {
  padding: 0.2em 0.4em;
  margin: 0;
  // font-size: 85%;
  background-color: #6e768166;
  border-radius: 6px;
}

pre {
  max-width:500px;
  background-color:#fff;
  padding:20px 20px;
  border:1px dashed blue;
  overflow-x: auto;
}

pre code {
  background-color: transparent;
  font-size: 13px;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th {
  padding: 5px;
}

td {
  padding: 5px
}

tr:nth-child(2n-1) {
  background-color: #fff;
}

tr:nth-child(2n) {
  background-color: #ccc;
}

a {
  color: #58a6ff;
}

blockquote {
  padding: 0 1em;
  color: #8b949e;
  border-left: 0.25em solid #30363d;
}

.side-menu-v2 {
  width: 500px;  
}

.side-menu-v2-item {
  margin-bottom: 20px;
}

.side-menu-v2-item .title {
  font-weight: bold;
  text-transform: capitalize;
}

.side-menu-v2-item a {
  color: black;
}

.side-menu-v2-item a:hover {
color: #58a6ff
}

.side-menu-v2-item ul {
margin: 0;
}

.side-menu-v2-item li.selected {
background: #F1F3B6;
}

`;

export default styles;
