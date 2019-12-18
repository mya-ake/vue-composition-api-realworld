---
inject: true
to: src/components/<%= category %>/index.ts
append: true
---
<% if(public) { -%>
export * from './<%= name %>';
<% } -%>