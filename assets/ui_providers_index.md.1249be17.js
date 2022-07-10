import{_ as s,c as t,o,a as e}from"./app.9ad83262.js";const u=JSON.parse('{"title":"Providers","description":"","frontmatter":{},"headers":[],"relativePath":"ui/providers/index.md"}'),a={name:"ui/providers/index.md"},n=e(`<h1 id="providers" tabindex="-1">Providers <a class="header-anchor" href="#providers" aria-hidden="true">#</a></h1><blockquote><p>You can have a sneakpeak of the provider functionality at <a href="https://schirrel.dev/vue-cruder/demo" target="_blank" rel="noopener noreferrer">Demo</a></p></blockquote><p>Providers are built in functionalities of CRUD. Are mean to be a route with all in to be used as a plugin and play with adjust of a simple configuration.</p><p>It is being design to be used like:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> createProductRoute </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createRoute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">createProduct</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/product</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Create a New Product</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">We are gonna use cars for the example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">create</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://jsonplaceholder.typicode.com/posts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">formOptions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>and so add it to you <code>routes</code> array at <code>Router</code> config, and its ready for use.</p><table><thead><tr><th>Prop</th><th>Type</th><th>name</th><th>Required</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>string</code></td><td>The name to be passe to the Vue Router object</td><td>yes</td></tr><tr><td><code>path</code></td><td><code>string</code></td><td>The path to be setup to the Vue Router object</td><td>yes</td></tr><tr><td><code>options</code></td><td><code>object</code></td><td>Configuration object fo the route</td><td>yes</td></tr><tr><td><code>options.title</code></td><td><code>string</code></td><td>Title of the page</td><td>yes</td></tr><tr><td><code>options.description</code></td><td><code>string</code></td><td>description message above the title of the page</td><td>no</td></tr><tr><td><code>options.type</code></td><td><code>string</code></td><td>The type of the page to be create. Must be one of <code>create</code>, <code>read</code> ,<code>update</code> or <code>delete</code>.</td><td>yes</td></tr><tr><td><code>options.resource</code></td><td><code>string</code></td><td>The endpoint to be setup at the resource</td><td>yes</td></tr><tr><td><code>options.formOptions</code></td><td><code>FormOptions</code></td><td>Configuration of the form on the page. The <code>formOptions</code> prop follows the <a href="./../components/form.html#interfaces">Form</a> component.</td><td>?</td></tr></tbody></table><h1 id="status" tabindex="-1">Status <a class="header-anchor" href="#status" aria-hidden="true">#</a></h1><table><thead><tr><th>Provider</th><th>Status</th></tr></thead><tbody><tr><td>Create</td><td>In progress</td></tr></tbody></table>`,9),p=[n];function r(l,c,d,i,D,y){return o(),t("div",null,p)}var h=s(a,[["render",r]]);export{u as __pageData,h as default};
